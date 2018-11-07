// Import libraries for making a Component
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import images from '../img/index';

// Make a Component
const Header = (props) => {
  //const { textStyle } = styles;
  if (props.left && props.right) {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.leftArrowPos}>
        <Image 
        style={styles.arrowSize}
        source={images.LeftArrow} 
        />
        </View>
        <Text style={styles.textStyle}>{props.headerText}</Text>
        <View style={styles.rightArrowPos}>
        <Image 
        style={styles.arrowSize}
        source={images.RightArrow} 
        />
        </View>
    </View>
    );
  }
  else if (props.left) {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.leftArrowPos}>
        <Image 
        style={styles.arrowSize}
        source={images.LeftArrow} 
        />
        </View>
        <Text style={styles.textStyle}>{props.headerText}</Text>
      </View>
    );
  }
  else if (props.right) {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
        <View style={styles.rightArrowPos}>
        <Image 
        style={styles.arrowSize}
        source={images.RightArrow} 
        />
        </View>
      </View>
      
    );
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    leftArrowPos: {
      position: 'absolute',
      left: 10,
      top: 15
    },
    rightArrowPos: {
      position: 'absolute',
      right: 10,
      top: 15
    },
    arrowSize: {
      width: 30,
      height: 30
    },
    textStyle: {
      fontSize: 22
    },
    viewStyle: {
      height: 60,
      paddingTop: 5,
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
});

// Make the component available to other parts of app
export default Header;
