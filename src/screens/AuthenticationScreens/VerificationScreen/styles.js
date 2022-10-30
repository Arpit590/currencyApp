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
        paddingHorizontal:35
      },
      heading:{
        fontFamily:FontFamily.primaryBold,
        fontSize:FontSizes.hugeX,
        color:ThemeColors.textPrimary,
        marginBottom:24
      },
      text:{
        fontFamily:FontFamily.secondaryRegular,
        color:"#807E75",
        fontSize:FontSizes.normal
      },
      view1:{
        marginTop:32
      },
      text1:{
        fontFamily:FontFamily.secondaryBold,
        color:"#BBBAB3",
        fontSize:FontSizes.smallXX
      },
      otpBox:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10
      },
      otp:{
        borderWidth:1,
        borderRadius:10,
        borderColor:"#BBBAB3",
        padding:3,
        color:"#77766E",
        fontSize:FontSizes.large,
        fontFamily:FontFamily.secondaryRegular,
        textAlign:"center",
        marginRight:10,
        paddingHorizontal:0
      },
      resend:{
        marginTop:15
      },
      view2:{
        flex:1,
        position: "absolute",
        bottom:"3%",
        alignSelf:"center",
        width:"90%"
      },
      resendText:{
        fontFamily:FontFamily.primaryBold,
        fontSize:FontSizes.large,
        color:ThemeColors.primary,
        textAlign:"right"
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
      }
})

export default styles;