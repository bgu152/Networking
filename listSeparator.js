import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList, StatusBar, Image } from 'react-native';

export default function listSeparator() {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };