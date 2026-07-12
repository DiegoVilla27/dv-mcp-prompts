import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListPromptsRequestSchema,
  GetPromptRequestSchema
} from "@modelcontextprotocol/sdk/types.js";
import { seoSemAudit } from "./prompts/seoSemAudit.js";
import { createProject } from "./prompts/createProject.js";
import { cabuwebDetail } from "./prompts/cabuwebDetail.js";
import { createEcommerce } from "./prompts/createEcommerce.js";
import { readmeGenerator } from "./prompts/readmeGenerator.js";
import { seoPageArchitecture } from "./prompts/seoPageArchitecture.js";

// Inicializamos el servidor indicando que tiene la capacidad de ofrecer "prompts"
const server = new Server(
  { name: "dv-mcp-prompts", version: "1.0.0" },
  { capabilities: { prompts: {} } }
);

// Aquí puedes centralizar tus prompts del día a día
const MIS_PROMPTS: Record<string, any> = {
  [seoSemAudit.name]: seoSemAudit,
  [createProject.name]: createProject,
  [cabuwebDetail.name]: cabuwebDetail,
  [createEcommerce.name]: createEcommerce,
  [readmeGenerator.name]: readmeGenerator,
  [seoPageArchitecture.name]: seoPageArchitecture
};

// Handler 1: Le avisa a la IA qué prompts tienes disponibles y qué variables piden
server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: Object.values(MIS_PROMPTS).map(p => ({
      name: p.name,
      description: p.description,
      arguments: p.arguments
    }))
  };
});

// Handler 2: Construye el prompt final inyectando las variables que le mandes desde el chat
server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const prompt = MIS_PROMPTS[name];

  if (!prompt) {
    throw new Error(`El prompt '${name}' no existe.`);
  }

  const promptText = prompt.template(args || {});

  return {
    description: prompt.description,
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: promptText
        }
      }
    ]
  };
});

// Arrancamos el transporte STDIO para que el editor (Cursor, VS Code) se comunique con él
const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Servidor MCP de Prompts corriendo perfectamente.");