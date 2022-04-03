interface ICreateUserDTO {
  updateDateTime: string;
  personalId: string;
  brandName: string;
  civilName: string;
  socialName: string;
  birthDate: string;
  maritalStatusCode: string;
  maritalStatusAdditionalInfo: string;
  sex: string;
  companyCnpj: Array<string>;
  password: string;
}

export { ICreateUserDTO };
