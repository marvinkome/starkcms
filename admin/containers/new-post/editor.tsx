import styles from "./new-post.module.scss"
import dynamic from "next/dynamic"
import classnames from "classnames"
import { useRef } from "react"

import "react-quill/dist/quill.snow.css"
const Quill = dynamic(() => import("react-quill"), { ssr: false })

export function PostEditor() {
    const mainEditorRef = useRef<HTMLDivElement>()

    return (
        <div className={styles.post_editor}>
            <div className={styles.editor_container}>
                <div
                    ref={mainEditorRef}
                    className={classnames(styles.main_editor, "stark_admin_editor")}
                >
                    <input
                        type="text"
                        placeholder="Add Title"
                        className={classnames(styles.form_input, styles.title_input)}
                    />

                    <Quill
                        bounds={mainEditorRef.current}
                        className={styles.ql_container}
                        placeholder="Start Writing"
                        value=""
                        onChange={() => null}
                    />
                </div>
            </div>
        </div>
    )
}
