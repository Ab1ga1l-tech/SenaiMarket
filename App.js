import {Text, View} from 'react-native';
import { PRODUTOS } from './assets/src/data/Produtos';

export default function App(){
  console.log(PRODUTOS);
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Temos {PRODUTOS.length} produtos cadastrados 🚀</Text>
    </View>
  );
}