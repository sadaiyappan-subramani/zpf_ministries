import { PrismaService } from '../prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    create(dob: string, passcode: string): Promise<any>;
    update(id: number, dob?: string, passcode?: string): Promise<any>;
    remove(id: number): Promise<any>;
}
