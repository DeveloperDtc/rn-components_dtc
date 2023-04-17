import React, { useEffect } from 'react'
import RNModuleTemplateModule, { Counter } from 'rn-components_dtc'

const App = () => {
  useEffect(() => {
    console.log(RNModuleTemplateModule)
  })

  return <Counter />
}

export default App
