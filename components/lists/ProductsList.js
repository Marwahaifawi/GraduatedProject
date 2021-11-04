import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import SmallCards from "../Cards/SmallCards";
import Title from '../Texts/Title';
import { theme } from "../../core/theme";
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const ProductsList = ({ title, data , fontFamily , OnPress , navigation }) => {
  return (
    <>
    <View style={{flexDirection:'row' , justifyContent: 'space-between' , paddingRight: 20}}> 
      <Title  fontFamily={fontFamily} size={30}>{title}</Title>
      <TouchableOpacity onPress={() => {
          navigation.navigate('Cart');
        }}> 
        <FontAwesome name="shopping-cart" size={25} color= 'grey' />
      </TouchableOpacity>
     
      </View>
     
      <View style={style.container}>
         {data.map(item =>
          <SmallCards 
          OnPress={OnPress} 
          item={item} 
          key={String(item.id)}
          /> )}        
         </View>
    </>
    
  );

};

const style = StyleSheet.create({
 container:{
   flexDirection:'row',
   flexWrap:'wrap',
   justifyContent:'space-between'
 }
});

export default ProductsList;