import { StatusBar } from 'react-native';

import {
   useFonts,
   Inter_400Regular,
   Inter_600SemiBold,
   Inter_700Bold,
   Inter_900Black
   } from '@expo-google-fonts/inter';

import { Home } from './src/screens/home';
import { Loading } from './src/components/Loading'
import { Background } from './src/components/Backgroun';

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  return (
    < Background>
      < StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontLoaded ? <Home /> : <Loading /> }
    </ Background>
  );
}

