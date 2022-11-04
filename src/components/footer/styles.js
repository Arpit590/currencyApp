import {StyleSheet} from 'react-native';
import {FontSizes, MetricsSizes, ThemeColors} from '../../theme';

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
});

export default styles;
