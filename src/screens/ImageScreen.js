import React from "react";
import { Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" score="8" imageUrl={require('../../assets/forest.jpg')} />
        <ImageDetail title="Mountain" score="9" imageUrl={require('../../assets/mountain.jpg')} />
        <ImageDetail title="Beach" score="10" imageUrl={require('../../assets/beach.jpg')} />
    </View>
}

export default ImageScreen;