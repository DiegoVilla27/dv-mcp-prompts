export const seoPageArchitecture = {
    name: "seo-page-architecture",
    description: "Genera la arquitectura de SEO Técnico, sitemaps, robots.ts y diseño de Open Graph para Next.js 15",
    arguments: [
        {
            name: "store_name",
            description: "Nombre de la marca de la tienda (ej. Aura Luxury, PizzaVeloce)",
            required: true
        },
        {
            name: "product_nicho",
            description: "Nicho comercial exacto (ej. Joyería de Alta Gama, Pizzería Gourmet)",
            required: true
        },
        {
            name: "visual_style_required",
            description: "Estilo estético del diseño (ej. Luxury Minimalist, Industrial Dark Modern)",
            required: true
        }
    ],
    template: (args) => {
        return `Act as an elite Technical SEO Director, Senior Growth Hacker, and High-Conversion Graphic Designer with over 15 years of experience optimizing enterprise-grade e-commerce platforms for search engine dominance (SEO/SEM) and maximum social click-through rates (CTR). Your objective is to engineer the absolute production-ready Technical SEO Architecture, dynamic metadata layers, crawling scripts, and a hyper-persuasive Open Graph graphic asset layout blueprint for the platform.

The implementation must strictly match the following store deployment parameters:
- [STORE_NAME]: "${args.store_name}"
- [PRODUCT_NICHO]: "${args.product_nicho}"
- [VISUAL_STYLE_REQUIRED]: "${args.visual_style_required}"

---

### 🚨 CRITICAL ARCHITECTURAL CONSTRAINTS:
1. **Deterministic Environment URL:** Every single metadata configuration, canonical mapping, sitemap compilation, and absolute link asset tracking MUST programmatically resolve using the \`process.env.NEXT_PUBLIC_SITE_URL\` environment token. Provide a fallback declaration pointing to \`http://localhost:3000\` solely for local compilation stability.
2. **Strict Typings & Schema Compliance:** All data objects must cleanly implement Next.js 15 \`Metadata\` interfaces. Every indexable page layout must inject its corresponding validated JSON-LD structural microdata (Schema.org scripts) to capture high-authority rich snippets in SERP results.
3. **Zero Placeholder Text:** Do not output boilerplate markers, generic \`keywords: ["keyword1", "keyword2"]\` lists, or comments like \`// Add slugs here\`. Every single string value, tag, title template, and structural description array must be fully populated with highly relevant, production-ready copy calibrated for intent matching and semantic search.

---

### 🛠️ MANDATORY DELIVERABLES TO EXECUTE

#### 1. DYNAMIC GLOBAL METADATA MODULE (\`src/features/seo/metadata.ts\` or route-level layouts)
Generate a fully optimized, strongly-typed global configuration object utilizing Next.js 15 Metadata capabilities. This module must dynamically integrate:
- **Title Layout Template:** Construct a flexible title tree pairing a robust default brand hook phrase with a dynamic template format (\`%s | Brand Name\`) for automated dynamic internal product views.
- **Advanced Semantic Keywords:** A highly optimized semantic keyword cluster targeting high-intent long-tail phrases and commercial queries explicitly matching the specified [PRODUCT_NICHO].
- **Comprehensive Meta Bindings:** Impeccable structural configurations mapping out \`openGraph\` rules (enforcing strict locale matching \`es_ES\`, explicit entity type parameters, site name bindings), native \`twitter\` cards set to \`summary_large_image\`, and explicit index/follow parameters within the \`robots\` block.

#### 2. DYNAMIC MAP ENGINES (\`app/robots.ts\` & \`app/sitemap.ts\`)
Provide the programmatic compilation source files for automated discovery:
- **\`app/robots.ts\`:** Returns a strongly-typed configuration block defining explicit global crawling access vectors, localized exclusion parameters for administrative or testing route trees (e.g., \`/admin\`, \`/checkout/success\`), and references the fully qualified dynamic sitemap endpoint pointing straight to the \`NEXT_PUBLIC_SITE_URL\` variable.
- **\`app/sitemap.ts\Downloads\`:** An asynchronous script mapping out static structural page routes (\`/\`, \`/productos\`, \`/carrito\`, \`/contacto\`) alongside a simulated dynamic database execution iteration mapping dynamic internal item slugs (e.g., \`/productos/[slug]\`). Each element object layer must strictly bind attributes for \`url\` (fully qualified absolute paths), \`lastModified\` date strings, and structured \`changeFrequency\` / \`priority\` indicators.

#### 3. HIGH-CONVERSION STRUCTURAL OPEN GRAPH CANVAS (Graphic Design Specification)
Act as a premium Creative Director to define and output the precise layout parameters for the primary conversion asset (\`/public/images/opengraph-main.jpg\`). The asset format specification must match the following parameters:
- **Dimensions & Format Constraints:** Perfectly scaled at 1200x630 pixels (aspect ratio 1.91:1) matching Open Graph specifications. Output file must be optimized in compressed high-fidelity JPEG format (\`.jpg\`) for immediate delivery network caching.
- **Visual Composition Bounds:** Fully describe a premium, asymmetrically balanced composition tailored to the specified [VISUAL_STYLE_REQUIRED]. One side must feature a pristine studio capture of the core product showing professional lighting depth. The secondary space must display elegant, high-contrast, perfectly tracking typography declaring the core value proposition.
- **Psychological Conversion Triggers (CTR Optimization):** Incorporate a visually striking call-to-action (CTA) element mirroring a real UI button (e.g., "¡PIDE YA TU PIZZA! →" or "¡VER COLECCIÓN EXCLUSIVA! →") complete with a clean pixel-art or vector style micro-conversion click pointer icon in the bottom-right vector plane. This visual layout must confidently prompt high-intent click responses when shared across platforms like WhatsApp, Meta, X, and Slack.

---

### 🎨 METADATA IMPLEMENTATION TEMPLATE CODEBASE REFERENCE (Pythonic/TypeScript Interface):

Ensure your metadata structure matches this architectural layout:

\`\`\`typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "${args.store_name} | [Premium Core Niche Value Hook Sentence]",
    template: "%s | ${args.store_name}",
  },
  description: "[Inject a hyper-persuasive, high-CTR meta description packed with organic semantic terms mapping the exact product catalog and market authority points]",
  keywords: [
    // Array of at least 8 highly strategic search terms matching search intent
  ],
  authors: [{ name: "${args.store_name}" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    title: "${args.store_name} | [Premium Core Niche Value Hook Sentence]",
    description: "[Inject matching persuasive marketing text for Open Graph link rendering]",
    siteName: "${args.store_name}",
    images: [
      {
        url: "/images/opengraph-main.jpg",
        width: 1200,
        height: 630,
        alt: "${args.store_name} - [Descriptive product and value text]",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "${args.store_name} | [Premium Core Niche Value Hook Sentence]",
    description: "[Inject short, high-impact Twitter copy]",
    images: ["/images/opengraph-main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
\`\`\`

Genera ahora el código de producción completo y detallado para los 3 entregables solicitados.`;
    }
};
