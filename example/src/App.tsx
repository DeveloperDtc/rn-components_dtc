import React, { useEffect } from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme,
} from 'react-native'
import RNModuleTemplateModule, {
  Counter,
  Button,
  TextInputComponent,
  ImageCpn,
  CollapseView,
} from 'rn-components_dtc'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'
import { Icons } from '../../src/themes'

const App = () => {
  useEffect(() => {
    console.log(RNModuleTemplateModule)
  })
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <View
            style={{
              flex: 1,
              marginTop: 30,
              marginHorizontal: 16,
            }}
          >
            <Button
              text='test'
              onPressBtn={() => {}}
              btnStyle={{ marginVertical: 10, padding: 10 }}
            />
            <TextInputComponent
              containerViewInputStyle={{ marginBottom: 10 }}
              textInputStyle={{ borderWidth: 2 }}
            />
            <ImageCpn
              typeVectorIcon='AntDesign'
              iconName='plus'
              sizeIcon={50}
              colorIcon='red'
              imgStyle={{ marginBottom: 10, borderWidth: 1, borderRadius: 6 }}
              onPressItem={() => {
                console.log('pressed item')
              }}
            />
            <View
              style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 6 }}
            >
              <CollapseView
                title={'Tùy chọn tìm kiếm'}
                titleStyle={{ color: 'blue' }}
                icon={
                  <Icons.AntDesign
                    name='infocirlceo'
                    size={20}
                    color={'black'}
                  />
                }
                customViewChildStyle={{
                  borderTopWidth: 1,
                  borderColor: 'gray',
                }}
                customContainerStyle={{
                  borderTopWidth: 1,
                }}
              >
                <Text>test</Text>
                <Text>test1</Text>
              </CollapseView>
            </View>
            <ImageCpn typeVectorIcon='AntDesign' iconName='minus' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
