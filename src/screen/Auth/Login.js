import React, { Component } from 'react';
import { Image, StyleSheet, ImageBackground, Animated } from 'react-native';
import { View, Text, Form, Item, Input, Button, NativeBaseProvider, FormControl } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import Fontiso from 'react-native-vector-icons/Fontisto';
import MatCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

/** Image */
import loginBg from '../../Images/loginBg.png';
import Logo from '../../Images/Logo.png';
import Landing from '../../Images/Landing.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Actions } from 'react-native-router-flux';
import Register from "./Register";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.parallel([
      Animated.spring(this.state.logoAnim, {
        toValue: 1,
        tension: 2,
        friction: 1,
        duration: 1000,

      }).start()
    ]);
  }
  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <View style={styles.content}>
            <ImageBackground source={loginBg}
              style={{ width: '100%', height: '100%', flex: 1 }}
              resizeMode={'stretch'}>
              <View style={styles.top}>
                <Image source={Landing} style={styles.landing}></Image>
              </View>
              {/* Last */}
              <View style={styles.middle}>
                <View style={styles.register}>
                  <TouchableOpacity style={styles.regText}>
                    <Text style={styles.regText}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.regText}>
                    <Text style={styles.regText}>
                      <AntDesign name="right" />
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* Form area */}

                <View style={styles.formArea}>
                  <Animated.View
                    style={[
                      {
                        opacity: this.state.logoAnim,
                        top: this.state.logoAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-2, 0],
                        }),
                      },
                      {
                        alignItems: 'center',
                      },
                    ]}>
                    <Image source={Logo} />
                    <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>

                      <FormControl style={styles.mainForm}>
                       <View style={styles.formItems}>
                       {/* <Icon name="comments" size={30} color="#900" /> */}
                        {/* <Fontiso name="email" style={styles.Icon} />   */}
                        <Input  placeholder="E-mail"
                          style={styles.Input} />
                          </View>
                          <View style={styles.formItems}>
                        <Input  placeholder="Password"
                          style={styles.Input} />
                      </View>
                     
                      </FormControl>

                    </View>
                  </Animated.View>
                  <Animated.View
                  style={[{opacity:this.state.logoAnime}, styles.Buttons]}>
                  <Button
                    block
                    style={styles.btnGrp}
                    onPress={()=>this.props.navigation.navigate('Chatroom')}
                   >
                    <Text style={styles.btnText}>Login</Text>
                  </Button>
                </Animated.View>
                <Animated.View
                  style={[
                    {opacity:this.state.logoAnime},
                    styles.Buttons,
                    styles.question,
                  ]}>
                  <Text style={styles.do}>Do you not have an account?</Text>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')}
                    style={[styles.do]}
                   >
                    <Text
                      style={[styles.do, {color: '#29AFA0', marginLeft: 15}]}>
                      Sigup
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </NativeBaseProvider>
    );
  }
}

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  top: {
    position: 'relative',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    height: 222,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
  },
  landing: {
    height: 170,
    width: 170,
    marginTop: 49.5,
  },
  bottom: {
    position: 'relative',
    height: '100%',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    backgroundColor: '#ffffff',
  },
  middle: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    zIndex: 5,
    backgroundColor: 'transparent',
    paddingLeft: 30,
    paddingRight: 30,
  },
  register: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 37,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  regText: {
    fontFamily: 'Cairo-Bold',
    fontWeight: 'normal',
    color: '#E85B1C',
  },
  formArea: {
    marginTop: 155,
    paddingLeft: 29.9,
    paddingRight: 29.9,
    width: '100%',
    borderRadius: 10,
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 2,
  },
  mainForm: {
    marginTop: 20,
  },
  formItems: {
    marginTop: 15,
    // borderWidth: 0.5,
    // borderColor: '#29AFA0',
    // borderRadius: 10,
    // flexDirection:'row'
  },
  Input: {
    fontFamily: 'Cairo-Bold',
    fontWeight: 'normal',
    fontSize: 15,
  },
  Icon: {
    color: '#959595',
    marginRight: 10,
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
  },
  btnGrp: {
    marginTop: 25,
    backgroundColor: '#29AFA0',
  },
  btnText: {
    color: '#ffffff',
    fontFamily: 'Cairo',
    fontWeight: 'normal',
  },
  question: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  do: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
  },
});

