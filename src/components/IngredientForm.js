import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const IngredientForm = ({ onAddIngredient }) => {
  const [ingredient, setIngredient] = useState('');

  const handleAdd = () => {
    if (ingredient.trim()) {
      onAddIngredient(ingredient.trim());
      setIngredient('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder="e.g. sausages"
        value={ingredient}
        onChangeText={setIngredient}
        onSubmitEditing={handleAdd}
        returnKeyType="done"
        style={styles.input}
        outlineStyle={styles.inputOutline}
      />
      <Button
        mode="contained"
        onPress={handleAdd}
        style={styles.button}
        contentStyle={styles.buttonContent}
        buttonColor="#141413"
        icon="plus"
        labelStyle={styles.buttonLabel}
      >
        Add
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 45,
    minWidth: 150,
    backgroundColor: '#FFFFFF',
  },
  inputOutline: {
    borderRadius: 6,
    borderColor: '#888888',
  },
  button: {
    borderRadius: 6,
    justifyContent: 'center',
    width: 150,
  },
  buttonContent: {
    height: 45,
  },
  buttonLabel: {
    fontSize: 14,
  },
});

export default IngredientForm;