import { ReactNode } from "react"
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa"
import Link from "next/link"

export default function Layout({ children }: { children: ReactNode }) {
    return <main className="bg-white p-7 rounded-md gap-5">
        <Link href={'/'} className="absolute"><FaArrowLeft/></Link>
        { children }
    </main>
}
