import React, { useEffect } from 'react'
import { View } from 'react-native'
import RNModuleTemplateModule, { Counter, Button } from 'rn-components_dtc'

const App = () => {
  useEffect(() => {
    console.log(RNModuleTemplateModule)
  })

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Button />
      <Counter />
    </View>
  )
}

export default App
