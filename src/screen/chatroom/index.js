import React, {Component, Fragment} from 'react';
import {StyleSheet, Animated, FlatList, Image, YellowBox} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Content,
  Text,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Footer,
  Title,
  Input,
  Button,
  Header,
} from 'native-base';

/** Images */
import Boy from '../../Images/boy.png';
import Add from '../../Images/add.png';
import lego from '../../Images/lego.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { marginRight } from 'styled-system';

/** Chatroom actions */
// import {
//   loadMessages,
//   joinChatroom,
//   disconnectChatRoom,
//   sendMessage,
// } from '../../store/actions/chatActions';
// import {logout} from '../../store/actions/authActions';

/** ignore warnings */
// YellowBox.ignoreWarnings(['Remote debugger']);

class Chatroom extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      data:[{id:1,name:'BoltSkills', msgid:'55666667'}]
    };
  }
  renderItem = ({item}) => {
   return(<ListItem>
       <Fragment>
          
             <Image  style={styles.left} source={lego} />
           
      
            <Body style={styles.chatBody} >
              <TouchableOpacity>
                <Text note style={styles.chatname}>
                 {'samul authony'}
                </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.chatmsg}>i am a dev,subscroibe now</Text>
              </TouchableOpacity>
            </Body>
            
          </Fragment>
   </ListItem>)
      }
   render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.chatroomHeader}>
          <Left>
            <Button transparent>
              <Ionicons name="ios-menu" style={styles.chatHeaderIcons} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#FB1963'}}>Chatroom</Title>
          </Body>
          <Right>
            <Button
              transparent>
              <Ionicons
                name="ios-close-circle-outline"
                style={styles.chatHeaderIcons}
              />
            </Button>
          </Right>
      </Header>
      <Content style={styles.container}>
         
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={item => item.msgid}
              />
               
        
        </Content>
        <Footer style={styles.footer}>
          <Input
            style={styles.Input}
            placeholderTextColor="#2E2D2C"
            placeholder="Type something"
            clearButtonMode={'always'}
            value={'some value'}
           />

          <TouchableOpacity
            style={{display: 'flex', alignItems: 'center'}}>
            <Image source={Add} />
          </TouchableOpacity>
        </Footer>
      </Container>
    );
  }
}
export default Chatroom

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FA',
  },
  chatroomHeader: {
    backgroundColor: '#ffffff',
  },
  chatHeaderIcons: {
    color: '#FB1963',
    fontFamily: 'SF-UI-Display-Bold',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  chatList: {
    marginTop: 10,
    marginBottom: 5,
  },
  chatBody: {
    backgroundColor: '#ffffff',
    borderRadius: 68,
    marginLeft: 9,
    paddingLeft: 15,
    
  },
  chatname: {
    color: '#95989A',
    marginBottom: 3,
    textTransform: 'capitalize',
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 12,
  },
  chatmsg: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 16,
    color: '#2E2D2C',
  },
  footer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 22,
    marginBottom: 16,
    marginLeft: 26,
    paddingLeft: 22,
    paddingTop: 14,
    paddingBottom: 16,
    paddingRight: 22.6,
  },
  Input: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 16,
    color: '#2E2D2C',
    backgroundColor: '#ffffff',
    marginRight: 7,
    borderRadius: 10,
    paddingLeft: 15,
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    marginRight:22,
    alignItems: 'center',
  },
  right: {
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
  },
});
