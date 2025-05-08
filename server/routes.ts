import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const data = contactSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.saveContactMessage(data);
      
      res.status(201).json({
        success: true,
        message: "Contact message saved successfully",
        data: contactMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false,
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Error saving contact message:", error);
        res.status(500).json({ 
          success: false,
          message: "Failed to save contact message" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
