import {Text, View} from 'react-native';
import React from 'react';

export interface You_Are_Offline_Comp_Props {
  comp_width: number;
}

const You_Are_Offline_Comp: React.FC<You_Are_Offline_Comp_Props> = ({
  comp_width,
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: 28,
        backgroundColor: 'red',
        width: comp_width,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
        }}>
        {' '}
        You are offline
      </Text>
    </View>
  );
};

export default You_Are_Offline_Comp;
