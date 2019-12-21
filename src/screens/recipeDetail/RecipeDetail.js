import React from 'react'
import { ScrollView, View, Text, Image, AsyncStorage } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Ingredients from '../../components/Ingredients/Ingredients';
import ImageCollection from '../../components/ImageCollection/ImageCollection';
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { favourite } from '../../services/MockServices'

export default class RecipeDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          nameHeart: 'md-heart-empty',
          color: '#ededed'
        }
    }
    componentDidMount () {
      const favourite = AsyncStorage.getItem('favourite');
      console.log(favourite.then(data=>console.log(data)))
    }
    heart = () => {
      const { navigation } = this.props;
      const item = navigation.getParam('item');
      favourite(item._id)

      this.setState((prevState)=>{
        if(prevState.nameHeart === "md-heart-empty")
          return {
            nameHeart: "md-heart",
            color: '#ff3030'
          } 
          else 
          return {
            nameHeart: "md-heart-empty",
            color: '#ededed'
          }
      })
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
                    <Image style={styles.timer} source={require("../../../assets/time.png")}/>
                    <Text>{item.time}'</Text>
                  </View>
                </View>
                <Ingredients ingredients={item.ingredients} title={item.title}/>
                <View style={styles.step}>
                    <Text style={styles.stepTitle}>Các bước tiến hành</Text>
                    <FlatList
                        data={item.step}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => (
                        <View>
                            <Text 
                              style={styles.stepId}>{item.id}</Text>
                            {item.photo[0] ? <ImageCollection images={item.photo} /> : null}
                            <Text style={{marginLeft: 10, marginTop: 10, fontStyle: 'italic', width: 380}}>{item.description}</Text>
                        </View>
                        )}
                    />
                </View>
            </ScrollView>
        );
    }
}