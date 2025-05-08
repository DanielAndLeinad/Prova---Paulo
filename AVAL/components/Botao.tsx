import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

export interface BotaoProps {
    children: React.ReactNode
    onPress?: () => void
}

export default function Botao(props: BotaoProps) {
    return (
        <Pressable
            style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, styles.botao]}
            onPress={props.onPress}
        >
            {props.children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#FF5733', // Nova cor de fundo
        paddingHorizontal: 20, // Aumentar o padding horizontal
        paddingVertical: 15, // Aumentar o padding vertical
        borderRadius: 10, // Alterar o raio das bordas
    },
})
