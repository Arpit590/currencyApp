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
        paddingHorizontal:35
      },
      formContent:{
        marginBottom:15
      },
      formText:{
        fontFamily:FontFamily.secondaryBold,
        fontSize:FontSizes.smallX,
        color:"#BBBAB3",
        marginBottom:10
      },
      input:{
        borderWidth:1,
        borderRadius:10,
        borderColor:"#BBBAB3",
        paddingHorizontal:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
      },
      textarea:{
        borderWidth:1,
        borderRadius:10,
        borderColor:"#BBBAB3",
        paddingHorizontal:10,
      },
      inputText:{
        fontFamily:FontFamily.secondaryRegular,
        fontSize:FontSizes.normal,
        color:ThemeColors.textPrimary,
        flex:0.8
      },
      dropDown:{
        borderWidth:1,
        borderRadius:5,
        borderColor:"#BBBAB3",
      },
      dropDownContent:{
        borderBottomColor:"#BBBAB3",
        borderBottomWidth:1,
      },
      dropDownText:{
        fontSize:FontSizes.normal,
        fontFamily:FontFamily.primaryRegular,
        color:ThemeColors.textPrimary,
        padding:10,
        paddingVertical:5
      }
})

export default styles;