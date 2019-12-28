import { recipes, categories } from '../data/dataArrays';
import { Buffer } from 'buffer'
import { Alert, AsyncStorage } from 'react-native'

axios.defaults.baseURL = 'http://192.168.1.8:3000/'

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

export function RegisterUser(user) {
  try {
    axios.post('/register', {
      username: user.username,
      password: user.password
    }, {
      headers: {Authorization: `Basic ${auth}`}
    })
  } catch (e) {
    console.log(e)
  }
}
export async function LoginUser(user) {
  const auth = Buffer.from(`${user.username}:${user.password}`).toString('base64')

  AsyncStorage.setItem('auth', auth);

  try {
    const response = await axios.post('/user/login', {}, {
      headers: {Authorization: `Basic ${auth}`}
    })
    console.log(response)
    return response
  } catch (e) {
    console.log(e.response)
  }
}

export async function favourite(recipe_id) {
  const auth = AsyncStorage.getItem('auth')
  auth.then(data => console.log(data))
  try {
    await axios.post('/user/favourite', {
      favourite: recipe_id
    }, {
      headers: {
        Authorization: `Basic ${auth}`
      }
    })
  } catch (e) {
    console.log (e)
  }
}