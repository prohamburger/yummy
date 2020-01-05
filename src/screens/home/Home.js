import React from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView,
  Text,
  AsyncStorage
} from 'react-native';
import styles from './styles';
import { getRecipes, getRecipesVegetarian } from '../../services/MockServices';
import Item from '../../components/Item';
// import { recipes } from '../../data/dataArrays'
import Hamburger from '../../components/Hamburger/Hamburger';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { CartContext } from '../../context/CartProvider';
import { recipes } from '../../data/dataArrays';

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      page: 2,
      limit: 6,
      display: true,
      vegetarian: false
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.openDrawer()}>
          <Hamburger />
        </TouchableOpacity>
      ),
      headerTitle: (
        <TouchableOpacity
          style={styles.header}
          onPress={() => {
            navigation.navigate('Search')
          }}
        >
          <View>
            <Icon name="search" size={20} color="#000" style={{ paddingLeft: 10, paddingTop: 6 }}></Icon>
          </View>
        </TouchableOpacity>
      )
    }
  };

  componentDidMount() {
    this.props.navigation.addListener('willFocus', this.componentWillFocus.bind(this))
  }
  async componentWillFocus() {
    const { isLogged } = this.context
    if (isLogged) {
      await AsyncStorage.getItem('@vegetarian')
      .then((data) => {
        if (JSON.parse(data)) {
          getRecipesVegetarian(1, 6)
          .then(data => this.setState({recipes: data.results, vegetarian: true}))
        }
        else {
          getRecipes(1, 6)
          .then(data => this.setState({recipes: data.results}))
        }
      })
    } else {
      getRecipes(1, 6)
      .then(data => this.setState({recipes: data.results}))
    }
  }
  handleBackButton = () => {
    return true;
  }
  onPressRecipe = (item) => {
    this.props.navigation.navigate('RecipeDetail', { item });
  }
  showMoreRecipes(vegetarian = false) {
    const { page, limit, recipes } = this.state
    if (vegetarian) {
      getRecipesVegetarian(page, limit)
      .then(data => {
          this.setState({recipes: [...recipes, ...data.results], page: page + 1})
          if (!data.next) {
            this.setState({ display: false })
          } 
        }
      )
    } else {
      getRecipes(page, limit).then(data => {
        this.setState({ recipes: [...this.state.recipes, ...data.results], page: page + 1})
        if (!data.next) {
          this.setState({ display: false })
        }
      })
    }
  }
  renderRecipes = ({ item }) => (
    <TouchableOpacity onPress={() => this.onPressRecipe(item)}>
      <Item item={item} />
    </TouchableOpacity>
  )
  componentWillUnmount() {
    this.props.navigation.addListener('didFocus', this.componentDidFocus.bind(this)).remove()
  }
  render() {
    const { display } = this.state
    return (
      <ScrollView style={styles.background} contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
        <Image
          style={styles.slide}
          source={require('../../../assets/background.jpg')}
        >
        </Image>
        <ScrollView style={styles.container}>
          <Text style={styles.state}>MÓN ĂN MỚI NHẤT</Text>
          <FlatList
            numColumns={3}
            showsVerticalScrollIndicator={false}
            data={this.state.recipes}
            renderItem={this.renderRecipes}
            keyExtractor={item => `${item._id}`}
            contentContainerStyle={styles.content}
          />
          {display ? <TouchableOpacity onPress={() => this.showMoreRecipes(this.state.vegetarian)}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#FF9797' }}>Xem thêm</Text>
            </View>
          </TouchableOpacity> : null}
        </ScrollView>
      </ScrollView>
    );
  }
}
Home.contextType = CartContext