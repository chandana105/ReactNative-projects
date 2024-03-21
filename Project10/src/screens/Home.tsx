import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import Seperator from '../components/Seperator';
import ProductItem from '../components/ProductItem';
import {useSelector} from 'react-redux';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const productsList = useSelector(
    (state: RootState) => state.products.products,
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={productsList}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('Details', {productId: item.id})
            }>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
