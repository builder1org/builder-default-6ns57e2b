const products = [
  {
    id: 1,
    name: "شبِ ابریشم",
    note: "چوب صندل، وانیل، عنبر",
    price: "۲٬۴۵۰٬۰۰۰",
  },
  {
    id: 2,
    name: "مه صبح",
    note: "گل رز، ترنج، مشک",
    price: "۱٬۹۸۰٬۰۰۰",
  },
  {
    id: 3,
    name: "طلای بی‌صدا",
    note: "عود، زعفران، چرم",
    price: "۳٬۲۰۰٬۰۰۰",
  },
  {
    id: 4,
    name: "نسیم ساحل",
    note: "نمک دریا، سدر، لیمو",
    price: "۱٬۶۵۰٬۰۰۰",
  },
];

export function ProductGrid() {
  return (
    <section id="products" className="section products">
      <div className="section__head">
        <h2 className="section__title">منتخب فصل</h2>
        <p className="section__subtitle">چند پیشنهاد برای شروع</p>
      </div>
      <ul className="product-grid">
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <div className="product-card__visual" aria-hidden="true">
              <span className="product-card__bottle" />
            </div>
            <div className="product-card__body">
              <h3 className="product-card__name">{product.name}</h3>
              <p className="product-card__note">{product.note}</p>
              <p className="product-card__price">
                <span className="product-card__amount">{product.price}</span>
                <span className="product-card__currency">تومان</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
