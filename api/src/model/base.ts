import crypto from "crypto";

export abstract class BaseModel {
  public readonly id: string;
  public readonly criadoEm: Date;
  public status: "ativa" | "suspensa" | "excluida" = "ativa";

  constructor(id?: string) {
    this.id = id ?? crypto.randomUUID();
    this.criadoEm = new Date();
  }
}
