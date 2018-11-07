import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import HeaderAlert from './HeaderAlert';
import Card from './Card';
import CardItem from './CardItem';
import images from '../img/index';

export default class Fissures extends Component {
    
    render() {
        if (!this.props.fissureData) {
            return (
            <View> 
                <HeaderAlert headerText={'FISSURES'} />
                <ActivityIndicator size="large" color='#00ff00' />
                
            </View>
            );
        }
        return (
            <View>
                <HeaderAlert headerText={'FISSURES'} left />
                <Card>
                    {
                        this.props.fissureData.map((fissure) => {
                            if (!fissure.expired) {
                                return (
                                    <CardItem key={fissure.id}>
                                        <View style={styles.leftSide}>
                                            <Image
                                            resizeMode='stretch' 
                                            style={styles.fissureImg}
                                            source={images[fissure.tier]}
                                            />
                                        </View>

                                        <View style={styles.middleLayer}>
                                            <Text style={styles.fissureNode}>
                                                {fissure.node}
                                            </Text>
                                            <Text style={styles.fissureRelic}>
                                                {'Relic: ' + fissure.tier}
                                            </Text>
                                            <Text style={styles.fissureEnemy}>
                                                {fissure.enemy + tiers[fissure.tierNum]}
                                            </Text>
                                            <Text style={styles.fissureExpiry}>
                                            { 'Expires in: ' + fissure.eta }
                                            </Text>
                                        </View>
                                    </CardItem>
                                );
                            }
                            return null;
                        })
                    }
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fissureExpiry: {
        fontSize: 16,
        fontWeight: '400'
    },
    fissureRelic: {
        fontSize: 20,
        fontWeight: '500',
    },
    fissureEnemy: {
        fontSize: 18,
        fontWeight: '400'
    },
    fissureNode: {
        fontSize: 22,
        fontWeight: '500'
    },
    fissureImg: {
        width: 90,
        height: 100,
    },
    leftSide: {
        paddingLeft: 5
    },
    middleLayer: {
        paddingLeft: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
});

const tiers = {
    0: ' (Level 1-9)',
    1: ' (Level 10-19)',
    2: ' (Level 20-29)',
    3: ' (Level 30-39)',
    4: ' (Level 40-49)'
}