import crypto from "crypto";

export class Tarefa {
  constructor(
    private id: string,
    private titulo: string,
    private descricao: string,
    private data: Date,
    private concluida: boolean = false,
    private tipo: "follow-up" | "reuniao" | "compromisso" = "follow-up",
    private clienteId?: string,
    private oportunidadeId?: string
  ) {
    if (!titulo) throw new Error("título obrigatório");
  }

  static create(titulo: string, descricao: string, data: Date, tipo?: "follow-up" | "reuniao" | "compromisso", clienteId?: string, oportunidadeId?: string) {
    const id = crypto.randomUUID();
    return new Tarefa(id, titulo, descricao, data, false, tipo, clienteId, oportunidadeId);
  }

  getId() { return this.id; }
  getTitulo() { return this.titulo; }
  isConcluida() { return this.concluida; }
}
