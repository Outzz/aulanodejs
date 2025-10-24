import { TaskModel } from "../models";
import { BaseService } from "./baseService";

export class TaskService extends BaseService<TaskModel> {
  listarPorResponsavel(id: string): TaskModel[] {
    return this.items.filter(t => t.responsavelId === id);
  }
}
