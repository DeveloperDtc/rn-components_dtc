import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  modalView: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  txtAcceptTitle: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  txtQuesAccept: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: 'gray',
    textAlign: 'center',
    marginLeft: 5,
  },

  footerModalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnAccept: {
    flex: 1,
    minHeight: 40,
    paddingVertical: 6,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCancel: {
    flex: 1,
    minHeight: 40,
    paddingVertical: 6,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: 'gray',
  },
  txtAccept: {
    fontSize: 14,
    lineHeight: 28,
    fontWeight: '500',
    color: 'white',
  },
  txtCancel: {
    fontSize: 14,
    lineHeight: 28,
    fontWeight: '500',
    color: 'gray',
  },
  imgPopup: {
    alignItems: 'center',
    marginBottom: 20,
  },
  checkConfirmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imgCheckNote: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
})
