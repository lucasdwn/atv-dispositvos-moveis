import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import logo from "../../assets/adaptive-icon.png";
import { View, Image } from 'react-native';

function Logo() {
    return <Image source={logo} style={{ flex: 1, alignSelf: 'center', resizeMode: 'contain' }} />;
}

const Quatro: React.FC = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'crimson' }}>
                <View style={{ flex: 1, backgroundColor: 'lime', alignItems: 'center', justifyContent: 'center' }}>
                    <Logo />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'aquamarine' }}>
                    <View style={{ flex: 1, backgroundColor: 'teal', alignItems: 'center', justifyContent: 'center' }}>
                        <Logo />
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center' }}>
                        <Logo />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'salmon', alignItems: 'center', justifyContent: 'center' }}>
                <Logo />
            </View>
        </View>
    );
};
export default Quatro;