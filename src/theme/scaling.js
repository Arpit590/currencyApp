import {
  scale,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters/extend';

export default {
  hs: value => {
    return scale(value);
  },
  vs: value => {
    return verticalScale(value);
  },
  ms: (value, factor = 0.5) => {
    return moderateScale(value, factor);
  },
};
