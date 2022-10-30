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
  view2:{
    flex:1,
    position: "absolute",
    bottom:"3%",
    alignSelf:"center"
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
  },
  modal:{
    backgroundColor:"#FFFFFF",
    width:"100%",
    position:"absolute",
    bottom:0,
    height:250,
    padding:16,
    borderTopLeftRadius:12,
    borderTopRightRadius:12
  },
  container:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:30
  },
  containerText:{
    fontFamily:FontFamily.secondaryRegular,
    color:ThemeColors.textPrimary,
    fontSize:FontSizes.normal,
    marginLeft:12
  },
  cancel:{
    position: "absolute",
    bottom:"8%",
    left:"6%",
    alignSelf:"flex-start"
  },
  headingText:{
    fontFamily:FontFamily.primaryBold,
    color:ThemeColors.textPrimary,
    fontSize:FontSizes.large,
    textAlign:"center"
  }
});

export default styles;
