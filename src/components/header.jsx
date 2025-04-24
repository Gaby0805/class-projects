import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View className="flex w-full h-16 bg-blue-700 justify-center items-center">
      <Text className="text-2xl text-white">
          Abril/2025
      </Text>
      <View className='rounded-full bg-gray-500 w-10 h-10 absolute right-1'>
      </View>
    </View>
  );
};

export default Header;
