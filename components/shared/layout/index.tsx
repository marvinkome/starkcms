import Head from "next/head"
import { Topbar } from "./topbar"
import styles from "./layout.module.css"
import { Sidebar } from "./sidebar"

export function Layout(props: { children: any }) {
    return (
        <div className={styles.admin__container}>
            <Head>
                <title>Content Management System | Stark CMS</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Topbar />
            <Sidebar />

            <div style={{ gridArea: "main" }}>{props.children}</div>
        </div>
    )
}
