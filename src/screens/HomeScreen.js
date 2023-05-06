import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button 
      title="Component Screen" 
      onPress={() => navigation.navigate('Components')}  
    />
    <TouchableOpacity onPress={() => navigation.navigate('List')}> 
      <Text >List Screen!</Text>
    </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
