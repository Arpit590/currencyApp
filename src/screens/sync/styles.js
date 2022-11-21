import {Dimensions, StyleSheet} from 'react-native';
import {
  FontFamily,
  FontSizes,
  ThemeColors,
  MetricsSizes,
  FontWeight,
} from '../../theme';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 35,
  },
  headerTxt: {
    fontFamily: FontFamily.primaryBold,
    fontSize: FontSizes.hugeSS,
    color: ThemeColors.brown,
    textAlign: 'center',
  },
  container:{
    marginTop:20
  },
  view:{
    alignItems:"center",
  },
  description:{
    fontFamily:FontFamily.secondaryRegular,
    color:"#94928C",
    fontSize:FontSizes.normalX,
    textAlign:"left",
    marginBottom:30
  },
  view2:{
    marginTop:40
  },
  heading:{
    fontFamily:FontFamily.secondaryBold,
    color:"#BBBAB3",
    fontSize:FontSizes.large,
    marginBottom:20
  },
  history:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:20
  },
  historyLogo:{
    padding:10,
    borderRadius:6,
    backgroundColor:"#52AD0B"
  },
  historyContent:{
    marginLeft:12
  },
  historyHeading:{
    fontFamily:FontFamily.primaryMedium,
    color:ThemeColors.textPrimary,
    fontSize:FontSizes.largeX,
    marginBottom:3
  },
  historyDesc:{
    fontFamily:FontFamily.secondaryRegular,
    color:"#94928C",
    fontSize:FontSizes.normal,
  }
});

export default styles;
