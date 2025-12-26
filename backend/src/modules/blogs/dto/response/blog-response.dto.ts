export class BlogResponseDto {
  id: number;
  title: string;
  content: string;
  createdAt: Date;

  constructor(blog: any) {
    this.id = blog.id;
    this.title = blog.title;
    this.content = blog.content;
    this.createdAt = blog.createdAt;
  }
}