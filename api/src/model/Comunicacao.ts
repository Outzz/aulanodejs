import crypto from "crypto";

export class Comunicacao {
  constructor(
    private id: string,
    private tipo: "email" | "whatsapp",
    private mensagem: string,
    private destinatario: string,
    private clienteId?: string,
    private dataEnvio: Date = new Date(),
    private status: "enviado" | "entregue" | "lido" | "falhou" = "enviado"
  ) {
    if (!mensagem) throw new Error("mensagem obrigatória");
    if (!destinatario) throw new Error("destinatário obrigatório");
  }

  static create(tipo: "email" | "whatsapp", mensagem: string, destinatario: string, clienteId?: string) {
    const id = crypto.randomUUID();
    return new Comunicacao(id, tipo, mensagem, destinatario, clienteId);
  }

  getId() { return this.id; }
}
