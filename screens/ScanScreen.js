import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ScanScreen() {

    const friends = [
        { name: 'Friend 1' },
        { name: 'Friend 2' }, 
        { name: 'Friend 3' }, 
        { name: 'Friend 4' }, 
        { name: 'Friend 5' }, 
    ];

    return (
       <FlatList 
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({ item }) => {
        return <Text style={styles.text}>{ item.name }</Text>
        }}

        />
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    }
});