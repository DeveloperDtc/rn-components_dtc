import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Button = () => {
  return (
    <View style={styles.container}>
      <Text>button</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
})
