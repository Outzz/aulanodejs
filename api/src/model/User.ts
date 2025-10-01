export class User {
  constructor(
    private id: string,
    private nome: string,
    private telefone: string,
    private email: string,
    private senha: string,
    private idade?: number
  ) {
    if (!nome) throw new Error("nome obrigatório");
    if (!telefone) throw new Error("telefone obrigatório");
    if (!email) throw new Error("email obrigatório");
    if (!senha) throw new Error("senha obrigatória");

    if (nome.length < 3) throw new Error("nome muito curto");
    if (senha.length < 3) throw new Error("senha muito curta");
  }

  static create(nome: string, telefone: string, email: string, senha: string, idade?: number) {
    const id = crypto.randomUUID();
    return new User(id, nome, telefone, email, senha, idade);
  }

  getId(): string {
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }

  getIdade(): number | undefined {
    return this.idade;
  }

  getEmail(): string {
    return this.email;
  }

  getSenha(): string {
    return this.senha;
  }
}
