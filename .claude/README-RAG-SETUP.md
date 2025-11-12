# 🧠 RAG Setup für Claude Code - Immer aktuelle Infos!

**Umgehe den Knowledge Cutoff mit MCP Servers & Live Documentation**

---

## 🎯 Was du bekommst

Mit diesem Setup hat Claude Code **LIVE-Zugriff** auf:
- ✅ Aktuelle Astro Dokumentation
- ✅ React 19 neueste Features
- ✅ Convex aktuelle APIs
- ✅ Tailwind 4 Docs
- ✅ GitHub Repositories
- ✅ Web Search für neueste Packages
- ✅ Stack Overflow für Lösungen

**= Kein veraltetes Wissen mehr! 🎉**

---

## 🔧 Setup (15 Minuten)

### 1. MCP Servers installieren

**Was sind MCP Servers?**
- Model Context Protocol = RAG für Claude
- Live-Zugriff auf externe Datenquellen
- Kein Knowledge Cutoff mehr!

**Installiere diese MCP Server:**

```bash
# 1. Astro Documentation MCP
npm install -g @dreyfus92/astro-docs-mcp

# 2. Web Search MCP (Brave/Google)
npm install -g @upstash/context7-mcp

# 3. GitHub MCP (für Repo-Zugriff)
npm install -g @modelcontextprotocol/server-github

# 4. Filesystem MCP (lokale Docs)
npm install -g @modelcontextprotocol/server-filesystem
```

### 2. Claude Desktop Config

**Erstelle:** `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)
**Oder:** `%APPDATA%\Claude\claude_desktop_config.json` (Windows)

```json
{
  "mcpServers": {
    "astro-docs": {
      "command": "npx",
      "args": ["-y", "@dreyfus92/astro-docs-mcp"],
      "env": {}
    },
    "web-search": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"],
      "env": {
        "BRAVE_API_KEY": "your_brave_key_here"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_github_token"
      }
    },
    "project-docs": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/your/project/docs"
      ]
    }
  }
}
```

### 3. API Keys holen

**Brave Search API** (für Web Search):
1. Gehe zu: https://brave.com/search/api/
2. Kostenlos: 2000 Anfragen/Monat
3. Kopiere API Key

**GitHub Token** (für Repo-Zugriff):
1. GitHub → Settings → Developer Settings → Personal Access Tokens
2. Generate new token (classic)
3. Scopes: `repo`, `read:user`
4. Kopiere Token

---

## 📚 Verfügbare MCP Servers für Astro Stack

### 🚀 **Essential (MUST HAVE)**

#### 1. Astro Docs MCP
```json
{
  "astro-docs": {
    "command": "npx",
    "args": ["-y", "@dreyfus92/astro-docs-mcp"]
  }
}
```

**Was es kann:**
- ✅ Suche in Astro Docs (latest)
- ✅ API Reference lookup
- ✅ Integration guides
- ✅ Best practices

**Nutzung in Claude:**
```
"Wie funktioniert Server Islands in Astro 5.15?"
→ Claude holt LIVE-Info aus aktueller Astro Doku!
```

**Link:** https://github.com/Dreyfus92/astro-docs-mcp

---

#### 2. Context7 MCP (Web Search)
```json
{
  "web-search": {
    "command": "npx",
    "args": ["-y", "@upstash/context7-mcp"],
    "env": {
      "BRAVE_API_KEY": "BSA..."
    }
  }
}
```

**Was es kann:**
- ✅ Live Web Search (Brave)
- ✅ Neueste Package-Versionen finden
- ✅ Stackoverflow Lösungen
- ✅ Blog Posts & Tutorials

**Nutzung:**
```
"Was ist die neueste Version von Convex?"
→ Claude searched live im Web!
```

**Link:** https://github.com/upstash/context7-mcp

---

#### 3. GitHub MCP
```json
{
  "github": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-github"],
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
    }
  }
}
```

**Was es kann:**
- ✅ Repository-Code durchsuchen
- ✅ Issues & PRs lesen
- ✅ README files abrufen
- ✅ Latest releases checken

**Nutzung:**
```
"Was sind die neuesten Features in withastro/astro?"
→ Claude checkt GitHub Repo direkt!
```

**Link:** https://github.com/modelcontextprotocol/servers

---

### 🔥 **Advanced (Empfohlen)**

#### 4. Filesystem MCP
```json
{
  "local-docs": {
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      "/Users/you/Astro-Stack/docs"
    ]
  }
}
```

**Was es kann:**
- ✅ Lokale Docs durchsuchen
- ✅ Code-Snippets finden
- ✅ Templates laden

**Use Case:**
Speichere deine eigenen Docs in `/docs` und Claude kann sie durchsuchen!

---

#### 5. Notion MCP (Optional)
```json
{
  "notion": {
    "command": "npx",
    "args": ["-y", "@tmcw/mcp-notion"],
    "env": {
      "NOTION_API_KEY": "secret_..."
    }
  }
}
```

**Was es kann:**
- ✅ Notion-Datenbank als Knowledge Base
- ✅ Projekt-Notizen durchsuchen
- ✅ Design-Specs abrufen

**Link:** https://github.com/tmcw/mcp-notion

---

#### 6. SQLite MCP (für Convex-ähnliche Queries)
```json
{
  "database": {
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-sqlite",
      "/path/to/your/db.sqlite"
    ]
  }
}
```

**Use Case:**
- Datenbank-Schema verstehen
- Query-Optimierung
- Daten-Migration

---

### 🌐 **Web Development Specific**

#### 7. npm MCP (Package Search)
```json
{
  "npm": {
    "command": "npx",
    "args": ["-y", "mcp-server-npm"]
  }
}
```

**Was es kann:**
- ✅ npm packages suchen
- ✅ Latest versions checken
- ✅ Dependencies analysieren

**Link:** https://github.com/mcp-ecosystem/mcp-server-npm

---

#### 8. Fetch MCP (API Testing)
```json
{
  "fetch": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-fetch"]
  }
}
```

**Was es kann:**
- ✅ APIs testen
- ✅ Dokumentation abrufen
- ✅ Live-Daten holen

---

## 🎯 Perfekte Setup-Kombination für Astro Stack

```json
{
  "mcpServers": {
    "astro-docs": {
      "command": "npx",
      "args": ["-y", "@dreyfus92/astro-docs-mcp"]
    },
    "web-search": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"],
      "env": {
        "BRAVE_API_KEY": "your_key"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token"
      }
    },
    "project-docs": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/you/Astro-Stack/docs",
        "/Users/you/Astro-Stack/templates"
      ]
    },
    "npm": {
      "command": "npx",
      "args": ["-y", "mcp-server-npm"]
    }
  }
}
```

---

## 🚀 Workflow: Neue Website mit Claude Code

### 1. Start Claude Code

```bash
claude-code /path/to/new-project
```

### 2. Ask Claude

```
"Erstelle eine SaaS Landing Page mit:
- Astro 5.15 (neueste Features)
- Convex für Auth
- Tailwind 4
- Clerk Auth

Nutze die neuesten Best Practices aus der Astro Doku."
```

### 3. Claude macht automatisch:

✅ Checkt Astro Docs (via MCP) für neueste APIs
✅ Searched Web (via MCP) für latest package versions
✅ Checkt GitHub (via MCP) für example code
✅ Nutzt deine Templates (via Filesystem MCP)

**= Perfekter, aktueller Code! 🎉**

---

## 📊 Wie Claude MCP nutzt

**Ohne MCP (alt):**
```
You: "Wie nutze ich Server Islands in Astro?"
Claude: "Basierend auf meinem Knowledge Cutoff (April 2024)..."
❌ Veraltete Info!
```

**Mit MCP (neu):**
```
You: "Wie nutze ich Server Islands in Astro?"
Claude: [Ruft Astro Docs MCP auf]
         "Laut aktueller Astro 5.15 Dokumentation..."
✅ Aktuelle Info von astro.build!
```

---

## 🔥 Pro Tips

### 1. Eigene Docs-Sammlung

Erstelle `/docs` in deinem Projekt:

```
docs/
├── astro-patterns.md      # Deine bewährten Patterns
├── convex-schemas.md      # Wiederverwendbare Schemas
├── component-library.md   # Component-Doku
└── deployment-guide.md    # Dein Deploy-Prozess
```

**Dann:**
```json
{
  "project-knowledge": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-filesystem", "./docs"]
  }
}
```

Claude kann jetzt DEINE Docs durchsuchen! 🎉

---

### 2. Template-Bibliothek

```
templates/
├── saas-landing/
├── e-commerce/
├── blog/
└── docs-site/
```

**MCP Setup:**
```json
{
  "templates": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-filesystem", "./templates"]
  }
}
```

**Ask Claude:**
```
"Erstelle eine neue Landing Page basierend auf dem SaaS Template,
aber mit E-Commerce Features."
```

Claude kombiniert Templates automatisch! 🚀

---

### 3. Snippet Library

Erstelle `/snippets` mit häufig genutzten Code-Patterns:

```typescript
// snippets/convex-auth.ts
export const authMutation = mutation({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) throw new Error("Not authenticated");
    // ...
  },
});
```

---

## 🧪 Testing des MCP Setup

```bash
# 1. Claude Desktop neustarten

# 2. In Claude fragen:
"Was sind die neuesten Features in Astro 5.15?"

# 3. Claude sollte antworten:
"Laut der aktuellen Astro Dokumentation (via MCP)..."
```

**Funktioniert?** ✅ Setup erfolgreich!

**Funktioniert nicht?**
- Check `claude_desktop_config.json` Syntax
- Verify API keys
- Check Console: `~/Library/Logs/Claude/mcp*.log`

---

## 📚 Weitere MCP Servers

**Full List:** https://github.com/modelcontextprotocol/servers

**Community MCP Servers:** https://mcp.so

**Empfehlenswerte:**
- `@anthropic/mcp-docs` - Anthropic's own docs
- `mcp-server-youtube` - YouTube transcripts
- `mcp-server-reddit` - Reddit discussions
- `mcp-server-twitter` - Twitter/X threads

---

## 💡 Advanced: Custom MCP Server

Erstelle deinen eigenen MCP Server für projekt-spezifisches Wissen:

```typescript
// my-custom-mcp/index.ts
import { Server } from "@modelcontextprotocol/sdk/server/index.js";

const server = new Server({
  name: "my-astro-knowledge",
  version: "1.0.0",
}, {
  capabilities: {
    resources: {},
  },
});

// Implementiere deine Knowledge Base
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: "myproject://patterns",
        name: "Astro Patterns",
        mimeType: "text/markdown",
      },
    ],
  };
});

server.connect(transport);
```

**Tutorial:** https://modelcontextprotocol.io/docs/building-an-mcp-server

---

## 🎯 Summary

**Mit diesem Setup:**

1. ✅ **Kein veraltetes Wissen** - Claude hat LIVE-Zugriff
2. ✅ **Immer neueste Packages** - via Web Search
3. ✅ **Aktuelle Docs** - Astro, React, Convex
4. ✅ **Deine Templates** - via Filesystem
5. ✅ **GitHub Repos** - Latest code examples
6. ✅ **Eigene Knowledge Base** - Custom docs

**= Perfekter AI-Assistent für Web Development! 🚀**

---

## 🔗 Wichtige Links

- **MCP Docs:** https://modelcontextprotocol.io
- **Claude Code:** https://docs.claude.com/code
- **Astro Docs MCP:** https://github.com/Dreyfus92/astro-docs-mcp
- **Context7 MCP:** https://github.com/upstash/context7-mcp
- **MCP Server List:** https://github.com/modelcontextprotocol/servers
- **Community MCP:** https://mcp.so

---

**🎉 Setup fertig? Jetzt kannst du mit Claude Code Websites bauen mit IMMER aktuellem Wissen!**

⭐ Kein Knowledge Cutoff mehr - nur fresh, up-to-date Info!
