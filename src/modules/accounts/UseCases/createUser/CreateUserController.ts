import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.body;

    console.log(cpf);

    const createUserUseCase = container.resolve(CreateUserUseCase);

    // Chamada para API OpenBanking de consentimento usando o cpf do cliente
    // POST /concents

    // Retorno da API
    const dataOpenBankingConsent = {
      status: 'AUTHORISED',
    };

    // Se não tiver o consentimento do usuário, retorna erro
    if (dataOpenBankingConsent.status !== 'AUTHORISED') {
      return response
        .status(400)
        .json({ error: 'Authorization to use data not consent' });
    }

    // Chamada para API OpenBanking de Dados Cadastrais
    // GET /personal/identifications
    const dataOpenBankingRegistrationData = {
      updateDateTime: '2021-05-21T08:30:00Z',
      personalId: '578-psd-71md6971kjh-2d414',
      brandName: 'Organização A',
      civilName: 'Juan Kaique Cláudio Fernandes',
      socialName: 'Jaqueline de Freitas',
      birthDate: '2021-05-21',
      maritalStatusCode: 'SOLTEIRO',
      maritalStatusAdditionalInfo: 'Casado',
      sex: 'FEMININO',
    };

    const {
      birthDate,
      brandName,
      civilName,
      maritalStatusAdditionalInfo,
      maritalStatusCode,
      personalId,
      sex,
      socialName,
      updateDateTime,
    } = dataOpenBankingRegistrationData;

    // Criação do usuário
    await createUserUseCase.execute({
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

    return response.status(201).send();
  }
}

export { CreateUserController };
