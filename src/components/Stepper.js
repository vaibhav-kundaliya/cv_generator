import React, { useState } from "react";
import { Button, message, Steps, theme, Form, F } from "antd";
import StepFormOne from "./StepFormOne";
import StepFormTwo from "./StepFormTwo";
import { useMediaQuery } from "react-responsive";
import StepFormThree from "./StepFormThree";
import Wrapper_PreviewCV from "./Wrapper_PreviewCV";

const steps = [
    {
        title: "Profile",
        content: <StepFormOne />,
    },
    {
        title: "Skills",
        content: <StepFormTwo />,
    },
    {
        title: "Projects",
        content: <StepFormThree />,
    },
    {
        title: "Preview",
        content: <Wrapper_PreviewCV />,
    },
];

const StepperForm = () => {
    const [form] = Form.useForm();
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
        localStorage.setItem(
            "devProfile",
            JSON.stringify(form.getFieldValue())
        );
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const flushDOM = () => {
        form.resetFields()  
        setCurrent(0);
    }
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const contentStyle = {
        textAlign: "center",
        color: token.colorTextTertiary,
        borderRadius: token.borderRadiusLG,
        marginTop: 16,
    };

    return (
        <>
            <Steps current={current} items={items} />
            <Form layout="vertical" form={form}>
                <div style={contentStyle}>{steps[current].content}</div>
                <div
                    style={{
                        marginTop: 24,
                    }}
                >
                    {current < steps.length - 1 && (
                        <Button
                            type="primary"
                            onClick={() => {
                                next();
                            }}
                        >
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={flushDOM}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button
                            style={{
                                margin: "0 8px",
                            }}
                            onClick={() => prev()}
                        >
                            Previous
                        </Button>
                    )}
                </div>
            </Form>
        </>
    );
};
export default StepperForm;
