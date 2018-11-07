import React, { Component } from 'react';
import { View, ScrollView, ViewPagerAndroid, StyleSheet, } from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import CetusDetails from './components/CetusDetails';
import Alert from './components/Alert';
import Invasions from './components/Invasions';
import Fissures from './components/Fissures';

class App extends Component {
   state = {
     cetusData: null,
     alertData: null,
     invasionData: null,
     fissureData: null,
     op: 1,
     platform: 'pc',
   };
   
   componentDidMount() {
     this.retrieve();
     this.retrieveAlert();
     this.retrieveInvasion();
     this.retrieveFissure();
   }

   setPlatform = (platformVal) => {
    this.setState({
      platform: platformVal,
      cetusData: null,
      alertData: null,
      invasionData: null,
      fissureData: null
    }, () => {
      this.retrieve();
      this.retrieveAlert();
      this.retrieveInvasion();
      this.retrieveFissure();
    });
  }

  refresh = () => {
    this.setState({
      cetusData: null,
      alertData: null,
      invasionData: null,
      fissureData: null
    }, () => {
      this.retrieve();
      this.retrieveAlert();
      this.retrieveInvasion();
      this.retrieveFissure();
    });
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
   }

   retrieveAlert = () => {
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

   retrieveInvasion = () => {
     axios.get('https://api.warframestat.us/' + this.state.platform + '/invasions')
     .then((response) => {
       if (this.validateStatus(response.status)) {
         this.setState({
           invasionData: response.data
         });
       }
       else {
         console.log('Invasion Network error');
       }
     })
     .catch((error) => console.log(error));
   }

   retrieveFissure = () => {
     axios.get('https://api.warframestat.us/' + this.state.platform + '/fissures')
     .then((response) => {
       if (this.validateStatus(response.status)) {
         this.setState({
           fissureData: response.data
         });
       }
       else {
         console.log('Fissures Network error');
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
          onPress={this.refresh} 
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

             <View key="2">
              <ScrollView>
                <Invasions invasionData={this.state.invasionData} />
              </ScrollView>
            </View>
            
            <View key="3">
              <ScrollView>
                <Fissures fissureData={this.state.fissureData} />
              </ScrollView>
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
