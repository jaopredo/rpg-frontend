import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Errors from "@/partials/Errors"

/* ESTILOS */
import "../sass/global.scss"

/* CONTEXT */
import ContextsProvider from "@/contexts"

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
                <ContextsProvider>
                    <div id="interface" className="bg-gray-600 flex items-center justify-center flex-col min-h-[100vh]">
                        {children}
                    </div>
                </ContextsProvider>
                <Errors/>
            </body>
        </html>
    )
}
