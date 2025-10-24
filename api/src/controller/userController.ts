import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { BaseController } from "./baseController";
import { UserModel } from "../models";

export class UserController extends BaseController<UserModel> {
  private userService = new UserService();

  constructor() {
    super(new UserService());
  }

  buscarPorEmail = (req: Request, res: Response) => {
    const user = this.userService.buscarPorEmail(req.params.email);
    user ? res.json(user) : res.status(404).json({ erro: "Usuário não encontrado" });
  };
}
