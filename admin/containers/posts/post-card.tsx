import { MdMoreVert } from "react-icons/md"
import { Dropdown } from "admin/components/dropdown"
import Link from "next/link"
import styles from "./posts.module.scss"

export function PostCard({ image, title }: { image: string; title: string }) {
    return (
        <article className={styles.post_card}>
            <div className={styles.post_card_inner}>
                <img src={image} width="100%" alt="Post title" />

                <h3>{title}</h3>

                <p className={styles.post_card_excerpt}>
                    Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit...
                </p>

                <div className={styles.post_card_footer}>
                    <p>last edited on August 20, 2019 at 11:57 AM</p>
                </div>

                {/* dropdown menu */}
                <Dropdown
                    toggle={
                        <div className={styles.dropdown_menu}>
                            <MdMoreVert />
                        </div>
                    }
                >
                    <Link href="/post">
                        <a>View post</a>
                    </Link>

                    <a>Delete post</a>
                </Dropdown>
            </div>
        </article>
    )
}
