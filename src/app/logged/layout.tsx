import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
    return <main className="relative bg-white rounded-md p-3 w-[80vw] flex flex-col items-center justify-center h-[70vh] shadow-sm">
        { children }
    </main>
}
