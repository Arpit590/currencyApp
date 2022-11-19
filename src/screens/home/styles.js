import {Dimensions, StyleSheet} from 'react-native';
import {FontFamily, FontSizes, ThemeColors, MetricsSizes} from '../../theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  view: {
    paddingHorizontal: 35,
  },
  search: {
    borderWidth: 1,
    borderColor: '#DBD9D1',
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: MetricsSizes.vs48,
  },
  searchInput: {
    fontFamily: FontFamily.secondaryRegular,
    color: ThemeColors.textSecondary,
    fontSize: FontSizes.normal,
    flex: 1,
  },
  view1: {
    marginTop: 30,
  },
  view2: {
    marginBottom: 20,
    borderBottomColor: ThemeColors.textSecondary,
    width: width,
    alignSelf: 'center',
    paddingBottom: 15,
    paddingHorizontal: 35,
  },
  headingText: {
    fontFamily: FontFamily.secondaryBold,
    color: '#BBBAB3',
    fontSize: FontSizes.large,
    marginBottom: 10,
  },
  option: {
    borderWidth: 1,
    borderColor: ThemeColors.textSecondary,
    paddingHorizontal: 15,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    height: MetricsSizes.vs32,
  },
  optionText: {
    fontFamily: FontFamily.secondaryRegular,
    color: ThemeColors.textPrimary,
    fontSize: FontSizes.normal,
    marginRight: 10,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DBD9D1',
    paddingHorizontal: 35,
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  boxImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  boxTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  boxText: {
    fontFamily: FontFamily.primaryBold,
    fontSize: FontSizes.largeX,
    color: ThemeColors.textPrimary,
    marginRight: 12,
    maxWidth: 150,
  },
  boxText1: {
    fontFamily: FontFamily.secondaryRegular,
    fontSize: FontSizes.normal,
    color: '#94928C',
    maxWidth: 150,
  },
  view3: {
    backgroundColor: ThemeColors.primary,
    borderRadius: 6,
    padding: 5,
  },
  boxText2: {
    fontFamily: FontFamily.secondaryBold,
    fontSize: FontSizes.tiny,
    color: ThemeColors.textPrimary,
  },
  view4: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center',
    borderBottomColor: '#DBD9D1',
    borderBottomWidth: 1,
    paddingTop: 20,
  },
  view5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 35,
  },
  view6: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    borderTopColor: '#DBD9D1',
    borderTopWidth: 1,
    paddingVertical: 20,
  },
  view7: {
    alignItems: 'center',
  },
  infoText: {
    fontFamily: FontFamily.secondaryRegular,
    fontSize: FontSizes.smallX,
    color: ThemeColors.textPrimary,
    marginTop: 5,
  },
});

export default styles;
