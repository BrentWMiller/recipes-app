import React from 'react';
import { Pressable } from 'react-native';
import ImagePlaceholder from './ImagePlaceholder';

function UserAvatar(props) {
  const { onPress, name } = props;

  return (
    <Pressable onPress={onPress}>
      <ImagePlaceholder title={ name } />
    </Pressable>
  );
}

export default UserAvatar;