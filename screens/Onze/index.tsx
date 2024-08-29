import React, { useState } from 'react';
import Constants from 'expo-constants';
import logo from "../../assets/fatec.png";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

function Logo() {
    return <Image source={logo} style={{ width: 140, height: 140, resizeMode: 'contain' }} />;
}

const Onze: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: 270, borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 12 }}>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                    <Logo />
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>HOME</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Um</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Dois</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Três</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Quatro</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Cinco</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Seis</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Sete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Oito</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Nove</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Dez</Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: '#f3f3f3',
        paddingTop: Constants.statusBarHeight
    },
    button: {
        flex: 0.5,
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
    buttonView: {
        flexDirection: 'row',
        gap: 10
    }
});

export default Onze;