import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';


const TermButton = ({term, setSelectedTerm, isActive}) => (
    <TouchableOpacity style={styles[isActive ? 'termButtonActive' : 'termButton']} 
        onPress={() => setSelectedTerm(term)}>
      <Text style={styles.termText}>{term}</Text>
    </TouchableOpacity> 
);
  

const TermSelector = ({terms, selectedTerm, setSelectedTerm}) => (
    <View style={styles.termSelector}>
      { 
        terms.map(term => (
          <TermButton key={term} term={term} setSelectedTerm={setSelectedTerm}
          isActive={term === selectedTerm}
          />
        ))
      }
    </View>

);

///Styling 
const termButtonBase = { //common styling options for a few elements
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 40,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
};

const styles = StyleSheet.create({
    termSelector: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 350,
    },
    termButton: {
      ...termButtonBase,  //spread operator
      backgroundColor: '#4f9f64',
    },
    termButtonActive: {
        ...termButtonBase,   //spread operator
        backgroundColor: '#105f25',
      },
      termText: {
        color: '#fff',
        fontSize: 15,
      }
});
  
export default TermSelector;