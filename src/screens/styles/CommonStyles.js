import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import {
  NAV_HEIGHT,
  TAB_HEIGHT,
  STATUSBAR_HEIGHT,
  deviceHeight,
  deviceWidth,
  spaceHeight,
  introSpaceHeight,
  colors,
  fontFamily,
  fontSize
} from './variables';

export default StyleSheet.create({
  normalPage: {
    flex: 1,
    backgroundColor: colors.white,
    ...Platform.select({
      android: {
        marginTop: Constants.statusBarHeight
      }
    })
  },
  normalSinglePage: {
    flex: 1,
    height: deviceHeight,
    backgroundColor: colors.defaultBackground,
    ...Platform.select({
      android: {
        // marginBottom: Constants.statusBarHeight
      }
    })
  },
  wrapperBox: {
    marginVertical: 20
  },
  noTabScrollView: {
    marginTop: 0
  },
  scrollView: {
    marginBottom: TAB_HEIGHT,
    marginTop: 0
  },
  chatView: {
    marginTop: 0,
    flex: 1
  },
  // Item box
  itemWhiteBox: {
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 8,
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 1
      },
      android: {
        elevation: 6
      }
    })
  },
  // Form Styles
  textInputField: {
    flexDirection: 'row',
    width: deviceWidth - 55,
    height: 45,
    marginBottom: 25,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor: colors.white
  },
  textInputFieldHaft: {
    flexDirection: 'row',
    width: (deviceWidth - 45) / 2.5,
    height: 45,
    marginBottom: 25,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor: colors.white
  },
  textInput: {
    width: deviceWidth - 55,
    height: 45,
    paddingLeft: 50,
    color: colors.lightGrey,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular
  },
  textInputBill: {
    width: deviceWidth - 55,
    height: 45,
    paddingLeft: 20,
    color: colors.black,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular
  },
  textInputBillHaft: {
    width: (deviceWidth - 45) / 2.5,
    height: 45,
    paddingLeft: 20,
    color: colors.black,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular
  },
  selectboxField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth - 55,
    height: 45,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor: colors.white
  },
  selectboxFieldHaft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: (deviceWidth - 45) / 2.5,
    height: 45,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor: colors.white
  },
  selectboxLabel: {
    color: colors.lightGrey,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular
  },
  // Button Styles
  backButton: {
    //flex: 1,
    alignItems: 'center',
    width: 58,
    height: 58
  },
  nextButton: {
    alignItems: 'center',
    width: 90,
    height: 90
  },
  // Intro pages styles
  introPageImageBox: {
    alignItems: 'center',
    marginTop: introSpaceHeight * 0.33
  },
  genderBox: {
    width: 120,
    height: 120,
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  introHeading: {
    width: '80%',
    textAlign: 'center',
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.headerExtra,
    lineHeight: 30
  },
  introPageTextBox: {
    flex: 1,
    alignItems: 'center',
    marginTop: introSpaceHeight * 0.11
  },
  introPageSubText: {
    width: deviceWidth - 75,
    height: 60,
    marginTop: 15,
    color: colors.grey,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    textAlign: 'center'
  },
  introPageButtonBox: {
    flexDirection: 'row'
  },
  introPageLeftBtn: {
    width: deviceWidth / 3,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingLeft: 20
  },
  introPageRightBtn: {
    width: deviceWidth / 3,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 8
  },
  introPageCenterBtn: {
    width: deviceWidth / 3,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // StartScreens
  labelField: {
    marginTop: 30,
    marginBottom: 25,
    paddingLeft: (deviceWidth - (deviceWidth - 55)) / 2
  },
  pickerBox: {
    position: 'relative',
    height: 350,
    flexDirection: 'row',
    marginBottom: 15
  },
  pickerText: {
    fontSize: fontSize.normal
  },
  selectedOption: {
    position: 'absolute',
    top: deviceHeight / 2.6 + NAV_HEIGHT + STATUSBAR_HEIGHT,
    width: deviceWidth,
    height: 75
  },
  // Form Screens
  screenTitleBox: {
    height: 75,
    marginTop: spaceHeight * 0.3,
    marginBottom: spaceHeight * 0.15,
    paddingLeft: (deviceWidth - (deviceWidth - 55)) / 2
  },
  buttonBox: {
    height: 45,
    alignItems: 'center'
  },
  itemText: {
    color: '#000000',
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular
  },
  itemTextSelected: {
    color: '#FFFFFF',
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular
  }
});
