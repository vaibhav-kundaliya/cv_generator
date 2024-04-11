import React, { useState } from "react";
import { Input, Form, Flex, Space, Button, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function StepFormOne() {
    return (
        <>
            <Form.Item
                label="Name"
                name="name"
                
            >
                <Input placeholder="Name of developer"></Input>
            </Form.Item>
            <Form.Item
                label="Profile"
                name="profile"
                
            >
                <Input placeholder="Developer profile eg. Fornt-end, Beck-end etc."></Input>
            </Form.Item>
            <Form.Item label="summary">
                <Form.List name="summary">
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    required={false}
                                    key={field.key}
                                    name={field.name}
                                >
                                    <Flex>
                                        <Input
                                            placeholder="Write something about developer"
                                            style={{
                                                width: "100%",
                                            }}
                                            required
                                        />
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                            style={{ marginLeft: "10px" }}
                                        />
                                    </Flex>
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{
                                        width: "100%",
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    Add point
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form.Item>
        </>
    );
}
