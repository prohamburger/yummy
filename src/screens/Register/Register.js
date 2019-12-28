import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { RegisterUser } from '../../services/MockServices'

export default class Register extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      displayPassword: true,
      nameEye: "ios-eye-off",
      username: "",
      password: ""
    }
    this.onPressEye = this.onPressEye.bind(this);
  }
  onPressEye(){
    this.setState((prevState)=>{
      if(prevState.nameEye === "ios-eye-off")
        return {
          displayPassword: !prevState.displayPassword,
          nameEye: "ios-eye"
        } 
        else 
        return {
          displayPassword: !prevState.displayPassword,
          nameEye: "ios-eye-off"
        }
    })
  }
  componentDidMount(){
  }
  render(){
    const { displayPassword, nameEye } = this.state;
      return(
          <View style={styles.container}>
          <View style={styles.logo}> 
    
          </View>
          <View>
            <Icon name={"ios-person"} size={28} color={"#ededed"}  style={styles.iconLeft}/>
            <TextInput
              style={styles.input}
              placeholder={"Tên đăng nhập"}
              value={this.state.username}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
            >
            </TextInput>
          </View>
          <View>
              <Icon name={"ios-lock"} size={28} color={"#ededed"}  style={styles.iconLeft}/>
              <TextInput
                style={styles.input}
                placeholder={"Mật khẩu"}
                secureTextEntry={displayPassword}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              >
              </TextInput>
              <Icon 
                name={ nameEye } 
                size={28} 
                color={"#ededed"} 
                style={styles.iconRight}
                onPress={this.onPressEye}
                />
          </View>
            <Button
              title={"Đăng ký"}
              color={"#FF9797"}
              onPress={this.RegisterUser}
            >
            </Button>
            <View
              style={styles.line}
            >
              <Text>{this.state.password}</Text>
            </View>
      </View>
      );
  }
}