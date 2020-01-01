import React from 'react';
import { View, FlatList, TouchableOpacity, TouchableHighlight, Image, ScrollView } from 'react-native';
import Category from '../../components/Category/Category';
import { getCategories } from '../../services/MockServices';
import styles from './styles'
export default class Categories extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      headerStyle: ({
        backgroundColor: '#FF9797',
      }),
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
      title: 'Phân loại'
    }
  }
    constructor() {
        super();
        this.state = {
          categories: [],
          categories1: [],
        }
        this.selectCategory = this.selectCategory.bind(this);
    }
    selectCategory(item){
        this.props.navigation.navigate('RecipesList', { item })
    }
    async componentDidMount() {
      await getCategories()
      .then(data => {
        let categories = []
        for (let i = 0; i < 4; i++){
          categories.push(data[i])
        }
        let categories1 = []
        categories1.push(data[4])

        let categories2 = []
        categories2.push(data[5])
        this.setState({categories, categories1, categories2})
      })
    }

    renderCategories = ({ item }) => (
        <View style={styles.categoriesItemContainer}>
            <Category
                onPress={() => this.selectCategory(item)}
                name={item.name}
                source={item.photo_url}
            />
        </View>

    )

    render() {
        return (
          <ScrollView>
            <Image source={require('../../../assets/meat.jpg')} style={styles.meat}/>
            <FlatList
                data={this.state.categories}
                alwaysBounceVertical
                showsVerticalScrollIndicator={false}
                numColumns={1}
                renderItem={this.renderCategories}
                keyExtractor={item => item._id}
            >
            </FlatList>
            <Image source={require('../../../assets/vegetable.jpg')} style={styles.meat}/>
            <FlatList
                data={this.state.categories2}
                alwaysBounceVertical
                showsVerticalScrollIndicator={false}
                renderItem={this.renderCategories}
                keyExtractor={item => item._id}
            >
            </FlatList>
          </ScrollView>
        );
    }
}