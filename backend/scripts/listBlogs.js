const { prisma } = require('../dist/config/database');

(async () => {
  try {
    const items = await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } });
    console.log('Blogs:');
    for (const it of items) console.log(it);
  } catch (e) {
    console.error('Error listing blogs:', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();