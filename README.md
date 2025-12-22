
---

```md
# Source-Base-VH — Hướng dẫn chạy nhanh (Backend)

> Tài liệu này tập trung vào **Backend** (Node + TypeScript + Prisma + PostgreSQL). Phần Frontend có thể có hướng dẫn tương tự trong `frontend/`.

---

## 📁 Cấu trúc thư mục

```

my-project/
├── frontend/        # Source Frontend (React / Vite / Next / ...)
├── backend/         # Source Backend (Node.js / Express)
├── docker-compose.yml
├── .gitignore
└── README.md

````

---

## 🛠️ Công nghệ sử dụng

### Frontend
- React
- Vite
- JavaScript / TypeScript
- Fetch API / Axios

### Backend
- Node.js
- Express.js
- PostgreSQL

### Database
- PostgreSQL 15
- Docker & Docker Compose

---

## ⚙️ Yêu cầu môi trường

- Node.js >= 18
- Docker Desktop
- Git

Kiểm tra nhanh:
```bash
node -v
docker -v
docker compose version
````

---

## 🚀 Khởi chạy Database (PostgreSQL)

### 1️⃣ Tạo file `.env` tại thư mục gốc

```env
DB_USERNAME=postgres
DB_PASSWORD=postgres123
DB_NAME=training_db
```

### 2️⃣ Chạy PostgreSQL bằng Docker

```bash
docker compose up -d
```

### 3️⃣ Kiểm tra container

```bash
docker ps
```

PostgreSQL chạy tại:

* Host: `localhost`
* Port: `5433`
* User: `postgres`
* Password: `postgres123`
* Database: `training_db`

---

## 🧠 Backend — Hướng dẫn chạy chi tiết

### 1) Lấy code & vào thư mục backend
```bash
git clone <repo-url>
cd Source-Base-VH/backend
```

### 2) Tạo file `.env`
Tạo `backend/.env` với tối thiểu các biến:
```
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/VH_DB
PRISMA_CLIENT_ENGINE_TYPE=binary
```

### 3) Cài dependencies
```bash
npm install
```

### 4) Prisma — generate & migrate
```bash
npx prisma generate
npx prisma migrate dev --name init
# hoặc nếu không dùng migration:
npx prisma db push
```

### 5) Chạy server
- Dev (hot-reload):
```bash
npm run dev
```
- Build & run:
```bash
npm run build
npm start
```

Server mặc định: `http://localhost:3000` — Base API: `http://localhost:3000/api`

### 6) Scripts hữu ích (seed / check / list)
- Seed products: `npm run seed` (-> `node scripts/seedProducts.js`)
- Seed blogs: `npm run seed:blogs` (-> `node scripts/seedBlogs.js`)
- Delete sample products: `npm run clean:samples`
- List products: `node scripts/listProducts.js`
- List blogs: `node scripts/listBlogs.js`
- Check product count: `node scripts/checkProducts.js`

---

**Ví dụ API nhanh:**
- GET products: `GET http://localhost:3000/api/products`
- POST product: `POST http://localhost:3000/api/products` (JSON body: `name`, `price`, `description`, `image`)


---

## 🖥️ Frontend – Cách chạy

```bash
cd frontend
npm install
npm run dev
```

Frontend chạy tại:

```
http://localhost:5173
```

---

## 🔗 Kết nối Frontend ↔ Backend

Frontend gọi API từ Backend qua:

```
http://localhost:3000
```

Ví dụ:

```js
fetch("http://localhost:3000/api/hello")
```

---

## 🧪 Test nhanh

1. Chạy Docker PostgreSQL
2. Chạy Backend
3. Chạy Frontend
4. Mở trình duyệt: `http://localhost:5173`
5. Kiểm tra dữ liệu trả về từ Backend

---

## 📌 Ghi chú

* Nếu Backend chạy **trong Docker** → `DB_HOST=postgres`
* Nếu Backend chạy **ngoài Docker** → `DB_HOST=localhost`
* Port DB ngoài máy: `5433`
* Port DB trong Docker: `5432`

---

## 🛠️ Troubleshooting nhanh
- **Lỗi Prisma (engine/adapter):** kiểm tra `PRISMA_CLIENT_ENGINE_TYPE` trong `.env` (ví dụ `binary`) → chạy `npx prisma generate`. Nếu runtime yêu cầu `adapter`, cài `npm install @prisma/adapter-pg`.
- **Server không khởi động:** kiểm tra console logs, chạy `npm run build` để xem lỗi TypeScript, đảm bảo `.env` có `PORT` và `DATABASE_URL` đúng.
- **PowerShell:** Dùng `;` để nối nhiều lệnh (ví dụ: `cd backend; npm run dev`) — `&&` có thể không hoạt động ở PowerShell.

---

## ✨ Gợi ý nâng cao
- Tạo script `setup.ps1` để tự động: cài dependencies, tạo `.env.example`, `npx prisma generate`, `npm run build`.
- Làm seed idempotent (upsert theo `name`) để tránh chèn trùng khi chạy seed nhiều lần.
- Thêm Postman collection: `backend/postman_collection.json` (đã có sẵn).

---

Nếu bạn muốn, tôi có thể **TỰ ĐỘNG HÓA** việc thiết lập (tạo file `setup.ps1`) hoặc **viết importer CSV/JSON** để import dữ liệu thật (upsert). Chọn 1, tôi sẽ làm tiếp.

```
