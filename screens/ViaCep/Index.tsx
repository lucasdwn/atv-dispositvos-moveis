import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useCep } from '../../contexts/CepContext';

const ViaCep: React.FC = () => {
    const { endereco, buscarCep, error } = useCep();
    const [formState, setFormState] = useState({
        cep: ''
    });

    const handleChange = (name: any, value: any) => {
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>CEP:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu CEP"
                value={formState.cep}
                keyboardType="numeric"
                maxLength={8}
                onChangeText={(text) => handleChange('cep', text)}
                placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button} onPress={() => buscarCep(formState.cep)}>
                <Text style={styles.buttonText}>OBTER</Text>
            </TouchableOpacity>

            <View>
                {
                    endereco ? (
                        <View>
                            <Text style={styles.result}>
                                Logradouro: {endereco?.logradouro}
                            </Text>
                            <Text style={styles.result}>
                                Localidade: {endereco?.localidade}
                            </Text>
                            <Text style={styles.result}>
                                UF: {endereco?.uf}
                            </Text>
                        </View>
                    ) :
                        (
                            <View>
                                <Text style={styles.result}>
                                    {error}
                                </Text>
                            </View>
                        )
                }
            </View>
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
        backgroundColor: 'yellow',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    result: {
        color: '#fff'
    },
});

export default ViaCep;
