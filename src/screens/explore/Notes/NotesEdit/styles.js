import {Dimensions, StyleSheet} from 'react-native';
import { FontFamily, FontSizes, ThemeColors } from '../../../../theme/globalStyles';

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
      },
      view:{
        padding:35,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
      },
      heading:{
        fontFamily:FontFamily.primaryBold,
        fontSize:FontSizes.hugeSS,
        color:ThemeColors.textPrimary
      },
      view1:{
        flexDirection:"row",
        alignItems:"center"
      },
      input:{
        fontFamily:FontFamily.secondaryBold,
        fontSize:FontSizes.largeX,
        color:ThemeColors.textPrimary
      },
      input1:{
        fontFamily:FontFamily.secondaryRegular,
        fontSize:FontSizes.large,
        color:ThemeColors.textPrimary,
        marginTop:0,
        maxWidth:width-40,
        height: 100,
      }
})

export default styles;