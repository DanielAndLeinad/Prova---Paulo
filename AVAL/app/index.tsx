import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router'
import { Text, View } from 'react-native'

export default function TelaInicial() {
    const nav = useNavigation()
    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Ionicons name="link" size={100} />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>Prova React</Text>
                <Text style={{ fontSize: 16 }}>Ajuda-me</Text>
            </View>
            <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
                <Text style={{ color: '#fff' }}>Navegar</Text>
            </Botao>
        </View>
    )
}
