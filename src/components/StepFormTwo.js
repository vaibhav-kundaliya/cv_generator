import React from "react";
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Space, Flex  } from 'antd';

export default function StepFormTwo() {
    return (
        <>
            <Form.List name="items">
                {(fields, { add, remove }) => (
                    <div
                        style={{
                            display: "flex",
                            rowGap: 16,
                            flexDirection: "column",
                        }}
                    >
                        {fields.map((field) => (
                            <Card
                                size="small"
                                title={`Skill ${field.name + 1}`}
                                key={field.key}
                                extra={
                                    <CloseOutlined
                                        onClick={() => {
                                            remove(field.name);
                                        }}
                                    />
                                }
                            >
                                <Form.Item
                                    label="Skill"
                                    name={[field.name, "skill"]}
                                >
                                    <Input placeholder="e.g. Client side JS frameworks"/>
                                </Form.Item>

                                {/* Nest Form.List */}
                                <Form.Item label="Technology">
                                    <Form.List name={[field.name, "technology"]}>
                                        {(subFields, subOpt) => (
                                            <Flex
                                                gap="small"
                                                wrap="wrap"
                                            >
                                                {subFields.map((subField) => (
                                                    <Space key={subField.key}>
                                                        <Form.Item
                                                            noStyle
                                                            name={[
                                                                subField.name,
                                                                "technology",
                                                            ]}
                                                        >
                                                            <Input placeholder="e.g. ReactJS, VueJs" />
                                                        </Form.Item>
                                                        <CloseOutlined
                                                            onClick={() => {
                                                                subOpt.remove(
                                                                    subField.name
                                                                );
                                                            }}
                                                        />
                                                    </Space>
                                                ))}
                                                <Button
                                                    type="dashed"
                                                    onClick={() => subOpt.add()}
                                                    block
                                                >
                                                    + Add Technology
                                                </Button>
                                            </Flex>
                                        )}
                                    </Form.List>
                                </Form.Item>
                            </Card>
                        ))}

                        <Button type="dashed" onClick={() => add()} block>
                            + Add Skill
                        </Button>
                    </div>
                )}
            </Form.List>
        </>
    );
}
