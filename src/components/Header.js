// Import libraries for making a Component
import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Picker } from 'react-native';

// Make a Component
class Header extends React.Component {
  //const { textStyle } = styles;
  state = { platform: 'pc' }
  
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.platform !== nextState.platform) {
      this.props.setPlatform(nextState.platform);
      return true;
    }
    return false;
  }
  render() {
  return (
    <View style={styles.viewStyle}>
    <Picker
      selectedValue={this.state.platform}
      style={{ height: 50, width: 120 }}
      onValueChange={(itemValue, itemIndex) => this.setState({ platform: itemValue })}
    >
      <Picker.Item label="PC" value="pc" />
      <Picker.Item label="PS4" value="ps4" />
      <Picker.Item label="XBOX" value="xb1" />
  </Picker>
      <Text style={styles.textStyle}>{this.props.headerText}</Text>
      <TouchableOpacity 
        onPress={this.props.onPress}
        style={[styles.imageClick, { activeOpacity: 0.5 }]}
      >
        <Image style={[styles.headerImage]} source={require('../img/refresh.png')} />
      </TouchableOpacity>


    </View>
  );
  }
}

const styles = StyleSheet.create(
  {
    textStyle: {
      fontFamily: 'RobotoSlab-Bold',
      fontSize: 22,
      position: 'relative',
      right: 25
    },
    viewStyle: {
      height: 60,
      paddingTop: 15,
      backgroundColor: '#F8F8F8',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      paddingRight: 15
    }
});

// Make the component available to other parts of app
export default Header;
