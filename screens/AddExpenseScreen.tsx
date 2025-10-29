import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { StaticScreenProps } from '@react-navigation/native';
import { SingleButton } from 'components/PadButton';
import { PAD_BUTTONS, PadButton, PadButtonType } from 'lib/PadButton';
import { useState } from 'react';
import { FlatList, ListRenderItemInfo, Pressable, Text, View } from 'react-native';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import { reduce } from 'eslint.config';

type AddExpenseScreenProps = StaticScreenProps<{
  name: string;
}>;

export function AddExpenseScreen({ route }: AddExpenseScreenProps) {
  const [billAmount, setBillAmount] = useState<string>('0');
  const [billAmountSelected, setBillAmountSelected] = useState<boolean>(false);

  const computeNumberEntry = (type: PadButtonType, value: string | number) => {
    if (type !== PadButtonType.DELETE && billAmount.length > 7) return;
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
    <Pressable onPress={() => setBillAmountSelected(false)}>
      <View className="to-lebowski-purple-400 flex h-full flex-col items-center bg-linear-to-br from-white pt-30">
        <View className="bg-lebowski-purple-900 rounded-xl py-1 px-5 self-start ml-4 -mb-2 z-10">
          <Text className="text-lg font-bold text-white">Bill</Text>
        </View>
        <View className="flex h-22 flex-row items-center bg-white rounded-xl shadow-md w-10/12 px-4">
          <Text className="bg-lebowski-purple-900 rounded-md px-2 py-1 text-2xl text-white">€</Text>
          <Pressable
            className="grow px-4 h-full flex flex-row items-center"
            onPress={() => setBillAmountSelected(true)}>
            <Text className="text-lebowski-purple-900 text-3xl font-bold">{billAmount}</Text>
            {billAmountSelected && (
              <View className={`w-1 h-9 ml-1 animate-blink bg-lebowski-purple-900`}></View>
            )}
          </Pressable>
          {/* <View className="grow" /> */}
          <View className="bg-lebowski-purple-900 p-2 rounded-lg flex flex-row items-center gap-2">
            <FontAwesome6 name="calendar-days" color={'white'} size={24} />
            <Text className="text-white text-lg font-semibold">3. Oct</Text>
          </View>
        </View>
        <View
          className={`${billAmountSelected ? 'h-100' : 'h-0'} absolute right-4 bottom-6 left-4 flex flex-row items-center justify-center rounded-3xl bg-white duration-75`}>
          <View className="flex h-11/12 w-full flex-row flex-wrap justify-center gap-y-1">
            {PAD_BUTTONS.map((btn) => (
              <SingleButton
                key={`btn-${btn.value}`}
                textClassName={`${btn.type === PadButtonType.ENTER ? 'text-purple-50' : 'text-lebowski-purple'}`}
                className={`${btn.type === PadButtonType.ENTER ? 'bg-lebowski-purple-900' : 'bg-white'}`}
                onClick={() => {
                  impactAsync(ImpactFeedbackStyle.Light);
                  computeNumberEntry(btn.type ?? PadButtonType.NUMBER, btn.value);
                }}
                value={btn.value}
                double={btn.double !== undefined && btn.double}
              />
            ))}
          </View>
          {/* <FlatList
          contentContainerStyle={{
            paddingVertical: 1,
            paddingHorizontal: 10,
            rowGap: 4,
            columnGap: 4,
            marginTop: 8,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 280,
          }}
          data={PAD_BUTTONS}
          numColumns={4}
          renderItem={(e: ListRenderItemInfo<PadButton>) => (
            // <View className="aspect-square w-[41%] border border-red-500"></View>
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
        /> */}
        </View>
      </View>
    </Pressable>
  );
}
