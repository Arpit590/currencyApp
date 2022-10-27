import {Dimensions, StyleSheet} from 'react-native';
import { FontFamily, FontSizes, ThemeColors } from '../../../theme/globalStyles';

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical:35
  },
  view:{
    alignSelf:"center"
  },
  heading:{
    fontFamily:FontFamily.primaryBold,
    fontSize:FontSizes.hugeX,
    color:ThemeColors.textPrimary
  },
  box:{
    marginTop:32,
    marginBottom:100
  },
  view1:{
  marginBottom:15
  },
  text:{
    fontFamily:FontFamily.secondaryRegular,
    color: "#BBBAB3",
    fontSize:FontSizes.smallX,
    marginBottom:10
  },
  input:{
    borderColor:"#BBBAB3",
    borderWidth:1,
    borderRadius:15,
    padding:5,
    paddingHorizontal:15,
    color:"#77766E",
    fontSize:FontSizes.normal,
    fontFamily:FontFamily.secondaryRegular
  },
  info:{
    fontFamily:FontFamily.secondaryRegular,
    fontSize:FontSizes.smallX,
    color:"#666666",
    marginTop:5
  },
  help:{
    fontFamily:FontFamily.primaryBold,
    fontSize:FontSizes.large,
    color:ThemeColors.textPrimary,
    marginTop:20,
    textAlign:"center"
  }
});

export default styles;
