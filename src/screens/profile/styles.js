import {Dimensions, StyleSheet} from 'react-native';
import { FontFamily, FontSizes, ThemeColors } from '../../theme/globalStyles';

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    view:{
        paddingTop:35,
        backgroundColor:"#FFFADE",
    },
    heading:{
        fontFamily:FontFamily.primaryBold,
        fontSize:28,
        color:ThemeColors.textPrimary,
        textAlign:"center",
        marginBottom:40
    },
    view2:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:35,
    },
    container:{
    },
    container1:{
        marginBottom:15
    },
    container1Text:{
        fontFamily:FontFamily.secondaryBold,
        fontSize:FontSizes.small,
        color:'#BBBAB3'
    },
    button:{
        backgroundColor:ThemeColors.primary,
        padding:8,
        alignItems:"center",
        borderRadius:20
    },
    user:{
        backgroundColor:ThemeColors.primary,
        borderRadius:50,
        padding:27,
        alignItems:"center"
    },
    container2:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:ThemeColors.primary,
        marginTop:20,
        padding:35,
        paddingVertical:12
    },
    view3:{
        padding:35
    },
    view3Heading:{
        fontFamily:FontFamily.secondaryBold,
        fontSize:FontSizes.small,
        color:"#BBBAB3",
        marginBottom:10
    },
    view4:{
        borderWidth:1,
        borderColor:"#FFD700",
        borderRadius:12,
        padding:20,
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        backgroundColor:"#FFFADE"
    },
    icon:{
        alignItems:"center"
    },
    view6:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:10,
        borderBottomColor:"#F5F4F2",
        paddingBottom:10,
        borderBottomWidth:1
    },
    content:{
        flexDirection:"row",
        alignItems:"center"
      },
      contentText:{
        fontFamily:FontFamily.primaryBold,
        fontSize:FontSizes.large,
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