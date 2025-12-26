const { prisma } = require('../dist/config/database');

const samples = [
  { title: 'First post', content: 'Welcome to the blog!' },
  { title: 'About Us', content: 'This is a sample blog about flowers.' },
  { title: 'Care tips', content: 'How to keep flowers fresh longer.' }
];

(async () => {
  try {
    for (const b of samples) {
      await prisma.blog.create({ data: b });
      console.log('Inserted', b.title);
    }
    console.log('Blogs seeding completed');
  } catch (e) {
    console.error('Error during blogs seeding:', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();