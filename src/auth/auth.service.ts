import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    //username vaf pass là 2 tham số tthuw viện passport nó ném về
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        if (user) {
            const isValid = await this.usersService.isValidPassword(pass, user.password)
        }

        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
