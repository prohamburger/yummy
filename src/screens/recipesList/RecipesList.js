import React from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native'
import { getRecipesByCategoryId } from '../../services/MockServices';
import Item from '../../components/Item';
import styles from './styles'

export default class RecipesList extends React.Component{
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
      title: `${params.name}`
    }
  }

    state = {
      recipes_list: [],
      name: ''
    }
    selectRecipes = (item) => {
        this.props.navigation.navigate('RecipeDetail', {item})
    }
    async componentDidMount() {
      const { navigation } = this.props
      const category = navigation.getParam('item');
      await getRecipesByCategoryId(category._id)
      .then(data => this.setState({recipes_list: data}))
      navigation.setParams({
        name: category.name
      })
    }
    renderRecipesList = (item) => 
        <TouchableOpacity onPress={() => this.selectRecipes(item)}>
            <View style={styles.container}> 
                <Image style={styles.photo} source={{uri: item.photo_url}}/>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    render(){
        return(
            <FlatList
                data={this.state.recipes_list}
                numColumns={2}
                renderItem={({item}) => this.renderRecipesList(item)}
                keyExtractor={item => `${item._id}`}
            />
        );
    }
}