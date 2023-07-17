import React from "react"
import { connect } from "react-redux"
import { mapDispatchToProps, mapStateToProps } from "../components/rdSidebar"
import {
    VideoCameraOutlined,
    HomeOutlined,
    FireOutlined,
    FileSearchOutlined,
} from "@ant-design/icons"
import { Layout, theme } from "antd"
import { useNavigate } from "react-router-dom"
import IRAContent from "../components/IRALayout/IRAContent"
import IRAHeader from "../components/IRALayout/IRAHeader"
import IRASidebar from "../components/IRALayout/IRASidebar"
import IRAHero from "../components/IRALayout/IRAHero"
import IRABanner from "../components/IRALayout/IRABanner"
import IRAFooter from "../components/IRALayout/IRAFooter"

const items = [
    { key: "/", icon: <HomeOutlined />, label: "Home" },
    { type: "divider" },
    { key: "/event", icon: <FireOutlined />, label: "Event" },
    { key: "/interview", icon: <VideoCameraOutlined />, label: "Interview" },
    { key: "/recruitment", icon: <FileSearchOutlined />, label: "Recruitment" },
]
const IRALayout = ({ collapsed, SetCollapsed, children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    const navigate = useNavigate()

    let href = window.location.href.substring(window.location.origin.length + 1)

    return (
        <Layout className="bg-[#E9ECEF]">
            <IRASidebar
                collapsed={collapsed}
                SetCollapsed={SetCollapsed}
                items={items}
                href={href}
                navigate={navigate}
            />
            <Layout
                className={
                    "bg-[#E9ECEF] transition-all " +
                    (collapsed ? " ml-24" : "ml-[250px]")
                }
            >
                <IRAHeader colorBgContainer={colorBgContainer} />
                <IRAHero />
                <IRAContent>{children}</IRAContent>
            </Layout>
        </Layout>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(IRALayout)
