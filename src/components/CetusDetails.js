import React, { Component } from 'react';
import { View, 
  StyleSheet, 
  Text,
  ImageBackground,
  ActivityIndicator, 
  ViewPagerAndroid } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import ImageLoader from './ImageLoader';

class CetusDetails extends Component {

changePage = () => {
  console.log('Page changed');
}

render() {
  if (!this.props.cetusData) {
      return (
        <View>
          <Card>
            <CardItem>
              <ImageBackground
              source={require('../img/placeholder.jpg')}
              style={styles.cetusImage}
              >
              
              <View style={styles.absoluteView}>
                <ActivityIndicator size="large" color='#00ff00' />
              </View>
  
              </ImageBackground>
            </CardItem>
          </Card>
        </View>
      );
  }
  return (
  <View style={{ flex: 1 }} >  
    <Card>
        <CardItem> 
          <ImageLoader
            style={styles.cetusImage}
            source={
            this.props.cetusData.isDay === true 
            ? require('../img/day.jpg') 
            : require('../img/night.jpg')
           }
          />
          <View style={styles.absoluteView}>
           <Text style={styles.cetusText}>
             { this.props.cetusData.isDay === true ? 'DAY' : 'NIGHT' }
           </Text>
          </View>
          </CardItem>

      <CardItem>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.timeLeft}>
              { this.props.cetusData.shortString }
        </Text>
        </View>
      </CardItem>
   </Card>
          
  </View>
  );
}
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  viewPager: {
    flex: 1,
    backgroundColor: 'green',
    height: 300
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20
  },
  cetusImage: {
    flex: 1,
    height: 250,
    width: null
  },
  absoluteView: {
    position: 'absolute',
    left: 15,
    bottom: 15,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-end'
  },
  cetusText: {
    fontFamily: 'warframe',
    fontSize: 30,
    color: '#fff',
    opacity: 0.9,
    fontWeight: '600'
  },
  timeLeft: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 30,
    color: '#000',
  
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
