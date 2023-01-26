import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Image, Touchable, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { CartScreen } from '../screens/CartScreen'
import { HomeScreen } from '../screens/HomeScreen'
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../styles/colors'
import { useSelector } from 'react-redux'
import { cartSelector } from '../redux/slices/cartSlice'

const HomeStack = createNativeStackNavigator()

export const Navigation: React.FC = () => {
  const { totalPrice } = useSelector(cartSelector)

  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name='Home'
          component={HomeScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Image
                style={{ width: 50, height: 50, marginRight: 10 }}
                source={require('../assets/img/logo.png')}
              />
            ),
            headerTitle: 'Hot Pizza',
            headerTitleStyle: {
              color: colors.orange,
              fontSize: 25,
            },
            headerRight: () => (
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                }}
                onPress={() => {
                  navigation.navigate('CartScreen')
                }}
              >
                <Entypo
                  name='shopping-cart'
                  size={25}
                  color={colors.orange}
                />
                <Text style={{ color: 'red', fontSize: 15 }}>{totalPrice} грн</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <HomeStack.Screen
          name='CartScreen'
          component={CartScreen}
          options={{
            title: 'Кошик',
            headerTitleStyle: {
              color: colors.orange,
              fontSize: 25,
            },
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  )
}
