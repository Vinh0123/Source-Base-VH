
---

```md
# My Project – Frontend & Backend

Dự án bao gồm **Frontend**, **Backend** và **PostgreSQL** được quản lý trong cùng một repository.  

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

## 🧠 Backend – Cách chạy

```bash
cd backend
npm install
npm run dev
```

Backend chạy mặc định tại:

```
http://localhost:3000
```

Ví dụ API test:

```
GET http://localhost:3000/api/hello
```

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


```
