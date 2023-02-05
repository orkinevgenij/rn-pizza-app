import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { useSelector } from 'react-redux'
import { cartSelector } from '../redux/slices/cartSlice'
import { CartScreen } from '../screens/CartScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { OrderScreen } from '../screens/OrderScreen'
import colors from '../styles/colors'
import { HomeStackNavigation, HomeStackParams } from '../types/types'

const HomeStack = createNativeStackNavigator<HomeStackParams>()

type TProps = {
  navigation: HomeStackNavigation
}
export const Navigation: React.FC = () => {
  const { totalPrice } = useSelector(cartSelector)

  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
          headerTitleStyle: {
            color: colors.orange,
            fontSize: 25,
          },
          animation: 'fade',
        }}
      >
        <HomeStack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={({ navigation }: TProps) => ({
            headerLeft: () => (
              <Image
                style={{ width: 50, height: 50, marginRight: 10 }}
                source={require('../assets/img/logo.png')}
              />
            ),
            headerTitle: 'Hot Pizza',
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
                {totalPrice > 0 && (
                  <Text style={{ color: colors.orange, fontSize: 15 }}>{totalPrice} грн</Text>
                )}
              </TouchableOpacity>
            ),
          })}
        />
        <HomeStack.Screen
          name='CartScreen'
          component={CartScreen}
          options={{
            title: 'Кошик',
            animation: 'slide_from_right',

            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: colors.black, fontSize: 18, fontWeight: '400' }}>
                  Разом:{' '}
                </Text>
                <Text style={{ fontSize: 18, color: colors.orange, fontWeight: '800' }}>
                  {totalPrice} грн.
                </Text>
              </View>
            ),
          }}
        />
        <HomeStack.Screen
          name='OrderScreen'
          component={OrderScreen}
          options={{
            title: 'Ваш заказ оформлен',
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  )
}
