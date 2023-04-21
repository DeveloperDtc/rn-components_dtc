
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

## Components
I. Button

| Props | Description |
| --- | --- |
| `text` | Text in button **<string>** |
| `activeOpacity` | Opacity when user click button (from 0 to 1) **<number>** |
| `disabled` | Disable button **<boolean>** |
| `children` | Instead of Text **<React.ReactNode>** |
| `textStyle` | Text Style **<StyleProp<TextStyle>>** |
| `btnStyle` | Style of button **<StyleProp<ViewStyle>>** |
| `onPressBtn` | on Press button **<void>** |
| `numberOfLines` | number of line of Text in button **<number>** |
| `adjustsFontSizeToFit` | adjust font size **<boolean>** |
| `allowFontScaling` | auto scale font **<boolean>** |

II. TextInput

| Props | Description |
| --- | --- |
| `value` | value input text **<string>** |
| `placeholder` | place holder text ( default is '...Nhập giá trị' ) **<string>** |
| `placeholderStyle` | Style for place holder **<StyleProp<TextStyle>>** |
| `onChangeText` | On change value of Text **<(value: string) => void>** |
| `onFocus` | When user focus on input **<(e: NativeSyntheticEvent<TextInputFocusEventData>) => void>** |
| `onBlur` | Callback that is called when the text input is blurred **<(e: NativeSyntheticEvent<TextInputFocusEventData>) => void>** |
| `onEndEditting` | When user end edit text input **<(e: NativeSyntheticEvent<TextInputFocusEventData>) => void>** |
| `childrenLeft` | When want to custom left children React Node of input text **<React.ReactNode>** |
| `childrenLeftStyle` | Container Style of children left  **<StyleProp<ViewStyle>>** |
| `childrenRight` | When want to custom right children React Node of input text **<React.ReactNode>** |
| `childrenRightStyle` | Container Style of children right  **<StyleProp<ViewStyle>>** |
| `textInputStyle` | Container Style of textinput **<StyleProp<ViewStyle>>** |
| `containerViewInputStyle` | Container Style of all children **<StyleProp<ViewStyle>>** |
| `errorText` | Show error text at bottom of text input **<string>** |
| `errorTextStyle` | Error Text Style **<StyleProp<TextStyle>>** |
| `editable` | Text input can edit ( default is **true**) **<boolean>** |

III. ImageCpn

| Props | Description |
| --- | --- |
| `imageUrl` | Static url of image **<string>** |
| `image` | Url of image with format **require('...')** type **<string>** |
| `imgStyle` | Style for image |
| `iconName` | Name of vector icon, match with `typeVectorIcon` |
| `typeVectorIcon` | Type of vector icons ( AntDesign, Feather, Entypo, EvilIcons, Ionicons, FontAwesome,... ) |
| `colorIcon` | Color of Icon |
| `sizeIcon` | Size of icon |
| `resizeMode` | Resize mode of image ( contain, center, cover, stretch, repeat ) |
| `onPressItem` | On press image or icon |

IV. Modal Component

| Props | Description |
| --- | --- |
| `isVisible` | The visible prop determines whether your modal is visible. |
| `setModalVisible` | Function like onRequestClose modal |
| `onPressBtnAccept` | On press accept button to do some thing |
| `image` | Image like avatar of modal |
| `titlePopup` | Title of modal |
| `subTitlePopup` | Subtitle of modal |
| `titleBtnAccept` | Title of button accept |
| `titleBtnCancel` | Title of button cancel |
| `hasCheckBox` | Boolean check box in modal |
| `isChecked` | Status of checkbox |
| `setCheckedCheckbox` | Function change status checkbox |
| `titleWithCheckBox` | Title of checkbox with horizontal |
| `hasCancelButton` | Boolean check cancel button |
| `customStyleBtnAccept` | Style container of button accept |
| `customStyleBtnCancel` | Style container of button cancel |
| `isDisableBtnAccept` | Disable button accept |
| `colorCheckbox` | Color of check box, default is **blue** |
| `sizeCheckbox` | Size of check box, default is **16** |
| `isShowButtonAccpet` | Boolean check has button accept or not, default is **true** |

V. Radio Component

| Props | Description |
| --- | --- |
| `value` | Value of radio button ( can be boolean value or any value following each projects ). |
| `titleLeft` | Title of Radio button component |
| `onChangeSwitch` | Function change status of Radio button |
| `customStyleContainer` | Custom Style container of radio button |
| `customStyleTextLeft` | Custom text style |
| `trackColorFalse` | Color when radio button is off |
| `trackColorTrue` | Color when radio button is on |
| `thumbColor` | Color of thumb |

VI. Collapse View

| Props | Description |
| --- | --- |
| `disabled` | Disable collapse view, default is **false** |
| `title` | Title of collapse view |
| `titleStyle` | Style for title |
| `children` | Custom Children ( Contents ) when view expanded |
| `icon` | Icon at head ( left ) of title |
| `colorsIcon` | Array color type ['red', 'blue']. When collapse is red, expand is blue |
| `sizeIcon` | Size of icon |
| `customViewChildStyle` | Custom container style of children |
| `hasCount` | Boolean check count ( count is on the right of title) |
| `count` | Count |
| `isShowRightContent` | Boolean check right content or no. (on the right of title with flex - end ) |
| `txtFollowingCount` | Text following on the count ( describe for count like Times, Searchs, ... ) |
| `isShowButton` | Boolean check button with dependency must has `isShowRightContent`. ( like minus icon or plus icon when user collapse or expand view ) |
| `txtBtn` | Text button if right content is Text, dependency is `isShowRightContent` |
| `customBtnRightStyle` | Custom Style for right content |
| `onPressBtn` | Action of button right content |
| `customContainerStyle` | Custom container style for collapse view |
| `openDefault` | Boolean check default is collapse or expand |
| `isSwapChild` | Swap children will be show on top or button of collapse |
| `isSpecialChild` | Boolean check custom children special has or no  |
| `titleSpecial` | Title of special child |
| `subTitleSpecial` | Subtitle of special child |
| `valueSpecial` | Value Special |
| `hasHeader` | Boolean check has header special or not ( when use expand view ) |
| `titleHeaderSpecial` | Title for header special |
| `styleTitleHeaderSpecial` | Style for title header special |
| `colorIconClose` | Color of icon close ( when use expand view ) |
| `colorActiveCollapse` | Color when view was expand, Exp: default color is white, when view expand, color change to different color |
| `colorTextActiveCollapse` | Color of text when collapse or expand ( like `colorActiveCollapse` ) |


**Note**: Devs's DTC following design on Figma "Test firm search APP".

VII. Collapse View V2 (Collapse view text <Read more or Collapse>)

| Props | Description |
| --- | --- |
| `lineDefault` | Line show default after use collapse view |
| `textData` | Data type Text |
| `textMore` | Text show more |
| `textCollapse` | Text collapse |
| `icons` | Array of icon replace for `textMore` and `textCollapse`. Exp: [ <Icons.AntDesign name='caretdown' color={'black'} size={14} />, <Icons.AntDesign name='caretup' color={'black'} size={14} />, ] |
