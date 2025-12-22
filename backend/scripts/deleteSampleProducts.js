const { prisma } = require('../dist/config/database');

(async () => {
  try {
    const result = await prisma.product.deleteMany({
      where: { name: { startsWith: 'Sample' } }
    });
    console.log('Deleted count:', result.count);
  } catch (e) {
    console.error('Error deleting samples:', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();