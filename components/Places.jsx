import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import Colors from "./couleur";
import Ionicons from '@expo/vector-icons/Ionicons';
// import { LinearGradient } from "expo-linear-gradient";
// import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios'



class Places extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place1: 0,
            place2: 0,
            place3: 0,
            timep1: "",
            timep2: "",
            timep3: "",
            place_list: []
        };

    }

    setPlaces(data = []) {
        data.forEach((item) => {
            if (item.slot_id === 1) {
                this.setState({
                    place1: item.slot_status,
                    timep1: item.created_at
                })
            } else if (item.slot_id === 2) {
                this.setState({
                    place2: item.slot_status,
                    timep2: item.created_at
                })
            } else if (item.slot_id === 3) {
                this.setState({
                    place3: item.slot_status,
                    timep3: item.created_at
                })
            }
        })
    }

    loadData() {
        axios.request({
            url: "http://192.168.0.200:5000/parking/alls",
            method: "GET",
            withCredentials: false
        })
            .then(({ data }) => {
                this.setState({
                    place_list: data
                }, () => {
                    this.setPlaces(data);
                });
            })
            .catch(function (error) {
                console.error("error", new Date());
                console.error(error)
            })
    }

    componentDidMount() {
        this.loadData();
        setInterval(() => {
            this.loadData();
        }, 5000);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container2}>

                    <View style={styles.container3}>
                        <View style={styles.container4a}>
                            <Ionicons
                                name="car-sport-outline"
                                size={50}
                                color='white'
                            />
                        </View>

                        <View style={styles.container4b}>
                            <View style={styles.champs} >
                                <Ionicons
                                    name="location"
                                    size={18}
                                    color='black'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>Place:</Text>
                                <Text>A1</Text>
                            </View>
                            <View style={styles.champs} >
                                <Ionicons
                                    name="cog"
                                    size={18}
                                    color='black'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>status:</Text>
                                <View style={!this.state.place1 ? styles.statusl : styles.statuso} />
                            </View>

                            <View style={styles.champs} >
                                <Ionicons
                                    name="timer"
                                    size={18}
                                    color='black'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>A</Text>
                                <Text style={{ fontSize: 10, }}>{this.state.timep1}</Text>
                            </View>
                        </View>

                    </View>




                    <View style={styles.container3}>
                        <View style={styles.container4a}>
                            <Ionicons
                                name="car-sport-outline"
                                size={50}
                                color='white'
                            />
                        </View>

                        <View style={styles.container4b}>
                            <View style={styles.champs} >
                                <Ionicons
                                    name="location"
                                    size={18}
                                    color='black'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>Place:</Text>
                                <Text>A2</Text>
                            </View>
                            <View style={styles.champs} >
                                <Ionicons
                                    name="cog"
                                    size={18}
                                    color='black'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>status:</Text>
                                <View style={!this.state.place2 ? styles.statusl : styles.statuso} />
                            </View>

                            <View style={styles.champs} >
                                <Ionicons
                                    name="timer"
                                    size={18}
                                    color='black'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>A</Text>
                                <Text style={{ fontSize: 10, }}>{this.state.timep2}</Text>
                            </View>
                        </View>

                    </View>
                </View>




                <View style={styles.container2}>

                    <View style={styles.container3}>
                        <View style={styles.container4a}>
                            <Ionicons
                                name="car-sport-outline"
                                size={50}
                                color='white'
                            />
                        </View>

                        <View style={styles.container4b}>
                            <View style={styles.champs} >
                                <Ionicons
                                    name="location"
                                    size={18}
                                    color='black'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>Place:</Text>
                                <Text>A3</Text>
                            </View>
                            <View style={styles.champs} >
                                <Ionicons
                                    name="cog"
                                    size={18}
                                    color='black'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>status:</Text>
                                <View style={!this.state.place3 ? styles.statusl : styles.statuso} />

                            </View>

                            <View style={styles.champs} >
                                <Ionicons
                                    name="timer"
                                    size={18}
                                    color='black'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>A</Text>
                                <Text style={{ fontSize: 10, }}>{this.state.timep3}</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>




        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#fff',
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#DDD",


    },
    container2: {
        width: "100%",
        height: "50%",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "row",



    },
    container3: {
        width: "47%",
        height: "98%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "flex-start",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#fff",
        marginTop: 10,
        marginLeft: 4,




    },
    container4a: {
        width: "100%",
        height: "45%",
        backgroundColor: Colors.purple2,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 20

    },
    container4b: {
        width: "100%",
        height: "55%",
        backgroundColor: "#f5f5f5",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        borderRadius: 20,
        paddingTop: 10,
        paddingLeft: 10

    },
    champs: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10



    },
    text: {
        fontWeight: "bold",
        textTransform: "capitalize",
        marginRight: 2
    },
    icon: {
        paddingLeft: 5,
        paddingRight: 5

    },
    libre: {
        color: "green",
        fontWeight: "700",
        fontSize: 22
    },
    occupe: {
        color: "red",
        fontWeight: "700",
        fontSize: 22
    },
    statusl: {
        width: 12,
        height: 12,
        borderRadius: 12,
        backgroundColor: "green",
        marginLeft: 10

    },
    statuso: {
        width: 12,
        height: 12,
        borderRadius: 12,
        backgroundColor: "red",
        marginLeft: 10

    }
})





export default Places;