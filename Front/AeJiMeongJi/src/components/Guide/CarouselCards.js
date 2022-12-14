import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/styles';
import Carousel, {Pagination} from 'react-native-snap-carousel';
// import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem22';
import data from './data';
import {useNavigation} from '@react-navigation/native';

const url = 'http://i7d203.p.ssafy.io:8080';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCards = props => {
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const imageurl = 'http://i7d203.p.ssafy.io:8080/api/image/';

  const CarouselCardItem = ({item, index}) => {
    const guideId = item.guideId;
    console.log(guideId);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('GuideDetail', {guideId});
        }}>
        <View style={styles.container} key={index}>
          <Image
            source={
              item.thumbnail
                ? {uri: `${imageurl}${item.thumbnail}`}
                : item.sources
            }
            style={styles.image}
          />
          <Text style={styles.header}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={props.age}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
    </View>
  );
};

export default CarouselCards;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.back200,
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: responsiveHeight(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: responsiveHeight(26),
    borderRadius: 8,
  },
  header: {
    color: '#222',
    fontSize: responsiveFontSize(2.8),
    fontFamily: '??????????????????',
    paddingLeft: responsiveWidth(5),
    paddingTop: responsiveHeight(2.4),
  },
});
