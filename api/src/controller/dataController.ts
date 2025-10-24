import { Request, Response } from "express";
import { DataService } from "../services/dataService";
import { BaseController } from "./baseController";
import { DataModel } from "../models";

export class DataController extends BaseController<DataModel> {
  private dataService = new DataService();

  constructor() {
    super(new DataService());
  }

  listarPorTipo = (req: Request, res: Response) => {
    const dados = this.dataService.listarPorTipo(req.params.tipo as any);
    res.json(dados);
  };

  listarPagamentosPendentes = (req: Request, res: Response) => {
    const pendentes = this.dataService.listarPagamentosPendentes();
    res.json(pendentes);
  };
}
