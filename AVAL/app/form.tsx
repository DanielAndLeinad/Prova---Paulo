import Botao from '@/components/Botao';
import styles from '@/constants/styles';
import { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';

export default function TelaFormulario() {
    const [produto, setProduto] = useState({ id: '', nome: '' });
    const [erros, setErros] = useState({ id: '', nome: '' });

    const validarFormulario = () => {
        let valid = true;
        const novosErros = { id: '', nome: '' };

        if (!produto.nome.trim()) {
            novosErros.nome = 'O nome do produto é obrigatório.';
            valid = false;
        }

        if (!produto.id.trim()) {
            novosErros.id = 'O ID do produto é obrigatório.';
            valid = false;
        }

        setErros(novosErros);
        return valid;
    };

    const salvarProduto = () => {
        if (validarFormulario()) {
            Alert.alert('Produto Salvo', `ID: ${produto.id}\nNome: ${produto.nome}`);
            setProduto({ id: '', nome: '' }); // Limpa o formulário após salvar
        }
    };

    return (
        <View style={styles.centralizado}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Cadastro de Produto</Text>

            <TextInput
                placeholder="Nome do Produto"
                value={produto.nome}
                style={[styles.input, erros.nome && styles.inputError]}
                onChangeText={(nome) => setProduto({ ...produto, nome })}
            />
            {erros.nome && <Text style={{ color: 'red' }}>{erros.nome}</Text>}

            <TextInput
                placeholder="ID do Produto"
                value={produto.id}
                style={[styles.input, erros.id && styles.inputError]}
                keyboardType="numeric"
                onChangeText={(id) => setProduto({ ...produto, id })}
            />
            {erros.id && <Text style={{ color: 'red' }}>{erros.id}</Text>}

            <Botao onPress={salvarProduto}>
                <Text style={{ color: '#fff' }}>Salvar</Text>
            </Botao>
        </View>
    );
}
