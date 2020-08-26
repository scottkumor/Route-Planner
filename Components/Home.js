import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import New from "./New";
import Button from 'react-native-pure-button';
//import { LinearGradient } from 'expo-linear-gradient';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons'


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
    },
    textSubTitle: {
        color: 'white',
        fontSize: 8,
    },
    button: {
        backgroundColor: "rgb(110,191,73)",
        padding: 8,
        margin: 6,
        borderRadius: vh(5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    btnBox: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vh(2),
        backgroundColor: "rgb(26,86,50)",
        borderRadius: vh(1),
        padding: 8,
    },
    btnText: {
        color: "white",
    },
    icon: {
        color: "white",
    },

});

export default class Home extends Component {

    getStarted = () => {
        console.log('hello');
    };

    savedRoutes = () => {
        console.log('goodbye');
    };


    render() {

        return (



            <NativeRouter>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>Route Planner</Text>
                    <Text style={styles.textSubTitle}>Powered by Google Maps</Text>
                    <View style={styles.btnBox}>
                        <FontAwesomeIcon icon={faPlus} style={styles.icon} />

                        <Link style={styles.button} to="/new">
                            <Text>Get Started</Text>
                        </Link>
                        <Link style={styles.button} to="/new">
                            <Text>Saved Routes</Text>
                        </Link>
                        <FontAwesomeIcon icon={faSave} style={styles.icon} />
                    </View>

                    <Route exact path="/new" component={New} />
                </View>
            </NativeRouter>


            // <NativeRouter>
            //     <View style={styles.container}>
            //         <Text style={styles.textTitle}>Route Planner</Text>
            //         <Text style={styles.textSubTitle}>Powered by Google Maps</Text>

            //         <View style={styles.btnBox}>

            //         <Link to="/new"> <Text>Get Started</Text> </Link>
            //         </View>

            //         <View style={styles.btnBox}>
            //             {/* <FontAwesomeIcon icon={faPlus} style={styles.icon} /> */}
            //             {/* <Button style={styles.button} textStyle={styles.btnText} onPress={() => this.getStarted()} >*/}
            //             {/* </Button> */}
            //             {/* <Button style={styles.button} textStyle={styles.btnText} onPress={this.savedRoutes}>
            //                 Saved Routes
            //             </Button> */}
            //             {/* <FontAwesomeIcon icon={faSave} style={styles.icon} /> */}
            //         </View>

            //         <View>
            //         <Route path="/new" component={New} />
            //         </View>

            //     </View>


        );

    };

};
