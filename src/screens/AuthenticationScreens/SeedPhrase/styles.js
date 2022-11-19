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
      seedPhrase:{
        borderWidth:1, 
        borderRadius:20,
        borderColor:"#DBD9D1",
        padding:20,
        flexWrap:"wrap",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center"
      },
      seedBox:{
        borderWidth:1,
        borderRadius:10,
        borderColor:"#DBD9D1",
        padding:5,
        flexDirection:"row",
        alignItems:"center",
        marginRight:10,
        marginBottom:10
      },
      seedText1:{
        fontSize:FontSizes.normal,
        fontFamily:FontFamily.secondaryRegular,
        color:"#DBD9D1",
        marginRight:5
      },
      seedText:{
        fontSize:FontSizes.normal,
        fontFamily:FontFamily.secondaryRegular,
        color:ThemeColors.textPrimary,
      },
      clip:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
        alignSelf:"center"
      },
      copyText:{
        fontSize:FontSizes.large,
        fontFamily:FontFamily.primaryBold,
        color:ThemeColors.primary,
        marginLeft:15
      },
      copyText1:{
        fontSize:FontSizes.large,
        fontFamily:FontFamily.primaryBold,
        color:"#52AD0B",
        marginLeft:15
      },
      check:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:15
      },
      checkText:{
        fontFamily:FontFamily.secondaryRegular,
        fontSize:FontSizes.normal,
        color:"#807E75",
        marginLeft:10
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