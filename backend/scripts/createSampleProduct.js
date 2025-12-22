const { prisma } = require('../dist/config/database');

(async () => {
  try {
    const product = await prisma.product.create({
      data: {
        name: 'Hoa tươi ',
        price: 9.99,
        description: 'Bó hoa tươi đẹp',
        image: 'https://i.pinimg.com/736x/12/5e/36/125e36b2e2c65a46d7f65bd2f3bb25d0.jpg'
      }
    });
    console.log('Created product:', product);
  } catch (e) {
    console.error('Error creating product:', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();