import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setModalVisibility } from '~store/recipes';
import APP from '~styles/app';
import COLORS from '~styles/colors';
import FONTS from '~styles/fonts';
import TYPOGRAPHY from '~styles/typography';
import RecipeSkeleton from './RecipeSkeleton';

function NoRecipes(props) {
  const dispatch = useDispatch();
  const { navigation } = props;

  return (
    <View style={[APP.container]}>
      <Text style={[TYPOGRAPHY.body]}>This is where your recently created recipes will appear. Let's get started by adding your first one.</Text>

      <Pressable style={styles.addBlock} onPress={() => navigation.navigate('Edit Recipe')}>
        <Text style={[TYPOGRAPHY.body, { fontFamily: FONTS.medium500, color: COLORS.white }]}>Add a new recipe</Text>
      </Pressable>

      {[...Array(3).keys()].map(i => <RecipeSkeleton key={i}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  addBlock: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 25,
    backgroundColor: COLORS.black
  }
})

export default NoRecipes;