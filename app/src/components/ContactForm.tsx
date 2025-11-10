import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { useUIStore } from '@/stores/ui';
import { fadeInScale } from '@/lib/framer-variants';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactForm({
  title = 'Kontakt aufnehmen',
  subtitle = 'Wir melden uns innerhalb von 24 Stunden',
}: ContactFormProps) {
  const { setLoading, showToast } = useUIStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          company: formData.company,
          source: 'Website Form',
          campaign: 'landing-page',
          activityType: 'form_completed',
          activityData: {
            message: formData.message,
            timestamp: new Date().toISOString(),
          },
        }),
      });

      const data = await response.json();

      if (data.success) {
        showToast('Vielen Dank! Wir melden uns bald bei dir.', 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      } else {
        showToast('Etwas ist schiefgelaufen. Bitte versuche es erneut.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Etwas ist schiefgelaufen. Bitte versuche es erneut.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Track form started event (only once)
    if (!sessionStorage.getItem('form_started')) {
      sessionStorage.setItem('form_started', 'true');
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email || 'unknown',
          activityType: 'form_started',
        }),
      }).catch(console.error);
    }
  };

  return (
    <motion.div
      variants={fadeInScale}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="contact-form"
    >
      <div className="contact-form__header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form__row">
          <div className="form__field">
            <label htmlFor="name" className="form__label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form__input"
              placeholder="Max Mustermann"
            />
          </div>

          <div className="form__field">
            <label htmlFor="email" className="form__label">
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form__input"
              placeholder="max@beispiel.de"
            />
          </div>
        </div>

        <div className="form__row">
          <div className="form__field">
            <label htmlFor="phone" className="form__label">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form__input"
              placeholder="+49 123 456789"
            />
          </div>

          <div className="form__field">
            <label htmlFor="company" className="form__label">
              Unternehmen
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form__input"
              placeholder="Dein Unternehmen"
            />
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="message" className="form__label">
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="form__input form__textarea"
            placeholder="Beschreibe dein Projekt..."
          />
        </div>

        <motion.button
          type="submit"
          className="btn btn-primary btn-large form__submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Nachricht senden
        </motion.button>
      </form>
    </motion.div>
  );
}
