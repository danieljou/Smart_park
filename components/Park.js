import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import SinglePark from './layouts/SinglePark';
import axios from 'axios'
import Places from './Places';

const Park = () => {

    // const park = fetch("http://127.20.10.2:5000/parking");
    // const fetchData = async () => {
    //     const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    //     const data = await resp.json();
    //     setData(data);
    //     setLoading(false);
    // };
    // fetchData();
    const [parks, setpark] = useState([]);
    const [loading, setloading] = useState(true);
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    const url = "http://192.168.0.200:5000/parking";
    // const url = "http://172.20.10.5:7000/messages/";
    const baseUrl = 'http://192.168.0.200:5000';
    useEffect(() => {
        axios({
            method: 'get',
            url: `${baseUrl}/parking/all`,
        }).then((response) => {
            // console.log(response.data);
            // console.log(response);
            setpark(response.data)
            setloading(false);
            // console.log(parks.length);
        });

    });


    return (
        <ScrollView>

            <View style={styles.container}>

                {
                    loading ? (
                        <Text>loading....</Text>
                    ) : (

                        parks.map((park, key) => {
                            let state;
                            { park.slot_status ? (state = false) : (state = true) }
                            return (
                                <SinglePark
                                    color={state}
                                    key={key}
                                    parking_id={park.slot_id}
                                    date={park.created_at}

                                />
                            )
                        })
                        // <Text>
                        //     {parks[50].created_at}
                        // </Text>
                        // console.log(parks)

                    )
                }


            </View>


        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        height: "100%",
        overflow: "scroll"


    },
    header: {
        backgroundColor: "bue"
    }
});
export default Park