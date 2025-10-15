import crypto from "crypto";

export class Oportunidade {
  constructor(
    private id: string,
    private clienteId: string,
    private titulo: string,
    private valorEstimado: number,
    private etapa: "prospect" | "qualificado" | "proposta" | "fechado_venda" | "fechado_perdido",
    private probabilidade: number,
    private criadoEm: Date = new Date(),
    private atualizadoEm: Date = new Date()
  ) {
    if (!clienteId) throw new Error("clienteId obrigatório");
    if (!titulo) throw new Error("título obrigatório");
  }

  static create(clienteId: string, titulo: string, valorEstimado: number, etapa: "prospect" | "qualificado" | "proposta" | "fechado_venda" | "fechado_perdido", probabilidade: number) {
    const id = crypto.randomUUID();
    return new Oportunidade(id, clienteId, titulo, valorEstimado, etapa, probabilidade);
  }

  getId() { return this.id; }
  getTitulo() { return this.titulo; }
  getEtapa() { return this.etapa; }
  getProbabilidade() { return this.probabilidade; }
}
