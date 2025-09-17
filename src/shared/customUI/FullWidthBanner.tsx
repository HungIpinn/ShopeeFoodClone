import { useState, useEffect } from 'react';
import { Dimensions, Image } from 'react-native';
import FastImage, { FastImageProps } from '@d11/react-native-fast-image';

const { width: screenWidth } = Dimensions.get('window');

type FullWidthImageProps = FastImageProps & {
  uri: string;
  width?: number;
  height?: number;
};

export function FullWidthImage({
  uri,
  width,
  height,
  ...props
}: FullWidthImageProps) {
  const [imgHeight, setImgHeight] = useState(height ?? null);

  useEffect(() => {
    if (!width || !height) {
      Image.getSize(
        uri,
        (w, h) => {
          const ratio = h / w;
          setImgHeight(screenWidth * ratio);
        },
        (err) => console.warn('Cannot get image size:', err),
      );
    }
  }, [uri, width, height]);

  const finalWidth = width ?? screenWidth;
  const finalHeight = height ?? imgHeight;

  if (!imgHeight) return null;

  return (
    <FastImage
      {...props}
      source={{ uri, priority: FastImage.priority.normal }}
      style={{ width: finalWidth, height: finalHeight }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
}
