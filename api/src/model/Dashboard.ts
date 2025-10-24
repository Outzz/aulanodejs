import crypto from "crypto";
import { BaseModel } from "./base";

export class Dashboard extends BaseModel {
  constructor(
    id: string,
    private vendasTotais: number,
    private leadsGerados: number,
    private conversoes: number,
    private faturamento: number,
    private atualizadoEm = new Date()
  ) { super(id); }

  static create(vendasTotais: number, leadsGerados: number, conversoes: number, faturamento: number) {
    const id = crypto.randomUUID();
    return new Dashboard(id, vendasTotais, leadsGerados, conversoes, faturamento);
  }
}
