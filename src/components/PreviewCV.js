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
const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: "column",
        padding: 20,
    },
    section: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        display: "flex",
        flexDirection: "row-reverse",
    },
    himage: { width: "48px", height: "48px" },
    title: {
        padding: 10,
        fontSize: 20,
        textAlign: "center",
    },

    subTitle: {
        fontSize: 15,
        textDecoration: "underline",
        marginBottom: 5,
    },
    content: {
        fontSize: 11,
        marginLeft: 20,
    },
    bullet: {
        marginRight: 10,
    },
    bulletText: {
        paddingRight: "15",
    },

    footer: {
        position: "absolute",
        textAlign: "center",
        fontSize: 12,
        bottom: 15,
        left: 0,
        right: 0,
    },
});

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
        JSON.parse(localStorage.getItem("devProfile"))
    );
    console.log(data);
    return (
        <Document>
            <Page size="A4" style={styles.page} wrap>
                {/* Header Section */}
                <View fixed style={styles.header}>
                    <Image src={image} style={styles.himage} />
                </View>
                <View style={styles.section}>
                    {/* Title section */}
                    {data.name || data.profile ? (
                        <View style={styles.title}>
                            <Text>
                                {data.name} - {data.profile}
                            </Text>
                        </View>
                    ) : null}

                    {/* Summary section */}
                    <View style={styles.summary}>
                        <Text style={styles.subTitle}>Summary:</Text>
                        {data.summary?.map((item,index) => (
                            <View
                                style={{
                                    ...styles.content,
                                    flexDirection: "row",
                                }}
                                key={index}
                            >
                                <View style={styles.bullet}>
                                    <Text>-</Text>
                                </View>
                                <View style={styles.bulletText}>
                                    <Text>{item}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    {/* Technical Skill Section */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.subTitle}>Technical Skills:</Text>
                        {data.technical_skills?.map((item, index) => (
                            <View
                                style={{
                                    ...styles.content,
                                    flexDirection: "row",
                                }}
                                key={index}
                            >
                                <>
                                    <View style={styles.bullet}>
                                        <Text>-</Text>
                                    </View>
                                    {item.skill ? (
                                        <Text style={{ marginRight:"3px" }}>
                                            {item.skill}: 
                                        </Text>
                                    ) : null}

                                    {item.technology ? (
                                        <Text>
                                            {join_technology_list(
                                                item.technology
                                            )}
                                        </Text>
                                    ) : null}
                                </>
                            </View>
                        ))}
                    </View>

                    {/* Project Seciton */}
                    <View style={{ marginTop: 20, marginBottom: 10 }}>
                        <Text style={styles.subTitle}>Projects Worked on:</Text>
                        {data.projects?.map((item,index) => (
                            <View style={{ marginBottom: 10 }} wrap={false} key={index}>
                                {item.project_title ? (
                                    <Text
                                        style={{
                                            ...styles.subTitle,
                                            fontSize: 13,
                                        }}
                                    >
                                        {item.project_title}:
                                    </Text>
                                ) : null}

                                {item.project_technology ? (
                                    <View
                                        style={{
                                            ...styles.content,
                                            flexDirection: "row",
                                            marginLeft: 0,
                                        }}
                                    >
                                        <Text style={{marginRight:"3px"}}>Technologies:</Text>
                                        <Text>
                                            {join_technology_list(
                                                item.project_technology
                                            )}
                                        </Text>
                                    </View>
                                ) : null}

                                {item.project_definition ? (
                                    <View style={{ ...styles.content,  marginLeft: 0}}>
                                        <Text >Description: </Text>
                                        <Text style={{ marginLeft: 20 }}>
                                            {item.project_definition}
                                        </Text>
                                    </View>
                                ) : null}

                                {item.project_responsibility ? (
                                    <View style={{ ...styles.content,  marginLeft: 0 }}>
                                        <Text>Responsibility: </Text>
                                        <Text style={{ marginLeft: 20 }}>
                                            {item.project_responsibility}
                                        </Text>
                                    </View>
                                ) : null}
                            </View>
                        ))}
                    </View>
                </View>

                {/* Footer Section */}
                <View fixed style={styles.footer}>
                    <Text>
                        sales@iviewlabs.com | www.iviewlabs.com | +91 98250
                        84654
                    </Text>
                </View>
            </Page>
        </Document>
    );
};

export default PreviewCV;
