import React from 'react'
import { View, Text , Dimensions, StyleSheet } from 'react-native';
import CardSquare from './CardSquare';
import { theme } from '../../core/theme';
const {width} = Dimensions.get('window');
const VerticalCards = ({item , OnPress}) => {

    return (
     
      <CardSquare name={item.name} OnPress={OnPress} FontFamily={{fontFamily:'FontTwo'}} size={{fontSize:15}} item= {item} style={ styles.container} styleImage={styles.stylesImage}/>

       );
}
const styles = StyleSheet.create({
   container:{
      width: width / 3.8 , 
      marginRight:15, 
      height:110,
      paddingTop:5,
      alignItems:'center',
      backgroundColor: theme.colors.surface
   },
   stylesImage:{
      height:20,
      width:50
   },
});
export default VerticalCards;
