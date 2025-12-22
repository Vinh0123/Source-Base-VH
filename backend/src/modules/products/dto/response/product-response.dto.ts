export class ProductResponseDto {
  id: number;
  name: string;
  price: number;
  description?: string | null;
  image?: string | null;
  createdAt: Date;

  constructor(product: any) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.description = product.description ?? null;
    this.image = product.image ?? null;
    this.createdAt = product.createdAt;
  }
}
