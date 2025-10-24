import { BaseModel } from "./base";

export class UserModel extends BaseModel {
  constructor(
    public nome: string,
    public email: string,
    public senhaHash: string,
    public cargo: "vendedor" | "gestor" | "administrador",
    public ultimoAcesso?: { ip: string; local: string; data: Date }
  ) {
    super();
  }

  registrarAcesso(ip: string, local: string) {
    this.ultimoAcesso = { ip, local, data: new Date() };
  }
}
