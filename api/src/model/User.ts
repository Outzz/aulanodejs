import crypto from "crypto";
import { BaseModel } from "./base";

export class User extends BaseModel {
  constructor(
    id: string,
    private nome: string,
    private email: string,
    private senhaHash: string,
    private cargo: "vendedor" | "gestor" | "administrador",
    private status: "ativa" | "suspensa" | "excluida",
    private criadoEm = new Date()
  ) { super(id); }

  static create(nome: string, email: string, senhaHash: string, cargo: "vendedor" | "gestor" | "administrador") {
    const id = crypto.randomUUID();
    return new User(id, nome, email, senhaHash, cargo, "ativa");
  }
}
