import {useNavigation} from '@react-navigation/native';

export const IsRedirect = (value: string) => {
  const navigation: void | any = useNavigation();
  if (value) {
    navigation.navigate('dash');
  }
};