import * as React from 'react';
import { StyleSheet, KeyboardAvoidingView, Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import { Button, Form, Item, Label, Input, Container } from 'native-base';

class loginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: '', error: '', userName: '', loading: false}
  }
  
  register = async () => {
    console.log('register mou')
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container style={{flex: 1}}>
            <Text style={styles.HVAS}>HVAS</Text>
            <Form>
              <Item floatingLabel style={styles.inputWidth}>
                <Label>Email Address</Label>
                <Input
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                />
              </Item>
              <Item floatingLabel style={styles.inputWidth}>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                />
              </Item>
              <Text style={{paddingLeft: 10, paddingTop: 10, color: '#FF0000', fontWeight: 'bold' }}>{this.state.error}</Text>
            </Form>
            <View style={{paddingTop: 50}}>
              <Button rounded primary style={{alignSelf: 'center', width: '90%'}} onPress = {this.onLoginPress}>
                <Text style={{textAlign: 'center', width: '100%', color: '#ffffff', fontWeight: 'bold',}}>Login In</Text>
              </Button>
            </View>
            <View style={{paddingTop: 10}}>
              <Button rounded light transparent style={{alignSelf: 'center', width: '90%'}} onPress = {this.register}>
                <Text style={{textAlign: 'center', width: '100%', color: '#000000', fontWeight: 'bold',}}>Register</Text>
              </Button>
            </View>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default loginScreen

const styles = StyleSheet.create({
  HVAS: {
    fontSize: 100,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 50,
  },

  view: {
    flex: 2,
    borderTopStartRadius: 130,
  },

  inputWidth: {
    width: '93%',
  }
});
