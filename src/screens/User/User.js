import React from 'react'
import { View, Text, TextInput, Button, AsyncStorage, Image, ImageBackground } from 'react-native'
import { CartContext } from '../../context/CartProvider'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import { getFavouriteRecipe } from '../../services/MockServices'
import Hamburger from '../../components/Hamburger/Hamburger'
import { styles } from './styles'
const whiteHamburger = require('../../../assets/hamburger-icon--white.png')
import Icon from 'react-native-vector-icons/Ionicons';

export default class User extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      headerStyle: ({
        backgroundColor: '#FF9797',
      }),
      headerTitleStyle: {
        color: '#fff',
      },
      headerLeft: (
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.openDrawer()}>
          <Hamburger src={whiteHamburger} />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => params._signOutAsync()}>
          <Text style={{ paddingRight: 10, color: '#fff' }}>ĐĂNG XUẤT</Text>
        </TouchableOpacity>
      ),
      title: "Trang cá nhân"
    }
  }

  state = {
    username: '',
    favourite: [],
    favouriteList: [],
    isEmpty: true,
    loaded: true,
    vegetarian: false
  }
  subs = []

  componentWillMount() {
    this.subs = [
      this.props.navigation.addListener('willFocus', this.componentDidFocus.bind(this)),
    ];
    const { navigation } = this.props
    navigation.setParams({
      _signOutAsync: this._signOutAsync
    })
  }
  async componentDidFocus() {
    await AsyncStorage.getItem('@user')
      .then(data => {
        this.setState({ username: JSON.parse(data) })
      })
      .catch(e => {
        console.log(e)
      })
    await AsyncStorage.getItem('@vegetarian')
      .then(data => {
        this.setState({ vegetarian: JSON.parse(data) })
      })
      .catch(e => {
        console.log(e)
      })
    await AsyncStorage.getItem('@favourite')
      .then(data => {
        let temp = JSON.parse(data)

        this.setState({ favourite: temp })

        getFavouriteRecipe(this.state.favourite)
          .then(data => {
            if (data.length !== 0)
              this.setState({ favouriteList: data, isEmpty: false, loaded: false })
            else
              this.setState({ isEmpty: true, loaded: false })
          })
      })
  }
  componentWillUnmount() {
    this.subs.forEach(sub => sub.remove());
  }
  onPressRecipe(item) {
    this.props.navigation.navigate('RecipeDetail', { item })
  }
  renderRecipes = ({ item }) => (
    <TouchableOpacity onPress={() => this.onPressRecipe(item)}>
      <View style={styles.recipeContainer}>
        <Image
          style={styles.recipePhoto}
          source={{ uri: item.photo_url }}
        >
        </Image>
        <Text style={styles.recipeTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
  _signOutAsync = async () => {
    const { toggleLogin } = this.context
    toggleLogin()
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  };
  render() {
    const { vegetarian } = this.state
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground source={require('../../../assets/pattern.png')} style={styles.profile}>
            <View>
              <Image style={styles.avatar} source={require('../../../assets/149071.png')} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ fontWeight: '500', marginRight: 5 }}>{this.state.username}</Text>
              {vegetarian ? <Icon name={"md-leaf"} size={20} color={"green"} style={styles.iconLeft} /> : null}
            </View>
          </ImageBackground>
          {!this.state.loaded ? 
            !this.state.isEmpty ?
            <View style={styles.content}>
              <FlatList
                data={this.state.favouriteList}
                renderItem={this.renderRecipes}
                keyExtractor={(item, index) => `${item._id}`}
                numColumns={3}
              >
              </FlatList>
            </View> : <Image source={require('../../../assets/family.png')} style={{ width: 400, height: 400 }} /> : null}
        </View>
      </View>
    );
  }
}
User.contextType = CartContext
