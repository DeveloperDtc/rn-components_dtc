/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {
  NativeSyntheticEvent,
  StyleProp,
  Text,
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
  onEndEdditting?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  childrenLeft?: React.ReactNode
  childrenLeftStyle?: StyleProp<ViewStyle>
  childrenRight?: React.ReactNode
  childrenRightStyle?: StyleProp<ViewStyle>
  textInputStyle?: StyleProp<ViewStyle>
  containerViewInputStyle?: StyleProp<ViewStyle>
  errorText?: string
  errorTextStyle?: StyleProp<TextStyle>
  editable?: boolean
}

type Props = OwnProps

export const TextInputComponent: React.FunctionComponent<Props> = (props) => {
  const {
    onFocus,
    onBlur,
    onChangeText = (_value: string) => {},
    onEndEdditting,
    placeholder = '...Nhập giá trị',
    value,
    childrenLeft,
    childrenLeftStyle,
    childrenRight,
    childrenRightStyle,
    textInputStyle,
    containerViewInputStyle,
    errorText,
    errorTextStyle,
    editable = true,
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

  const onEndEditting = (e: any) => {
    if (onEndEdditting) {
      onEndEdditting(e)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={[styles.container, containerViewInputStyle]}>
        {childrenLeft && (
          <View style={[childrenLeftStyle]}>{childrenLeft}</View>
        )}
        <View style={[styles.textInput, textInputStyle]}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            onFocus={onFocusCustom}
            onBlur={onBlurCustom}
            onEndEditing={onEndEditting}
            style={[styles.input]}
            editable={editable}
          />
        </View>
        {childrenRight && (
          <View style={[childrenRightStyle]}>{childrenRight}</View>
        )}
      </View>
      {errorText ? (
        <Text style={[styles.errorTxt, errorTextStyle]}>{errorText}</Text>
      ) : (
        <Text style={[styles.errorTxt, errorTextStyle, { opacity: 0 }]}>
          hide
        </Text>
      )}
    </View>
  )
}
