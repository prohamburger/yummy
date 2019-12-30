import React from 'react'
import {View, Text, TextInput, Button, AsyncStorage} from 'react-native'
import { CartContext } from '../../context/CartProvider'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import { getFavouriteRecipe } from '../../services/MockServices'
import Item from '../../components/Item'
import Hamburger from '../../components/Hamburger/Hamburger'
import { styles } from './styles'
export default class User extends React.Component{
  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state
    return {
      headerStyle: ({
        backgroundColor: '#FF9797',
      }),
      headerTitleStyle: {
        color: '#fff',
      },
      headerLeft: (
        <Hamburger 
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerRight: (
      <TouchableOpacity onPress={() => params._signOutAsync()}>
        <Text style={{paddingRight: 10, color: '#fff'}}>ĐĂNG XUẤT</Text>
      </TouchableOpacity>
      ),
      title: "Trang cá nhân"
    }
  }

  state = {
    username: '',
    favourite: [],
    favouriteList: []
  }
  subs = []

  componentDidMount() {
    this.subs = [
      this.props.navigation.addListener('didFocus', this.componentDidFocus.bind(this)),
    ];
    const { navigation } = this.props
    navigation.setParams({
      _signOutAsync: this._signOutAsync
    })
  }
  componentDidFocus() {
    AsyncStorage.getItem('@user')
    .then(data => {
      this.setState({username: JSON.parse(data)})
    })
    .catch(e => {
      console.log(e)
    })
    AsyncStorage.getItem('@favourite')
    .then(data => {
      let temp = JSON.parse(data)
      let favourite = temp.map(id => ({id}))

      this.setState({favourite})

      getFavouriteRecipe(this.state.favourite)
      .then(data => {
        this.setState({favouriteList: data})
      })
    })
  }
  componentWillUnmount() {
    this.subs.forEach(sub => sub.remove());
  }
  onPressRecipe(item) {
    this.props.navigation.navigate('RecipeDetail', {item})
  }
  renderRecipes = ({ item }) => (
    <TouchableOpacity onPress={() => this.onPressRecipe(item)}>
      <Item item={item} />
    </TouchableOpacity>
  )
  _signOutAsync = async () => {
    const { toggleLogin } = this.context
    toggleLogin()
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  };
  render() {
     return (
      <View>
          <View style={styles.container}>
            <View style={styles.profile}>
              <Text>{this.state.username}</Text>
            </View>
            <View style={styles.content}>
              <FlatList
                data={this.state.favouriteList}
                renderItem={this.renderRecipes}
                keyExtractor={(item, index) => `${item._id}`}
                numColumns={3}
              >
              </FlatList>
            </View>
          </View>
      </View>
    );
  }
}
User.contextType = CartContext
