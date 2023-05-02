import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SinglePark = ({ color, parking_id, date }) => {
    return (

        <View style={styles.container}>
            <View style={styles.header}>

            </View>
            <View style={styles.second}>
                <Text>
                    Place : {parking_id}
                </Text>
                <Text>
                    Satatus :
                    {color ? (

                        <View style={styles.status}></View>

                    ) : (
                        <View style={styles.status2}></View>
                    )}

                </Text>
                <Text>
                    Date d'occupation : {date}
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 12,


    },
    header: {
        backgroundColor: "blue",
        height: 150,
        width: '100%',
        borderRadius: 10

    },
    second: {
        width: '100%',
        backgroundColor: "#fff",
        height: 150,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        padding: 15

    },
    status: {
        width: 15,
        height: 15,
        borderRadius: '100%',
        backgroundColor: "green"
    },
    status2: {
        width: 15,
        height: 15,
        borderRadius: '100%',
        backgroundColor: "red"
    }
});
export default SinglePark