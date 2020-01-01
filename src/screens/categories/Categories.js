import React from 'react';
import { View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
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
          categories: []
        }
        this.selectCategory = this.selectCategory.bind(this);
    }
    selectCategory(item){
        this.props.navigation.navigate('RecipesList', { item })
    }
    async componentDidMount() {
      await getCategories().then(data => this.setState({categories: data}))
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
            <FlatList
                data={this.state.categories}
                alwaysBounceVertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={this.renderCategories}
                keyExtractor={item => item._id}
            >
            </FlatList>
        );
    }
}