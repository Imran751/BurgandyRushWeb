import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo/vector-icons

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search query:', query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={24} color="gray" style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
});
