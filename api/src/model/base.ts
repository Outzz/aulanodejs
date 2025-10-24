export abstract class BaseModel {
  protected id: string;
  protected criadoEm: Date;
  protected atualizadoEm?: Date;

  constructor(id: string) {
    this.id = id;
    this.criadoEm = new Date();
  }

  getId() { return this.id; }
}
