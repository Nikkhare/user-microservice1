import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<UserEntity>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & UserEntity>;
    all(): Promise<UserEntity[]>;
    findOne(id: string): Promise<UserEntity>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
