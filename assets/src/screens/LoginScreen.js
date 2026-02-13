import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function LoginScreen(){
    return(
        <View style ={StyleSheet.container}>
          <Text style={styles.logo}>🛒 SenaiMarket</Text>   
           
           <TextInput
           placeholder= "E-mail"
           style={styles.input}/>

           <TextInput
           placeholder= "Senha"
           style={styles.input}/>
           


        </View>
    )
}