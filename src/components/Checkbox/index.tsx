import React, { FunctionComponent } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

import { Icons } from '../../themes'

interface OwnProps {
  leftText?: string
  rightText?: string
  childrenLeft?: any
  childrenRight?: any
  containerStyleCustom?: StyleProp<ViewStyle>
  textStyleCustom?: StyleProp<TextStyle>
  checkboxStyleCustom?: StyleProp<ViewStyle>
  checked?: boolean | any
  onChecked?: (val?: any) => void
  onPressText?: (val?: any) => void
  sizeCheckbox?: number
  colorCheckbox?: string
  disabledCheckbox?: boolean
}

type Props = OwnProps
export const Checkbox: FunctionComponent<Props> = (props) => {
  const {
    disabledCheckbox = false,
    leftText,
    rightText,
    childrenLeft,
    childrenRight,
    sizeCheckbox = 24,
    colorCheckbox = 'green',
    containerStyleCustom,
    textStyleCustom,
    checkboxStyleCustom,
    checked,
    onChecked,
    onPressText = () => {},
  } = props

  const handleChecked = () => {
    onChecked?.(!checked)
  }

  return (
    <TouchableOpacity
      disabled={disabledCheckbox}
      style={[styles.container, containerStyleCustom]}
      onPress={handleChecked}
    >
      {leftText ? (
        <Text style={[styles.text, textStyleCustom]} onPress={onPressText}>
          {leftText}
        </Text>
      ) : (
        childrenLeft
      )}
      <Icons.Ionicons
        name={checked ? 'checkbox' : 'square-outline'}
        size={sizeCheckbox}
        color={colorCheckbox}
        style={[styles.checkbox, checkboxStyleCustom]}
      />
      {rightText ? (
        <Text style={[styles.text, textStyleCustom]} onPress={onPressText}>
          {rightText}
        </Text>
      ) : (
        childrenRight
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
  checkbox: {
    marginHorizontal: 4,
  },
})
