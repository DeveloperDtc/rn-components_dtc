import React, { FunctionComponent } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

interface OwnProps {
  isChecked?: boolean
  text?: string
  onRadioButtonPress?: (val?: any) => void
  isSwapTextToLeft?: boolean
  containerStyle?: StyleProp<ViewStyle>
  containerCheckedStyle?: StyleProp<ViewStyle>
  textContainerBesideRadioStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  childrenLeft?: any
  childrenRight?: any
}

type Props = OwnProps
export const RadioButton: FunctionComponent<Props> = (props) => {
  const {
    isChecked,
    text,
    onRadioButtonPress,
    isSwapTextToLeft,
    containerStyle,
    containerCheckedStyle,
    textContainerBesideRadioStyle,
    textStyle,
    childrenLeft,
    childrenRight,
  } = props
  const _renderCheckedView = () => {
    return isChecked ? <View style={[styles.radioButtonIconInnerIcon]} /> : null
  }
  return (
    <TouchableOpacity
      style={[styles.mainContainer, containerStyle]}
      onPress={onRadioButtonPress}
    >
      {isSwapTextToLeft &&
        (childrenLeft || (
          <View
            style={[
              styles.radioButtonTextContainer,
              textContainerBesideRadioStyle,
            ]}
          >
            <Text style={[styles.radioButtonText, textStyle]}>{text}</Text>
          </View>
        ))}
      <View style={[styles.radioButtonIcon, containerCheckedStyle]}>
        {_renderCheckedView()}
      </View>
      {!isSwapTextToLeft &&
        (childrenRight || (
          <View
            style={[
              styles.radioButtonTextContainer,
              textContainerBesideRadioStyle,
            ]}
          >
            <Text style={[styles.radioButtonText, textStyle]}>{text}</Text>
          </View>
        ))}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonIcon: {
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth * 3,
    borderColor: 'green',
    height: 24,
    width: 24,
    borderRadius: 12,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioButtonIconInnerIcon: {
    height: 18,
    width: 18,
    backgroundColor: 'green',
    borderRadius: 9,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: 'white',
  },

  radioButtonTextContainer: {
    justifyContent: 'center',
  },
  radioButtonText: {
    fontSize: 18,
  },
})
