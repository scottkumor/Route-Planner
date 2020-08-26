import React, { Component } from 'react'
import { StyleSheet, Text, View, } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(33,147,137)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        color: 'white',
        fontSize: 45,
    }
});

export default class New extends Component {

    

    render() {
        return (
            <View style={styles.container}>
                <Text sytle={styles.textTitle}>You made It!</Text>
            </View>
        )
    };
}
