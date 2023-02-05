import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import colors from '../styles/colors'
type Props = {
  onChangeCategoryId: (index: number) => void
}
const categories: string[] = ['Усі', 'М`ясні', 'Вегетаріанські', 'Сирні']

const Categories: React.FC<Props> = ({ onChangeCategoryId }) => {
  return (
    <FlashList
      data={categories}
      horizontal
      estimatedItemSize={200}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => onChangeCategoryId(index)}
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            backgroundColor: colors.gray,
            borderRadius: 15,
            paddingHorizontal: 25,
            paddingVertical: 12,
          }}
        >
          <Text style={{ fontSize: 22, color: colors.black }}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  )
}
export default memo(Categories)
