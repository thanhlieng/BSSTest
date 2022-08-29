import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './styles';
import CardFlip from 'react-native-card-flip';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  // const cards = useRef();
  // console.log(data.avatar);
  render() {
    let data = this.state.data;
    return (
      <View style={{...styles.card}}>
        <Image
          source={{uri: data.avatar}}
          style={{width: 100, height: 100}}></Image>
        <Text style={styles.textName}>{data.first_name + data.last_name}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {data.employment.title}
        </Text>
      </View>
    );
  }
}

export default CardItem;
