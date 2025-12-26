# Source-Base-VH Frontend 🚀

Frontend demo (Vite + React + TypeScript) được thiết kế làm ví dụ cho cấu trúc một SPA nhỏ, dễ sửa đổi để tham khảo hoặc phát triển tiếp.

## 🚀 Khởi động nhanh

1. Cài đặt phụ thuộc:

```bash
npm install
```

2. Chạy môi trường phát triển:

```bash
npm run dev
```

3. Build để deploy:

```bash
npm run build
npm run preview
```

## 🗂️ Cấu trúc thư mục (tóm tắt)

Dưới là các thư mục chính trong `frontend` và ý nghĩa của chúng:

- `index.html` — entry HTML của ứng dụng.
- `src/` — mã nguồn chính của ứng dụng.

  - `main.tsx` — điểm khởi chạy React, mount app.
  - `index.css` — các style toàn cục và helper class (`.card`, `.btn`, ...).
  - `router.tsx` — định nghĩa các route (React Router).
  - `core/`
    - `config/` — cấu hình chung (ví dụ axios, storage helpers).
    - `services/` — API clients và fake/mock APIs (ví dụ `mockApi.ts`).
    - `types/` — định nghĩa TypeScript types như `Product`, `Blog`.
    - `hooks/` — custom hooks dùng chung (auth, fetchers, ...).
  - `components/` — các component tái sử dụng (ví dụ `Header.tsx`, `ProductCard.tsx`).
  - `pages/` — các trang chính của app (Product, Home, Blog, Authenticate,...):
    - `Product/` — chứa `List.tsx`, `Detail.tsx`, `Edit.tsx` (UI sản phẩm, CRUD demo).
  - `assets/` — ảnh, svg, fonts, v.v.

- `public/` — tài nguyên tĩnh sẽ copy vào build (nếu có).

## 💡 Ghi chú quan trọng

- This frontend can talk to a real backend: configure `VITE_API_BASE` (see `.env.example`) to point to your backend (include `/api` suffix). Example: `VITE_API_BASE=http://localhost:3000/api`.
- The backend in this workspace exposes `GET /products`, `POST /products`, `GET /blogs` and `POST /blogs`. **Updating or deleting items is not supported by the backend**, so the UI will show a notice or disable those actions.
- If the backend runs on a different port, set `VITE_API_BASE` accordingly in your `.env` file.
- Fake backend: `src/core/services/mockApi.ts` still exists for local UI-only testing (it keeps demo data in `localStorage`).
- Product demo hiện hỗ trợ `image`, `price`, `description`, và có sample images từ `picsum.photos`.
- CSS dùng kết hợp class helper (`.card`, `.btn`) và vài style component-specific trong `src/index.css` để giữ giao diện nhất quán.

## 🧪 Phát triển & Test

- Mở `src/pages/*` và `src/components/*` để chỉnh UI.
- Thêm unit tests hoặc storybook theo nhu cầu (project hiện chưa có sẵn cấu hình test).

## ✅ Gợi ý cải tiến tiếp theo

- Thêm pagination hoặc infinite scroll cho danh sách sản phẩm.
- Thêm filters (category, price range) và sorting nâng cao.
- Kết nối backend thật (REST/GraphQL) và chuyển mockApi sang client thật.

---

Nếu bạn muốn, tôi có thể: thêm phần hướng dẫn dev chi tiết, tạo script seed dữ liệu, hoặc cấu hình testing (Vitest/React Testing Library). Chọn nhiệm vụ tiếp theo bạn muốn làm nhé! ✨
