import { Request, Response } from "express";
import { TaskService } from "../services/taskService";
import { BaseController } from "./baseController";
import { TaskModel } from "../models";

export class TaskController extends BaseController<TaskModel> {
  private taskService = new TaskService();

  constructor() {
    super(new TaskService());
  }

  listarPorResponsavel = (req: Request, res: Response) => {
    const tarefas = this.taskService.listarPorResponsavel(req.params.id);
    res.json(tarefas);
  };
}
