/* eslint-disable react-native/no-inline-styles */
import { MotiView } from 'moti'
import React, { FunctionComponent } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Easing } from 'react-native-reanimated'

interface OwnProps {
  size?: number
  onPress?: () => void
  isActive?: boolean
  isAnimatedForCircle?: boolean
  colors?: [{ active?: string }, { inactive?: string }]
  colorDefault?: string
}

type Props = OwnProps

const _size = 60

export const SwitchRC: FunctionComponent<Props> = (props) => {
  const {
    size = _size,
    onPress,
    isActive,
    isAnimatedForCircle = false,
    colors = [{ active: 'green' }, { inactive: '#DCDCDC' }],

    colorDefault = 'yellow',
  } = props

  const trackWidth = React.useMemo(() => {
    return size
  }, [size])
  const trackHeight = React.useMemo(() => {
    return size * 0.6
  }, [size])
  const knobSize = React.useMemo(() => {
    return size * 0.6
  }, [size])

  const transition: any = {
    type: 'timing',
    duration: 300,
    easing: Easing.inOut(Easing.ease),
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {/* track */}
        <MotiView
          transition={transition}
          from={{
            backgroundColor: isActive ? colors[0].active : colors[1].inactive,
          }}
          animate={{
            backgroundColor: isActive ? colors[0].active : colors[1].inactive,
          }}
          style={{
            position: 'absolute',
            width: trackWidth,
            height: trackHeight,
            borderRadius: trackHeight / 2,
            backgroundColor: colors[0].active,
          }}
        />
        {/* knob container */}
        <MotiView
          transition={transition}
          animate={{
            translateX: isActive ? trackWidth / 4.5 : -trackWidth / 4.5,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* knob indicator */}
          {isAnimatedForCircle ? (
            <MotiView
              transition={transition}
              animate={{
                width: isActive ? 10 : knobSize,
                borderColor: isActive ? colors[0].active : colors[1].inactive,
              }}
              style={{
                width: knobSize - 2,
                height: knobSize - 2,
                borderRadius: (knobSize - 2) / 2,
                borderWidth: size * 0.05,
                borderColor: isActive ? colors[0].active : colors[1].inactive,
                backgroundColor: colorDefault,
              }}
            />
          ) : (
            <MotiView
              style={{
                width: knobSize - 2,
                height: knobSize - 2,
                borderRadius: (knobSize - 2) / 2,
                borderWidth: size * 0.05,
                borderColor: isActive ? colors[0].active : colors[1].inactive,
                backgroundColor: colorDefault,
              }}
            />
          )}
        </MotiView>
      </View>
    </TouchableOpacity>
  )
}
