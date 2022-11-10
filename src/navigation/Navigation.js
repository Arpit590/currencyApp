import * as React from 'react';
import {useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeContent} from '../store/ui/actions';
import * as Animatable from 'react-native-animatable';
import HomeScreen from '../screens/home/Home';
import ExploreScreen from '../screens/explore/Explore';
import ProfileScreen from '../screens/profile/Profile';
import GeneratorScreen from '../screens/generator/Generator';
import Footer from '../components/footer/Footer';

const screens = {
  Home: HomeScreen,
  Explore: ExploreScreen,
  Profile: ProfileScreen,
  Generator: GeneratorScreen,
};

function Navigation() {
  const layout = useSelector(state => state.ui);
  const dispatch = useDispatch();
  const viewRef = useRef(null);

  const onChange = contentName => {
    dispatch(changeContent(contentName));
  };

  useEffect(() => {
    if (viewRef.current && viewRef.current.fadeIn) {
      viewRef.current.fadeIn(750);
    }
  }, [layout.currentContent]);

  const CurrentContentScreen = screens[layout.currentContent];

  return (
    <View style={styles.container}>
      {/* <Header onChange={onChange} activeRoute={layout?.currentContent} /> */}
      <Animatable.View ref={viewRef} style={[styles.contentView]}>
        <React.Suspense fallback={'No Content'}>
          {CurrentContentScreen ? (
            <CurrentContentScreen />
          ) : (
            <Text>No Content</Text>
          )}
        </React.Suspense>
      </Animatable.View>
      <Footer onChange={onChange} routeName={layout?.currentContent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFFFFF",
    elevation:5
  },
  contentView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: 1,
  },
});

export default Navigation;
