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
        marginTop:200,
        alignItems:"center",
        alignSelf:"center"
      },
      container:{
        marginTop:70
      },
      desc:{
        fontFamily:FontFamily.secondaryBold,
        color:ThemeColors.textPrimary,
        fontSize:FontSizes.normal,
        textAlign:"center",
        marginTop:17
      },
      text:{
        fontFamily:FontFamily.primaryBold,
        color:ThemeColors.textPrimary,
        fontSize:FontSizes.large,
        marginBottom:24,
        textAlign:"center",
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
      }
})

export default styles;