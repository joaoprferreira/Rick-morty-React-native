import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import Routes from './src/routes';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Routes />
      </View>
    </SafeAreaView>
  );
};

export default App;
