import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { StaticScreenProps } from '@react-navigation/native';
import { SingleButton } from 'components/PadButton';
import { PAD_BUTTONS, PadButton, PadButtonType } from 'lib/PadButton';
import { useState } from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import { reduce } from 'eslint.config';

type AddExpenseScreenProps = StaticScreenProps<{
  name: string;
}>;

export function AddExpenseScreen({ route }: AddExpenseScreenProps) {
  const [billAmount, setBillAmount] = useState<string>('0');
  const [billAmountSelected, setBillAmountSelected] = useState<boolean>(true);

  const computeNumberEntry = (type: PadButtonType, value: string | number) => {
    if (type === PadButtonType.NUMBER) {
      if (billAmount === '0') {
        setBillAmount(value.toString());
      } else {
        setBillAmount((v) => `${v}${value.toString()}`);
      }
    } else if (type === PadButtonType.DELETE) {
      setBillAmount((v) => v.substring(0, v.length - 1));
    } else if (type === PadButtonType.COMMA) {
      if (!billAmount.includes('.')) {
        setBillAmount((v) => `${v}${'.'}`);
      }
    } else if (type === PadButtonType.FLOAT && !billAmount.includes('.')) {
      setBillAmount((v) => `${v}${value}`);
    }
  };
  // useEffect(() => {
  //   FontAwesome6.getImageSource('solid', 'arrow-down', 500).then((source) =>
  //     setThumbSource(source)
  //   );
  // }, []);

  return (
    <View className="flex h-full flex-col items-start bg-white">
      <View className="bg-lebowski-purple-900 rounded-tr-2xl py-2 pr-4 pl-3">
        <Text className="text-lg font-bold text-white">Bill</Text>
      </View>
      <View className="bg-lebowski-purple-100 border-lebowski-purple-800 mt-4 flex h-22 w-full flex-row items-center border">
        <Text className="bg-lebowski-purple-900 ml-5 rounded-md px-2 py-1 text-2xl text-white">
          €
        </Text>
        <Text className="text-lebowski-purple-900 ml-4 text-3xl font-bold">{billAmount}</Text>
      </View>
      <View
        className={`${billAmountSelected ? 'h-96' : 'h-0'} absolute bottom-0 left-0 w-full flex-row items-center bg-purple-50 duration-75`}>
        <FlatList
          contentContainerStyle={{
            paddingVertical: 1,
            paddingHorizontal: 10,
            rowGap: 4,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 300,
          }}
          data={PAD_BUTTONS}
          numColumns={4}
          renderItem={(e: ListRenderItemInfo<PadButton>) => (
            <SingleButton
              textClassName={`${e.item.type === PadButtonType.ENTER ? 'text-purple-50' : 'text-lebowski-purple'}`}
              className={`${e.item.type === PadButtonType.ENTER ? 'bg-lebowski-purple-900' : 'bg-white'}`}
              onClick={() => {
                impactAsync(ImpactFeedbackStyle.Light);
                computeNumberEntry(e.item.type ?? PadButtonType.NUMBER, e.item.value);
              }}
              value={e.item.value}
              double={e.item.double !== undefined && e.item.double}
            />
          )}
        />
      </View>
    </View>
  );
}
