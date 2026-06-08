import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
export declare class UsersController {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    private validateToken;
    findAll(authHeader: string): Promise<any>;
    findOne(id: string, authHeader: string): Promise<any>;
    create(body: {
        dob: string;
        passcode: string;
    }, authHeader: string): Promise<any>;
    update(id: string, body: {
        dob?: string;
        passcode?: string;
    }, authHeader: string): Promise<any>;
    remove(id: string, authHeader: string): Promise<any>;
}
