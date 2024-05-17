import { PrismaD1 } from '@prisma/adapter-d1';
import { PrismaClient } from '@prisma/client';

export function getPrisma(c: any) {
	const adapter = new PrismaD1(c.env.DB);
	return new PrismaClient({ adapter });
}
