import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { "name": "Friend #1", "age": "10" },
        { "name": "Friend #2", "age": "10"},
        { "name": "Friend #3", "age": "10" },
        { "name": "Friend #4", "age": "10" },
        { "name": "Friend #5" , "age": "10"},
        { "name": "Friend #6", "age": "10" },
        { "name": "Friend #7", "age": "10" },
        { "name": "Friend #8" , "age": "10"},
        { "name": "Friend #9", "age": "10" },
    ]
    return (
        <FlatList data={friends} 
        // horizontal
        // showsHorizontalScrollIndicator={false}
        renderItem = {({item, index}) => {
           return <Text style={styles.textStyle} key={index}>{item.name} - Age {item.age}</Text>
        }} /> 
    )
}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical: 50,
        textAlign: "center"

    }
});

export default ListScreen;