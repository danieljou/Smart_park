
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MapScreen from './components/MapScreen';
import HomeScreen from './components/HomeScreen';
// import Park from './components/Park';
import Places from './components/Places';
import Places2 from './components/Places2';
import Begin from "./components/Begin";


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
    Park: Places,
    Park2: Places2,
    Begin: Begin
  },

  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return (
    <AppContainer />
  );
}

