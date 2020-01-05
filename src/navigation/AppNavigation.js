import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../screens/home/Home';
import Splash from '../screens/splash/Splash';
import Categories from '../screens/categories/Categories';
import Drawer from '../components/Drawer/Drawer';
import RecipeDetail from '../screens/recipeDetail/RecipeDetail';
import RecipesList from '../screens/recipesList/RecipesList';
import Search from '../screens/Search/Search';
import Cart from '../screens/Cart/Cart'
import User from '../screens/User/User'
import Login from '../screens/Auth/Login'
import AuthLoadingScreen from '../screens/Auth/AuthLoadingScreen';
import Register from '../screens/Register/Register'

const AppNavigator = createStackNavigator({
    Home: Home,
    Splash: Splash,
    Categories: Categories,
    RecipeDetail: RecipeDetail,
    RecipesList: RecipesList,
    Search: Search,
    Cart: Cart,
    User: User,
},
{
    initialRouteName: 'Home'
});

const AuthStack = createStackNavigator({ Login: Login, Register: Register });

const DrawerStack = createDrawerNavigator({
    Main: AppNavigator,
    Auth: AuthStack,
    AuthLoadingScreen: AuthLoadingScreen
},
{
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: Drawer
})
export default AppContainer = createAppContainer(DrawerStack)