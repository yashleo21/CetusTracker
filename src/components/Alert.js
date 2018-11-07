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
                                        <Text style={styles.nodeText}>
                                        {alert.mission.node}
                                            <Text style={styles.levelText}>{' Level: ' + alert.mission.minEnemyLevel + 
                                            ' - ' + alert.mission.maxEnemyLevel}
                                            </Text>
                                        </Text>
                                        
                                        <Text style={[alert.active ? styles.active : styles.expired]}>
                                            {alert.active ? 'ACTIVE' : 'EXPIRED'}
                                        </Text>
                                        <Text style={styles.expiredText}>
                                            {'Expires in: ' + alert.eta}
                                        </Text>
                                        <Text style={styles.expiredText}>
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
    expiredText: {
        fontSize: 15,
        fontWeight: '300'
    },
    levelText: {
        fontSize: 16,
        fontWeight: '400'
    },
    reward: {
        fontSize: 15,
        fontWeight: '600',
    },
    nodeText: {
        fontSize: 18,
        fontWeight: '500',
    },
    itemImage: {
        width: 90,
        height: 90
    },
    alertInfoContainer: {
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 0,
        flexGrow: 1,
        flex: 1,
    },
    active: {
        color: 'green',
    },
    expired: {
        color: 'red',
    }
});

