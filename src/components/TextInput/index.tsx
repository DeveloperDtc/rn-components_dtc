import React from 'react'
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

import { styles } from './styles'

interface OwnProps {
  value?: string | number | any
  placeholder?: string
  placeholderStyle?: StyleProp<TextStyle>
  onChangeText?: (value: string) => void
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  childrenLeft?: React.ReactNode
  childrenLeftStyle?: StyleProp<ViewStyle>
  childrenRight?: React.ReactNode
  childrenRightStyle?: StyleProp<ViewStyle>
  textInputStyle?: StyleProp<ViewStyle>
}

type Props = OwnProps

export const TextInputComponent: React.FunctionComponent<Props> = (props) => {
  const {
    onFocus,
    onBlur,
    onChangeText = (_value: string) => {},
    placeholder = '...Nhập giá trị',
    value,
    childrenLeft,
    childrenLeftStyle,
    childrenRight,
    childrenRightStyle,
    textInputStyle,
  } = props

  const onFocusCustom = (e: any) => {
    if (onFocus) {
      onFocus(e)
    }
  }

  const onBlurCustom = (e: any) => {
    if (onBlur) {
      onBlur(e)
    }
  }

  return (
    <View style={styles.container}>
      <View style={[childrenLeftStyle]}>{childrenLeft}</View>
      <View style={[styles.textInput, textInputStyle]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={onFocusCustom}
          onBlur={onBlurCustom}
          style={[styles.input]}
        />
      </View>
      <View style={[childrenRightStyle]}>{childrenRight}</View>
    </View>
  )
}
