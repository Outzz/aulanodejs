import crypto from "crypto";
import { BaseModel } from "./base";

export class Interacao extends BaseModel {
  constructor(
    id: string,
    private dataHora: Date,
    private tipo: "ligacao" | "email" | "reuniao" | "mensagem" | "visita" | "outro",
    private responsavel: string,
    private proximoPasso?: string
  ) { super(id); }

  static create(tipo: "ligacao" | "email" | "reuniao" | "mensagem" | "visita" | "outro", responsavel: string, proximoPasso?: string) {
    const id = crypto.randomUUID();
    return new Interacao(id, new Date(), tipo, responsavel, proximoPasso);
  }
}
