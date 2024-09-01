import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { View } from 'react-native';

const Um: React.FC = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'crimson' }}>
            </View>
            <View style={{ flex: 1, backgroundColor: 'salmon', alignItems: 'center', justifyContent: 'center' }}>
            </View>
        </View>
    );
};
export default Um;