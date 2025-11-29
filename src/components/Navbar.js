import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Image
        source={require('../assets/chef2.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text variant="headlineSmall" style={styles.title}>
        robo-chef
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#FFFFFF',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    // shadow for Android
    elevation: 5,
    // border for subtle effect
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  icon: {
    width: 45,
    height: 45,
  },
  title: {
    marginLeft: 8,
    fontWeight: '500',
  },
});

export default Navbar;