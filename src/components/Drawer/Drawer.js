import React from 'react'
import { View, Image } from 'react-native';
import MenuButton from '../MenuButton/MenuButton';
import styles from './styles';
import { CartContext } from '../../context/CartProvider'

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <Image style={styles.drawer} source={require('../../../assets/drawer.png')}></Image>
        <View style={styles.container}>
          <MenuButton
            title={'TRANG CHỦ'}
            source={require('../../../assets/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
              }
            }
          />
          <MenuButton
            title={'PHÂN LOẠI'}
            source={require('../../../assets/categories.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
              }
            }
          />
          <MenuButton
            title={'MUA SẮM'}
            source={require('../../../assets/shopping-cart.png')}
            onPress={() => {
              navigation.navigate('Cart');
              navigation.closeDrawer();
              }
            }
          />
          <CartContext.Consumer>
            {( { isLogged, toggleLogin } ) => ( isLogged ?
              <MenuButton
              title={'TRANG CÁ NHÂN'}
              source={require('../../../assets/user.png')}
              onPress={() => {
                if(isLogged)
                  navigation.navigate('User');
                navigation.closeDrawer();
                }
              }
            /> :
            <MenuButton
            title={'ĐĂNG NHẬP'}
            source={require('../../../assets/enter.png')}
            onPress={() => {
              isLogged ? navigation.navigate('User') : navigation.navigate('Login');
              navigation.closeDrawer();
              }
            }
          /> 
            )}
          </CartContext.Consumer>
        </View>
      </View>
    );
  }
}