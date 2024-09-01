import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

const Seis: React.FC = () => {
    const [formState, setFormState] = useState({
        nome: '',
        idade: ''
    });
    const [dadosState, setDadosState] = useState({
        nome: '',
        idade: ''
    })

    const handleChange = (name: any, value: any) => {
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSave = () => {
        setDadosState(formState);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={formState.nome}
                onChangeText={(text) => handleChange('nome', text)}
                placeholderTextColor="#999"
            />

            <Text style={styles.label}>Idade:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua idade"
                value={formState.idade}
                onChangeText={(text) => handleChange('idade', text)}
                keyboardType="numeric"
                placeholderTextColor="#999"
            />

            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>SALVAR</Text>
            </TouchableOpacity>

            <Text style={styles.result}>
                {dadosState.nome} - {dadosState.idade}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        backgroundColor: '#333'
    },
    label: {
        color: '#fff',
        marginBottom: 4,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#fff', 
        marginBottom: 12,
        paddingLeft: 8,
        borderRadius: 4,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    result: {
        color: '#fff',
        marginTop: 16,
        textAlign: 'center',
    },
});

export default Seis;