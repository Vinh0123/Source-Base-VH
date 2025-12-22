const { prisma } = require('../dist/config/database');

const samples = [
  { name: 'Hoa Hồng', price: 5.0, description: 'Hoa hồng tươi', image: 'https://i.pinimg.com/1200x/b5/7b/fd/b57bfd08cf1e89648a8d1d300619c27b.jpg' },
  { name: 'Hoa Tulip', price: 12.5, description: 'Hoa tulip rực rỡ', image: 'https://i.pinimg.com/736x/2b/3c/43/2b3c4358ee2f85feec4022fdcd417520.jpg' },
  { name: 'Hoa Cúc', price: 7.75, description: 'Hoa cúc nhỏ xinh', image: 'https://i.pinimg.com/736x/e7/3e/be/e73ebefafff1fae6447a0c69871486b9.jpg' },
  { name: 'Hoa Lan', price: 99.99, description: 'Hoa lan sang trọng', image: 'https://i.pinimg.com/736x/12/d5/d7/12d5d76dcf4437e55ec814df7296c768.jpg' }
];

(async () => {
  try {
    for (const p of samples) {
      await prisma.product.create({ data: p });
      console.log('Inserted', p.name);
    }
    console.log('Seeding completed');
  } catch (e) {
    console.error('Error during seeding:', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();