import { Request, Response } from "express";
import { BaseService } from "../services/baseService";
import { BaseModel } from "../models";

export class BaseController<T extends BaseModel> {
  constructor(private service: BaseService<T>) {}

  listar = (req: Request, res: Response) => {
    res.json(this.service.listar());
  };

  buscarPorId = (req: Request, res: Response) => {
    const item = this.service.buscarPorId(req.params.id);
    item ? res.json(item) : res.status(404).json({ erro: "Não encontrado" });
  };

  criar = (req: Request, res: Response) => {
    const item = this.service.criar(req.body);
    res.status(201).json(item);
  };

  atualizar = (req: Request, res: Response) => {
    const item = this.service.atualizar(req.params.id, req.body);
    item ? res.json(item) : res.status(404).json({ erro: "Não encontrado" });
  };

  deletar = (req: Request, res: Response) => {
    const ok = this.service.deletar(req.params.id);
    ok ? res.status(204).send() : res.status(404).json({ erro: "Não encontrado" });
  };
}
