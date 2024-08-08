import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(name: string, age: number, email: string): Promise<User> {
        const  newUser = new this.userModel({ name, age, email });
        return newUser.save();
    }

    async findAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    // Additional methods for CRUD operations...
}