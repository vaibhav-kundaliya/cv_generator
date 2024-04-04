import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";
import image from "./logo.png";
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    header: {
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row-reverse",
    },
    title: {
        padding: 10,
        fontSize: 20,
        textAlign:"center"
    },
    summeryTitle:{
        fontSize:15,
        textDecoration:"underline"
    },
    summeryText:{
        fontSize:11
    }
});

// Create Document Component
export const MyDocument = () => {
    const data = {
        name: "Vaibhav",
        profile: "Full Stack",
        summery: [
            "lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20",
            "lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20",
            "lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20",
            "lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20",
            "lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20",
        ],
    };
    return (
        <Document>
            <Page size="A4">
                <View style={styles.section}>
                    <View fixed style={styles.header}>
                        <Image
                            src={image}
                            style={{ width: "64px", height: "64px" }}
                        />
                    </View>
                    <View style={styles.title}>
                        <Text>{data.name} - {data.profile}</Text>
                    </View>
                    <View style={styles.summery}>
                        <Text style={styles.summeryTitle}>Summery:</Text>
                        <br></br>
                        {data.summery.map((item) => (
                            <Text style={styles.summeryText}>{item}</Text>
                        ))}
                    </View>
                </View>
            </Page>
        </Document>
    );
};
