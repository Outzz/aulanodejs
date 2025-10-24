import { BaseModel } from "../models";

export class BaseService<T extends BaseModel> {
  protected items: T[] = [];

  criar(item: T): T {
    this.items.push(item);
    return item;
  }

  listar(): T[] {
    return this.items;
  }

  buscarPorId(id: string): T | undefined {
    return this.items.find(i => i.id === id);
  }

  atualizar(id: string, dados: Partial<T>): T | undefined {
    const item = this.buscarPorId(id);
    if (item) Object.assign(item, dados);
    return item;
  }

  deletar(id: string): boolean {
    const index = this.items.findIndex(i => i.id === id);
    if (index >= 0) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
}
