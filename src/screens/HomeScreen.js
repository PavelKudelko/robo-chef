import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import IngredientForm from '../components/IngredientForm';
import IngredientsList from '../components/IngredientsList';
import RecipePrompt from '../components/RecipePrompt';

const HomeScreen = () => {
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = (ingredient) => {
    setIngredients((prev) => [...prev, ingredient]);
  };

  const handleGetRecipe = () => {
    console.log('Get recipe with ingredients:', ingredients);
    // TODO: Implement recipe generation
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <IngredientForm onAddIngredient={handleAddIngredient} />

        {ingredients.length > 0 && (
          <>
            <IngredientsList ingredients={ingredients} />
            <RecipePrompt onGetRecipe={handleGetRecipe} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 30,
  },
});

export default HomeScreen;