
## React-Native-Component_DTC

This lib support some of component basic for project. (build for DTC's projects)


## Installation

Step 1: Before use this lib, you need config native "react-native-vector-icons" following this link: https://github.com/oblador/react-native-vector-icons

Step 2: To install lib this project run

```
  npm i rn-components_dtc
```

Step 3: 

```
cd ios & pod install
```
If you are having trouble with iOS, try to reinstall the dependencies by running:
```
    1. cd ios
    2. bundle install
    3. bundle exec pod install

```


## Usage/Examples

```javascript
import RNModuleTemplateModule, {
  Button,
  TextInputComponent,
  ImageCpn,
  CollapseView,
} from 'rn-components_dtc'

function App() {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
}
```


