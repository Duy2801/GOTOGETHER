import React, { useEffect } from 'react';
import {
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/color';
const width = Dimensions.get('window').width;

type BodyProps = {
  children: React.ReactNode;
  statusBarColor?: string;
  hideHeader?: boolean;
  footerBackgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  headerLeft?: React.ReactNode;
  headerRight?:
    | React.ReactNode
    | (({
        navigation,
        route,
      }: {
        navigation: any;
        route: any;
      }) => React.ReactNode);
  title?: string;
  backgroundColor?: string;
  loading?: boolean;
  barStyle?: 'light-content' | 'dark-content' | 'default';
};

const Body = (props: BodyProps) => {
  const {
    statusBarColor = '#fff',
    hideHeader = true,
    footerBackgroundColor = '#fff',
    style = {},
    headerLeft,
    headerRight,
    title = '',
    backgroundColor = '#F0F5F1',
    children,
    loading = false,
    barStyle = 'dark-content',
  } = props;
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    StatusBar.setBarStyle(barStyle);
  }, [barStyle]);

  return (
    <View style={{ flex: 1, backgroundColor: PRIMARY_COLOR }}>
      <SafeAreaView
        style={{ flex: 1, zIndex: 1 }}
        edges={['left', 'right', 'top', 'bottom']}
      >
        <View style={{ flex: 1 }}>
          {!hideHeader && <Header title={title} headerLeft={headerLeft} />}
          <View style={{ flex: 1 }}>{children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Body;

type HeaderProps = {
  title?: string;
  headerLeft?: React.ReactNode;
  headerRight?:
    | React.ReactNode
    | (({
        navigation,
        route,
      }: {
        navigation: any;
        route: any;
      }) => React.ReactNode);
  headerTitleStyle?: StyleProp<ViewStyle>;
};

const Header = (props: HeaderProps) => {
  const { title, headerLeft, headerRight, headerTitleStyle } = props;
  const navigation = useNavigation();
  const route = useRoute();

  const resolveHeaderLeft =
    headerLeft !== undefined
      ? headerLeft
      : ({ navigation }: { navigation: any }) => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome6
              name="angle-left"
              size={24}
              color="#000"
              iconStyle="solid"
            />
          </TouchableOpacity>
        );
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ width: 30, paddingLeft: 10, justifyContent: 'center' }}>
        {typeof resolveHeaderLeft === 'function'
          ? resolveHeaderLeft({ navigation })
          : resolveHeaderLeft}
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
          {title}
        </Text>
      </View>
      <View>
        {typeof headerRight === 'function'
          ? headerRight({ navigation, route })
          : headerRight}
      </View>
      <View style={{ width: 30, alignItems: 'flex-end', paddingRight: 10 }}>
        {typeof headerRight === 'function'
          ? headerRight({ navigation, route })
          : headerRight}
      </View>
    </View>
  );
};
