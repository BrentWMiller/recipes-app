import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Tag from '~components/Tag';
import NumberedCircle from '~components/NumberedCircle';
import APP from '~styles/app';
import COLORS from '~styles/colors';
import TYPOGRAPHY from '~styles/typography';
import { format } from "date-fns";

function RecipeScreen({ route, navigation }) {
  const { params } = route;
  const recipe = params.recipe;

  return (
    <KeyboardAwareScrollView extraHeight={ 100 } style={[APP.container, {marginVertical: 40}]}>
      <SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[TYPOGRAPHY.body, {color: COLORS.gray[600]}]}>{ format(recipe.created * 1000, 'M/dd/yyyy') }</Text>
          {recipe.category ? <Tag label={recipe.category}></Tag> : null}
        </View>
        
        <View style={{marginTop: 20}}>
          <Text style={[TYPOGRAPHY.heading]}>{ recipe.title }</Text>
          <Text style={[TYPOGRAPHY.body, {marginTop: 10, color: COLORS.gray[600]}]}>{ recipe.description }</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40}}>
          <View>
            <Text style={[TYPOGRAPHY.subheading]}>{ recipe.ingredients.length }</Text>
            <Text style={{color: COLORS.gray[600]}}>Ingredients</Text>
          </View>

          <View>
            <Text style={[TYPOGRAPHY.subheading]}>{ recipe.time }</Text>
            <Text style={{color: COLORS.gray[600]}}>Cook time</Text>
          </View>

          <View>
            <Text style={[TYPOGRAPHY.subheading]}>{ recipe.servings }</Text>
            <Text style={{color: COLORS.gray[600]}}>Servings</Text>
          </View>
        </View>

        <View style={{marginTop: 40}}>
          <Text style={[TYPOGRAPHY.subheading, { marginBottom: 10 }]}>Ingredients</Text>

          {recipe.ingredients.map((ingredient, index) => (
            <View key={ingredient.id}>
              <Text style={TYPOGRAPHY.body}>{ ingredient.value }</Text>
            </View>
          ))}
        </View>

        <View style={{marginTop: 40}}>
          <Text style={[TYPOGRAPHY.subheading, { marginBottom: 10 }]}>Directions</Text>

          {recipe.directions.map((direction, index) => (
            <View key={direction.id} style={{flexDirection: 'row', marginBottom: 16}}>
              <NumberedCircle count={index + 1}></NumberedCircle>
              <Text style={[TYPOGRAPHY.body, {marginLeft: 10}]}>{ direction.value }</Text>
            </View>
          ))}
        </View>

      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default RecipeScreen;