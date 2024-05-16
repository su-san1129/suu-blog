import { PrismaD1 } from '@prisma/adapter-d1';
import { PrismaClient } from '@prisma/client';

export function fetch(c: any) {
	const adapter = new PrismaD1(c.env.DB);
	return { prisma: new PrismaClient({ adapter }) };
}
