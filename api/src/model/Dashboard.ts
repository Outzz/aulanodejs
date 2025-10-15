import crypto from "crypto";

export class Dashboard {
  constructor(
    private id: string,
    private periodoInicio: Date,
    private periodoFim: Date,
    private totalLeads: number,
    private totalOportunidades: number,
    private totalVendas: number,
    private taxaConversao: number,
    private semanaAnterior?: number,
    private mesAnterior?: number,
    private anoAnterior?: number,
    private geradoEm: Date = new Date()
  ) {}

  static create(periodoInicio: Date, periodoFim: Date, totalLeads: number, totalOportunidades: number, totalVendas: number, taxaConversao: number) {
    const id = crypto.randomUUID();
    return new Dashboard(id, periodoInicio, periodoFim, totalLeads, totalOportunidades, totalVendas, taxaConversao);
  }

  getId() { return this.id; }
}
