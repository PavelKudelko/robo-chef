import { StyleSheet, View } from 'react-native';
import { List, Text } from 'react-native-paper';

const IngredientsList = ({ ingredients }) => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Ingredients on hand:
      </Text>
      <List.Section style={styles.list}>
        {ingredients.map((ingredient, index) => (
          <List.Item
            key={`${ingredient}-${index}`}
            title={ingredient}
            titleStyle={styles.itemTitle}
            left={() => <List.Icon icon="circle-small" color="#475467" />}
            style={styles.item}
          />
        ))}
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    marginBottom: 12,
    fontWeight: '600',
  },
  list: {
    marginBottom: 48,
    paddingTop: 0,
  },
  item: {
    paddingVertical: 0,
    minHeight: 28,
  },
  itemTitle: {
    color: '#475467',
    lineHeight: 28,
  },
});

export default IngredientsList;