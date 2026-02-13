import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './MainScreen.style';


const MainScreen: React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Тут буде головний екран додатку</Text>
        </View>
    )
}

export default MainScreen;