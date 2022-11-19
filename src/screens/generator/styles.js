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
  passwordContainer: {
    paddingVertical: MetricsSizes.vs30,
  },
  txtStyle: {
    fontSize: FontSizes.smallX,
    fontFamily: FontFamily.secondaryRegular,
    fontWeight: FontWeight.semibold,
    color: ThemeColors.grey1,
  },
  txtInputContainer: {
    height: MetricsSizes.vs48,
    borderWidth: 1.2,
    borderColor: ThemeColors.grey1,
    borderRadius: 12,
    paddingHorizontal: MetricsSizes.hs10,
    marginTop: MetricsSizes.vs12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  indicatorStyle: {
    borderWidth: 2,
    height: 15,
    width: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  txtStyleToggle: {
    fontSize: FontSizes.normal,
    fontFamily: FontFamily.secondaryRegular,
    color: ThemeColors.brown,
  },
});

export default styles;
