import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import {session} from '../data/dummysessions';
import { DrinkItem } from '../components/DrinkItem';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export const HomeScreen = () => {
  return (
    <Container>
      <Text style={styles.title}>Drink Tracker</Text>
      {session.drinks.map((drink, index) => 
        <DrinkItem {...drink} key={index} />
      )}
      <Button title="Add drink" />
      <StatusBar style="auto" />
      <Text>Try not to drink and drive</Text>
    </Container>
  );
}
