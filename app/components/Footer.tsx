export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">عطرخانه</p>
          <p className="site-footer__tagline">عطر اصل، تجربهٔ مینیمال</p>
        </div>
        <div className="site-footer__contact">
          <p>تماس: ۰۲۱-۱۲۳۴۵۶۷۸</p>
          <p>
            <a href="mailto:hello@atrhkhane.example">hello@atrhkhane.example</a>
          </p>
        </div>
      </div>
      <p className="site-footer__copy">© {new Date().getFullYear()} عطرخانه</p>
    </footer>
  );
}
