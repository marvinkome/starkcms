import Link from "next/link"
import classnames from "classnames"
import styles from "./sidebar.module.scss"

export function Sidebar() {
    return (
        <aside className={styles.admin__sidebar}>
            <Link href="/admin">
                <a className={styles.sidebar_logo}>
                    <img src="/admin/logo.svg" width="100px" alt="logo" />
                </a>
            </Link>

            <button className={classnames(styles.btn)}>New Post</button>
        </aside>
    )
}
