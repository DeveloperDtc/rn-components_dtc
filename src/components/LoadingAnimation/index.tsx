import React, { FunctionComponent } from 'react'
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

interface OwnProps {
  containerIndicator?: StyleProp<ViewStyle>
  indicatorStyle?: any
  sizeIndicator?: 'large' | 'small' | number
  colorIndicator?: string
  textStyle?: StyleProp<TextStyle>
  isHorizontal?: boolean
}

type Props = OwnProps

export const LoadingAnimation: FunctionComponent<Props> = (props) => {
  const {
    containerIndicator,
    sizeIndicator = 'small',
    colorIndicator = 'green',
    indicatorStyle,
    textStyle,
    isHorizontal,
  } = props
  return !isHorizontal ? (
    <View style={[styles.indicatorWrapper, containerIndicator]}>
      <ActivityIndicator
        size={sizeIndicator}
        style={[styles.indicator, indicatorStyle]}
        color={colorIndicator}
      />
      <Text style={[styles.indicatorText, textStyle]}>Loading fruits...</Text>
    </View>
  ) : (
    <View style={[styles.indicatorHorizontalContainer, containerIndicator]}>
      <ActivityIndicator
        size={sizeIndicator}
        style={[styles.indicatorHorizontal, indicatorStyle]}
        color={colorIndicator}
      />
      <Text style={[styles.indicatorText, textStyle]}>Loading fruits...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  indicatorWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorHorizontalContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {},
  indicatorHorizontal: {
    marginRight: 10,
  },
  indicatorText: {
    fontSize: 18,
    marginTop: 12,
  },
})
