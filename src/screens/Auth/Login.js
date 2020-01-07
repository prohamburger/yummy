import React from 'react';
import { View, TextInput, Button, Text, AsyncStorage, Alert, ImageBackground, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LoginUser, isLoggedIn } from '../../services/Services';
import { CartContext } from '../../context/CartProvider'
import MenuButton from '../../components/MenuButton/MenuButton'
import Hamburger from '../../components/Hamburger/Hamburger'

class Login extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity style={styles.home} onPress={() => navigation.openDrawer()}>
        <Hamburger />
      </TouchableOpacity>
    ),
    headerTransparent: 'true',
  })
  constructor(props) {
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
  onPressEye() {
    this.setState((prevState) => {
      if (prevState.nameEye === "ios-eye-off")
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
    const user = { username: this.state.username, password: this.state.password }
    LoginUser(user)
      .then(data => {
        if (data.status === 200 && data.data.state === 'Success') {
          AsyncStorage.setItem('@favourite', JSON.stringify(data.data.user[0].favourite))
          AsyncStorage.setItem('@user', JSON.stringify(data.data.user[0].username))
          AsyncStorage.setItem('@vegetarian', JSON.stringify(data.data.user[0].vegetarian))
          toggleLogin()
          this.props.navigation.navigate('User')
        } else {
          Alert.alert('Thông báo', 'Sai thông tin đăng nhập');
        }
      })
      .catch(e => {
        console.log(e.data.message)
      })
  }
  render() {
    const { displayPassword, nameEye } = this.state;
    return (
      <ImageBackground style={styles.container} source={require('../../../assets/background-login.jpg')}>
        <View>
          <Icon name={"ios-person"} size={28} color={"#ededed"} style={styles.iconLeft} />
          <TextInput
            style={styles.input}
            placeholder={"Tên đăng nhập"}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
          >
          </TextInput>
        </View>
        <View>
          <Icon name={"ios-lock"} size={28} color={"#ededed"} style={styles.iconLeft} />
          <TextInput
            style={styles.input}
            placeholder={"Mật khẩu"}
            secureTextEntry={displayPassword}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          >
          </TextInput>
          <Icon
            name={nameEye}
            size={28}
            color={"#ededed"}
            style={styles.iconRight}
            onPress={this.onPressEye}
          />
        </View>
        <CartContext.Consumer>
          {({ toggleLogin }) => (
            <TouchableOpacity style={styles.button} onPress={() => { this.submit(toggleLogin) }}>
              <Text style={{color: 'white', fontWeight: '500'}}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
          )}
        </CartContext.Consumer>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{marginTop: 10, color: '#666666' }}>
              Bạn chưa có tài khoản? <Text style={{fontStyle: 'italic', color: 'blue'}}>Đăng ký</Text>
            </Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>

    );
  }
}
export default Login;