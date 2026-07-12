export const createEcommerce = {
    name: "create-ecommerce",
    description: "Genera la arquitectura completa y el código de un e-commerce robusto en Next.js 15, siguiendo prácticas de Cabuweb",
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
            description: "Estilo estético del diseño (ej. Luxury Minimalist, Modern Dark Foodie)",
            required: true
        }
    ],
    template: (args) => {
        return `Act as a cross-functional, Principal/Staff-level software engineering team composed of a Principal Next.js 15 Architect (a strict evangelist of SOLID, Clean Code, and GoF design patterns), a Principal UI/UX Creative Director, and a Principal Growth Hacker & Technical SEO Specialist. Your objective is to engineer the comprehensive system architecture, folder structure, and production-ready, strongly-typed, decoupled codebase—entirely free of placeholders, generic comments, or partial code blocks (strictly no '// TODO' or '// Add logic here')—for the following e-commerce platform:

---
### 🛠️ PLATFORM INSTANCE CONFIGURATION:
- [STORE_NAME]: "${args.store_name}"
- [PRODUCT_NICHO]: "${args.product_nicho}"
- [VISUAL_STYLE_REQUIRED]: "${args.visual_style_required}"
---

You must strictly implement and merge the paradigms of the following engineering constraints: \`next-core\` (Next.js 15 + React 19 App Router), \`ui-ux-conversion-design\`, \`color-theory\` (dynamic HSL semantic tokens), \`conversion-rate-optimization\` (technical CRO metrics), \`react-hook-form-zod\` for type-safe forms, \`framer-motion\` for spring-physics animations, and custom parameterized \`sweetalert2\` interfaces for asynchronous notifications.

### 1. SYSTEM ARCHITECTURE: VERTICAL SLICING & CLEAN CODE BOUNDS
The structure must strictly follow a Vertical Slicing (Feature-Driven Architecture) layout adapted to Next.js App Router, enforced by SOLID, DRY, and KISS principles:
- **Feature Cohesion Bounds:** Each domain capability (e.g., \`cart\`, \`checkout\`, \`productos\`, \`contact\`, \`auth\`) must reside within its own standalone feature directory. This directory must encompass its isolated components, domain-specific hooks, dedicated schema validations, and TypeScript contracts, preventing global state pollution and tight coupling.
- **Strict Data Contracts:** Prior to constructing any UI layer, define global immutable TypeScript interfaces (e.g., \`Product\`, \`CartItem\`, \`Category\`, \`UserSession\`) within a dedicated types module to guarantee deterministic data integrity across server and client boundaries.
- **Strict Metric Coding Constraints (MAX 200-300 Lines):** No file (component, custom hook, utility, or layout) may exceed a strict 200-300 line metric window. If a complex view demands extensive logic or UI trees, you MUST modularize and break it down into decoupled, single-responsibility sub-components.

### 2. RESILIENCE, RUNTIME PREDICTION, AND HYDRATION DEFENSE
- **Mandatory Skeleton States:** Any async data-fetching component or client-side hydrated widget (e.g., product item grids, cart drawer totals, item details) must feature a structurally matching loading skeleton UI utilizing static CSS with standard pulsing animations (\`animate-pulse\`). This ensures layout stability and guarantees a Cumulative Layout Shift (CLS) score of 0.
- **Elegant Error Isolation:** Implement native Next.js \`error.tsx\` boundaries at critical route segments to catch runtime rendering anomalies gracefully, offering users an intuitive, non-breaking recovery action.
- **Hydration Mismatch Mitigation:** Ensure that components relying on client-side state hooks or browser objects (e.g., reading \`localStorage\` for state hydration, dynamic relative dates, localized maps) mitigate React 19 hydration shocks by leveraging deferred execution hooks or explicitly disabling server-side rendering (SSR) bindings for that subset via dynamic imports.

### 3. MOBILE-FIRST ADAPTIVE LAYOUT MANDATE
- **Extreme Fluidity Paradigm:** Every layout grid, structural container, and layout segment must be meticulously optimized across the viewport spectrum: Desktop, Tablet, and Mobile.
- **Mobile/Tablet Viewports:** Implement interactive collapsable navigation drawers, tap-target optimization conforming to a strict minimum interactive dimension of 44x44px, persistent mobile bottom navigation bars if applicable, and single-column responsive grids.
- **Desktop Layout Structuring:** Provide layout trees featuring multi-column structural grids (\`md:grid-cols-2 lg:grid-cols-4\`), persistent semantic functional sidebars, and highly controlled negative space distribution.

### 4. WEB PERFORMANCE ARCHITECTURE (Core Web Vitals Enforcement)
- **Asset Loading Optimization:** Leverage Next.js \`next/image\` natively, implementing responsive \`sizes\` mappings, high-performance compressed formats, and explicit high-priority rendering constraints (\`priority\`) for elements located above the fold to maximize the Largest Contentful Paint (LCP) metric.
- **Immediate TTI and low INP:** Craft lightweight client components, optimize DOM node tree depth, and handle heavy analytics or external assets via deferred asynchronous execution scripts (\`next/script\`) to guarantee a minimized Interaction to Next Paint (INP) score.

### 5. ART DIRECTION AND DYNAMIC SYSTEM SPECIFICATIONS
- **Niche-Agnostic Theming Integration:** Calibrate the design language to seamlessly align with the specified [PRODUCT_NICHO] under the visual lens of the requested [VISUAL_STYLE_REQUIRED].
- **Dynamic CSS Semantic Token Mapping:** Build the Tailwind utility space out of pure structural HSL system tokens (\`background\`, \`foreground\`, \`primary\`, \`card\`, \`accent\` exclusively set for micro-conversions and tactical alerts).
- **Typography Execution:** Select an ultra-premium font family possessing distinct structural characteristics for primary headings based on the brand's niche, paired with an exceptionally legible Sans-Serif font (e.g., Inter) for data representations and micro-copy blocks.
- **Attributed SweetAlert2 Parameterization:** Override standard native alerts with fully parameterized SweetAlert2 TypeScript bridges, using the \`customClass\` property to inject exact Tailwind color tokens and typographic scales.
- **Spring-Physics Animation Layer:** Enforce smooth, physics-based user interface feedback (\`spring physics\` via Framer Motion) for component scaling, modal overlay distributions, and state variations.

### 6. APPLICATION LAYER ROUTES AND FUNCTIONAL OVERVIEWS (App Router)

#### A. Architecture Layout Base
- **Monolithic Navigation Header:** Structurally fixed at the page top, solid background opacities (strictly no background blur filters), incorporating centered branding layout placements, optimized clean SVG vectors for system cart counters, user profile routing, and bookmark states.
- **Corporate Structural Footer:** Multi-tier architectural distribution layout for system sitemaps and legal terms, featuring the mandatory engineering credit assignment string: "Desarrollado por Cabuweb" wrapped in semantic anchor bindings (\`rel="noopener noreferrer"\`).
- **Compliance Cookie Interface:** Horizontal base-anchored banner utilizing local storage validation, displaying symmetrically identical structural controls for "Aceptar todas", "Rechazar todas", and "Configurar".

#### B. High-Conversion Embudo Landing Architecture (\`app/page.tsx\`)
A complete, fully modularized AIDA funnel structured across decoupled operational components (strictly respecting the 200-300 line ceiling limits):
- **Hero Canvas Component:** Immersive branding proposition, optimized high-definition primary picture layouts, and high-visibility calls to action (CTAs).
- **Value Proposition Component:** Multi-grid infrastructure highlighting core enterprise advantages.
- **Featured Collection Component:** Dynamic 4-item product grid showcasing rich client-side micro-interactions (alternate visual layouts on hover and swift add-to-cart operations).
- **Brand Storytelling Layer:** Deep visual editorial dive into the operational philosophy of the business.
- **Social Proof Layer:** Symmetrical multi-review carousel showcasing authentic customer ratings.
- **Lead Capture Component:** High-conversion newsletter entry module.
- **Contact and Automated Mapping Layer:** Clean decoupled grid separating a type-safe schema contact form (validated via Zod, checking phone, email, and explicit GDPR consent states) from an interactive maps module. The mapping engine must load the Google Maps JavaScript API (or alternative mapping library) directly—strictly no iframe components—and feature interactive custom map pins and explicit callouts displaying store details and external directions routing links to Google Maps.

#### C. Catalog Space, Item Detailed View, Reactive Cart, and Authentication
- **Catalog Route (\`app/productos/page.tsx\`):** A comprehensive catalog dashboard pairing reactive functional sidebars (filtering states for Category, Size, Price, Color) natively synchronized with Next.js URL \`searchParams\` for deep-linking capabilities and indexing.
- **Item Detailed Route (\`app/productos/[slug]/page.tsx\`):** Advanced interface implementing multi-image preview carousels, size selection components with explicit zero-stock validation states, accessible overlay components for sizing instructions or shipping details, and cross-selling listing modules. Product parameterization MUST strictly compile against the dynamic text URL string (\`[slug]\`), strictly no numeric database identifiers (\`id\`).
- **Reactive Shopping Cart (\`app/carrito/page.tsx\`):** Clean layout utilizing dynamic item adjustments, product removal actions, and explicit tax breakdowns (detailing structural Subtotals, Shipping costs, and the 21% IVA rate applicable in Spain).
- **Authentication & Core Legal Space:** Type-safe authentication structures built with explicit loading state overlays. Compliance text templates for Privacy Policies and User Terms meticulously tailored to the LSSI-CE frameworks and Spanish RGPD guidelines, explicitly calling out the mandatory 14-day customer right of withdrawal ("derecho de desistimiento").

#### D. Specialized Error Boundary Space (\`app/not-found.tsx\`):
- **User Retention Architecture:** An immersive, high-impact 404 canvas tailored to the exact visual parameters of the requested [VISUAL_STYLE_REQUIRED], preventing application bouncing from dead links.
- **Copywriting Strategy:** Integrate highly specific marketing copy reflecting the core theme of the [PRODUCT_NICHO] (e.g., "Este modelo ha salido de la pasarela", "Esta añada ya no está en la bodega", or "Esta receta no está en nuestro menú").
- **Conversion Recovery Layout:** Symmetrically aligned navigation triggers powered by Framer Motion spring utilities, routing users smoothly back to the root entry point or the global \`/productos\` catalog route to maximize conversion preservation.
- **Technical Footprint:** Render an ultra-lightweight client-side layer utilizing semantic HTML5 nodes, maintaining an overall code size under 200 lines.

### 7. ADVANCED TECHNICAL SEARCH ENGINE OPTIMIZATION (SEO)
- **Asynchronous Server Actions:** Handle all secure form processing pipelines through native Next.js Server Actions, returning state payloads directly to the client view layers to trigger SweetAlert2 alerts.
- **Dynamic Engine Discovery Scripts:** Implement \`app/robots.ts\` to cleanly structure target crawl parameters pointing explicitly to the primary index file, alongside a dynamic \`app/sitemap.ts\` file automatically indexing the dynamic product slug pathways alongside priority indicators.
- **Structured Semantic Meta Layers:** Execute robust \`generateMetadata\` procedures on server routes coupled with inline JSON-LD script blocks encoding valid Schema.org properties (\`Product\` or \`Store\` semantic frameworks).

### 8. PHOTO-REALISTIC NON-DESTRUCTIVE IMAGE ASSETS MANDATE
- **Zero URL Placeholders Policy:** The use of placeholder services or stock image placeholders is strictly forbidden. The engine must explicitly conceptualize and output the descriptive visual parameters for every required image asset within the codebase.
- **Hyper-Realistic Transparent Product Renders:** All items displayed within store catalogs, detail views, or cart summaries must be described as hyper-realistic, high-fidelity studio renders provided in transparent PNG format (zero background elements). The focus must remain exclusively on the product itself under professional lighting conditions.

### 9. DETAILED ENTERPRISE PROGRAMMING DELIVERABLES
Generate and output the absolute production-grade codebase blocks, entirely decoupled following the Vertical Slicing paradigm:
1. The global type definitions registry (\`src/shared/types/index.ts\`) establishing absolute data types for the platform.
2. The core system architecture styling configs mapping dynamic HSL variables inside \`tailwind.config.js\` and \`app/globals.css\`.
3. The root architecture layout (\`app/layout.tsx\`) wrapping the navigation structure, the attributed footer (crediting Cabuweb), and the compliance cookie banner.
4. The core homepage modules (\`app/page.tsx\`) decoupled into distinct feature component segments checking line counts under the 200-300 lines limit (\`HeroSection\`, \`ValueProposition\`, \`FeaturedCollection\`, \`BrandStory\`, \`SocialProof\`, \`NewsletterForm\`, \`ContactSection\`, \`MapView\`), including the Zod validator.
5. The complete, interactive product page detail wrapper showcasing advanced variant selections and mutable preview panels (\`app/productos/[slug]/page.tsx\`).
6. The automated metadata compilation workflows: \`app/robots.ts\` and \`app/sitemap.ts\`.
7. The modular utility initialization abstraction for custom-styled SweetAlert2 notifications.

Ensure pristine architectural execution, flawless semantic structure, accessibility compliance (ARIA), and strict Type safety. Make it flawless.`;
    }
};
