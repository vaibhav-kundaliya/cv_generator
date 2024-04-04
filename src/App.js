import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./MyDocument";
const App = () => (
    <>
        <PDFViewer style={{height:"90vh", width:"100%"}}>
            <MyDocument />
        </PDFViewer>
        <br />
        <button>Download</button>
    </>
);

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
