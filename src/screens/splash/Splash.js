import React from 'react';
import {
    Image,
    View,
} from 'react-native';
import styles from './styles';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Splash extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    });
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
          });
        setTimeout(() => this.props.navigation.dispatch(resetAction), 3000);        
    }
    render(){
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/yummy.png')} 
                >
                </Image>
            </View>
        );
    }

}
