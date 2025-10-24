import crypto from "crypto";
import { BaseModel } from "./base";

export class Relatorio extends BaseModel {
  constructor(
    id: string,
    private periodo: "semanal" | "mensal" | "anual",
    private totalVendas: number,
    private clientesAtivos: number,
    private taxaConversao: number,
    private comparativoAnterior?: number,
    private geradoEm = new Date()
  ) { super(id); }

  static create(periodo: "semanal" | "mensal" | "anual", totalVendas: number, clientesAtivos: number, taxaConversao: number, comparativoAnterior?: number) {
    const id = crypto.randomUUID();
    return new Relatorio(id, periodo, totalVendas, clientesAtivos, taxaConversao, comparativoAnterior);
  }
}
