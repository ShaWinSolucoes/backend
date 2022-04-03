import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    birthDate,
    brandName,
    civilName,
    maritalStatusAdditionalInfo,
    maritalStatusCode,
    personalId,
    sex,
    socialName,
    updateDateTime,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      birthDate,
      brandName,
      civilName,
      maritalStatusAdditionalInfo,
      maritalStatusCode,
      personalId,
      sex,
      socialName,
      updateDateTime,
    });
  }
}

export { CreateUserUseCase };
