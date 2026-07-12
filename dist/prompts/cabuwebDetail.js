export const cabuwebDetail = {
    name: "cabuweb-detail",
    description: "Genera la página de detalle comercial y técnica de un proyecto para la vitrina de Cabuweb",
    arguments: [
        {
            name: "codigo_proyecto",
            description: "Pega aquí el código o la estructura del proyecto que vas a vender",
            required: true
        },
        {
            name: "url_demo",
            description: "URL de producción del proyecto si ya la tienes (opcional)",
            required: false
        }
    ],
    template: (args) => {
        const infoUrl = args.url_demo
            ? `\nProduction Live URL reference: ${args.url_demo}\n`
            : "";
        return `Act as an elite multi-disciplinary software product launch team composed of a Principal Product Marketing Manager (PMM), a Master Conversion Copywriter (specialized in the AIDA funnel framework), and a Principal Frontend UI/UX Architect. Your objective is to engineer a hyper-persuasive, high-converting Project Showcase Detail Page designed to meticulously pitch, demonstrate, and sell this web application architecture directly to prospective corporate buyers.

Before rendering the interface, you must thoroughly evaluate, parse, and analyze the architectural layout, core functional components, target user personas, and design tokens of the project codebase provided.
${infoUrl}
---

### 🎨 DESIGN SYSTEM & CONVERSION VISUAL Blueprints
The interface must present a breathtaking, premium corporate layout using semantic HTML5 and clean CSS modules. Ensure maximum scannability and high-impact structural hierarchy by executing the following layout sections:

#### 1. THE EDITORIAL HERO CANVAS (The Hook)
- **High-Impact Typography Hierarchy:** Display the definitive project title using a bold typographic scale paired with an explicit, beautifully tracked subtitle detailing exactly what industry pain points this software resolves.
- **Immediate High-Value CTAs:** Position two distinct, high-contrast primary conversion buttons side-by-side. The main CTA must boldly read: "Launch Live Production Demo →" (hyperlinked cleanly to the external production URL using \`process.env.NEXT_PUBLIC_SITE_URL\` properties). The secondary action button should smoothly trigger an anchored scroll layer down to the direct transactional pricing or contact form section.

#### 2. DYNAMIC WEB RUNTIME IFRAME DRAWERS (The Proof)
- **Fluid Structural Framing:** Embed an interactive native HTML \`<iframe>\` displaying the actual production live runtime instance of the website. 
- **Anti-Scroll Interaction Layer:** Wrap the iframe element securely inside a custom container utilizing an explicit transparent click-to-activate overlay layer. This prevents unintended page scrolling while keeping the system intuitive and highly responsive on desktop, mobile, and tablet layouts.
- **Fallback Layer:** Provide an elegant, animated micro-skeleton placeholder state or an optimized device frame loading preview to guarantee an exceptional user experience if external assets experience network latency.

#### 3. IMMERSIVE COMPONENT GALLERY LABELS (The Showcase)
- **Visual Evidence Matrix:** Construct a pristine asymmetric media layout displaying high-fidelity, hyper-realistic feature showcase images.
- **Contextual Explanations:** Pair each preview asset with explicit, conversion-optimized copy calling out the underlying technical excellence (e.g., Core Web Vitals optimization, zero layout shift, ultra-low Interaction to Next Paint scores, and automated schema indexing structures).

#### 4. COMMERCIAL FEATURE ABSTRACT MATRIX (The Close)
- **AIDA Blueprint Enforcement:** Present a detailed breakdown describing the underlying architecture through a high-conversion feature matrix using a clean Markdown/HTML structural table layout:
  \`| Icon | Core System Module | High-Value Business Conversion Metric / Engineering Impact |\`
- **Zero Placeholder Text Policy:** Do not use generic placeholders like \`// TODO\`, \`Lorem Ipsum\`, or empty strings. Every single section, code example, feature description, and micro-copy item must be fully realized with high-converting marketing prose tailored specifically to the analyzed software.

---

### 🚨 TECHNICAL ACCURACY AND OUTPUT CONSTRAINTS
- **Performance Constraints:** Ensure the component codebase strictly adheres to the 200-300 lines ceiling limit. If complex rendering workflows require extra vertical space, componentize the sub-sections into highly decoupled, single-responsibility file modules.
- **Environment URLs Integrity:** All external routing, live deployment targets, and production preview instances must resolve programmatically utilizing the \`NEXT_PUBLIC_SITE_URL\` environment variable.
- **Attribution Mandatory Clause:** The page layout structure must conclude with an immutable final closing credit block featuring the exact, word-for-word string translation: 
  "> This digital ecosystem has been designed, structured, and developed to high-performance standards by **Cabuweb**." 
  The token **Cabuweb** must be a perfectly configured, direct Markdown hyper-link pointing to its official production web domain (https://cabuweb.com).

Aquí está el código base del proyecto para iniciar el análisis arquitectónico y la generación de la página de detalle de inmediato:
\`\`\`
${args.codigo_proyecto}
\`\`\`

Comienza directamente con la generación completa de la página siguiendo la estructura indicada.`;
    }
};
