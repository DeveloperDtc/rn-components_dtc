import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'
import RNModuleTemplateModule, {
  Button,
  Checkbox,
  CollapseView,
  CollapseViewV2,
  DropdownListCustom,
  ImageCpn,
  ModalComponent,
  MultiRadioButton,
  RadioComponent,
  SwitchRC,
  TextInputComponent,
} from 'rn-components_dtc'
import { MotiView } from 'moti'
import { Icons } from '../../src/themes'

const App = () => {
  useEffect(() => {
    console.log(RNModuleTemplateModule)
  })
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const [isVisible, setisVisible] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)

  const Test = () => {
    return <Text>test right custom children</Text>
  }

  const data = [
    {
      key: 1,
      text: 'Option A',
    },
    {
      key: 2,
      text: 'Option B',
    },
    {
      key: 3,
      text: 'Option C',
    },
  ]

  const onRadioButtonPress = (itemIdx: any) => {
    console.log('Clicked', itemIdx)
  }

  const [selected, setSelected] = useState<any>(undefined)
  const dataDropdown: any = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ]

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <MotiView
        from={{
          opacity: 0.5,
          translateY: -20,
          // transform:[{

          // }]
        }}
        animate={{
          opacity: 1,
          // translateY: [0, { value: 100, type: 'timing', delay: 500 }, 0, 100],
          translateY: 0,
        }}
        transition={{
          type: 'timing',
          duration: 500,
          loop: true
        }}
        style={styles.box}
      />
    </View>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior='automatic'
    //     style={backgroundStyle}
    //   >
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}
    //     >
    //       <View
    //         style={{
    //           flex: 1,
    //           marginTop: 30,
    //           marginHorizontal: 16,
    //         }}
    //       >
    //         <Button
    //           text='test'
    //           onPressBtn={() => {}}
    //           btnStyle={{ marginVertical: 10, padding: 10 }}
    //         />
    //         <TextInputComponent
    //           containerViewInputStyle={{ marginBottom: 10 }}
    //           textInputStyle={{ borderWidth: 2 }}
    //           errorText='loi roi kia lam lai di'
    //         />
    //         <ImageCpn
    //           typeVectorIcon='AntDesign'
    //           iconName='plus'
    //           sizeIcon={50}
    //           colorIcon='red'
    //           imgStyle={{ marginBottom: 10, borderWidth: 1, borderRadius: 6 }}
    //           onPressItem={() => {
    //             console.log('pressed item')
    //           }}
    //         />
    //         <View
    //           style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 6 }}
    //         >
    //           <CollapseView
    //             title={'Tùy chọn tìm kiếm'}
    //             titleStyle={{ color: 'blue' }}
    //             icon={
    //               <Icons.AntDesign
    //                 name='infocirlceo'
    //                 size={20}
    //                 color={'black'}
    //               />
    //             }
    //             customViewChildStyle={{
    //               borderTopWidth: 1,
    //               borderColor: 'gray',
    //             }}
    //             customContainerStyle={{
    //               borderTopWidth: 1,
    //             }}
    //           >
    //             <Text>test</Text>
    //             <Text>test1</Text>
    //           </CollapseView>
    //         </View>
    //         <ImageCpn typeVectorIcon='AntDesign' iconName='minus' />
    //         <CollapseViewV2 />
    //         <RadioComponent
    //           titleLeft={'Test radio button'}
    //           customStyleContainer={{ marginTop: 10 }}
    //           value={null}
    //           onChangeSwitch={(bool) => {
    //             console.log('changed status')
    //           }}
    //         />
    //         <Button
    //           text='Open modal'
    //           onPressBtn={() => {
    //             setisVisible(!isVisible)
    //           }}
    //           btnStyle={{ margin: 10, padding: 10 }}
    //         />
    //         <Checkbox
    //           leftText='left'
    //           checked={checked}
    //           onChecked={setChecked}
    //           childrenRight={<Test />}
    //         />
    //         <MultiRadioButton
    //           isSwapTextToLeft={false}
    //           values={data}
    //           onPress={onRadioButtonPress}
    //         />
    //         <SwitchRC
    //           // isAnimatedForCircle
    //           size={40}
    //           onPress={() => setIsActive((isActive) => !isActive)}
    //           isActive={isActive}
    //           colors={[{ active: 'red' }, { inactive: 'blue' }]}
    //         />
    //         <View
    //           style={{
    //             flex: 1,
    //             backgroundColor: '#fff',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             flexDirection: 'column',
    //             marginBottom: 300,
    //             marginTop: 50,
    //           }}
    //         >
    //           {!!selected && (
    //             <Text>
    //               Selected: label = {selected.label} and value ={' '}
    //               {selected.value}
    //             </Text>
    //           )}
    //           <DropdownListCustom
    //             label='Select Item'
    //             data={dataDropdown}
    //             onSelect={setSelected}
    //           />
    //         </View>
    //       </View>
    //     </View>
    //     <ModalComponent
    //       isVisible={isVisible}
    //       isShowButtonAccpet
    //       hasCancelButton
    //       titlePopup={'Test modal'}
    //       onPressBtnAccept={() => setisVisible(false)}
    //       customStyleBtnAccept={{ backgroundColor: 'pink' }}
    //     />
    //   </ScrollView>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 120,
    height: 120,
    backgroundColor: 'cyan',
    borderRadius: 16,
  },
})

export default App
