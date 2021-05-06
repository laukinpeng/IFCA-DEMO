import * as React from 'react';
import { StyleSheet, KeyboardAvoidingView, Keyboard, Text, TouchableWithoutFeedback, View, Alert} from 'react-native';
import { Button, Form, Item, Label, Input, Container } from 'native-base';
import { Picker } from 'react-native'

class registerScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {email: '', password: '', error: '', name: '', loading:false, gender: '', dob: '', address: ''}
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container style={{flex: 1}}>
            <Text style={styles.header}>Personal Details</Text>
            <Text style={styles.header2}>Please enter your detail</Text>
            <Form>
              <Item floatingLabel style={styles.inputWidth}>
                <Label>Email Address</Label>
                <Input
                  onChangeText={email => this.setState({email})}
                  value={this.state.email}
                />
              </Item>
              <Item floatingLabel style={styles.inputWidth}>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  onChangeText={password => this.setState({password})}
                  value={this.state.password}
                />
              </Item>
              <Item floatingLabel style={styles.inputWidth}>
                <Label>Name</Label>
                <Input
                  onChangeText={name => this.setState({name})}
                  value={this.state.name}
                />
              </Item>
              <Item floatingLabel style={styles.inputWidth}>
                <Label>Address</Label>
                <Input
                  onChangeText={address => this.setState({address})}
                  value={this.state.address}
                />
              </Item>
              <Text style={styles.header3}>Please select your gender</Text>
              <Item style={styles.inputWidth}>
                <Picker
                  selectedValue={this.state.gender}
                  prompt='Gender'
                  style={{color:'	#808080', width: "100%", }}
                  onValueChange={(itemValue, itemIndex) => 
                    this.setState({gender: itemValue})}
                >
                  <Picker.Item label="" value=""/>
                  <Picker.Item label="Male" value="Male"/>
                  <Picker.Item label="Female" value="Female"/>
                </Picker>
              </Item>
              <Text style={{paddingLeft: 10, paddingTop: 10, color: '#FF0000', fontWeight: 'bold' }}>{this.state.error}</Text>
            </Form>
            <View style={{paddingTop: 10}}>
              <Button rounded primary style={{alignSelf: 'center', width: '90%'}} onPress = {this.onSignUpPress}>
                <Text style={{textAlign: 'center', width: '100%', color: '#ffffff'}}>Register</Text>
              </Button>
            </View>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

export default registerScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: '#616161',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  header2: {
    fontSize: 20,
    color: '#616161',
    paddingHorizontal: 20,
    paddingBottom:20,
  },

  header3: {
    fontSize: 20,
    color: '#616161',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  inputWidth: {
    width: '93%',
  }
})