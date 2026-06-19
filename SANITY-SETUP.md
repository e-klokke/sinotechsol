# Sanity CMS Blog Setup Guide

This site uses Sanity CMS for blog content management. Follow these steps to set up your Sanity Studio and start publishing blog posts.

## Prerequisites

- A Sanity account (free at https://sanity.io)
- Node.js 18+ installed

---

## Step 1: Create a Sanity Project

1. **Sign up or log in** at https://sanity.io
2. **Create a new project:**
   - Go to https://sanity.io/manage
   - Click "Create new project"
   - Name it: `Sino Technology Solutions Blog`
   - Choose dataset name: `production`
   - Click "Create"

3. **Get your Project ID:**
   - After creation, you'll see your Project ID
   - Copy it (looks like: `abc123xy`)

---

## Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SITE_URL=https://sinotechsol.com
   ```

---

## Step 3: Install and Configure Sanity Studio

### Option A: Use Sanity Studio (Recommended)

1. **Create a new Studio directory:**
   ```bash
   mkdir sanity-studio
   cd sanity-studio
   ```

2. **Initialize Sanity Studio:**
   ```bash
   npm create sanity@latest
   ```

   During setup:
   - Select: "Use existing project"
   - Choose your project: `Sino Technology Solutions Blog`
   - Use dataset: `production`
   - Project output path: `.` (current directory)
   - Select project template: "Blog"

3. **Replace the default schema** with the blog schema below

4. **Start the Studio:**
   ```bash
   npm run dev
   ```

   The Studio will open at `http://localhost:3333`

### Option B: Use Sanity MCP Tools (Advanced)

If you prefer Claude to manage your schema directly:

1. Connect to Sanity via MCP
2. Use the schema provided below
3. Deploy using Claude Code commands

---

## Step 4: Blog Post Schema

Create or update `sanity-studio/schemaTypes/post.ts`:

```typescript
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'Short summary for blog listing page',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
```

Create `sanity-studio/schemaTypes/author.ts`:

```typescript
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
```

Create `sanity-studio/schemaTypes/blockContent.ts`:

```typescript
import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
  ],
})
```

Update `sanity-studio/schemaTypes/index.ts`:

```typescript
import blockContent from './blockContent'
import post from './post'
import author from './author'

export const schemaTypes = [post, author, blockContent]
```

---

## Step 5: Deploy Sanity Studio (Optional)

To host your Studio online:

```bash
cd sanity-studio
npm run build
npx sanity deploy
```

Choose a Studio hostname (e.g., `sinotech-blog.sanity.studio`)

---

## Step 6: Create Your First Blog Post

1. Open Sanity Studio at `http://localhost:3333` (or your deployed URL)
2. Click "+ Create" → "Blog Post"
3. Fill in:
   - **Title:** Your post title
   - **Slug:** Auto-generated from title (click "Generate")
   - **Excerpt:** Brief summary (appears on blog listing)
   - **Main Image:** Upload featured image
   - **Published At:** Set publish date/time
   - **Body:** Write your content with rich text
   - **Author:** Select or create author
4. Click **Publish**

---

## Step 7: Configure CORS for Production

When you deploy your site, add your production domain to Sanity CORS settings:

1. Go to https://sanity.io/manage
2. Select your project
3. Go to "API" → "CORS Origins"
4. Click "Add CORS origin"
5. Add your domains:
   - `https://sinotechsol.com`
   - `https://www.sinotechsol.com`
   - `http://localhost:3001` (for local development)
6. Enable credentials if needed

---

## Troubleshooting

### Posts not showing up?

1. **Check environment variables:**
   ```bash
   # Verify your .env.local has correct values
   cat .env.local
   ```

2. **Verify Sanity connection:**
   ```bash
   # Test the Sanity client
   curl "https://${NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-01-01/data/query/production?query=*[_type=='post']"
   ```

3. **Check post status in Sanity Studio:**
   - Is the post published?
   - Is `publishedAt` date in the past?
   - Does the post have a slug?

### Build errors?

- Ensure all Sanity packages are installed:
  ```bash
  npm install @sanity/client @sanity/image-url @portabletext/react
  ```

- Clear Next.js cache:
  ```bash
  rm -rf .next
  npm run dev
  ```

---

## Blog Content Best Practices

### SEO Optimization

1. **Write compelling excerpts:** 150-160 characters optimal
2. **Use descriptive titles:** Include keywords naturally
3. **Add alt text to all images:** Required for accessibility and SEO
4. **Include internal links:** Link to your services/capabilities pages
5. **Publish consistently:** Better for SEO and audience engagement

### Image Guidelines

- **Featured images:** 1200x630px (16:9 aspect ratio)
- **In-content images:** 800-1200px wide
- **File format:** WebP or JPEG
- **File size:** < 200KB per image (compress before upload)
- **Always add alt text**

### Content Strategy

Focus on:
- **IT Infrastructure:** Network design, cloud migrations, case studies
- **Cybersecurity:** Threat analysis, compliance guides, incident response
- **AI Research:** Model evaluation, fine-tuning techniques, edge inference
- **Government Contracting:** Compliance, NAICS codes, contracting tips

---

## Next Steps

1. ✅ Complete Sanity setup
2. ✅ Create author profile (Eric Bell)
3. ✅ Write first blog post
4. ✅ Test locally at http://localhost:3001/blog
5. ✅ Deploy to production

---

## Support Resources

- **Sanity Documentation:** https://www.sanity.io/docs
- **Sanity Community:** https://www.sanity.io/exchange/community
- **Next.js + Sanity:** https://www.sanity.io/plugins/next-sanity

---

**Questions?** Email info@sinotechsol.com
