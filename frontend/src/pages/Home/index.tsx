import { Link } from 'react-router-dom';
import Header from '../../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-rose-50 to-amber-50">
      <Header />

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        {/* Hero: landing trang bán hoa */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-600 ring-1 ring-inset ring-rose-200">
              Giao hoa tươi trong ngày • Miễn phí thiệp chúc
            </span>

            <h1 className="text-balance text-3xl font-bold tracking-tight text-rose-900 sm:text-4xl md:text-5xl">
              Gửi <span className="text-rose-500">hoa tươi</span>, gửi{' '}
              <span className="text-emerald-500">lời yêu thương</span>.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-rose-600 sm:text-base">
              Chọn nhanh những bó hoa xinh cho sinh nhật, kỷ niệm, cưới hỏi hay đơn giản chỉ để nói
              “cảm ơn”. Tất cả được quản lý và hiển thị từ backend sản phẩm & blog hiện tại.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
              >
                Đặt hoa ngay
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50"
              >
                Xem bộ sưu tập
              </Link>
              <Link
                to="/blogs"
                className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-rose-50/70 px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-100"
              >
                Đọc cẩm nang về hoa
              </Link>
            </div>

            <div className="grid gap-3 text-xs text-rose-500 sm:grid-cols-3">
              <div className="rounded-xl bg-white/80 p-3 shadow-sm">
                <div className="font-semibold text-rose-700">Hoa sinh nhật</div>
                <p className="mt-1 text-[11px] text-rose-500">
                  Những bó hoa tươi tắn cho ngày đặc biệt của người bạn yêu.
                </p>
              </div>
              <div className="rounded-xl bg-white/80 p-3 shadow-sm">
                <div className="font-semibold text-rose-700">Hoa cưới</div>
                <p className="mt-1 text-[11px] text-rose-500">
                  Tông màu pastel nhẹ nhàng cho lễ cưới, hỏi, kỷ niệm.
                </p>
              </div>
              <div className="rounded-xl bg-white/80 p-3 shadow-sm">
                <div className="font-semibold text-rose-700">Hoa chúc mừng</div>
                <p className="mt-1 text-[11px] text-rose-500">
                  Kệ hoa & bó hoa trang trọng cho khai trương, thăng chức, tốt nghiệp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section sản phẩm nổi bật */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-rose-900 sm:text-2xl">
                Bó hoa bán chạy
              </h2>
              <p className="mt-1 text-sm text-rose-500">
                Những lựa chọn được yêu thích nhất từ bộ sưu tập của chúng tôi
              </p>
            </div>
            <Link
              to="/products"
              className="hidden text-sm font-medium text-rose-600 hover:text-rose-700 sm:inline-block"
            >
              Xem tất cả →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md border border-rose-100">
              <div className="mb-2 h-32 overflow-hidden rounded-xl bg-gradient-to-br from-rose-100 to-amber-50">
                <div className="flex h-full items-center justify-center text-4xl">🌹</div>
              </div>
              <div className="text-sm font-semibold text-rose-800">Hoa sinh nhật pastel</div>
              <p className="mt-1 text-xs text-rose-500">
                Tông hồng kem, phù hợp tặng bạn bè, người yêu. Kèm thiệp chúc mừng.
              </p>
              <div className="mt-2 text-sm font-semibold text-rose-500">Từ $35.00</div>
            </div>

            <div className="group rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md border border-rose-100">
              <div className="mb-2 h-32 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-100 to-amber-50">
                <div className="flex h-full items-center justify-center text-4xl">🌻</div>
              </div>
              <div className="text-sm font-semibold text-rose-800">Kệ hoa khai trương</div>
              <p className="mt-1 text-xs text-rose-500">
                Thiết kế trang trọng cho cửa hàng, công ty. Giao trong ngày tại nội thành.
              </p>
              <div className="mt-2 text-sm font-semibold text-rose-500">Từ $85.00</div>
            </div>

            <div className="group rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md border border-rose-100">
              <div className="mb-2 h-32 overflow-hidden rounded-xl bg-gradient-to-br from-rose-100 to-pink-50">
                <div className="flex h-full items-center justify-center text-4xl">💐</div>
              </div>
              <div className="text-sm font-semibold text-rose-800">Hoa cưới cầm tay</div>
              <p className="mt-1 text-xs text-rose-500">
                Nhẹ nhàng, tinh tế cho ngày trọng đại. Tùy chỉnh theo yêu cầu.
              </p>
              <div className="mt-2 text-sm font-semibold text-rose-500">Từ $120.00</div>
            </div>
          </div>
        </section>

        {/* Section lợi ích / dịch vụ */}
        <section className="rounded-2xl border border-rose-100 bg-white/80 p-6 sm:p-8">
          <h2 className="mb-6 text-center text-xl font-semibold text-rose-900 sm:text-2xl">
            Tại sao chọn VH Flowers?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-2xl">
                🚚
              </div>
              <div className="text-sm font-semibold text-rose-800">Giao nhanh</div>
              <p className="mt-1 text-xs text-rose-500">Trong ngày tại nội thành</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                🌸
              </div>
              <div className="text-sm font-semibold text-rose-800">Hoa tươi</div>
              <p className="mt-1 text-xs text-rose-500">Chọn lọc từ vườn địa phương</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl">
                💌
              </div>
              <div className="text-sm font-semibold text-rose-800">Thiệp miễn phí</div>
              <p className="mt-1 text-xs text-rose-500">Kèm lời chúc viết tay</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-2xl">
                ✨
              </div>
              <div className="text-sm font-semibold text-rose-800">Tùy chỉnh</div>
              <p className="mt-1 text-xs text-rose-500">Theo yêu cầu riêng của bạn</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 border-t border-rose-100 pt-6 pb-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <div className="text-sm font-semibold text-rose-800">VH Flowers</div>
              <p className="mt-1 text-xs text-rose-500">
                © {new Date().getFullYear()} VH Flowers. Giao hoa tươi toàn quốc.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-rose-500">
              <Link to="/products" className="hover:text-rose-600">
                Sản phẩm
              </Link>
              <Link to="/blogs" className="hover:text-rose-600">
                Blog
              </Link>
              <span className="text-rose-300">•</span>
              <span className="text-rose-400">Liên hệ: info@vhflowers.com</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
