import {StyleSheet} from 'react-native';
import {FontFamily, FontSizes, MetricsSizes, ThemeColors} from '../../theme';

const styles = StyleSheet.create({
  footerContainer: {alignItems: 'center', justifyContent: 'center'},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: MetricsSizes.vs3,
    width: '100%',
    height: MetricsSizes.vs10 * 8,
    position: 'absolute',
    paddingHorizontal: MetricsSizes.hs10,
    zIndex:1000
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: '18%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: MetricsSizes.vs10,
    height: 40,
    borderRadius: 12,
  },
  addBtn: {
    width: '18%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: MetricsSizes.vs10,
    height: MetricsSizes.hs70,
    borderRadius: 12,
    backgroundColor: ThemeColors.primary,
    marginBottom: MetricsSizes.vs10 * 8.7,
    marginHorizontal: 10,
  },
  textOff: {
    fontSize: FontSizes.tiny,
    fontWeight: '500',
    textAlign: 'center',
    color: ThemeColors.grey,
  },
  textOn: {
    fontSize: FontSizes.tiny,
    fontWeight: '500',
    textAlign: 'center',
    color: ThemeColors.primary,
  },
  modal:{
    flex:1,
    position:'absolute',
    backgroundColor:'rgba(0,0,0,0.4)',
    top:0,
    bottom:"0%",
    left:0,
    right:0, 
    zIndex:-100
  },
  modalBox:{
    backgroundColor:"white", 
    position:"absolute",
    width:"80%",
    alignSelf:"center",
    borderRadius:20,
    bottom:"15%", 
    zIndex:-100,
  },
  view1:{
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center",
    padding:20,
    justifyContent:"space-evenly"
  },
  box:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:34,
    marginRight:30
  },
  boxText:{
    fontFamily:FontFamily.secondaryRegular,
    color:ThemeColors.textPrimary,
    fontSize:FontSizes.normal,
    marginLeft:13
  }
});

export default styles;
