import React from 'react';
import { 
    FlatList, 
    View, 
    Image,
    ScrollView,
    Text,
    Button
} from 'react-native';
import styles from './styles';
import { getRecipes } from '../../services/MockServices';
import Item from '../../components/Item';
// import { recipes } from '../../data/dataArrays'
import Hamburger from '../../components/Hamburger/Hamburger';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends React.Component {
    constructor(){
      super()
      this.state = {
        recipes: [],
        page: 2,
        limit: 6,
        display: true
      }
    }
    static navigationOptions = ({ navigation }) => {
      return {
        headerLeft: (
          <Hamburger 
              onPress={() => navigation.openDrawer()}
          />
      ),
        headerTitle: (
          <TouchableOpacity 
            style={styles.header}
            onPress={() => {
              navigation.navigate('Search')
            }}
          >
            <View>
              <Icon name="search" size={20} color="#000" style={{paddingLeft: 10, paddingTop: 6}}></Icon>
            </View>
          </TouchableOpacity>
        )
      }
    };

    componentDidMount(){
      getRecipes(1, 6)
      .then(data => {
        this.setState({recipes: data.results})
      })
    }
    handleBackButton = () => {
        return true;
      }
    onPressRecipe = (item) =>{
        this.props.navigation.navigate('RecipeDetail', {item});
    }
    showMoreRecipes(){
      getRecipes(this.state.page, this.state.limit).then(data => {
        this.setState({recipes: [...this.state.recipes, ...data.results]})
        if (!data.next) {
          this.setState({display: false})
        }
      })
      this.setState({page: this.state.page + 1})
    }
    renderRecipes = ({ item }) => (
        <TouchableOpacity onPress={()=>this.onPressRecipe(item)}>
            <Item item={item}/>
        </TouchableOpacity>  
    );
    render() {
      const { display } = this.state
        return (
            <ScrollView>
                <Image
                    style={styles.slide}
                    source={require('../../../assets/background.jpg')}
                >
                </Image>
                <FlatList
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    data={this.state.recipes}
                    renderItem={this.renderRecipes}
                    keyExtractor={item => `${item._id}`}
                    contentContainerStyle={styles.content}
                />
                {display ? <TouchableOpacity onPress={()=>this.showMoreRecipes()}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FF9797'}}>Xem thêm</Text>
                  </View>
                  </TouchableOpacity> : null}
            </ScrollView>
        );
    }
}
