import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
    return <main className="bg-white rounded-md w-[95vw] min-h-[90vh] p-3 mt-3 mb-3">
        { children }
    </main>
}
