import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-logo">
          عطرخانه
        </Link>
        <nav className="site-nav" aria-label="منوی اصلی">
          <Link href="#products">محصولات</Link>
          <Link href="#about">درباره ما</Link>
          <Link href="#contact">تماس</Link>
        </nav>
      </div>
    </header>
  );
}
