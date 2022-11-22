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
      view1:{
        paddingHorizontal:35
      },
      container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
      },
      content:{
        flexDirection:"row",
        alignItems:"center"
      },
      contentText:{
        fontFamily:FontFamily.primaryBold,
        fontSize:FontSizes.largeX,
        color:ThemeColors.textPrimary,
        marginLeft:10
      },
      logo:{
        backgroundColor:ThemeColors.primary,
        borderRadius:6,
        padding:10,
        paddingHorizontal:13
      },
})

export default styles;