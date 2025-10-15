import crypto from "crypto";

export class Relatorio {
  constructor(
    private id: string,
    private periodo: "semanal" | "mensal" | "anual",
    private totalVendas: number,
    private clientesAtivos: number,
    private taxaConversao: number,
    private comparativoAnterior?: number,
    private geradoEm: Date = new Date()
  ) {}

  static create(periodo: "semanal" | "mensal" | "anual", totalVendas: number, clientesAtivos: number, taxaConversao: number, comparativoAnterior?: number) {
    const id = crypto.randomUUID();
    return new Relatorio(id, periodo, totalVendas, clientesAtivos, taxaConversao, comparativoAnterior);
  }

  getId() { return this.id; }
}
