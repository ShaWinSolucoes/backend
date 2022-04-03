import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
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
    const user = this.repository.create({
      updateDateTime,
      personalId,
      brandName,
      civilName,
      socialName,
      birthDate,
      maritalStatusCode,
      maritalStatusAdditionalInfo,
      sex,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
