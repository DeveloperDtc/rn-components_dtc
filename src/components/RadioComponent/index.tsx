import React, { FunctionComponent, useState } from 'react'
import {
  StyleProp,
  Switch,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

import { styles } from './styles'

interface OwnProps {
  value?: any
  titleLeft?: string
  onChangeSwitch?: (value?: any) => void
  customStyleContainer?: StyleProp<ViewStyle>
  customStyleTextLeft?: StyleProp<TextStyle>
  trackColorFalse?: string
  trackColorTrue?: string
  thumbColor?: string
}

type Props = OwnProps

export const RadioComponent: FunctionComponent<Props> = (props) => {
  const {
    value,
    titleLeft,
    onChangeSwitch,
    customStyleContainer,
    customStyleTextLeft,
    trackColorFalse = 'gray',
    trackColorTrue = 'blue',
    thumbColor = 'orange',
  } = props
  const [mValue, setMValue] = useState<any>(value)

  const _onChangeSwitch = (bool: any) => {
    onChangeSwitch?.(bool)
    setMValue(bool)
  }

  return (
    <View style={[styles.container, customStyleContainer]}>
      <Text style={[styles.txtLeft, customStyleTextLeft]}>{titleLeft}</Text>
      <Switch
        style={[
          styles.switch,
          { transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] },
        ]}
        trackColor={{ false: trackColorFalse, true: trackColorTrue }}
        thumbColor={thumbColor}
        ios_backgroundColor={'white'}
        onValueChange={_onChangeSwitch}
        value={mValue}
      />
    </View>
  )
}
