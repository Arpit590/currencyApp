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
      },
      container:{
        flexDirection:"row",
        alignItems:"center"
      },
      card:{
        backgroundColor:"#9F1D27",
        borderRadius:13,
        padding:25
      },
      cardText:{
        fontFamily:FontFamily.primaryBold,
        fontSize:FontSizes.normal,
        color:"#FFFFFF"
      },
      cardContainer:{
        alignItems:"flex-start",
      },
      card1:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        marginTop:40
      },
      cardContainerText:{
        fontFamily:FontFamily.secondaryRegular,
        fontSize:FontSizes.tiny,
        color:"#FFFFFF",
        marginBottom:8
      },
      cardContainerText1:{
        fontFamily:FontFamily.secondaryBold,
        fontSize:FontSizes.smallX,
        color:"#FFFFFF"
      },
      contact:{
        backgroundColor:"#DBD9D1",
        padding:20,
        borderRadius:100,
        height:100,
        alignSelf:"center",
        justifyContent:"center",
        width:100,
        alignItems:"center"
      }
})

export default styles;