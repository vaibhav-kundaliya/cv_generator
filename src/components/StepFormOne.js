import React, { useState } from "react";
import { Input, Form, Flex, Space, Button, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function StepFormOne() {
    return (
        <>
            <Form.Item label="Name" name="name">
                <Input placeholder="Name of developer"></Input>
            </Form.Item>
            <Form.Item label="Profile" name="profile">
                <Input placeholder="Developer profile eg. Fornt-end, Beck-end etc."></Input>
            </Form.Item>
            <Form.Item label="Summary">
                <ReactQuill></ReactQuill>
            </Form.Item>
            <Form.Item label="Technical Skills">
                <ReactQuill></ReactQuill>
            </Form.Item>
            <Form.Item label="Projects">
                <ReactQuill></ReactQuill>
            </Form.Item>
        </>
    );
}
