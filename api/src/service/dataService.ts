import { DataModel } from "../models";
import { BaseService } from "./baseService";

export class DataService extends BaseService<DataModel> {
  listarPorTipo(tipo: "dashboard" | "report" | "venda" | "pagamento"): DataModel[] {
    return this.items.filter(d => d.tipo === tipo);
  }

  listarPagamentosPendentes(): DataModel[] {
    return this.items.filter(p => p.tipo === "pagamento" && p.statusPagamento === "pendente");
  }
}
