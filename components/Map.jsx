import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text,TextInput, View, Dimensions, Button, StatusBar, Pressable,Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../../couleur';
import { BlurView } from 'expo-blur';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Map({ navigation }) {
  const[origin, setOrigin]=React.useState({
    latitude:3.841440, 
    longitude:11.488545
  })
  const [ isFucosed, setFocused ] = React.useState( false );
  const [ showAutoComplete, setVisible ] = React.useState( true );
  const [ text, setText ] = React.useState( "" );
  const [ data, setData ] = React.useState( [
    "Melen", "Mendong", "Poste Centrale",
    "Awaie", "Acacia", "TKC", "Mokolo", "Mokolo Elobi"
  ] );

  const getMatching = ( val = "" ) => {
    if( val === "" ) {
      return [];
    }

    val = val.toLocaleLowerCase().trim();
    val = val.replace( /[\s\t\r]{1,}/ig, " " );
    val = val.split( " " );

    return data.filter( ( item = "" ) => {
      const 
       place = item.toLocaleLowerCase();
        for( let part of val ) {
          if ( place.search( part ) !== -1 ) {
            return true;
          }
        }
      return false;
    } );
  };


  return (
    
    <View style={styles.container}> 
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude:origin.latitude,
          longitude:origin.longitude,
          latitudeDelta:0.09,
          longitudeDelta:0.04
        }}
      >   
      
    
        <Marker
          description='parking'
          coordinate={{latitude:3.841019, longitude:11.471005}}
          onPress={() => navigation.push('MonParking')}
        >
          
          
          <Image source={require('../../../assets/iconP.png')}
            style={styles.icon}       
          />       
        </Marker>
        
        <Marker
          description='parking'
          coordinate={{latitude:3.841341, longitude:11.488061}}
          onPress={() => navigation.push('MonParking2')}
        >
          <Image source={require('../../../assets/iconP.png')}
            style={styles.icon}
          />
        </Marker> 

        <Marker
          description='parking'
          coordinate={{latitude:3.833044, longitude:11.470081}}
        >
          <Image source={require('../../../assets/iconP.png')}
            style={styles.icon}
          />
        </Marker> 
        <Marker
          description='parking'
          coordinate={{latitude:3.852591, longitude:11.498789}}
        >
          <Image source={require('../../../assets/iconP.png')}
            style={styles.icon}
          />
        </Marker> 
        <Marker
          description='parking'
          coordinate={{latitude:3.853961, longitude:11.480508}}
        >
          <Image source={require('../../../assets/iconP.png')}
            style={styles.icon}
          />
        </Marker> 
        <Marker
          description='parking'
          coordinate={{latitude:3.817693, longitude:11.504540}}
        >
          <Image source={require('../../../assets/iconP.png')}
            style={styles.icon}
          />
        </Marker> 
        <Marker
          description='parking'
          coordinate={{latitude:3.864794, longitude:11.496472}}
        >
          <Image source={require('../../../assets/iconP.png')}
            style={styles.icon}
          />
        </Marker> 
        <Marker
          description='parking'
          coordinate={{latitude:3.813963, longitude:11.557635}}
        >
          <Image source={require('../../../assets/iconP.png')}
            style={styles.icon}
          />
        </Marker>

        <Marker
          description='parking'
          coordinate={{latitude:3.820134, longitude:11.489777}}
        >
          <Image source={require('../../../assets/iconP.png')}
            style={styles.icon}
          />
        </Marker>
      </MapView>
      <View 
        style={[
          styles.searchBarContainer,
          isFucosed ? styles.searchBarContainerFocused : {}
        ]}
      >
        <BlurView
          intensity={ 110 } 
          tint="light"
          style={styles.search}
        >
          <View style={styles.searchBar}>
            <Ionicons 
              name="arrow-back" 
              size={25} 
              color={ Colors.black }
              style={ {
                marginRight: 10,
                display: isFucosed ? "flex" : "none"
              } } 
              onPress={ () => {
                setFocused( false )
              } }
            /> 
            <TextInput
              placeholder='Recherche:'
              style={styles.searchField}
              value={ text }
              onFocus={ () => setFocused( true ) }
              onChangeText={ ( text ) => {
                setText( text );
                setVisible( true );
              } }
            />
            <Ionicons 
              name="search" 
              size={25} 
              color={ Colors.black } 
              style={ {
                display: isFucosed ? "none" : "flex"
              } } 
            /> 
          </View>
          <View 
            style={[
              styles.dataList, {
                display: showAutoComplete ? "flex" : "none"
              }
            ]}
          >
            { getMatching( text ).map( ( item, index ) => {
              return (
                <Pressable 
                  style={ styles.dataListItem }
                  key={ String( index ) }
                  onPress={ () => {
                    setText( item );
                    setVisible( false );
                  } }
                >
                  <Text> { item } </Text>
                </Pressable>
              );
            } ) }
          </View>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search:{
    width:"90%",
    flexDirection:"column",
    backgroundColor: Colors.white,
    borderWidth: 0,
    borderColor:"#EEE",
    position: "relative",
    overflow: "hidden",
    paddingHorizontal: 15,
    borderRadius: 10
  },
  searchBar:{
    flexDirection:"row",
    width:"100%",
    alignItems: "center"
  },
  searchField: {
    height: 55,
    borderWidth: 0,
    flex: 1
  },
  dataList:{
    flexDirection:"column",
    width:"100%"
  },
  dataListItem: {
    width: "100%",
    flexDirection: "row",
    alignItems: 'center',
    height: 45
  },
  searchBarContainer:{
    width:"100%",
    backgroundColor:"transparent",
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: StatusBar.currentHeight
    
  },
  searchBarContainerFocused: {
    height: "100%",
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'flex-start',
    top: 0
  },
  map: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,

  },
  icon:{ 
    width:30,
    height:30
  },
  pus:{
    height:"100%",
    width:"100%",
    backgroundColor:"red"
  }
});