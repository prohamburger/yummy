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
      page1: 2,
      page2: 2,
      limit: 6,
      display1: false,
      display2: false,
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
              .then(data => 
                this.setState({ 
                  recipes: data.results, 
                  vegetarian: true, 
                  display2: true, 
                  display1: false 
                }))
          }
          else {
            getRecipes(1, 6)
              .then(data => this.setState({ 
                recipes: data.results, 
                display1: true 
              }))
          }
        })
    } else {
      getRecipes(1, 6)
        .then(data => this.setState({ 
          recipes: data.results, 
          display1: true 
        }))
    }
  }
  handleBackButton = () => {
    return true;
  }
  onPressRecipe = (item) => {
    this.props.navigation.navigate('RecipeDetail', { item });
  }
  showMoreRecipesVegetarian() {
    const { page2, limit, recipes} = this.state
    const { isLogged } = this.context
    if (isLogged) {
      AsyncStorage.getItem('@vegetarian')
        .then((data) => {
          if(JSON.parse(data)) {
            this.setState({ 
              display2: true, 
              display1: false 
            })
            getRecipesVegetarian(page2, limit)
              .then(data => {
                this.setState({ recipes: [...recipes, ...data.results] })
                if (!data.next) {
                  this.setState({ display2: false })
                } else {
                  this.setState({ page2: data.next.page })
                }
              }
            )
          }
      })
    }
  }
  showMoreRecipes() {
    const { page1, limit } = this.state
    const { isLogged } = this.context
    if (isLogged) {
      AsyncStorage.getItem('@vegetarian')
      .then(data => {
        if (JSON.parse(data) === false) {
          this.setState({
            display1: true, 
            display2: false
          })
          getRecipes(page1, limit).then(data => {
            this.setState({ recipes: [...this.state.recipes, ...data.results] })
            if (!data.next) {
              this.setState({ display1: false })
            } else {
              this.setState({ page1: data.next.page })
            }
          })
        } else {
          this.setState({display1: false})
        }
      })
    } else {
      this.setState({display1: true})
      getRecipes(page1, limit).then(data => {
        this.setState({ recipes: [...this.state.recipes, ...data.results] })
        if (!data.next) {
          this.setState({ display1: false })
        } else {
          this.setState({ page1: data.next.page })
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
    const { display1, display2 } = this.state
    return (
      <ScrollView style={styles.background} contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
        <Image
          style={styles.slide}
          source={require('../../../assets/background.jpg')}
        >
        </Image>
        <ScrollView style={styles.container}>
          <Text style={styles.state}>MÓN ĂN TIÊU BIỂU</Text>
          <FlatList
            numColumns={3}
            showsVerticalScrollIndicator={false}
            data={this.state.recipes}
            renderItem={this.renderRecipes}
            keyExtractor={item => `${item._id}`}
            contentContainerStyle={styles.content}
          />
          {display1 ? <TouchableOpacity onPress={() => this.showMoreRecipes()}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#FF9797' }}>Xem thêm</Text>
            </View>
          </TouchableOpacity> : null}
          {display2 ? <TouchableOpacity onPress={() => this.showMoreRecipesVegetarian()}>
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