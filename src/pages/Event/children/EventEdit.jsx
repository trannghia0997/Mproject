import { UploadOutlined } from "@ant-design/icons"
import { Button, Form, Space, Upload, DatePicker, Input, Image } from "antd"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import RichEditor from "../../../components/RichEditor"
import events from "../../../data/event"

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
}

const onFinish = (values) => {
    console.log("Received values of form: ", values)
}


const EventEdit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const handleCancelClick = () => {
        navigate("/event", { replace: true })
    }

    const event = events[parseInt(id)]
    return (
        <div className="flex flex-col justify-center">
        <div className="flex justify-center">
            <div className="justify-center flex flex-col w-4/5">
                <Form.Item label="Title" name="eventtitle" className=" w-3/5">
                    <Input defaultValue={event.name} />
                </Form.Item>

                <Form.Item label="Time">
                    <DatePicker />
                </Form.Item>

                <Form.Item label="Banner">
                    <Upload>
                        <Button icon={<UploadOutlined />}>
                            Click to Upload
                        </Button>
                    </Upload>
                    <Image src={event.image} />
                </Form.Item>
            </div>
        </div>

        <div className="flex justify-center">
            <div className="bg-white w-4/5 rounded-3xl p-10">
                <RichEditor value={event.content} />
            </div>
        </div>

        <div className="flex my-10 w-4/5 justify-end gap-10 mx-14">
            <button className="hover:scale-110 w-28 shadow-xl relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Update</span>
            </button>
            <button
                onClick={handleCancelClick}
                className="relative hover:scale-110 shadow-md rounded px-5 py-2.5 overflow-hidden group bg-white hover:bg-gradient-to-r  text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 transition-all ease-out duration-300"
            >
                <span className="relative text-black">Cancel</span>
            </button>
        </div>
    </div>
        // <div>
        //     <Form
        //         name="validate_other"
        //         {...formItemLayout}
        //         onFinish={onFinish}
        //         size="large"
        //         style={{
        //             width: "100%",
        //             //backgroundColor: "black",
        //         }}
        //         layout="vertical"
        //         className=""
        //     >
        //         <Form.Item
        //             label="Title"
        //             name="eventtitle"
        //             className=""
        //             rules={[
        //                 {
        //                     required: true,
        //                     message: "Please input event title",
        //                 },
        //             ]}
        //         >
        //             <Input defaultValue={event.name} />
        //         </Form.Item>

        //         <Form.Item label="Time">
        //             <RangePicker />
        //         </Form.Item>

        //         <Form.Item label="Banner">
        //             <Upload>
        //                 <Button icon={<UploadOutlined />}>
        //                     Click to Upload
        //                 </Button>
        //             </Upload>
        //             <Image src={event.image} />
        //         </Form.Item>

        //         <Form.Item
        //             wrapperCol={{
        //                 span: 12,
        //                 offset: 6,
        //             }}
        //         >
        //             <Space size="large">
        //                 <button className=" w-28 shadow-xl relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
        //                     <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        //                     <span className="relative">Add</span>
        //                 </button>
        //                 <button
        //                     onClick={handleCancelClick}
        //                     className="relative shadow-md rounded px-5 py-2.5 overflow-hidden group bg-white hover:bg-gradient-to-r  text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 transition-all ease-out duration-300"
        //                 >
        //                     <span className="relative text-black">Cancel</span>
        //                 </button>
        //             </Space>
        //         </Form.Item>
        //     </Form>
        //     <div className="flex justify-center">
        //         <div className="bg-white w-4/5 rounded-3xl p-10">
        //             <RichEditor value={event.content} />
        //         </div>
        //     </div>
        // </div>
    )
}

export default EventEdit
