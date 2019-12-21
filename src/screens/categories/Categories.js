import React from 'react';
import { View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import Category from '../../components/Category/Category';
import { getCategories } from '../../services/MockServices';
import styles from './styles'
export default class Categories extends React.Component {
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
    componentDidMount() {
      getCategories().then(data => this.setState({categories: data}))
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
            >
            </FlatList>
        );
    }
}