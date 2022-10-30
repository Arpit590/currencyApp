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
        paddingHorizontal:35,
        marginTop:60
      },
      container:{
        marginTop:70
      },
      text:{
        fontFamily:FontFamily.primaryBold,
        color:ThemeColors.textPrimary,
        fontSize:FontSizes.hugeX,
        marginBottom:24
      },
      text1:{
        fontFamily:FontFamily.secondaryRegular,
        fontSize:FontSizes.normal,
        color:ThemeColors.textSecondary
      },
      view2:{
        flex:1,
        position: "absolute",
        bottom:"3%",
        alignSelf:"center",
        width:"90%"
      },
      cancel:{
        position: "absolute",
        bottom:"8%",
        left:"6%",
        alignSelf:"flex-start"
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
      heading:{
        fontFamily:FontFamily.primaryBold,
        color:ThemeColors.textPrimary,
        fontSize:FontSizes.large,
        textAlign:"center"
      }
})

export default styles;