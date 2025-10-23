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
    className={`${className} rounded-3xl shadow-sm ${double ? 'aspect-[2] w-[41%]' : 'aspect-square w-[20%]'} flex items-center justify-center`}
    onPress={onClick}>
    <Text className={`text-2xl font-semibold ${textClassName}`}>{value}</Text>
  </Pressable>
);
