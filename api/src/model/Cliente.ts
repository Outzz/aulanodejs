import crypto from "crypto";

export class Cliente {
  constructor(
    private id: string,
    private nome: string,
    private telefone: string,
    private email: string,
    private empresa?: string,
    private criadoEm: Date = new Date()
  ) {
    if (!nome) throw new Error("nome obrigatório");
    if (!email) throw new Error("email obrigatório");
  }

  static create(nome: string, telefone: string, email: string, empresa?: string) {
    const id = crypto.randomUUID();
    return new Cliente(id, nome, telefone, email, empresa);
  }

  getId() { return this.id; }
  getNome() { return this.nome; }
  getTelefone() { return this.telefone; }
  getEmail() { return this.email; }
  getEmpresa() { return this.empresa; }
}
