import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { searchRecipes } from '../../services/MockServices'
import Item from '../../components/Item'
export default class Search extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      headerTitle: (
        <SearchBar
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            flex: 1
          }}
          inputContainerStyle={{
            backgroundColor: '#EDEDED'
          }}
          inputStyle={{
            backgroundColor: '#EDEDED',
            borderRadius: 20,
            color: 'black'
          }}
          searchIcond
          clearIcon
          //lightTheme
          round
          autoFocus 
          placeholder="Tìm kiếm món ăn"
          onChangeText={search => params.handleSearch(search)}
          value={params.data}
        />
      )
    }
  };
    state = {
      search: '',
      results: []
    }
  
  handleSearch = (search) => {
    this.setState({search})
    searchRecipes(this.state.search)
    .then(data => this.setState({results: data}))
    .catch(e => console.log(e))
  }
  getSearch = () => {
    return this.state.search
  }
  onPressRecipe = (item) =>{
    this.props.navigation.navigate('RecipeDetail', {item});
  }
  componentDidMount () {
    const { navigation } = this.props
    navigation.setParams({
      handleSearch: this.handleSearch,
      data: this.getSearch
    })
  }
  renderRecipes = (item) => (
    <TouchableOpacity onPress={()=>this.onPressRecipe(item)}>
      <Item item={item}/>
    </TouchableOpacity>
  )
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={this.state.results}
          renderItem={({item}) => this.renderRecipes(item)}
          keyExtractor={item => `${item._id}`}
          numColumns={3}
        />
      </View>

    )
  }
}