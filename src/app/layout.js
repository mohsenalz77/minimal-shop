import "./globals.css";

export const metadata = {
  title: "فروشگاه مینیمال",
  description: "یک تجربه خرید ساده و شیک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 text-gray-900">
        {/* هدر مینیمال */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* لوگو و سرچ */}
            <div className="flex items-center gap-8 flex-1">
              <span className="text-xl font-black text-red-500 tracking-wider">MINI.SHOP</span>
              <div className="hidden md:block w-96">
                <input 
                  type="text" 
                  placeholder="جستجو در محصولات..." 
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
            </div>
            {/* دکمه‌های سمت چپ */}
            <div className="flex items-center gap-4">
              <button className="text-sm font-medium hover:text-red-500 transition">ورود / ثبت‌نام</button>
              <div className="h-6 w-[1px] bg-gray-200"></div>
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
                🛒
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">۰</span>
              </</button>
            </div>
          </div>
        </header>

        {/* محتوای صفحات */}
        <main>{children}</main>

        {/* فوتر ساده */}
        <footer className="bg-white border-t border-gray-100 mt-20 py-8 text-center text-sm text-gray-400">
          <p>© ۲۰۲۶ فروشگاه مینیمال. تمامی حقوق محفوظ است.</p>
        </footer>
      </body>
    </html>
  );
}