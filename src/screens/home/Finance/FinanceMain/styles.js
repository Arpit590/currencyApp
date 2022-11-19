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
        marginTop:30
      },
      view2:{
        marginBottom:20,
        borderBottomColor:ThemeColors.textSecondary,
        borderBottomWidth:1,
        width:width,
        alignSelf:"center",
        paddingBottom:15,
        paddingHorizontal:35,
      },
      container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
        paddingHorizontal:35
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
      modal:{
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:35,
        paddingBottom:20,
        justifyContent:"space-between"
      },
      modalContent:{
        alignItems:"center",
        flexDirection:"row"
      },
      text:{
        fontFamily:FontFamily.primaryMedium,
        fontSize:FontSizes.largeX,
        color:ThemeColors.textPrimary,
        marginLeft:12
      }
})

export default styles;