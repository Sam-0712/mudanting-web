import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from '@/components/layout/nav-bar';
import { Footer } from '@/components/layout/footer';
import "./globals.css";
import dynamic from 'next/dynamic';
import { LoadingScreen } from '@/components/ui/loading-screen';

// 动态导入AI插件组件
const AiPluginWithNoSSR = dynamic(() => import('@/components/features/ai-chat/AiPlugin'), {
  ssr: false,
  loading: () => null
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "牡丹亭还魂记",
  description: "《牡丹亭还魂记》数字人文项目",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col overflow-x-hidden custom-body-style`}>
        <LoadingScreen />
        <NavBar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        {/* <Footer /> */}
        <AiPluginWithNoSSR enableTextSelection={true} />
      </body>
    </html>
  );
}
