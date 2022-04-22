import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgreUserRepository } from "../../repositories/implementations/PostgreUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgreUserRepository = new PostgreUserRepository();

const createUserUseCase = new CreateUserUseCase(
  postgreUserRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
