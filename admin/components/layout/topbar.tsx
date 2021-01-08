import React from "react"
import Link from "next/link"
import styles from "./topbar.module.scss"
import { MdAccountCircle, MdHeadsetMic, MdLaunch, MdNotificationsNone } from "react-icons/md"

export function Topbar() {
    return (
        <header className={styles.admin__topbar}>
            <div className={styles.topbar_links}>
                <div className={styles.inner_content}>
                    <Link href="/">
                        <a className={styles.item}>
                            <MdLaunch className={styles.icon} />
                            Visit site
                        </a>
                    </Link>

                    <Link href="/">
                        <a className={styles.item}>
                            <MdHeadsetMic className={styles.icon} />
                            Help
                        </a>
                    </Link>
                </div>

                {/* notif content */}
                <div className={styles.notification_content}>
                    <Link href="/">
                        <a className={styles.notif_box} href="/">
                            <MdNotificationsNone className={styles.icon} />
                            <i className={styles.notif_icon} />
                        </a>
                    </Link>

                    <Link href="/">
                        <a className={styles.profile_link}>Howdy, Marvin</a>
                    </Link>

                    <MdAccountCircle className={styles.icon} />
                </div>
            </div>
        </header>
    )
}
