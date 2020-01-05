import React from 'react'
import { View, Text, TextInput, Button, ImageBackground } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { RegisterUser } from '../../services/MockServices'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MenuButton from '../../components/MenuButton/MenuButton'
import Hamburger from '../../components/Hamburger/Hamburger'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class Register extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity style={styles.home} onPress={() => navigation.openDrawer()}>
        <Hamburger />
      </TouchableOpacity>
    ),
    headerTransparent: 'true',
  })
  constructor(props) {
    super(props)
    this.state = {
      displayPassword: true,
      nameEye: "ios-eye-off",
      username: "",
      password: "",
      vegetariant: false,
      radio_props: [
        { label: 'Có', value: true },
        { label: 'Không', value: false }
      ]
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
  navigationToLogin() {
    this.props.navigation.navigate('Login');
  }
  render() {
    const { displayPassword, nameEye, username, password, vegetariant } = this.state;
    return (
      <ImageBackground style={styles.container} source={require('../../../assets/background-login.jpg')}>
        <View style={styles.logo}>

        </View>
        <View>
          <Icon name={"ios-person"} size={28} color={"#ededed"} style={styles.iconLeft} />
          <TextInput
            style={styles.input}
            placeholder={"Tên đăng nhập"}
            value={this.state.username}
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
        <View style={{marginTop: 15, display: 'flex', flexDirection: 'row'}}>
        <Text style={{fontStyle: 'italic'}}>Bạn là người ăn chay?</Text>
        <RadioForm
            formHorizontal={true}
            animation={true}
          >
            {
              this.state.radio_props.map((obj, i) => (
                <RadioButton labelHorizontal={true} key={i} >
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={this.state.vegetariant === obj.value}
                    onPress={() => this.setState({vegetariant: obj.value})}
                    borderWidth={1}
                    buttonInnerColor={'blue'}
                    buttonOuterColor={this.state.vegetariant === obj.value ? 'blue' : 'blue'}
                    buttonWrapStyle={{marginLeft: 10}}
                    buttonSize={10}
                    buttonOuterSize={15}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={() => this.setState({vegetariant: obj.value})}
                    labelStyle={{fontSize: 15, color: 'blue'}}
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              ))
            }  
          </RadioForm>
          </View>
        <TouchableOpacity onPress={() => { RegisterUser({username, password, vegetariant}), this.navigationToLogin() } } style={styles.button}>
          <Text style={{color: '#fff', fontWeight: '500'}}>
            ĐĂNG KÝ
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}