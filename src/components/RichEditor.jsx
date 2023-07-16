import { createReactEditorJS } from "react-editor-js"
import React, { useCallback, useRef } from "react"
import { EDITOR_JS_TOOLS } from "./../constants/tool"
import { FloatButton } from "antd"
import { mapDispatchToProps, mapStateToProps } from "./rdSidebar"
import { connect } from "react-redux"

const RichEditor = ({ SetContent, value }) => {
    const ReactEditorJS = createReactEditorJS()
    const editorCore = useRef(null)

    const handleInitialize = useCallback((instance) => {
        editorCore.current = instance
    }, [])

    const handleSave = useCallback(async () => {
        const content = await editorCore.current.save()
        SetContent(content)
        console.log()
    }, [])

    return (
        <div>
            {" "}
            <ReactEditorJS
                onInitialize={handleInitialize}
                tools={EDITOR_JS_TOOLS}
                defaultValue={value}
            />{" "}
            <FloatButton
                onClick={() => {
                    handleSave()
                }}
            />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RichEditor)
