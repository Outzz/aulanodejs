import { BaseModel } from "./base";

export class TaskModel extends BaseModel {
  constructor(
    public titulo: string,
    public descricao: string,
    public responsavelId: string,
    public statusTarefa: "pendente" | "em_andamento" | "concluida" = "pendente",
    public interacoes: { tipo: "click" | "view" | "input"; descricao: string; data: Date }[] = []
  ) {
    super();
  }

  adicionarInteracao(tipo: "click" | "view" | "input", descricao: string) {
    this.interacoes.push({ tipo, descricao, data: new Date() });
  }
}
