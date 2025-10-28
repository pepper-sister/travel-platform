import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const 철수의폰트 = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--철수의폰트변수",
  weight: "100 900",
});
const 글로벌폰트 = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--글로벌폰트변수",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "철수의 홈페이지",
  description: "반갑습니다. 철수의 홈페이지에 오신 것을 환영합니다!",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={`${철수의폰트.variable} ${글로벌폰트.variable}`}>
        <div>===========여기위는 레이아웃입니다===========</div>
        {props.children}
        <div>===========여기아래는 레이아웃입니다===========</div>
      </body>
    </html>
  );
}
