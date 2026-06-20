# Adding Blog Posts to Sanity CMS

## Quick Overview

Your Sanity CMS is already configured at project ID `wk09pg6u` with the `production` dataset. To add blog posts, you'll use Sanity Studio (web interface) to create documents with the `post` type.

---

## Method 1: Using Sanity Studio (Recommended)

### Step 1: Access Sanity Studio

1. Go to: https://www.sanity.io/manage
2. Select your project (ID: `wk09pg6u`)
3. Look for "Studio" tab or deployed Studio URL
4. If no Studio is deployed, you can deploy one using the MCP tools available in this session

### Step 2: Create New Post

1. Click "Create" → "Post" (or similar)
2. Fill in the fields as shown below

---

## Document Structure for "Document Fatigue" Post

### Required Fields:

**Title:**
```
Document Fatigue: Why Your Team Spends 30% of the Workday Searching for Files
```

**Slug:**
```
document-fatigue-searching-for-files
```

**Excerpt:**
```
Every organization runs on documents, but when your team spends 30% of the workday searching for files, that's Document Fatigue. Here's what it costs you and how to fix it.
```

**Published Date:**
```
2026-06-19  (or today's date)
```

---

### Main Image (Cover Image)

**Upload the cover image from:**
- File: `/Users/me/Downloads/` (the blue hero image with title)

**Alt Text:**
```
Document Fatigue blog post cover showing title against dark blue background
```

---

### Body Content (Portable Text Format)

The body needs to be converted from Markdown to Sanity's Portable Text format. Here's the structure:

#### Opening Paragraph (Normal Block)
```
Every organization runs on documents. Contracts, proposals, compliance reports, vendor agreements, technical specs, internal policies. They accumulate across email inboxes, shared drives, cloud folders, local desktops, and legacy systems. Nobody plans for the mess. It just happens.

We call it Document Fatigue: the slow, compounding drag on productivity that occurs when a business can no longer find, access, or trust its own information...
```

#### Heading 2: What Document Fatigue Actually Looks Like
*(Use H2 block type in Sanity)*

#### Paragraphs with Bold Text
*(Use normal blocks with strong marks)*

- **The compliance officer at a community bank** who needs...
- **The program director at a healthcare organization** preparing...
- **The sales team at an IT services firm** preparing...
- **The operations manager at a government contractor** who cannot...

Continue with all sections from the markdown file.

---

### Author Field (Optional)

If you have an Author document in Sanity:
```
Name: Eric Bell
Bio: 15-Year Enterprise Technology Veteran, CEO
```

If not, you can skip this or create an Author document first.

---

## Method 2: Using Sanity MCP Tools (Current Session)

I can create this post directly using the Sanity MCP tools available in this Claude session. Here's what I'll need:

### Step 1: Upload the Cover Image

First, copy the cover image to the project:

```bash
cp /Users/me/Downloads/<cover-image-filename> /Users/me/Desktop/tech/sinotechsol/public/blog/
```

*(You'll need to tell me the exact filename)*

### Step 2: Create the Post via MCP

I can use the `mcp__Sanity__create_documents` tool to create the post directly. The body will be in Portable Text format.

---

## Portable Text Format Reference

Sanity uses Portable Text, not Markdown. Here's how content converts:

### Markdown → Portable Text Mapping

| Markdown | Portable Text Block Type |
|----------|-------------------------|
| `# Heading` | `{ style: 'h1' }` |
| `## Heading` | `{ style: 'h2' }` |
| `**bold**` | `{ marks: ['strong'] }` |
| `*italic*` | `{ marks: ['em'] }` |
| `[link](url)` | `{ marks: [{ _type: 'link', href: 'url' }] }` |
| Regular paragraph | `{ style: 'normal' }` |

### Example Portable Text Block:

```json
{
  "_type": "block",
  "style": "normal",
  "children": [
    {
      "_type": "span",
      "text": "This is a paragraph with ",
      "marks": []
    },
    {
      "_type": "span",
      "text": "bold text",
      "marks": ["strong"]
    },
    {
      "_type": "span",
      "text": " in it.",
      "marks": []
    }
  ]
}
```

---

## Next Steps - Choose Your Method

**Option A: Manual via Sanity Studio**
1. I can help you access/deploy your Sanity Studio
2. You copy-paste content into the visual editor
3. Studio handles Portable Text conversion automatically

**Option B: Automated via MCP Tools**
1. Tell me the cover image filename
2. I'll convert the markdown to Portable Text
3. I'll create the post directly using MCP tools
4. Post goes live immediately

**Which method would you prefer?**

---

## Image File Location

You mentioned the cover image is in `/Users/me/Downloads/`. Can you provide:
1. The exact filename (e.g., `document-fatigue-cover.png`)
2. Preferred method (Studio UI or MCP automation)

I'll help you get this published!
