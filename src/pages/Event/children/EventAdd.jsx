import { UploadOutlined } from "@ant-design/icons"
import { Button, Form, Upload, DatePicker, Input } from "antd"
import React, { useCallback, useRef } from "react"
import { useNavigate } from "react-router-dom"
import RichEditor from "../../../components/RichEditor"
import { useForm } from "antd/es/form/Form"

const EventAdd = () => {
    const navigate = useNavigate()
    const richEditor = useRef(null)
    const [form] = useForm()

    const handleCancelClick = () => {
        navigate("/event", { replace: true })
    }

    const handleSave = useCallback(async () => {
        const content = await richEditor.current.save()
        const data = await form.validateFields()
        data.content = content
        console.log(data)
    }, [form])

    return (
        <div>
            <div className="flex w-full justify-between absolute right-[1px] mt-[-98px] bg-white h-16 rounded-xl items-center">
                <div className="mx-10 font-serif text-xl text">
                    Thêm Sự Kiện
                </div>
                <button
                    onClick={handleCancelClick}
                    className=" text-sky-700 mx-10"
                >
                    Back
                </button>
            </div>
            <div className="flex flex-col justify-center mt-7">
                <div className="flex justify-center">
                    <div className="justify-center flex flex-col w-4/5">
                        <Form form={form}>
                            <Form.Item
                                label="Title"
                                name="name"
                                className=" w-3/5"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item label="Time" name="time">
                                <DatePicker />
                            </Form.Item>

                            <Form.Item label="Banner" name="image">
                                <Upload>
                                    <Button icon={<UploadOutlined />}>
                                        Click to Upload
                                    </Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item name="content">
                                <div className="flex justify-center">
                                    <div className="bg-white w-4/5 rounded-3xl p-10">
                                        <RichEditor editorCore={richEditor} />
                                    </div>
                                </div>
                            </Form.Item>

                            <Form.Item>
                                <div className="flex my-10 w-4/5 justify-end gap-10 mx-14">
                                    <button
                                        onClick={handleSave}
                                        className="hover:scale-110 w-28 shadow-xl relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                                    >
                                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                        <span className="relative">Add</span>
                                    </button>
                                    <button
                                        onClick={handleCancelClick}
                                        className="relative hover:scale-110 shadow-md rounded px-5 py-2.5 overflow-hidden group bg-white hover:bg-gradient-to-r  text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 transition-all ease-out duration-300"
                                    >
                                        <span className="relative text-black">
                                            Cancel
                                        </span>
                                    </button>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventAdd
