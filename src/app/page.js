// دیتای فرضی محصولات برای تست
const MOCK_PRODUCTS = [
  { id: 1, title: "گوشی موبایل پرچمدار", price: "۴۵,۰۰۰,۰۰۰ تومان", image: "📱" },
  { id: 2, title: "ساعت هوشمند نسل جدید", price: "۸,۵۰۰,۰۰۰ تومان", image: "⌚" },
  { id: 3, title: "هدفون بی‌سیم نویز کنسلینگ", price: "۶,۲۰۰,۰۰۰ تومان", image: "🎧" },
  { id: 4, title: "لپ‌تاپ ظریف و قدرتمند", price: "۶۸,۰۰۰,۰۰۰ تومان", image: "💻" },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* بنر اصلی شیک */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-12 mb-12 flex flex-col justify-center min-h-[250px]">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">سادگی، زیبایی در خرید است</h1>
        <p className="text-gray-400 text-sm md:text-base max-w-md">مجموعه‌ای از بهترین و باکیفیت‌ترین محصولات هوشمند با طراحی مینیمال.</p>
      </div>

      {/* لیست محصولات */}
      <h2 className="text-lg font-bold mb-6 border-r-4 border-red-500 pr-2">جدیدترین محصولات</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs hover:shadow-md transition cursor-pointer flex flex-col justify-between">
            <div className="bg-gray-50 rounded-lg aspect-square flex items-center justify-center text-5xl mb-4">
              {product.image}
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">{product.title}</h3>
              <p className="text-sm font-bold text-gray-950 text-left">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}