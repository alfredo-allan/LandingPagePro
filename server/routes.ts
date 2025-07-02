import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ 
        success: true, 
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        contact: { id: contact.id }
      });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: "Erro ao enviar mensagem. Verifique os dados e tente novamente.",
        error: error.message 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar contatos",
        error: error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
