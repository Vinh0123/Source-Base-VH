const { prisma } = require('../dist/config/database');

(async () => {
  try {
    const count = await prisma.product.count();
    console.log(count);
  } catch (e) {
    console.error('Error querying DB:', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();