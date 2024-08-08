import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: { name: string; age: number; email: string }) {
        return this.userService.createUser(createUserDto.name, createUserDto.age, createUserDto.email)       
    }

    @Get()
    async findAll() {
        return this.userService.findAllUsers();
    }
}