import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    return(
        <StackNavigator>
            <Stack.Screen
            name='Login' component={{LoginScreen}} options={{headerShown:false}}
            />
        </StackNavigator>
    );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems:'center', justifyContent: 'center'},
  text: {fontSize: 20, marginBottom: 20}
})