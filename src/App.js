import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import CetusDetails from './components/CetusDetails';

class App extends Component {
   state = {
     cetusData: null,
     op: 1
   };

   componentDidMount() {
     this.retrieve();
   }

   retrieve = () => {
     axios.get('https://api.warframestat.us/pc/cetusCycle')
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

   validateStatus(statusCode) {
     return statusCode >= 200 && statusCode < 300;
   }

   render() {
     console.log(this.state);
     return (
       <View>
         <ScrollView>
       <Header headerText={'Cetus Tracker'} onPress={this.retrieve} />
       <CetusDetails cetusData={this.state.cetusData} />
      </ScrollView>
        </View>
     );
   }
}

export default App;
