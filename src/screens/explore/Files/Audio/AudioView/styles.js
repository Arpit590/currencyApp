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
      audioContainer:{
        alignSelf:"center",
        marginTop:70
      },
      audio:{
        backgroundColor:ThemeColors.primary,
        borderRadius:30,
        padding:30,
        alignItems:"center"
      },
      play:{
        backgroundColor:ThemeColors.primary,
        borderRadius:10,
        marginTop:40,
        padding:20,
        width:"35%",
        alignSelf:"center",
        alignItems:"center"
      },
      share:{
        alignSelf:"center",
        alignItems:"center",
        position:"absolute",
        bottom:0,
        backgroundColor:"white",
        paddingVertical:20,
        width:"100%",
        borderTopColor:"#DBD9D1",
        borderTopWidth:1,
      },
      shareText:{
        fontFamily:FontFamily.secondaryRegular,
        fontSize:FontSizes.small,
        color:ThemeColors.textPrimary,
        textAlign:"center",
        marginTop:5
      }
})

export default styles;