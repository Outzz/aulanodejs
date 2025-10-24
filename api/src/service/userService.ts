import { UserModel } from "../models";
import { BaseService } from "./baseService";

export class UserService extends BaseService<UserModel> {
  buscarPorEmail(email: string): UserModel | undefined {
    return this.items.find(u => u.email === email);
  }
}
