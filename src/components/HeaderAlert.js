// Import libraries for making a Component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Make a Component
const Header = (props) => {
  //const { textStyle } = styles;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
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
