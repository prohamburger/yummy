import { recipes, categories } from '../data/dataArrays';
import { Buffer } from 'buffer'
import { Alert, AsyncStorage } from 'react-native'

axios.defaults.baseURL = 'https://backend-yummy.herokuapp.com'

import axios from 'axios'

export async function getRecipes(page, limit){
    let recipes = []
    try {
      const response = await axios.get(`/recipes?page=${page}&limit=${limit}`);
      recipes = response.data
    } catch(e) {
      console.log(e)
    }
    return recipes;
}
export async function getRecipesVegetarian(page, limit){
  let recipes = []
  try {
    const response = await axios.get(`/recipes/vegetarian?page=${page}&limit=${limit}`);
    recipes = response.data
  } catch(e) {
    console.log(e)
  }
  return recipes;
}

export async function searchRecipes(keyword) {
  let results = []
  try {
    const response = await axios.get(`/recipes/search/${keyword}`)

    results = response.data
  } catch (e) {
    console.log(e)
  }
  return results
}
export async function getCategories () {
  let category = []
  try {
    const response = await axios.get(`/category`)
    category = response.data
  } catch (e) {
    console.log(e)
  }
  return category
}
export async function getRecipesByCategoryId(categoryId){
    let recipesByCategory = [];

    try {
      const response = await axios.get(`/recipes/${categoryId}`)
      recipesByCategory = response.data
    } catch (e) {
      console.log(e)
    }
    // recipes.map(data => {
    //     if(data.categoryId === categoryId){
    //         recipesByCategory.push(data)
    //     }
    // })
    return recipesByCategory;
}

export async function RegisterUser(user) {
  console.log(user);
  try {
    const response = await axios.post('/register', {
      username: user.username,
      password: user.password,
      vegetarian: user.vegetariant
    })
    if (response.status === 200) {
      Alert.alert('Thông báo', 'Đăng ký thành công')
    }
  } catch (e) {
    console.log(e.response.data.message )
    if (e.response.status === 400 && e.response.data.message === 'Đã trùng')
      Alert.alert('Thông báo', 'Tài khoản đã tồn tại')
    else Alert.alert('Thông báo', e.response.data.message)
  }
}
export async function LoginUser(user) {
  const auth = Buffer.from(`${user.username}:${user.password}`).toString('base64')

  AsyncStorage.setItem('auth', auth);

  try {
    const response = await axios.post('/user/login', {}, {
      headers: { Authorization: `Basic ${auth}` }
    })
    return response
  } catch (e) {
    console.log(e.response.message)
    Alert.alert('Thông báo', 'Sai thông tin đăng nhập');
  }
}

export async function favourite(recipe_id) {
  let token
  await AsyncStorage.getItem('auth').then(data => token = data)
  try {
    const response = await axios.put('/user/favourite', {
      favourite: recipe_id
    }, {
      headers: {
        Authorization: `Basic ${token}`
      }
    })
    await AsyncStorage.setItem('@favourite', JSON.stringify(response.data.favourite))
  } catch (e) {
    console.log (e.response)
  }
}

export async function getFavouriteRecipe(array) {
  let listFavourite = []
    try {
      const response = await axios.post(`recipes/favourite`, {favourite: array})
      listFavourite = response.data
    } catch(e) {
      console.log(e)
    }
  return listFavourite
}