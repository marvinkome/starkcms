import Link from "next/link"
import classnames from "classnames"
import styles from "./sidebar.module.scss"
import { MdColorLens, MdEqualizer, MdGraphicEq, MdLibraryBooks } from "react-icons/md"

export function Sidebar() {
    return (
        <aside className={styles.admin__sidebar}>
            <Link href="/admin">
                <a className={styles.sidebar_logo}>
                    <img src="/admin/logo.svg" width="100px" alt="logo" />
                </a>
            </Link>

            <Link href="/admin/new-post">
                <a className={classnames(styles.btn)}>New Post</a>
            </Link>

            <div>
                <Link href="/admin">
                    <a className={styles.sidebar_title}>
                        <MdEqualizer className={styles.icon} />
                        Overview
                    </a>
                </Link>

                <Link href="/admin/posts">
                    <a className={styles.sidebar_title}>
                        <MdLibraryBooks className={styles.icon} />
                        Posts
                    </a>
                </Link>

                <Link href="/admin/themes">
                    <a className={styles.sidebar_title}>
                        <MdColorLens className={styles.icon} />
                        Themes
                    </a>
                </Link>

                <Link href="/admin/settings">
                    <a className={styles.sidebar_title}>
                        <MdGraphicEq className={styles.icon} />
                        Settings
                    </a>
                </Link>
            </div>
        </aside>
    )
}
