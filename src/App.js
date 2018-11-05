import React, { Component } from 'react';
import { View, ScrollView, ViewPagerAndroid, Text, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import CetusDetails from './components/CetusDetails';
import Alert from './components/Alert';

class App extends Component {
   state = {
     cetusData: null,
     alertData: null,
     op: 1,
     platform: 'pc',
   };
   
   componentDidMount() {
     this.retrieve();
   }

   setPlatform = (platformVal) => {
    this.setState({
      platform: platformVal,
    });
    this.retrieve();
  }

   retrieve = () => {
     axios.get('https://api.warframestat.us/' + this.state.platform + '/cetusCycle')
     .then((response) => {
       if (this.validateStatus(response.status)) {
         this.setState({
           cetusData: response.data
         });
      }
       else {
         console.log('Network error');
       }
     })
     .catch((error) => console.log(error));

     axios.get('https://api.warframestat.us/' + this.state.platform + '/alerts')
      .then((response) => {
        if (this.validateStatus(response.status)) {
          this.setState({
            alertData: response.data
          });
        }
        else {
          console.log('Alert Network error');
        }
      })
      .catch((error) => console.log(error));
   }

   validateStatus(statusCode) {
     return statusCode >= 200 && statusCode < 300;
   }

   render() {
     console.log(this.state);
     return (
      <View style={{ flex: 1 }}>
         
          <Header 
          headerText={'Cetus Tracker'} 
          onPress={this.retrieve} 
          setPlatform={this.setPlatform} 
          />
          <CetusDetails cetusData={this.state.cetusData} />

          <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}
          >
            <View key="1">
              <ScrollView>
              <Alert alertData={this.state.alertData} />
              </ScrollView>
            </View>
            <View style={styles.pageStyle} key="2">
              <Text>Second page</Text>
            </View>
          </ViewPagerAndroid>
            
    </View>
     );
   }
}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    height: 300
  },
});
export default App;
