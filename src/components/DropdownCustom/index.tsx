import React, { FunctionComponent, ReactElement, useRef, useState } from 'react'
import {
  FlatList,
  Modal,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import { Icons } from '../../themes'

interface OwnProps {
  label?: string
  data: Array<{ label: string; value: string }>
  onSelect: (item: { label: string; value: string }) => void
  itemListStyle?: StyleProp<ViewStyle>
  itemTextStyle?: StyleProp<TextStyle>
}

type Props = OwnProps
export const DropdownListCustom: FunctionComponent<Props> = (props) => {
  const { data, label, onSelect, itemTextStyle, itemListStyle } = props
  const [visible, setVisible] = useState<boolean>(false)
  const DropdownButton = useRef<any>(null)
  const [dropdownTop, setDropdownTop] = useState<number>(0)
  const [selected, setSelected] = useState<any>(undefined)

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown()
  }

  const openDropdown = (): void => {
    DropdownButton.current.measure(
      (_fx: any, _fy: any, _w: any, h: any, _px: any, py: any) => {
        setDropdownTop(py + h)
      }
    )
    setVisible(true)
  }

  const onItemPress = (item: any): void => {
    setSelected(item)
    onSelect(item)
    setVisible(false)
  }

  const renderItem = ({ item }: { item: any }): ReactElement<any, any> => (
    <TouchableOpacity
      style={[styles.item, itemListStyle]}
      onPress={() => onItemPress(item)}
    >
      <Text style={[itemTextStyle]}>{item.label}</Text>
    </TouchableOpacity>
  )

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType='none'>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(_item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(selected && selected?.label) || label}
      </Text>
      <Icons.Entypo name='chevron-down' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    marginHorizontal: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    height: 50,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
})
