import crypto from "crypto";

export class Interacao {
  constructor(
    private id: string,
    private clienteId: string,
    private tipo: "atendimento" | "reuniao" | "ligacao" | "mensagem",
    private descricao: string,
    private data: Date = new Date(),
    private canal: "email" | "whatsapp" | "telefone" | "outro" = "outro"
  ) {
    if (!clienteId) throw new Error("clienteId obrigatório");
    if (!descricao) throw new Error("descrição obrigatória");
  }

  static create(clienteId: string, tipo: "atendimento" | "reuniao" | "ligacao" | "mensagem", descricao: string, canal?: "email" | "whatsapp" | "telefone" | "outro") {
    const id = crypto.randomUUID();
    return new Interacao(id, clienteId, tipo, descricao, new Date(), canal);
  }

  getId() { return this.id; }
  getClienteId() { return this.clienteId; }
  getDescricao() { return this.descricao; }
  getCanal() { return this.canal; }
}
