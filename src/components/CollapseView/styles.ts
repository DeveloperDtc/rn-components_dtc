import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderColor: 'gray',
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  btnCollapse: {
    flex: 0.1,
    alignItems: 'flex-end',
  },
  hidden: {
    height: 0,
  },
  list: {
    overflow: 'hidden',
  },
  count: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    backgroundColor: 'orange',
  },
  txtBtn: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  specialView: {
    flex: 1,
  },
  leftSpecialView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleSpecial: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
  subTitleSpecial: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 5,
  },
  valueSpecial: {
    color: 'blue',
    fontSize: 22,
    fontWeight: '600',
  },
  headerSpecialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  titleHeaderSpecial: {
    color: 'blue',
    fontSize: 18,
    fontWeight: '600',
  },
})
