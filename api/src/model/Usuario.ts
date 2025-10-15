import crypto from "crypto";

export class Usuario {
  constructor(
    private id: string,
    private nome: string,
    private email: string,
    private senhaHash: string,
    private cargo: "vendedor" | "gestor" | "admin",
    private criadoEm: Date = new Date()
  ) {
    if (!nome) throw new Error("nome obrigatório");
    if (!email) throw new Error("email obrigatório");
  }

  static create(nome: string, email: string, senhaHash: string, cargo: "vendedor" | "gestor" | "admin") {
    const id = crypto.randomUUID();
    return new Usuario(id, nome, email, senhaHash, cargo);
  }

  getId() { return this.id; }
  getNome() { return this.nome; }
  getCargo() { return this.cargo; }
}
