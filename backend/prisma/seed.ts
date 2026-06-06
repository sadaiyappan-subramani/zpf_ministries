import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  // 1. Seed Admin
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'Admin@123';
  
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail },
  });

  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  if (!existingAdmin) {
    await prisma.admin.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
      },
    });
    console.log('Seeded default admin user successfully.');
  } else {
    await prisma.admin.update({
      where: { email: adminEmail },
      data: { password: hashedPassword },
    });
    console.log('Admin user password updated successfully.');
  }

  // 2. Seed Default Sanctuary User
  const defaultDob = '1995-08-15';
  const defaultPasscode = '7777';

  const existingUser = await prisma.sanctuaryUser.findFirst({
    where: { dob: defaultDob, passcode: defaultPasscode },
  });

  if (!existingUser) {
    await prisma.sanctuaryUser.create({
      data: {
        dob: defaultDob,
        passcode: defaultPasscode,
      },
    });
    console.log('Seeded default sanctuary user successfully.');
  } else {
    console.log('Default sanctuary user already exists.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
