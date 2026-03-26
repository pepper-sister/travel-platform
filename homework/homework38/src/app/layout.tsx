import type { Metadata } from "next";
import "./globals.css";
import ApolloSetting from "@/commons/settings/apollo-setting";
import Layout from "@/commons/layout";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Trip Talk",
  description: "여행 플랫폼",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <ApolloSetting>
          <Layout>{children}</Layout>
        </ApolloSetting>
      </body>
    </html>
  );
}
