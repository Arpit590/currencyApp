import {Dimensions, StyleSheet} from 'react-native';
import { FontFamily, FontSizes, ThemeColors } from '../../theme/globalStyles';

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding:35
  },
  view1:{
    marginTop:100,
    alignSelf:"center",
    marginRight:10
  },
  image:{
    resizeMode:"contain",
    width:width-100,
    height:300,
    alignSelf:"center"
  },
  view2:{
    marginTop:40
  },
  heading:{
    fontSize:FontSizes.hugeX,
    color: ThemeColors.textPrimary,
    fontFamily:FontFamily.primaryBold,
    maxWidth:width-40
  },
  text:{
    fontFamily:FontFamily.secondaryRegular,
    color:ThemeColors.textSecondary,
    fontSize:FontSizes.normal,
    marginTop:16,
    maxWidth:width-60
  },
  bottom:{
    marginTop:80,
    flexDirection:"row",
    alignItems:"center"
  },
  dotView:{
    flexDirection:"row",
    alignItems:"center",
  },
  dot:{
    backgroundColor:"#DBD9D1",
    borderRadius:50,
    padding:5,
    marginRight:12
  },
  activeDot:{
    backgroundColor:ThemeColors.textPrimary,
    borderRadius:50,
    padding:5,
    marginRight:12
  },
  button:{
    backgroundColor:ThemeColors.primary,
    padding:20,
    borderRadius:50,
    marginLeft:"60%"
  }
});

export default styles;
