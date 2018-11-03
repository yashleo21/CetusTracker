import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ActivityIndicator, Animated } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

class ImageLoader extends React.Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image 
        onLoad={this.onLoad}
        {...this.props}
        style={[
           {
             opacity: this.state.opacity,
             transform: [
               {
                 scale: this.state.opacity.interpolate({
                   inputRange: [0, 1],
                   outputRange: [0.85, 1],
                 })
               }
             ]
           },
           this.props.style,
        ]}
      />
    );
  }
}

const CetusDetails = ({ cetusData }) => {

  }
  if (!cetusData) {
    return (
      <View>
        <Card>
          <CardItem>
            <ImageBackground
            source={require('../img/placeholder.jpg')}
            style={styles.cetusImage}>
            
            <View style={styles.absoluteView}>
              <ActivityIndicator size="large" color='#00ff00' />
            </View>

            </ImageBackground>
          </CardItem>
        </Card>
      </View>
    );
  }
  const { isDay, shortString } = cetusData;
  return (
    <View>
      <Card>
        <CardItem>
          
          <ImageLoader
            style={styles.cetusImage}
            source={
            isDay === true ? require('../img/day.jpg') : require('../img/night.jpg')
           }
          />
          <View style={styles.absoluteView}>
           <Text style={styles.cetusText}>
              { shortString }
           </Text>
          </View>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cetusImage: {
    flex: 1,
    height: 250,
    width: null
  },
  absoluteView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cetusText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '600'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 100
  },
});
export default CetusDetails;
