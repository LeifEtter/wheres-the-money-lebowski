import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'App';
import { Button, Pressable, Text } from 'react-native';

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable onPress={() => navigation.navigate('Profile', { name: 's' })}>
      <Text>Press Me</Text>
    </Pressable>
  );
}
