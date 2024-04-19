import type { Metadata } from 'next'
import { Providers } from '@/app/providers'
import { Inter } from 'next/font/google'
import "@/styles/globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '이주형, Lee Ju Hyeong',
  description: 'Generalist Software Engineer',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <body className="font-normal break-keep selection:bg-PRIMARY_LIGHT selection:dark:text-BLACK text-BLACK dark:bg-BLACK dark:text-white">
            <Providers>{children}</Providers>
        </body>

    );
}

