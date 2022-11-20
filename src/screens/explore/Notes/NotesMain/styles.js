import {Dimensions, StyleSheet} from 'react-native';
import { FontFamily, FontSizes, ThemeColors } from '../../../../theme/globalStyles';

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
        flexWrap:"wrap",
        alignItems:"flex-start",
        flexDirection:"row",
        width:"100%",
        marginBottom:100,
        paddingHorizontal:35
      },
      notes:{
        borderWidth:1,
        borderColor:"#DBD9D1",
        padding:10,
        borderRadius:16,
        marginRight:12,
        marginBottom:11,
        maxWidth: width-250
      },
      notesHeading:{
        fontFamily:FontFamily.primaryBold,
        fontSize:FontSizes.large,
        color:ThemeColors.textPrimary,
        marginBottom:8
      },
      notesDesc:{
        fontFamily:FontFamily.secondaryRegular,
        fontSize:FontSizes.small,
        color:ThemeColors.textPrimary
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