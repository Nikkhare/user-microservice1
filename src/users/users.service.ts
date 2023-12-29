import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepo.save(createUserDto);
  }

  async all() {
    return await this.userRepo.find();
  }

  async findOne(id: string) {
    return await this.userRepo.findOneBy({id});
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update(id, updateUserDto); 
  }

  async remove(id: string) {
    return await this.userRepo.softDelete({id});
  }
}
