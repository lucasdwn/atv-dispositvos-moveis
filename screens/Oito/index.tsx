import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

const Oito: React.FC = () => {
    const [formState, setFormState] = useState({
        email: '',
        senha: '',
        confirmSenha: ''
    });
    const [dadosState, setDadosState] = useState({
        email: '',
        senha: '',
        confirmSenha: ''
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
            <View style={{ width: 270, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 12 }}>
                <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'yellow', fontSize: 16, fontWeight: 'bold' }}>CADASTRO</Text>
                </View>
                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    value={formState.email}
                    autoCapitalize='none'
                    autoComplete='email'
                    autoCorrect={false}
                    keyboardType='email-address'
                    onChangeText={(text) => handleChange('email', text)}
                    placeholderTextColor="#999"
                />

                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    maxLength={8}
                    value={formState.senha}
                    onChangeText={(text) => handleChange('senha', text)}
                    placeholderTextColor="#999"
                />

                <Text style={styles.label}>Confirmar Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirme sua senha"
                    secureTextEntry={true}
                    maxLength={8}
                    value={formState.confirmSenha}
                    onChangeText={(text) => handleChange('confirmSenha', text)}
                    placeholderTextColor="#999"
                />

                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                    <TouchableOpacity style={styles.button} onPress={handleSave}>
                        <Text style={styles.buttonText}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Logar</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.result}>
                    {dadosState.email} - {dadosState.senha} - {dadosState.confirmSenha}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingTop: Constants.statusBarHeight
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
        backgroundColor: 'yellow',
        padding: 12,
        paddingHorizontal: 15,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    result: {
        color: '#fff',
        marginTop: 16,
        textAlign: 'center',
    },
});

export default Oito;