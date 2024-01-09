// resources/js/layouts/DashboardLayout.jsx
import React from "react";
import { Layout } from "antd";
import Sidebar from "@/Components/Sidebar";
import Content from "@/Components/Content";

const { Header, Footer, Sider, Content: AntContent } = Layout;

const DashboardLayout = ({ children, sidebarLinks }) => (
    <Layout style={{ minHeight: "100vh" }}>
        <Sider width={200} theme="dark">
            <Sidebar links={sidebarLinks} />
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <AntContent style={{ margin: "24px 16px 0", overflow: "initial" }}>
                <Content>{children}</Content>
            </AntContent>
            <Footer style={{ textAlign: "center" }}>Your Footer</Footer>
        </Layout>
    </Layout>
);

export default DashboardLayout;
