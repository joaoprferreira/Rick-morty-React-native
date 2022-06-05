import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  Text: {
    fontSize: 14,
    color: 'green',
  },
});

export default Home;
