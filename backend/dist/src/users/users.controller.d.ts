import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
export declare class UsersController {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    private validateToken;
    findAll(authHeader: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dob: string;
        passcode: string;
    }[]>;
    findOne(id: string, authHeader: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dob: string;
        passcode: string;
    } | null>;
    create(body: {
        dob: string;
        passcode: string;
    }, authHeader: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dob: string;
        passcode: string;
    }>;
    update(id: string, body: {
        dob?: string;
        passcode?: string;
    }, authHeader: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dob: string;
        passcode: string;
    }>;
    remove(id: string, authHeader: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dob: string;
        passcode: string;
    }>;
}
