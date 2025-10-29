import { Pressable, Text } from 'react-native';

interface SingleButtonProps {
  onClick: () => void;
  value: number | string;
  basis?: number;
  className?: string;
  double: boolean;
  textClassName: string;
}

export const SingleButton = ({
  onClick,
  value,
  className,
  double,
  textClassName,
}: SingleButtonProps) => (
  <Pressable
    className={`${className} rounded-3xl shadow-sm ${double ? 'w-47' : 'mx-1 aspect-square w-22'} flex h-22 items-center justify-center`}
    onPress={onClick}>
    <Text className={`text-2xl font-semibold ${textClassName}`}>{value}</Text>
  </Pressable>
);
