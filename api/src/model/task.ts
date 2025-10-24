import crypto from "crypto";
import { BaseModel } from "./base";

export class Tarefa extends BaseModel {
  constructor(
    id: string,
    private descricao: string,
    private responsavel: string,
    private inicio: Date,
    private prazo: Date,
    private prioridade: "baixa" | "media" | "alta",
    private status: "pendente" | "em_andamento" | "concluida",
    private notas?: string
  ) { super(id); }

  static create(descricao: string, responsavel: string, inicio: Date, prazo: Date, prioridade: "baixa" | "media" | "alta", status: "pendente" | "em_andamento" | "concluida", notas?: string) {
    const id = crypto.randomUUID();
    return new Tarefa(id, descricao, responsavel, inicio, prazo, prioridade, status, notas);
  }
}
