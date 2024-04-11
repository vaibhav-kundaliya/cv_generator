import React from "react";
import { theme, Card,  Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import StepperForm from "./components/Stepper";
import MyDocument from "./components/PreviewCV";
import { PDFViewer } from "@react-pdf/renderer";

const App = () => {
    const { token } = theme.useToken();
    const width_80 = useMediaQuery({ query: "(max-width: 770px)" });

    return (
        <div
            style={{
                minHeight: "100vh",
                margin: "auto",
                marginBottom:"2rem",
                backgroundColor: token.colorFillAlter,
                display: "flex",
                flexDirection:"column",
                gap:"3rem",
                alignItems: "center",
            }}
        >   
            <Typography.Title>
                Create white labelled CV
            </Typography.Title>
            <Card
                style={{
                    width: width_80 ? "90%" : "60%",
                    boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1)",
                }}
            >
                <StepperForm />
            </Card>
        </div>
    );
};

export default App;
