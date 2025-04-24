import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/header';
import Task from '../components/tarefas';

const App = () => {
  return (
    <View className='flex flex-col'>

    <Header/>
    
    <View className=' w-full justify-center items-center flex'>

    <Task/>
    </View>

    </View>
  );
};

export default App;
