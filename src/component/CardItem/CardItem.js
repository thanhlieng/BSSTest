import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './styles';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  UNSAFE_componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({value}) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0],
    });
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1],
    });
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  }

  render() {
    const frontAnimatedStyle = {
      transform: [{rotateY: this.frontInterpolate}],
    };
    const backAnimatedStyle = {
      transform: [{rotateY: this.backInterpolate}],
    };
    // const cards = useRef();
    // console.log(data.avatar);
    let data = this.state.data;
    console.log(data);
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.flipCard();
            }}
            style={{backgroundColor: 'transparent'}}>
            <Animated.View
              style={[
                styles.flipCard,
                frontAnimatedStyle,
                {opacity: this.frontOpacity},
              ]}>
              <Image
                source={{uri: data.avatar}}
                style={{width: 100, height: 100}}></Image>
              <Text style={styles.textName}>
                {data.first_name + data.last_name}
              </Text>
              <Text numberOfLines={1} ellipsizeMode="tail">
                {data.employment.title}
              </Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.flipCard,
                styles.flipCardBack,
                backAnimatedStyle,
                {opacity: this.backOpacity},
              ]}>
              <Text style={styles.flipText}>
                address : {data.address.street_address},{' '}
                {data.address.street_name}, {data.address.city},{' '}
                {data.address.state}
                email: {data.email}
                phone_number: {data.phone_number}
              </Text>
              <Text style={styles.flipText}>email: {data.email}</Text>
              <Text style={styles.flipText}>
                phone_number: {data.phone_number}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CardItem;
