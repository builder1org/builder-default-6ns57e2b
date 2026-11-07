import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "عطرخانه | فروشگاه عطر",
  description: "فروشگاه مینیمال عطر و ادکلن اصل — انتخابی برای هر موقعیت",
};

export const viewport = {
  themeColor: "#0c0b0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.variable}>{children}</body>
    </html>
  );
}
