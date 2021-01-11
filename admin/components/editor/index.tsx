import React from "react"
import ReactQuill from "react-quill"

import "react-quill/dist/quill.snow.css"

export function Editor(props) {
    return <ReactQuill {...props} />
}
