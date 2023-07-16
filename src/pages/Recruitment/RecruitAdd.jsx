import React from "react"
import DynamicFormItem from "./DynamicFormItem"
import { Button, Form, Input, Row, Col, Breadcrumb } from "antd"
import { useNavigate } from "react-router-dom"

const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 16 }, // Adjust the span value to make the inputs wider
        lg: { span: 16 }, // Adjust the span value to make the inputs wider
    },
}

const RecruitAdd = () => {
    const onFinish = (values) => {
        console.log(values)
    }
    const navigate = useNavigate()
    const handleCancelClick = () => {
        navigate("/recruitment", { replace: true })
    }

    return (
        <div className="">
            <div className="flex w-full absolute right-[1px] mt-[-85px] bg-white h-16 rounded-xl items-center justify-between">
                <div className="ml-10 font-serif text-xl text">Add Recruitment</div>
                <button onClick={handleCancelClick} className=" text-sky-700 mx-10">Back</button>
            </div>
            <Breadcrumb className="my-4"
                items={[
                    {
                        title: <div onClick={handleCancelClick} className=" cursor-pointer">Recruitment</div>,
                    },
 
                    {
                        title: "Add a Reacruitment",
                    },
                ]}
            />
            <Form
                {...formItemLayoutWithOutLabel}
                onFinish={onFinish}
                labelCol={{ flex: "110px" }}
                labelAlign="left"
                labelWrap
            >
                <div className="bg-white p-16 flex flex-col rounded-3xl">
                    <div className="text-zinc-900 text-3xl font-serif mb-11">
                        Thông tin tuyển dụng
                    </div>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item label="Name">
                                <Input className="w-full" />
                            </Form.Item>
                            <Form.Item label="Position">
                                <Input className="w-full" />
                            </Form.Item>
                            <Form.Item label="Language">
                                <Input className="w-full" />
                            </Form.Item>
                            <Form.Item label="City">
                                <Input className="w-full" />
                            </Form.Item>
                            <Form.Item label="Salary">
                                <Input className="w-full" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item label="Quantity">
                                <Input className="w-full" />
                            </Form.Item>
                            <Form.Item label="Enrollment">
                                <Input className="w-full" />
                            </Form.Item>
                            <Form.Item label="Sex">
                                <Input className="w-full" />
                            </Form.Item>
                            <Form.Item label="Experience">
                                <Input className="w-full" />
                            </Form.Item>
                            <Form.Item label="Location">
                                <Input className="w-full" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <DynamicFormItem
                        initialValue={["aasasa", "sdasd"]}
                        name="detailJob"
                        label="Job Details"
                    />
                    <DynamicFormItem name="requirements" label="Requirements" />
                    <DynamicFormItem name="interest" label="Interests" />
                </div>
                <Form.Item className="">
                    <div className="flex my-10 w-full justify-end gap-10 ml-14">
                        <button className="hover:scale-110 w-28 shadow-xl relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Add</span>
                        </button>
                        <button
                            onClick={handleCancelClick}
                            className="relative hover:scale-110 shadow-md rounded px-5 py-2.5 overflow-hidden group bg-white hover:bg-gradient-to-r  text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 transition-all ease-out duration-300"
                        >
                            <span className="relative text-black">Cancel</span>
                        </button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default RecruitAdd
