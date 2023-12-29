import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject('USER_SERVICE') private readonly client: ClientProxy,
) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const user = this.usersService.create(createUserDto);
    this.client.emit('user_created', user);
    return user;
  }

  @Get()
  all() {
    // this.client.emit('hello', 'hello from rabbitmq');
    return this.usersService.all();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    await this.usersService.update(id, updateUserDto);
    const user = await this.usersService.findOne(id);
    this.client.emit('user_updated', user);
    return user;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.usersService.remove(id);
    this.client.emit('user_deleted', id);
  }
}
