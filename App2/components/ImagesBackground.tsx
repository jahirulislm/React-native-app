import React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'logo-og.png' };
function ImagesBackground(): JSX.Element {
  return (
    <View style={styls.container}>
      <ImageBackground source={image} resizeMode="cover" style={styls.images}>
        <Text style={styls.text}>Insider image</Text>
      </ImageBackground>
      <View>
        <Text>Image is not working properly</Text>
      </View>
    </View>
  );
}

const styls = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default ImagesBackground;
