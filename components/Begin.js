import { Text, View, Button, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import Colors from "./couleur";

export class Begin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/logo1.png')}
                    style={{ width: 200, height: 200, alignContent: "center", margin: "auto" }}
                />
                <View style={styles.container2}>
                    <Button title='Park 1' onPress={() => this.props.navigation.navigate('Park')} style={[styles.press, styles.press1]} />
                    <Button title='Park 2 ' onPress={() => this.props.navigation.navigate('Park2')} style={styles.button} />
                    <Button title='MAP' onPress={() => this.props.navigation.navigate('Map')} style={styles.button} />
                </View>
            </View>
        )
    }
}



export default Begin

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: '100%',
        padding: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        height: "100%",
        overflow: "scroll",
        backgroundColor: "white",



    },

    container2: {
        alignItems: "center",
        width: '100%',
        padding: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        overflow: "scroll",
        marginTop: 50

    },
    button: {
        borderRadius: 15,
        // backgroundColor: "blue",
        fontWeight: "bold",
        backgroundColor: "#f5f5f5",
        borderColor: 'red'

    },

    press: {
        width: "70%",
        height: 65,
        backgroundColor: "black",
        borderRadius: 15,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    press1: {
        backgroundColor: Colors.purple2
    },
})