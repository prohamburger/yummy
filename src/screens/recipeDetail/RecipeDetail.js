import React, { useContext } from 'react'
import { ScrollView, View, Text, Image, AsyncStorage, Button, Alert } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Ingredients from '../../components/Ingredients/Ingredients';
import ImageCollection from '../../components/ImageCollection/ImageCollection';
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { favourite } from '../../services/MockServices'
import CartProvider, { CartContext } from '../../context/CartProvider'

export default class RecipeDetail extends React.Component{
  static navigationOptions = ({navigation}) => {
    return {
      headerTransparent: 'true',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/back.png')} style={{width: 40, height: 30, marginLeft: 5}}/>
        </TouchableOpacity>
      )
    }
  }
    constructor(props){
        super(props);
        this.state = {
          nameHeart: 'md-heart-empty',
          color: '#ff3030'
        }
    }
    componentDidMount () {
      let value = this.context

      const { navigation } = this.props;
      const item = navigation.getParam('item');
      try {
        if (value.isLogged)
          AsyncStorage.getItem('@favourite').then(data => {
            if (data.includes(item._id)) {
              this.setState({nameHeart: 'md-heart', color: '#ff3030'})
            }
          })
      }
      catch(e) {
        console.log(e)
      }
      navigation.setParams({
        goBack: this.goBack
      })
    }
    goBack() {
      this.props.navigation.goBack();
    }
    heart = () => {
      const value = this.context
      const { navigation } = this.props;
      const item = navigation.getParam('item');
      
      if (value.isLogged === true){
        this.setState((prevState)=>{
          if(prevState.nameHeart === "md-heart-empty")
            return {
              nameHeart: "md-heart",
              color: '#ff6c6c'
            } 
            else 
            return {
              nameHeart: "md-heart-empty",
              color: '#ff3030'
            }
        })
        favourite(item._id)
      }
      else
        Alert.alert('Thông báo', 'Bạn phải đăng nhập để dùng chức năng này!')
    }
    render(){
        const { navigation } = this.props;
        const item = navigation.getParam('item');
        return(
            <ScrollView>
              <Image
                  style={styles.photo}
                  source={{uri: item.photo_url}}
              >
              </Image>
              <View style={styles.content}>
                <View style={styles.wraptitle}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Icon name={this.state.nameHeart} 
                    size={28} 
                    color={this.state.color} 
                    style={styles.iconLeft}
                    onPress={this.heart}
                    />
                </View>
                <View style={styles.time}>
                  <Icon name={"md-time"} style={{color: '#FF9797'}} size={20}></Icon>
                  <Text style={{color: '#FF9797', marginLeft: 5}}> {item.time}'</Text>
                </View>
              </View>
              <Ingredients ingredients={item.ingredients} title={item.title}/>
              <View style={styles.step}>
                  <Text style={styles.stepTitle}>Các bước tiến hành</Text>
                  <FlatList
                      data={item.step}
                      renderItem={({item}) => (
                      <View>
                          <Text 
                            style={styles.stepId}>{item.id}</Text>
                          {item.photo[0] ? <ImageCollection desciption={item.description} images={item.photo} /> : null}
                          <Text style={{marginLeft: 10, marginTop: 10, fontStyle: 'italic', width: 380}}>{item.description}</Text>
                      </View>
                      )}
                      keyExtractor={item => item.id}
                  />
              </View>
            </ScrollView>
          );
    }
}
RecipeDetail.contextType = CartContext
