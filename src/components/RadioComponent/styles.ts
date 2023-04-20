import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  txtLeft: {
    flex: 1,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '600',
    color: 'blue',
  },
  switch: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
  },
})
