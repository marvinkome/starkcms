import { Layout } from "admin/components/layout"
import { PostEditor } from "./editor"
import { PostOptions } from "./options"
import styles from "./new-post.module.scss"

export function CreatePost() {
    return (
        <Layout>
            <section>
                <div className={styles.page_header}>
                    <h2>Create post</h2>
                </div>

                <div className={styles.page_content}>
                    <PostEditor />
                    <PostOptions />
                </div>
            </section>
        </Layout>
    )
}
