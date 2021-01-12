import { Layout } from "admin/components/layout"
import styles from "./settings.module.scss"

export function Settings() {
    return (
        <Layout>
            <section>
                <div className={styles.page_header}>
                    <h2>Website Settings</h2>
                </div>

                <div className={styles.page_content}>
                    <h3>General Settings</h3>

                    <div>{/* oh my form */}</div>
                </div>
            </section>
        </Layout>
    )
}
