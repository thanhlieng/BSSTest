import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {getData} from '../network/handleCallAPI';
import CardItem from '../component/CardItem/CardItem';
import colors from '../asset/colors';

const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData(data => setData(data));
  }, []);

  const callApi = () => {
    console.log('???');
    getData(data => setData(data));
  };

  const _renderItem = ({item, index}) => <CardItem data={item} key={index} />;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={callApi} style={styles.button}>
        <Text>Call Api</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={_renderItem}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        style={{flex: 1}}
      />
    </View>
  );
};

export default Main;
