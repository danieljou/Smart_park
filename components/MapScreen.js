import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


export class MapScreen extends Component {

    render() {

        return (
            <View style={styles.MainContainer}>

                <MapView

                    style={styles.mapStyle}
                    showsUserLocation={false}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    initialRegion={{
                        latitude: 3.841440,
                        longitude: 11.488545,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}>


                    <Marker
                        description='parking'
                        coordinate={{ latitude: 3.841019, longitude: 11.471005 }}
                        //   onPress={() => navigation.push('MonParking')}
                        onPress={() => this.props.navigation.navigate('Places')}

                    >


                        <Image source={require('../assets/iconP.png')}
                            style={styles.icon}
                        />
                    </Marker>

                    <Marker
                        description='parking'
                        coordinate={{ latitude: 3.817693, longitude: 11.504540 }}
                        onPress={() => this.props.navigation.navigate('Places2')}
                    >
                        <Image source={require('../assets/iconP.png')}
                            style={styles.icon}
                        />
                    </Marker>
                    <Marker
                        description='parking'
                        coordinate={{ latitude: 3.864794, longitude: 11.496472 }}
                        onPress={() => this.props.navigation.navigate('Places')}
                    >
                        <Image source={require('../assets/iconP.png')}
                            style={styles.icon}
                        />
                    </Marker>
                    <Marker
                        description='parking'
                        coordinate={{ latitude: 3.813963, longitude: 11.557635 }}
                        onPress={() => this.props.navigation.navigate('Places')}
                    >
                        <Image source={require('../assets/iconP.png')}
                            style={styles.icon}
                        />
                    </Marker>
                </MapView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    icon: {
        width: 30,
        height: 30
    },
});


export default MapScreen