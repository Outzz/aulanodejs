import crypto from "crypto";
import { BaseModel } from "./base";

export class Venda extends BaseModel {
  constructor(
    id: string,
    private cliente: string,
    private produto: string,
    private valor: number,
    private etapa: "contato_inicial" | "negociacao" | "fechamento",
    private probabilidade: number,
    private vendedor: string,
    private inicio: Date,
    private previsaoFechamento: Date,
    private observacoes?: string
  ) { super(id); }

  static create(cliente: string, produto: string, valor: number, etapa: "contato_inicial" | "negociacao" | "fechamento", probabilidade: number, vendedor: string, inicio: Date, previsaoFechamento: Date, observacoes?: string) {
    const id = crypto.randomUUID();
    return new Venda(id, cliente, produto, valor, etapa, probabilidade, vendedor, inicio, previsaoFechamento, observacoes);
  }
}
