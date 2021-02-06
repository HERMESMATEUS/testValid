import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoaddingComponent = ({ show }) => show ? <View style={styles.contain}>
    <ActivityIndicator size={100} />
</View> : null;

const styles = StyleSheet.create({
    contain: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    }
})

export default LoaddingComponent;
