import React, { FunctionComponent } from 'react'
import {
  Modal,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import { Icons } from '../../themes'
import { styles } from './styles'

interface OwnProps {
  isVisible?: boolean
  setModalVisible?: () => void
  onPressBtnAccept?: () => void
  image?: any
  titlePopup?: string
  subTitlePopup?: string
  titleBtnAccept?: string
  titleBtnCancel?: string
  hasCheckBox?: boolean
  isChecked?: boolean
  setCheckedCheckbox?: () => void
  titleWithCheckBox?: string
  hasCancelButton?: boolean
  customStyleBtnAccept?: StyleProp<ViewStyle>
  customStyleBtnCancel?: StyleProp<ViewStyle>
  isDisableBtnAccept?: boolean
  colorCheckbox?: any
  sizeCheckbox?: number
}

type Props = OwnProps

export const ModalComponent: FunctionComponent<Props> = (props) => {
  const {
    isVisible,
    setModalVisible = () => {},
    onPressBtnAccept = () => {},
    image,
    titlePopup,
    subTitlePopup,
    titleBtnAccept,
    titleBtnCancel,
    hasCheckBox,
    isChecked,
    setCheckedCheckbox = () => {},
    titleWithCheckBox,
    hasCancelButton,
    customStyleBtnAccept,
    customStyleBtnCancel,
    isDisableBtnAccept,
    colorCheckbox = 'blue',
    sizeCheckbox = 16,
  } = props

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
      onRequestClose={setModalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {image && <View style={styles.imgPopup}>{image}</View>}
          {titlePopup && (
            <Text style={styles.txtAcceptTitle}>{titlePopup}</Text>
          )}
          {hasCheckBox ? (
            <TouchableOpacity
              style={styles.checkConfirmContainer}
              onPress={setCheckedCheckbox}
            >
              {isChecked ? (
                <Icons.Feather
                  name='check-square'
                  color={colorCheckbox}
                  size={sizeCheckbox}
                />
              ) : (
                <Icons.Feather
                  name='square'
                  color={colorCheckbox}
                  size={sizeCheckbox}
                />
              )}
              <Text style={styles.txtQuesAccept}>{titleWithCheckBox}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={[styles.txtQuesAccept, { marginBottom: 18 }]}>
              {subTitlePopup}
            </Text>
          )}
          <View style={styles.footerModalContainer}>
            <TouchableOpacity
              style={[styles.btnAccept, customStyleBtnAccept]}
              disabled={isDisableBtnAccept}
              onPress={onPressBtnAccept}
            >
              <Text style={styles.txtAccept}>{titleBtnAccept}</Text>
            </TouchableOpacity>
            {hasCancelButton && (
              <TouchableOpacity
                style={[styles.btnCancel, customStyleBtnCancel]}
                onPress={setModalVisible}
              >
                <Text style={styles.txtCancel}>{titleBtnCancel}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  )
}
