import { PrismaService } from '../prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dob: string;
        passcode: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dob: string;
        passcode: string;
    } | null>;
    create(dob: string, passcode: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dob: string;
        passcode: string;
    }>;
    update(id: number, dob?: string, passcode?: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dob: string;
        passcode: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dob: string;
        passcode: string;
    }>;
}
