import React from "react";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import StepperForm from "./components/stepperForm"

const { Header, Content, Footer, Sider } = Layout;

const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    UserOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));

const App = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Router>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                    >
                        <Menu.Item key="1">
                            <Link to="/">
                                <span>Submit Profile</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/profile-status">
                                <span>Profile Status</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content
                        style={{
                            margin: "24px 16px 0",
                        }}
                    >
                        <div
                            style={{
                                padding: 24,
                                minHeight: "90vh",
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                          <Routes>
                            <Route path="/" element={<StepperForm />}/>
                            <Route path="/profile-status" />
                          </Routes>
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: "center",
                        }}
                    >
                        Ant Design ©{new Date().getFullYear()} Created by Ant
                        UED
                    </Footer>
                </Layout>
            </Layout>
        </Router>
    );
};
export default App;
