import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import COLORS from '~styles/colors';
import TYPOGRAPHY from '~styles/typography';
import ImagePlaceholder from './ImagePlaceholder';

function RecipeBlock(props) {
  const { recipe, first, navigation } = props;
  const ingredientsCount = recipe.ingredients.length;

  const styles = StyleSheet.create({
    wrapper: {
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: first ? 0 : 16,
      padding: 16,
      borderWidth: 1,
      borderColor: COLORS.gray[200],
      borderRadius: 25,
      backgroundColor: COLORS.white
    }
  });

  return (
    <Pressable onPress={() => 
      navigation.navigate('Recipe', {
        recipe
      }
    )}>
      <View style={styles.wrapper}>
        <ImagePlaceholder
          title={ recipe.emoji ? recipe.emoji : recipe.title }
          count={ recipe.emoji ? 'emoji' : 2 }
          bgStyle={{ backgroundColor: COLORS.gray[100] }}
          textStyle={{ fontSize: recipe.emoji ? 40 : 24 }}
          size={ 75 }
          image={ recipe.image }
          style={{ marginRight: 16 }}
        />

        <View style={{ flexShrink: 1, width: '100%'}}>
          <Text
            style={[TYPOGRAPHY.subheading, { marginBottom: 8 }]}
            numberOfLines={ 2 }
            ellipsizeMode="tail"
          >
            { recipe.title ? recipe.title : 'Name your recipe'}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[{fontSize: 14, color: COLORS.gray[500]}]}>{ recipe.time }</Text>
            <Text style={[{fontSize: 14, color: COLORS.gray[500]}]}>{ ingredientsCount } ingredient{ingredientsCount !== 1 && 's'}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default RecipeBlock;