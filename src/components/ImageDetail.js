import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ImageDetail = ({ title, imageUrl, score }) => {
    return <View>
        <Image source={imageUrl} />
        <Text>{title}</Text>
        <Text>{score}</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default ImageDetail;