import Botao from '@/components/Botao';
import styles from '@/constants/styles';
import * as FileSystem from 'expo-file-system';
import { Alert, Text, View } from 'react-native';

export default function TelaPlanilha() {
    const baixarPlanilha = async () => {
        try {
            const url = 'https://example.com/planilha.xlsx'; // URL da planilha
            const fileUri = `${FileSystem.documentDirectory}planilha.xlsx`;

            const download = await FileSystem.downloadAsync(url, fileUri);
            Alert.alert('Download Concluído', `A planilha foi salva em: ${download.uri}`);
        } catch {
            Alert.alert('Erro', 'Não foi possível baixar a planilha.');
        }
    };

    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Clique abaixo para baixar a planilha</Text>
            <Botao onPress={baixarPlanilha}>
                <Text style={{ color: '#fff' }}>Baixar Planilha</Text>
            </Botao>
        </View>
    );
}
