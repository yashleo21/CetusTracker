// Import libraries for making a Component
import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

// Make a Component
const Header = (props) => {
  //const { textStyle } = styles;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
      <TouchableOpacity 
        onPress={props.onPress}
        style={[styles.imageClick, {activeOpacity: 0.5 }]}
      >
        <Image style={[styles.headerImage]} source={require('../img/refresh.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    textStyle: {
      fontFamily: 'RobotoSlab-Bold',
      fontSize: 22
    },
    viewStyle: {
      height: 60,
      paddingTop: 15,
      backgroundColor: '#F8F8F8',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 3,
      position: 'relative'
    },
    headerImage: {
      width: 35,
      height: 35,
      
    },
    imageClick: {
      position: 'absolute',
      right: 10,
      top: 15,
      alignItems: 'center',
    }
});

// Make the component available to other parts of app
export default Header;
