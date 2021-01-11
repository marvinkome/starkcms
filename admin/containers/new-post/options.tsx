import styles from "./new-post.module.scss"

export function PostOptions() {
    return (
        <div className={styles.post_options}>
            <div className={styles.publish_box}>
                <p className={styles.status}>Last edited on 13th November 2020</p>

                <div className={styles.action_buttons}>
                    <button className={styles.btn}>Publish</button>
                </div>
            </div>
        </div>
    )
}
