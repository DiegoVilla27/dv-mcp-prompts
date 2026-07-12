export const createProject = {
    name: "create-project",
    description: "Inicializa un espacio de trabajo completo de Next.js con inyección de dependencias y scripts de agentes",
    arguments: [
        {
            name: "project_name",
            description: "El nombre del proyecto a inicializar (ej. mi-app-cool)",
            required: true
        }
    ],
    template: (args) => {
        return `Act as a Staff Frontend Engineer with system terminal execution capabilities. Your primary goal is to initialize a clean, real development workspace for the platform configured below.

---
### ⚙️ CONFIGURATION VARIABLE:
- [PROJECT_NAME]: "${args.project_name}"
---

### 🚨 STEP 1: OFFICIAL FRAMEWORK SCAFFOLDING
Use your terminal execution tool to run the official Next.js initializer directly in this root directory. Execute exactly this command to stand up the latest standard structure with TypeScript, ESLint, and Next.js's default out-of-the-box Tailwind configuration:
npx create-next-app@latest . --ts --tailwind --app --src-dir --import-alias "@/*" --use-npm --eslint

Wait for the scaffolding to completely finish and verify the default framework folders and files (\`src/app/page.tsx\`, \`src/app/globals.css\`, config files) are cleanly generated intact.

### 🚨 STEP 2: ECOSYSTEM DEPENDENCY INJECTION
Once the base Next.js pristine infrastructure is verified active on the disk, execute the terminal command to install the remaining required production libraries into the workspace:
npm install react-hook-form zod @hookform/resolvers/zod sonner sweetalert2 framer-motion lucide-react

### 🚨 STEP 3: PIPELINE SCRIPT DEPLOYMENT (EXECUTE WHEN ALL ABOVE IS CHECK)
Once Steps 1 and 2 are fully completed and verified, execute the following chain command in the terminal to pull and prepare the local automated agent runtime script:
curl -O https://raw.githubusercontent.com/DiegoVilla27/agents-ai-store/main/async_agents.sh && chmod +x async_agents.sh

Wait for the download to succeed and the file permissions to log as executable before proceeding.

### 🚨 STEP 4: SEQUENTIAL AGENT DEPLOYMENT & ASSET MIGRATION
Once the shell script is fully verified and ready, run the following automated routines strictly in this order, ensuring each process finishes completely before starting the next:

1. **Deploy NextJS Base Module:**
   Execute \`./async_agents.sh nextjs\` and monitor output until the execution is completely finished.
2. **Deploy UI/UX Assets:**
   Execute \`./async_agents.sh ui-ux-designer\` and monitor output until the execution is completely finished.
3. **Deploy Marketing Infrastructure:**
   Execute \`./async_agents.sh digital-marketer\` and monitor output until the execution is completely finished.
4. **Locate and Migrate Documentation:**
   Locate the file named \`AGENTS.md\` inside your default downloads directory (\`~/Downloads\` or system download path). Then, create a directory named \`.agents/\` in the project root if it does not exist, and move or copy the \`AGENTS.md\` file exactly inside that folder: \`mkdir -p .agents && cp ~/Downloads/AGENTS.md .agents/\` (adjust the source path accordingly to target your precise download environment).

Execute Step 1 in the terminal now to initiate the full pipeline.`;
    }
};
