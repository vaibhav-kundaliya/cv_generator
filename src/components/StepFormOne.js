import React, { useState } from "react";
import { Input, Form, Flex, Space, Button, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function StepFormOne({sections, setSection }) {
    const handleSectionDesc = (event, index) => {
        console.log(event, sections.length, index)
        if (sections.length === index) {
            const value = sections;
            value.push(event);
            setSection([...value]);
        }
        if (sections.length > index) {
            const value = sections;
            value[index] = event;
            setSection([...value]);
        }
    };

    return (
        <>
            <Form.Item label="Name" name="name">
                <Input placeholder="Name of developer"></Input>
            </Form.Item>
            <Form.Item label="Profile" name="profile">
                <Input placeholder="Developer profile eg. Fornt-end, Beck-end etc."></Input>
            </Form.Item>
            <Form.List name="sections">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <div
                                key={key}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginBottom: 38,
                                }}
                            >
                                <div style={{textAlign:"left"}}>
                                    <span style={{marginRight:10}}>Section</span>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </div>
                                <Form.Item
                                    {...restField}
                                    name={[name, "section_title"]}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Add section title",
                                        },
                                    ]}
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Input placeholder="Section title" />
                                </Form.Item>
                                <ReactQuill
                                    theme="snow"
                                    onChange={(event) =>
                                        handleSectionDesc(event, key)
                                    }
                                    value={sections[key]}
                                />
                            </div>
                        ))}
                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                            >
                                Add field
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </>
    );
}
