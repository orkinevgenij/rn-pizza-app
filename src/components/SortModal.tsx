import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import Modal from 'react-native-modal'
import AntDesign from 'react-native-vector-icons/AntDesign'

import colors from '../styles/colors'
import { useSelector } from 'react-redux'
import {
  filterSelector,
  setOrderType,
  setSortType,
  SortPropertyEnum,
} from '../redux/slices/filterPizzaSlice'
import { useAppDispatch } from '../redux/store'

type TSortItem = {
  name: string
  sortProperty: SortPropertyEnum
}

const sortItem: TSortItem[] = [
  { name: 'По полярності', sortProperty: SortPropertyEnum.RATING },
  { name: 'За ціною', sortProperty: SortPropertyEnum.PRICE },
  { name: 'За назвою', sortProperty: SortPropertyEnum.TITLE },
]

export const SortModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { sort } = useSelector(filterSelector)
  const dispatch = useAppDispatch()

  const onClickListItem = (obj: TSortItem) => {
    dispatch(setSortType(obj))
    setIsOpen(false)
  }

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: '#f9f9f9',
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 15,
            width: 140,
            height: 40,
          }}
          onPress={() => setIsOpen(true)}
        >
          <Text
            style={{
              textAlign: 'center',
              color: colors.orange,
              fontSize: 14,
              fontWeight: '500',
            }}
          >
            {sort.name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(setOrderType('asc'))}>
          <AntDesign
            name='arrowdown'
            size={23}
            color={colors.orange}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(setOrderType('desc'))}>
          <AntDesign
            name='arrowup'
            size={23}
            color={colors.orange}
          />
        </TouchableOpacity>
      </View>

      <Modal
        style={{
          flex: 1,
          alignItems: 'center',
        }}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        hideModalContentWhileAnimating={true}
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationInTiming={500}
        isVisible={isOpen}
        backdropOpacity={0}
        onBackdropPress={() => setIsOpen(!isOpen)}
      >
        <View
          style={{
            backgroundColor: colors.orange,
            borderColor: '#fff',
            height: 250,
            width: 250,
            borderRadius: 15,
          }}
        >
          <FlashList
            data={sortItem}
            renderItem={({ item }) => (
              <View style={{ alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity
                  onPress={() => onClickListItem(item)}
                  style={{}}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 20,
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            estimatedItemSize={200}
          />
        </View>
      </Modal>
    </>
  )
}
