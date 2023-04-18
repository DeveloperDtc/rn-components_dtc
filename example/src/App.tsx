import React, { useEffect } from 'react'
import { View } from 'react-native'
import RNModuleTemplateModule, {
  Counter,
  Button,
  TextInputComponent,
} from 'rn-components_dtc'

const App = () => {
  useEffect(() => {
    console.log(RNModuleTemplateModule)
  })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 70,
        marginHorizontal: 16,
        flexDirection: 'row',

        // alignItems: 'center',
      }}
    >
      <Button text='test' onPressBtn={() => {}} />
    </View>
  )
}

export default App
