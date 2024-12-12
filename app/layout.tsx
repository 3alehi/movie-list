'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from '@/components/Footer';
import StartFree from '@/components/StartFree';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/context/AuthContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className="bg-black text-white font-Manrope">
        <QueryClientProvider client={queryClient}>
        <AuthProvider>

          <Navbar />
          {children}
          <div className='container mx-auto'>
            <StartFree />

          </div>
          <Footer />
          </AuthProvider>

        </QueryClientProvider>
        <Toaster position='bottom-right' />

      </body>
    </html>
  );
}
