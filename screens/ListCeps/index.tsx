import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useCep } from '../../contexts/CepContext';

const ListCeps: React.FC = () => {
    const { cepsConsultados } = useCep();
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {cepsConsultados.map((cep, index) => (
                    <View key={index} style={styles.cepContainer}>
                        <Text style={styles.result}>{`Logradouro: ${cep.logradouro}`}</Text>
                        <Text style={styles.result}>{`Localidade: ${cep.localidade}`}</Text>
                        <Text style={styles.result}>{`UF: ${cep.uf}`}</Text>
                    </View>
                ))}
            </ScrollView>
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
    scrollView: {
        marginTop: 16,
    },
    cepContainer: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
});

export default ListCeps;
