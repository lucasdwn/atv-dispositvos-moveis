import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { View } from 'react-native';

const Tres: React.FC = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column'}}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'crimson' }}>
                <View style={{ flex: 1, backgroundColor: 'lime', alignItems: 'center', justifyContent: 'center' }}>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'aquamarine' }}>
                    <View style={{ flex: 1, backgroundColor: 'teal', alignItems: 'center', justifyContent: 'center' }}>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center' }}>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'salmon', alignItems: 'center', justifyContent: 'center' }}>
            </View>
        </View>
    );
};
export default Tres;