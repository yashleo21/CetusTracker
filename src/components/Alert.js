import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import HeaderAlert from './HeaderAlert';
import CardItem from './CardItem';
import Card from './Card';

export default class Alert extends Component {
    render() {
        if (!this.props.alertData) {
            return (
                <View>
                <HeaderAlert headerText={'ALERTS'} />
                <ActivityIndicator style={styles.indicator} size="large" color='#00ff00' />
            </View>
            );
        }

        return (
            <View>
                <HeaderAlert headerText={'ALERTS'} />
                <Card>
                     {
                         this.props.alertData.map((alert) => {
                             return (
                                <CardItem key={alert.id}>
                                    <Image style={styles.itemImage} 
                                    source={{ uri: alert.mission.reward.thumbnail }} 
                                    />
                                    <View style={styles.alertInfoContainer}>
                                        <Text style={styles.nodeText}>{alert.mission.node}</Text>
                                        <Text>{'Level: ' + alert.mission.minEnemyLevel + 
                                        ' - ' + alert.mission.maxEnemyLevel}
                                        </Text>
                                        <Text style={[alert.active ? styles.active : styles.expired]}>
                                            {alert.active ? 'ACTIVE' : 'EXPIRED'}
                                        </Text>
                                        <Text>
                                            {'Expires in: ' + alert.eta}
                                        </Text>
                                        <Text>
                                            {'Faction: ' + alert.mission.faction }
                                            {alert.mission.archwingRequired ? ' (ARCHWING)' : ''}
                                            <Text style={{ color: '#9b1b04' }}>{ alert.mission.nightmare ? ' (NIGHTMARE)' : ''}</Text>
                                        </Text>
                                        <Text style={styles.reward}>
                                            Rewards:
                                            {' ' + alert.mission.reward.credits + ' Credits'}
                                            {alert.mission.reward.itemString === ''
                                             ? '' : ' + ' + alert.mission.reward.itemString}
                                        </Text>
                            
                                    </View>
                                    
                               </CardItem>  
                             );
                         })
                     }
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    reward: {
        fontSize: 15,
        fontWeight: '500',
    },
    nodeText: {
        fontSize: 18,
        fontWeight: '500',
    },
    itemImage: {
        width: 70,
        height: 70
    },
    alertInfoContainer: {
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    active: {
        color: 'green',
    },
    expired: {
        color: 'red',
    }
});

