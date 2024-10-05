import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";

// user.repository.ts
@Injectable()
export class UsersRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserService, dataSource.createEntityManager());
  }

  // async getById(id: string) {
  //   return this.findOne({ where: { id } });
  // }

  // async saveUser(userDto: UserDto){
  //   return this.save(userDto);
  // }
}