import {Dimensions, StyleSheet} from 'react-native';
import { FontFamily, FontSizes, ThemeColors } from '../../../theme/globalStyles';

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
      },
      view:{
        padding:35,
      },
      heading:{
        fontFamily:FontFamily.primaryBold,
        fontSize:FontSizes.hugeSS,
        color:ThemeColors.textPrimary,
        marginTop:20
      },
      face:{
        borderWidth:1,
        borderColor:ThemeColors.textPrimary,
        borderRadius:12,
        backgroundColor:"#FFFADE",
        height:400,
        width:300,
        alignSelf:"center",
        marginTop:50
      },
      text:{
        fontFamily:FontFamily.secondaryRegular,
        fontSize:FontSizes.normal,
        color:ThemeColors.textPrimary,
        marginBottom:30,
        textAlign:"center"
      }
})

export default styles;