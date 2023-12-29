import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class UsersController {
    private readonly usersService;
    private readonly client;
    constructor(usersService: UsersService, client: ClientProxy);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").UserEntity>;
    all(): Promise<import("./entities/user.entity").UserEntity[]>;
    findOne(id: string): Promise<import("./entities/user.entity").UserEntity>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").UserEntity>;
    remove(id: string): Promise<void>;
}
