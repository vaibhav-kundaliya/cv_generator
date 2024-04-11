import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { SyncOutlined } from "@ant-design/icons";
import PreviewCV from "./PreviewCV";
import { Spin } from "antd";

const loaderSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
        <path
            fill="none"
            stroke="#147EFF"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="300 385"
            stroke-dashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
        >
            <animate
                attributeName="stroke-dashoffset"
                calcMode="spline"
                dur="2"
                values="685;-685"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
            ></animate>
        </path>
    </svg>
);

const Wrapper_PreviewCV = () => {
    const [spinning, setSpinning] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setSpinning(false);
        }, 5000);
    }, []);
    return (
        <Spin
            spinning={spinning}
            indicator={
                <SyncOutlined
                    style={{
                        fontSize: 48,
                    }}
                    spin
                />
            }
        >
            <PDFViewer style={{ height: "500px", width: "100%" }}>
                <PreviewCV />
            </PDFViewer>
        </Spin>
    );
};

export default Wrapper_PreviewCV;
