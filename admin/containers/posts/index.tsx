import styles from "./posts.module.scss"
import { MdSearch } from "react-icons/md"
import { Layout } from "admin/components/layout"
import { PostCard } from "./post-card"

export function Posts() {
    return (
        <Layout>
            <section>
                <div className={styles.page_header}>
                    <h2>All Posts</h2>

                    <div className={styles.nav_lists}>
                        <form className={styles.nav_form}>
                            {" "}
                            <MdSearch className={styles.search_icon} />
                            <input
                                className={styles.nav_search}
                                type="text"
                                placeholder="Search posts"
                            />
                        </form>
                    </div>
                </div>

                <div className={styles.page_body}>
                    <PostCard image="/admin/drone.jpeg" title="5 ways to drive a drone" />
                    <PostCard image="/admin/camera.jpeg" title="How to write a resume" />
                    <PostCard
                        image="/admin/laptop.jpeg"
                        title="5 tips to get into cinematography"
                    />
                    <PostCard image="/admin/laptop.jpeg" title="How to write a resume" />
                    <PostCard image="/admin/drone.jpeg" title="5 ways to drive a drone" />
                    <PostCard
                        image="/admin/camera.jpeg"
                        title="5 tips to get into cinematography"
                    />
                </div>
            </section>
        </Layout>
    )
}
