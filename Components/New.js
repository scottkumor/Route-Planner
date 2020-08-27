import React, { Component } from 'react'
import { StyleSheet, View, TextInput, } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


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
            <View 
            // style={styles.container}
            >
                <MapView 
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    initialRegion={{
                        latitude:41.8781,
                        longitude: 87.6298,
                        latitudeDelta: .01,
                        longitudeDelta: .01
                    }}
                />
          </View>
        )
    };
}
