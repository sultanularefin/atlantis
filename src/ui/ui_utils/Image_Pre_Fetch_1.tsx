import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Platform,
  ImageResizeMode,
} from 'react-native';

interface Image_Pre_Fecth_1_Props {
  img_height: number;
  img_width: number;
  imageUrl: string;
  id_temp: string;
  resizeMode: ImageResizeMode;
}

const Image_Pre_Fetch_1: React.FC<Image_Pre_Fecth_1_Props> = ({
  imageUrl,
  img_height,
  img_width,
  id_temp,
  resizeMode,
}) => {
  const [isImageReady, setImageReady] = useState<boolean>(false);

  useEffect(() => {
    const prefetchImage = async () => {
      try {
        await Image.prefetch(imageUrl);
        setImageReady(true);
      } catch (error) {
        // console.error('Image prefetch failed:', error);
      }
    };

    prefetchImage();
  }, []);

  if (isImageReady) {
    return (
      <Image
        source={{
          uri: imageUrl,
          cache: 'force-cache',//'only-if-cached',
      }}

        key={id_temp}
        style={{
          width: img_width,
          height: img_height,
        }}
        resizeMode={resizeMode}
        // key={key}
      />
    );
  } else {
    return (
      <View
        style={{
          flexDirection: 'column',
          height: img_height,
          justifyContent: 'center',
          width: img_width,
        }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
};

export default Image_Pre_Fetch_1;
