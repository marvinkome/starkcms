import Link from "next/link"

export function Sidebar() {
    return (
        <aside className="flex-col relative z-20 hidden sm:flex" style={{ gridArea: "sidebar" }}>
            <Link href="/admin">
                <a className="self-center">
                    <img src="/logo.svg" width="100px" alt="logo" className="mt-4 mb-12" />
                </a>
            </Link>

            <button className="btn btn-sm">New Post</button>
        </aside>
    )
}
