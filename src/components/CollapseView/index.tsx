/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'
import {
  LayoutAnimation,
  Platform,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  UIManager,
  View,
  ViewStyle,
} from 'react-native'

import { Icons } from '../../themes'
import { styles } from './styles'

interface OwnProps {
  disabled?: boolean
  title?: string
  titleStyle?: StyleProp<TextStyle>
  children?: any
  icon?: any
  colorsIcon?: Array<any>
  sizeIcon?: number
  customViewChildStyle?: StyleProp<ViewStyle>
  hasCount?: boolean
  count?: number
  isShowRightContent?: boolean
  txtFollowingCount?: string
  isShowButton?: boolean
  txtBtn?: string
  customBtnRightStyle?: StyleProp<ViewStyle>
  onPressBtn?: (val?: any) => void
  customContainerStyle?: StyleProp<ViewStyle>
  openDefault?: any
  isSwapChild?: boolean
  isSpecialChild?: boolean
  titleSpecial?: string
  subTitleSpecial?: string
  valueSpecial?: string
  hasHeader?: boolean
  titleHeaderSpecial?: string
  styleTitleHeaderSpecial?: StyleProp<TextStyle>
  colorIconClose?: string
  colorActiveCollapse?: string
  colorTextActiveCollapse?: any
}

type Props = OwnProps

export const CollapseView: FunctionComponent<Props> = (props) => {
  const {
    disabled,
    title,
    titleStyle,
    children,
    icon,
    colorsIcon = [],
    sizeIcon,
    customViewChildStyle,
    hasCount,
    count,
    isShowRightContent = true,
    txtFollowingCount,
    isShowButton,
    txtBtn,
    customBtnRightStyle,
    onPressBtn,
    customContainerStyle,
    openDefault,
    isSwapChild = false,
    isSpecialChild = false,
    titleSpecial,
    subTitleSpecial,
    valueSpecial,
    hasHeader,
    titleHeaderSpecial,
    styleTitleHeaderSpecial,
    colorIconClose,
    colorActiveCollapse,
    colorTextActiveCollapse,
  } = props
  const [isOpen, setIsOpen] = useState(openDefault)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
      }
    }
  }, [])

  const renderColorIconActiveCollapse = useMemo(() => {
    if (colorsIcon?.length === 2) {
      if (isOpen) {
        return colorsIcon[1]
      } else {
        return colorsIcon[0]
      }
    } else {
      return colorsIcon[0] || 'white'
    }
  }, [colorsIcon, isOpen])

  return (
    <>
      {!isSwapChild ? (
        <>
          <TouchableOpacity
            disabled={disabled}
            style={[
              styles.titleContainer,
              customContainerStyle,
              {
                backgroundColor: isOpen ? colorActiveCollapse : 'transparent',
              },
            ]}
            activeOpacity={0.8}
            onPress={toggleOpen}
          >
            {icon}
            <Text
              style={[
                styles.title,
                titleStyle,
                colorTextActiveCollapse && {
                  color: isOpen ? colorTextActiveCollapse : 'gray',
                },
              ]}
            >
              {title}{' '}
              {hasCount && (
                <Text style={styles.count}>
                  ({count} {txtFollowingCount})
                </Text>
              )}
            </Text>
            {isShowRightContent &&
              (!isShowButton ? (
                <Icons.AntDesign
                  name={isOpen ? 'minus' : 'plus'}
                  size={sizeIcon ? sizeIcon : 20}
                  color={renderColorIconActiveCollapse}
                />
              ) : (
                <TouchableOpacity
                  style={[styles.btn, customBtnRightStyle]}
                  onPress={onPressBtn}
                >
                  <Text style={styles.txtBtn}>{txtBtn}</Text>
                </TouchableOpacity>
              ))}
          </TouchableOpacity>
          <View
            style={[
              styles.list,
              customViewChildStyle,
              !isOpen ? styles.hidden : undefined,
            ]}
          >
            {children}
          </View>
        </>
      ) : (
        <>
          <View
            style={[
              styles.list,
              customViewChildStyle,
              !isOpen ? styles.hidden : undefined,
            ]}
          >
            {hasHeader && (
              <View style={styles.headerSpecialContainer}>
                <TouchableOpacity style={{ flex: 0.5 }} onPress={toggleOpen}>
                  <Icons.AntDesign
                    name='close'
                    size={24}
                    color={colorIconClose ? colorIconClose : '#0469C8'}
                  />
                </TouchableOpacity>
                <Text
                  style={[styles.titleHeaderSpecial, styleTitleHeaderSpecial]}
                >
                  {titleHeaderSpecial}
                </Text>
              </View>
            )}
            {children}
          </View>
          <TouchableOpacity
            disabled={disabled}
            style={[styles.titleContainer, customContainerStyle]}
            activeOpacity={1}
            onPress={toggleOpen}
          >
            {isSpecialChild ? (
              <View style={styles.specialView}>
                <View style={styles.leftSpecialView}>
                  <Text style={styles.titleSpecial}>{titleSpecial}</Text>
                  <Icons.Entypo
                    name={isOpen ? 'chevron-small-up' : 'chevron-small-down'}
                    size={20}
                    color={'gray'}
                  />
                </View>
                <Text style={styles.subTitleSpecial} numberOfLines={1}>
                  {subTitleSpecial}{' '}
                  <Text style={styles.valueSpecial} numberOfLines={1}>
                    {valueSpecial}
                  </Text>{' '}
                  VND
                </Text>
              </View>
            ) : (
              <>
                {icon}
                <Text style={[styles.title, titleStyle]}>
                  {title}{' '}
                  {hasCount && (
                    <Text style={styles.count}>
                      ({count} {txtFollowingCount})
                    </Text>
                  )}
                </Text>
              </>
            )}

            {isShowRightContent &&
              (!isShowButton ? (
                <Icons.AntDesign
                  name={isOpen ? 'minus' : 'plus'}
                  size={sizeIcon ? sizeIcon : 20}
                  color={renderColorIconActiveCollapse}
                />
              ) : (
                <TouchableOpacity
                  style={[styles.btn, customBtnRightStyle]}
                  onPress={onPressBtn}
                >
                  <Text style={styles.txtBtn}>{txtBtn}</Text>
                </TouchableOpacity>
              ))}
          </TouchableOpacity>
        </>
      )}
    </>
  )
}
