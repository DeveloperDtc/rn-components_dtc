import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderRadius: 4,
    borderColor: 'gray',
    paddingVertical: 8,
  },
  input: {
    fontSize: 14,
    paddingHorizontal: 8,
    flex: 1,
    color: 'black',
    width: '100%',
  },
  errorTxt: {
    color: 'red',
    fontSize: 10,
    fontWeight: '400',
    marginHorizontal: 10,
    marginTop: -8,
  },
})
