import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../sass/global.scss"
import { APIProvider } from "@/contexts/api"

/* CONTEXT */

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "JOJO'S RPG",
    description: "Aplicativo para gerir os personagens",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <APIProvider>
                    {children}
                </APIProvider>
            </body>
        </html>
    )
}
