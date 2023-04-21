import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

import { Icons } from '../../themes'

interface OwnProps {
  lineDefault?: number
  textData?: string
  textMore?: string
  textCollapse?: string
  icons?: Array<any>
}

type Props = OwnProps

const textDataDemo =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const CollapseViewV2: React.FunctionComponent<Props> = (props) => {
  const {
    lineDefault = 2,
    textData = textDataDemo,
    textMore = 'More',
    textCollapse = 'Collapse',
    icons = [
      <Icons.AntDesign name='caretdown' color={'black'} size={14} />,
      <Icons.AntDesign name='caretup' color={'black'} size={14} />,
    ],
  } = props
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [maxLines, setMaxLines] = useState<number>(lineDefault)
  const animationHeight = useRef(new Animated.Value(0)).current

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const collapseView = useCallback(() => {
    Animated.timing(animationHeight, {
      duration: 1000,
      toValue: 50,
      useNativeDriver: false,
    }).start()
  }, [animationHeight])

  const expandView = useCallback(() => {
    setMaxLines(0)
    Animated.timing(animationHeight, {
      duration: 1000,
      toValue: 1000,
      useNativeDriver: false,
    }).start()
  }, [animationHeight])

  useEffect(() => {
    collapsed ? collapseView() : expandView()
  }, [collapseView, collapsed, expandView])

  const renderIconCollapseOrExpand = useMemo(() => {
    return collapsed ? icons[0] : icons[1]
  }, [collapsed, icons])

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ overflow: 'hidden' }}>
      <Animated.View style={{ maxHeight: animationHeight }}>
        <Text style={styles.paragraph} numberOfLines={maxLines}>
          {textData}
        </Text>
      </Animated.View>
      {icons ? (
        renderIconCollapseOrExpand
      ) : (
        <Text onPress={toggleCollapsed} style={styles.textMoreOrCollapse}>
          {collapsed ? textMore : textCollapse}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textMoreOrCollapse: {
    textAlign: 'center',
    fontSize: 14,
    color: 'blue',
  },
})
