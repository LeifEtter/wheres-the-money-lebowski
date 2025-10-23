import { StatusBar } from 'expo-status-bar';
import './global.css';
import View from 'react-native-css/components/View';
import { Pressable, Text } from 'react-native';
import FontAwesome from '@react-native-vector-icons/fontawesome6';
import { useState } from 'react';

export default function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <StatusBar style="auto" />
      <View className="absolute bottom-140 flex w-full flex-row justify-center border">
        <Pressable
          className="flex h-12 w-12 items-center justify-center rounded-full border"
          onPress={() => setModalOpen(!modalOpen)}>
          <FontAwesome name="plus" iconStyle="solid" size={22} />
        </Pressable>
      </View>
      {modalOpen && <Pressable className="absolute h-full w-full shadow-xl" onPress={closeModal} />}
      <View
        key={`modal-sheet`}
        className={`absolute bottom-0 ${!modalOpen ? 'h-0' : 'h-96'} flex w-full border-2 border-red-500 transition-all duration-200 ease-out`}>
        <Pressable
          className="right-10 flex h-14 w-18 items-center justify-center self-end rounded-t-2xl bg-green-500"
          onPress={closeModal}>
          <FontAwesome name="angle-down" iconStyle="solid" size={30} />
        </Pressable>
        <View className="flex h-full w-full bg-yellow-500 shadow-xl"></View>
      </View>
    </>
  );
}
