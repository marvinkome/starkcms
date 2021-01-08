import Head from "next/head"
import styles from "./layout.module.scss"

import { Topbar } from "./topbar"
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
