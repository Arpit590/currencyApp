import {Dimensions, StyleSheet} from 'react-native';
import { FontFamily, FontSizes, ThemeColors } from '../../../../../theme/globalStyles';

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
      },
      view:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:30
      },
      viewContainer:{
        paddingHorizontal:35,
        backgroundColor:"white",
        elevation:5,
        paddingVertical:35,
        paddingBottom:20
      },
      heading:{
        fontFamily:FontFamily.primaryBold,
        fontSize:FontSizes.hugeSS,
        color:ThemeColors.textPrimary
      },
      search:{
        borderWidth:1,
        borderColor:"#DBD9D1",
        borderRadius:10,
        paddingHorizontal:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
      },
      searchInput:{
        fontFamily:FontFamily.secondaryRegular,
        color:ThemeColors.textSecondary,
        fontSize:FontSizes.normal,
        flex:1
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
        alignItems:"flex-start",
        justifyContent:"space-between",
        marginBottom:20,
        paddingHorizontal:35
      },
      content:{
        flexDirection:"row",
        alignItems:"center"
      },
      contentText:{
        fontFamily:FontFamily.primaryMedium,
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
        paddingBottom:20
      },
      modalContent:{
        alignItems:"center",
        marginRight:40
      },
      text:{
        fontFamily:FontFamily.primaryMedium,
        fontSize:FontSizes.normal,
        color:ThemeColors.textPrimary,
        marginTop:7
      },
      primaryButton:{
        position:"absolute",
        backgroundColor:ThemeColors.primary,
        padding:20,
        borderRadius:16,
        alignItems:"center",
        bottom:"3%",
        right:"5%"
      }
})

export default styles;