import React from "react";
import { theme, Card } from "antd";
import { useMediaQuery } from "react-responsive";
import StepperForm from "./components/Stepper";
import MyDocument from "./components/PreviewCV";
import { PDFViewer } from '@react-pdf/renderer';

const App = () => {
    const { token } = theme.useToken();
    const width_80 = useMediaQuery({ query: "(max-width: 770px)" });

    return (
        // <div
        //     style={{
        //         height: "100vh",
        //         margin: "auto",
        //         backgroundColor: token.colorFillAlter,
        //         display:"flex",
        //         justifyContent:"center",
        //         alignItems:"center",
        //     }}
        //     >
        //     <Card
        //         title="Generate white labelled CV"
        //         style={{
        //             width:width_80 ?"90%":"60%",
        //             boxShadow:"1px 2px"
        //         }}
        //     >
        //         <StepperForm />
        //     </Card>
        // </div>
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <MyDocument />
        </PDFViewer>
        // <></>
    );
};

// render(<App />, `${__dirname}/example.pdf`);

export default App;
