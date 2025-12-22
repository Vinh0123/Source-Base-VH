const BASE = (import.meta.env.VITE_API_BASE as string) || 'http://localhost:3000/api';

async function apiFetch(path: string, opts: RequestInit = {}) {
  const url = BASE + path;
  const headers = Object.assign({ 'Content-Type': 'application/json' }, opts.headers || {});
  const res = await fetch(url, Object.assign({}, opts, { headers }));
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }
  return res.json();
}

// Products
export async function getProducts() {
  const json = await apiFetch('/products');
  // backend returns { data: [...], meta: { page, limit, total } }
  const items = (json.data || json) as any[];
  return items.map((p) => ({
    id: String(p.id),
    title: p.name,
    description: p.description || '',
    price: p.price || 0,
    image: p.image || `https://picsum.photos/seed/${p.id}/600/400`,
    createdAt: p.createdAt,
  }));
}

export async function createProduct(data: {
  title: string;
  description?: string;
  price: number;
  image?: string;
}) {
  const body = {
    name: data.title,
    price: data.price,
    description: data.description,
    image: data.image,
  };
  const p = await apiFetch('/products', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return {
    id: String(p.id),
    title: p.name,
    description: p.description || '',
    price: p.price || 0,
    image: p.image || `https://picsum.photos/seed/${p.id}/600/400`,
    createdAt: p.createdAt,
  };
}

export async function getProductById(id: string) {
  // Backend does not expose GET /products/:id — fallback to list and find
  const list = await getProducts();
  return list.find((p) => p.id === id) || null;
}

export async function deleteProduct(id: string) {
  // Not supported by backend
  throw new Error('DELETE /products/:id not supported by backend');
}

export async function updateProduct(
  id: string,
  data: Partial<{ title: string; description: string; price: number; image: string }>,
) {
  // Not supported by backend
  throw new Error('PATCH /products/:id not supported by backend');
}

// Blogs
export async function getBlogs() {
  const json = await apiFetch('/blogs');
  const items = (json.data || json) as any[];
  return items.map((b) => ({
    id: String(b.id),
    title: b.title,
    excerpt: (b.content || '').slice(0, 140),
    content: b.content || '',
    author: 'Admin',
    createdAt: b.createdAt,
    image: `https://picsum.photos/1200/400?random=${b.id}`,
    tags: [],
  }));
}

export async function createBlog(data: { title: string; content: string }) {
  const body = { title: data.title, content: data.content };
  const b = await apiFetch('/blogs', { method: 'POST', body: JSON.stringify(body) });
  return {
    id: String(b.id),
    title: b.title,
    excerpt: (b.content || '').slice(0, 140),
    content: b.content || '',
    author: 'Admin',
    createdAt: b.createdAt,
    image: `https://picsum.photos/1200/400?random=${b.id}`,
    tags: [],
  };
}

export async function getBlogById(id: string) {
  const list = await getBlogs();
  return list.find((b) => b.id === id) || null;
}

export async function updateBlog(id: string, data: Partial<{ title: string; content: string }>) {
  throw new Error('PATCH /blogs/:id not supported by backend');
}

export async function deleteBlog(id: string) {
  throw new Error('DELETE /blogs/:id not supported by backend');
}
