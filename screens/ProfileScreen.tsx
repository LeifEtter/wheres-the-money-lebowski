import { StaticScreenProps } from '@react-navigation/native';
import { Text } from 'react-native';

type ProfileScreenProps = StaticScreenProps<{
  name: string;
}>;

export function ProfileScreen({ route }: ProfileScreenProps) {
  return <Text>This is {route.params.name}s profile</Text>;
}
