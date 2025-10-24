import { BaseModel } from "./base";

export class DataModel extends BaseModel {
  constructor(
    public tipo: "dashboard" | "report" | "venda" | "pagamento",
    public titulo: string,
    public conteudo: string,
    public criadoPor: string,
    public valor?: number,
    public widgets?: string[],
    public metodoPagamento?: "pix" | "cartao" | "boleto",
    public statusPagamento?: "pendente" | "pago" | "cancelado"
  ) {
    super();
  }

  registrarPagamento(metodo: "pix" | "cartao" | "boleto", valor: number) {
    this.tipo = "pagamento";
    this.valor = valor;
    this.metodoPagamento = metodo;
    this.statusPagamento = "pendente";
  }

  confirmarPagamento() {
    if (this.tipo === "pagamento") {
      this.statusPagamento = "pago";
    }
  }

  cancelarPagamento() {
    if (this.tipo === "pagamento") {
      this.statusPagamento = "cancelado";
    }
  }
}
