import * as React from 'react';
import { Text, View, StyleSheet, Image ,Pressable,TouchableOpacity} from 'react-native';
import Styles from './StartPageStyle';
import SlidesInfo from '../SlidesList/SlidesInfo';
import {theme} from '../../../core/theme';
export default function StartPage ({navigation}){
  return (
    <View style={Styles.startPage}>
        <Image
        source={require("../../../assets/logo.png")}
        resizeMode="contain"
        style={Styles.imageLogo}
      ></Image>
      <View style={Styles.buttonsView}>
        <TouchableOpacity
          style={Styles.buttonOne}
          onPress={()=> navigation.navigate('SlideItem',{title: SlidesInfo[0].title , subTitle: SlidesInfo[0].subTitle , image:SlidesInfo[0].image , i:0})}
        >
        <Text style={Styles.textButtonOne}>
        English
        </Text></TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonTwo}
        >
        <Text style={Styles.textButtonTwo}>
        عربي
        </Text></TouchableOpacity>
      </View>


      </View>
  );
};
