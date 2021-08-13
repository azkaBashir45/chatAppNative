import React, { Component } from 'react';

// import { Router,Scene } from 'react-native-router-flux';
import AnimatedScreen from "./AnimatedScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from "./Auth";
import Chatroom from "./chatroom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
const Stack = createStackNavigator();
class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer   >
      <Stack.Navigator>
        {/* <Stack.Screen
        initial={true}
        options={{headerShown: false}}
        key="loading" name="loading" component={AnimatedScreen} /> */}
        <Stack.Screen
        initial={true}
        options={{headerShown: false}}
        key="login" name="login" component={Login} />
         <Stack.Screen
        
        options={{headerShown: false}}
        key="register" name="register" component={Register} />
        <Stack.Screen
       
        options={{headerShown: false}}
        key="Chatroom" name="Chatroom"  component={Chatroom} />
          <Stack.Screen
       
        options={{headerShown: false}}
        key="auth" name="auth"  component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
    //  <Router>
    //    <Stack>
    //      <Scene key='root' hideNavBar={true}></Scene>
    //      <Scene 
    //      component={AnimatedScreen}
    //      key="loading" initial={true} 
    //      hideNavBar={true}>
    //      </Scene>
    //      <Scene 
    //      component={Login}
    //      key="login" initial={true} 
    //      hideNavBar={true}>
    //      </Scene>
    //      <Scene 
    //      component={Register}
    //      key="register" initial={true} 
    //      hideNavBar={true}>
    //      </Scene>
    //      <Scene 
    //      component={Chatroom}
    //      key="chatroom" initial={true} 
    //      hideNavBar={true}>
    //      </Scene>
    //      <Scene 
    //      component={Auth}
    //      key="auth" initial={true} 
    //      hideNavBar={true}>
    //      </Scene>
    //      </Stack>
    //  </Router>

    );
  }
}

export default LoadingScreen;
