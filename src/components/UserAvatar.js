import React from 'react';
import { Pressable } from 'react-native';
import ImagePlaceholder from './ImagePlaceholder';

function UserAvatar(props) {
  const { onPress, initials } = props;

  return (
    <Pressable onPress={onPress}>
      <ImagePlaceholder title={ initials } />
    </Pressable>
  );
}

export default UserAvatar;