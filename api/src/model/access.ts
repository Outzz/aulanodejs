import crypto from "crypto";
import { BaseModel } from "./base";

export class Acesso extends BaseModel {
  constructor(
    id: string,
    private usuario: string,
    private funcao: "vendedor" | "gestor" | "administrador",
    private permissao: string[],
    private ultimoAcesso?: Date,
    private status: "ativo" | "suspenso" | "excluido" = "ativo"
  ) { super(id); }

  static create(usuario: string, funcao: "vendedor" | "gestor" | "administrador", permissao: string[]) {
    const id = crypto.randomUUID();
    return new Acesso(id, usuario, funcao, permissao);
  }
}
