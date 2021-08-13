import React, { Component } from 'react';
import { Animated,StyleSheet,Image } from 'react-native';
import { Container,Content,Text ,View,Spinner,NativeBaseProvider,Center} from 'native-base';

// *****
//  @images
// **
import Logo from "./../Images/Logo.png";
import Landing from "./../Images/Landing.png";
import { bottom, opacity } from 'styled-system';

class AnimatedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LogoAnim:new Animated.Value(0),
      LandingAnim:new Animated.Value(0),
      lSpiner:new Animated.Value(0)
    };
  }

  componentDidMount(){
    const {LogoAnim,LandingAnim,lSpiner}=this.state;
    Animated.parallel([
      Animated.spring(LogoAnim,{
        toValue:1,
        tension:10,
        friction:2,
        duration:7000,
      }).start(),

      Animated.timing(LandingAnim,{
        toValue:1,
        duration:900,
      }).start(()=>{
        Animated.spring(lSpiner,{
          toValue:1,
          tension:10,
          duration:3000,
        }).start();
    
      })
    ]).start();
  }
  render() {
    const {LogoAnim,LandingAnim,lSpiner}=this.state;
    return (
      <NativeBaseProvider>
      <Container>
        <View style={styles.content}>
      <Animated.View
       style={[
         {
           opacity:LogoAnim,
           top:LogoAnim.interpolate({
             inputRange:[0,1],
             outputRange:[1,0],
           }),
           left:LogoAnim.interpolate({
             inputRange:[0,1],
             outputRange:[-10,0]
           })
         },styles.logoTop
       ]}
       >
  
        <Image source={Logo}></Image>
        </Animated.View>
        <Animated.View style={[{opacity:LandingAnim},styles.Landing]}>
        <Image source={Landing}></Image>
        </Animated.View>
        <Animated.View  style={[
          {
            opacity:lSpiner,
            bottom:lSpiner.interpolate({
              inputRange:[0,1],
              outputRange:[-20,0]
            })
             
          }, styles.Spinner,
          ]}>
        <Spinner color="#29AFA0">

        </Spinner>
        </Animated.View>
        </View>
      </Container>
      </NativeBaseProvider>
    //  <Container style={styles.container}>
    //    <Content>
    //      <Animated.View>
    //        <Image source={Logo}></Image>
    //      </Animated.View>
    //    </Content>
    //  </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  logoTop: {
    marginBottom: 20,
    marginTop: 50,
    alignItems: 'center',
  },
  Landing: {
    marginTop: 90,
    alignItems: 'center',
  },
  Spinner: {
   marginTop:350,
    alignItems: 'center',
  },
})
export default AnimatedScreen;
