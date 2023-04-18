import * as React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

interface OwnProps {
  text: string
  activeOpacity?: number
  disabled?: boolean
  children?: React.ReactNode
  textStyle?: StyleProp<TextStyle>
  btnStyle?: StyleProp<ViewStyle>
  onPressBtn: (param?: any) => void
  numberOfLines?: number
  adjustsFontSizeToFit?: boolean
  allowFontScaling?: boolean
}

type Props = OwnProps

export const Button: React.FunctionComponent<Props> = (props) => {
  const {
    text,
    activeOpacity,
    disabled = false,
    children,
    textStyle,
    btnStyle,
    numberOfLines,
    adjustsFontSizeToFit,
    allowFontScaling,
    onPressBtn,
  } = props
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.container, btnStyle]}
      disabled={disabled}
      onPress={onPressBtn}
    >
      {children || (
        <Text
          style={[styles.text, textStyle]}
          numberOfLines={numberOfLines}
          adjustsFontSizeToFit={adjustsFontSizeToFit}
          allowFontScaling={allowFontScaling}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    maxHeight: 50,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: 'gray',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
})
