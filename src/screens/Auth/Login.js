import React from 'react';
import { View, TextInput, Button, Text, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LoginUser, isLoggedIn } from '../../services/MockServices';
import { CartContext } from '../../context/CartProvider'
import MenuButton from '../../components/MenuButton/MenuButton'

class Login extends React.Component{
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <MenuButton
      title={'TRANG CHỦ'}
      onPress={() => {
        navigation.navigate('Home');
        }
      }
    />
    ),
  })
    constructor(props){
        super(props);
        this.state = { 
          displayPassword: true,
          nameEye: "ios-eye-off",
          username: "",
          password: "",
          loggedIn: false
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
    submit = (toggleLogin) => {
      const user = {username: this.state.username, password: this.state.password}
      LoginUser(user)
      .then(data => {
        if(data.status === 200 && data.data.state === 'Success'){
          AsyncStorage.setItem('@favourite', JSON.stringify(data.data.user[0].favourite))
          AsyncStorage.setItem('@user', JSON.stringify(data.data.user[0].username))
          toggleLogin()
          this.props.navigation.navigate('User')
        } else {
          alert('Sai thông tin đăng nhập');
        }
      })
      .catch(e => {
        console.log(e)
      })
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
            <CartContext.Consumer>
              {({toggleLogin}) => (
              <TouchableOpacity>
                <Button
                title={"Đăng nhập"}
                color={"#FF9797"}
                onPress={()=>{this.submit(toggleLogin)}}
              />
              </TouchableOpacity>
              )}
            </CartContext.Consumer>
              <View
                style={styles.line}
              >
                <Text>Bạn chưa có tài khoản?</Text><TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}><Text style={{fontStyle: 'italic'}}>Đăng ký</Text></TouchableOpacity>
              </View>
        </View>
        );
    }
}
export default Login;