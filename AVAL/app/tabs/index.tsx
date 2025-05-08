import styles from '@/constants/styles';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function TabInicial() {
    return (
        <View style={styles.centralizado}>
        <View style =  {{alignItems: 'center'}}>
        <AntDesign name="tags" size={100} color="black" />
            <Text style ={{fontSize: 20, fontWeight:700}}>
            Bem-vindo ao menu de navegação!
            </Text>
          </View>
        </View>
      );
    }
    
