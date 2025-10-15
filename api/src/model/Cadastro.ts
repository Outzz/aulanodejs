export class Cadastro {
  constructor(
    private id: string,
    private nome: string,
    private telefone: string,
    private email: string,
    private empresa: string,
    private dataNascimento: string

  ) {
    if (!nome) throw new Error("nome obrigatório");
    if (!telefone) throw new Error("telefone obrigatório");
    if (!email) throw new Error("email obrigatório");
    if (!empresa) throw new Error("empresa obrigatório");
    if (!dataNascimento) throw new Error("data de nascimento obrigatório");

    if (nome.length < 3) throw new Error("nome muito curto");
  }

  static create(nome: string, telefone: string, email: string, empresa: string, dataNascimento: string) {
    const id = crypto.randomUUID();
    return new Cadastro(id, nome, telefone, email, empresa, dataNascimento);
  }

  getId(): string {
    return this.id;
  }

    getNome(): string {
    return this.nome;
  }

  getTelefone(): string {
    return this.telefone;
  }

  getEmail(): string {
    return this.email;
  }

  getEmpresa(): string {
    return this.empresa;
  }

  getDataNascimento(): string {
    return this.dataNascimento;
  }
}
