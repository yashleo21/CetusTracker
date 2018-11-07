import React, { Component } from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import HeaderAlert from './HeaderAlert';
import Card from './Card';
import CardItem from './CardItem';

export default class Invasions extends Component {

    render() {
        if (!this.props.invasionData) {
            return (
            <View>
                <HeaderAlert headerText={'INVASIONS'} />
                <ActivityIndicator style={styles.indicator} size="large" color='#00ff00' />
            </View>
            )}   
            
        return (
            <View>
                <HeaderAlert headerText={'INVASIONS'} left right />
                <Card>
                    {
                       this.props.invasionData.map((invasion) => {
                         if (!invasion.completed) {
                            return (
                                <CardItem key={invasion.id}>
                                    <View style={styles.leftSide}>
                                        <Text 
                                        style={styles.factionText}
                                        >
                                        {invasion.attackingFaction + 
                                        '  (' + invasion.completion.toFixed(2) + '%)'}
                                        </Text>
                                        <Image
                                        resizeMode='stretch'
                                        style={styles.itemStyle} 
                                        source={{ uri: invasion.attackerReward.thumbnail }} 
                                        />
                                        <Text style={styles.rewardText}>
                                        {invasion.attackerReward.itemString}
                                        </Text>
                                    </View>

                                    <View style={styles.middleStyle}>
                                        <View 
                                        style={[styles.progressLeft, 
                                        { flex: invasion.completion }]} 
                                        />
                                        <View 
                                        style={[styles.progressRight, 
                                        { flex: 100 - invasion.completion }]} 
                                        />
                                        <View style={styles.invasionEta}>
                                            <Text style={{ fontFamily: 'RobotoSlab-Bold.ttf', fontSize: 14 }}>
                                            {'ETA: ' + invasion.eta }
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.rightSide}>
                                    <Text style={styles.factionText}>
                                    {'(' + (100 - invasion.completion).toFixed(2) + '%)  ' 
                                    + invasion.defendingFaction}
                                    </Text>
                                        <Image
                                        resizeMode='stretch'
                                        style={styles.itemStyle} 
                                        source={{ uri: invasion.defenderReward.thumbnail }} 
                                        />
                                        <Text style={styles.rewardText}>
                                        {invasion.defenderReward.itemString}
                                        </Text>
                                    </View>
                                </CardItem>
                            );
                         }
                         return (
                            null
                         );
                       })
                    }
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rewardText: {
        fontFamily: 'RobotoSlab-Light.ttf',
        fontSize: 15,
    },
    factionText: {
        fontFamily: 'RobotoSlab-Regular.ttf',
        fontSize: 16,
        
    },
    invasionEta: {
        position: 'absolute',
        bottom: 15,
    },
    leftPercentage: {
        alignSelf: 'flex-start',
        position: 'relative',
        top: 10,   
    },
    rightPercentage: {
        alignSelf: 'flex-start'
    },
    rightSide: {
        marginLeft: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    leftSide: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        flexGrow: 1,
    },
    itemStyle: {
        width: 60,
        height: 60
    },
    progressLeft: {
        width: 0,
        height: 15,
        borderRadius: 4,
        backgroundColor: 'green',
        borderTopRightRadius: 1,
        borderBottomRightRadius: 1,
        elevation: 2,
    },
    progressRight: {
        width: 0,
        height: 15,
        borderRadius: 4,
        backgroundColor: 'red',
        borderTopLeftRadius: 1,
        borderBottomLeftRadius: 1, 
        elevation: 2,
    },
    middleStyle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
