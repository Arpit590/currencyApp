import {Dimensions, StyleSheet} from 'react-native';
import {FontFamily, FontSizes, ThemeColors} from '../../theme/globalStyles';
import {MetricsSizes} from '../../theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: MetricsSizes.vs36,
  },
  view1: {
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: MetricsSizes.hs36,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  view: {
    position: 'absolute',
    top: MetricsSizes.vs40,
    left: MetricsSizes.hs36,
  },
  view2: {
    marginTop: MetricsSizes.vs40,
  },
  heading: {
    fontSize: FontSizes.hugeX,
    color: ThemeColors.textPrimary,
    fontFamily: FontFamily.primaryBold,
    maxWidth: width - MetricsSizes.vs40,
  },
  text: {
    fontFamily: FontFamily.secondaryRegular,
    color: ThemeColors.textSecondary,
    fontSize: FontSizes.normal,
    marginTop: MetricsSizes.vs16,
    maxWidth: width - 60,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 35,
  },
  dotView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: '#DBD9D1',
    borderRadius: 50,
    padding: 5,
    marginRight: 12,
  },
  activeDot: {
    backgroundColor: ThemeColors.textPrimary,
    borderRadius: 50,
    padding: 5,
    marginRight: 12,
  },
  button: {
    backgroundColor: ThemeColors.primary,
    padding: 20,
    borderRadius: 50,
    marginLeft: '60%',
  },
});

export default styles;
