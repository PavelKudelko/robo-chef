import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

const RecipePrompt = ({ onGetRecipe }) => {
  return (
    <Card style={styles.card} mode="contained">
      <Card.Content style={styles.content}>
        <View style={styles.textContainer}>
          <Text variant="titleMedium" style={styles.title}>
            Ready for a recipe?
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Generate a recipe from your list of ingredients.
          </Text>
        </View>
        <Button
          mode="contained"
          onPress={onGetRecipe}
          style={styles.button}
          buttonColor="#D17557"
          labelStyle={styles.buttonLabel}
        >
          Get a recipe
        </Button>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0EFEB',
    borderRadius: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontWeight: '500',
    marginBottom: 4,
  },
  subtitle: {
    color: '#6B7280',
  },
  button: {
    borderRadius: 6,
  },
  buttonLabel: {
    fontSize: 13,
  },
});

export default RecipePrompt;