import React from 'react';
import { Pressable } from 'react-native';
import Placeholder from './Placeholder';

function UserAvatar(props) {
  const { onPress, initials } = props;

  return (
    <Pressable onPress={onPress}>
      <Placeholder title={ initials } />
    </Pressable>
  );
}

export default UserAvatar;