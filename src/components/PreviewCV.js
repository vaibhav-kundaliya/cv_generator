import React, { useState } from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";
import image from "./iviewLabIcon.png";
// Create styles


const join_technology_list = (list) => {
    const result = [];
    list.map((item) => {
        result.push(item.technology);
    });
    return result.join(", ");
};

// Create Document Component
const PreviewCV = () => {
    const [data, setData] = useState(
    );
    return (
       <div>

       </div>
    );
};

export default PreviewCV;
