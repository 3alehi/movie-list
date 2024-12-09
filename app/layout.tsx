'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ایجاد یک QueryClient
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className="bg-black text-white font-Manrope">
        {/* تنظیم QueryClientProvider */}
        <QueryClientProvider  client={queryClient}>
          <Navbar />
          {children}
          <Footer/>
        </QueryClientProvider>
      </body>
    </html>
  );
}
