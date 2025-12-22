const { prisma } = require('../dist/config/database');

(async () => {
  try {
    const items = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
    console.log('Products:');
    for (const it of items) console.log(it);
  } catch (e) {
    console.error('Error listing products:', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();