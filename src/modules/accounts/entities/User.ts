import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  updateDateTime: Date;

  @Column()
  personalId: string;

  @Column()
  brandName: string;

  @Column()
  civilName: string;

  @Column()
  socialName: string;

  @Column()
  birthDate: string;

  @Column()
  maritalStatusCode: string;

  @Column()
  maritalStatusAdditionalInfo: string;

  @Column()
  sex: string;

  @Column()
  companyCnpj: [];

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
