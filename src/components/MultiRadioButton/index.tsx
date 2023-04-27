import React, { FunctionComponent, useState } from 'react'
import { View } from 'react-native'

import { RadioButton } from './RadioButton'

interface OwnProps {
  values?: any
  onPress?: (val?: any) => void
  isSwapTextToLeft?: boolean
}

type Props = OwnProps
export const MultiRadioButton: FunctionComponent<Props> = (props) => {
  const { values, isSwapTextToLeft = false, onPress } = props
  const [currentSelectedItem, setCurrentSelectedItem] = useState(0)

  const _onPress = (idx: any) => {
    onPress?.(idx)
    setCurrentSelectedItem(idx)
  }

  const _renderRadioButtons = () => {
    return (values || [])?.map(
      (
        listItem: { text: string | undefined },
        idx: React.Key | null | undefined
      ) => {
        let isChecked = currentSelectedItem === idx ? true : false
        return (
          <RadioButton
            key={idx}
            isSwapTextToLeft={isSwapTextToLeft}
            onRadioButtonPress={() => _onPress(idx)}
            isChecked={isChecked}
            text={listItem.text}
          />
        )
      }
    )
  }
  return <View>{_renderRadioButtons()}</View>
}
