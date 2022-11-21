import {Dimensions, StyleSheet} from 'react-native';
import { FontFamily, FontSizes, ThemeColors } from '../../../../../theme/globalStyles';

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
      view2:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:30
      },
      viewText:{
        fontFamily:FontFamily.secondaryBold,
        fontSize:FontSizes.large,
        color:ThemeColors.textPrimary
      }
})

export default styles;