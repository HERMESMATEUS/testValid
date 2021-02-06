import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { HeightDP, WidthDP } from '@functions/calculateSize';

const ContainComponent = ({ children }) => <View style={styles.contain}>
    {children}
</View>

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        paddingBottom: HeightDP(10)
    }
})

export default ContainComponent;