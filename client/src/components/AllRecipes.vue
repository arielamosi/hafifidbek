<template>
  <div class="recipesPage justify-center">
    <div v-if="allRecipes.length" class="row justify-around">
      <div class="col-xs-12 col-sm-6 col-md-4 justify-center"
      v-for="singleRecipe in allRecipes" :key="singleRecipe.id">
        <recipe-card :singleRecipe="singleRecipe"></recipe-card>
      </div>
    </div>
    <div class="justify-center" v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Recipe } from 'src/types';
import { onMounted, Ref, ref } from '@vue/runtime-core';
import recipes from '../composables/recipes';
import RecipeCard from './RecipeCard.vue';

export default {
  components: { RecipeCard },
  setup() {
    // eslint-disable-next-line arrow-body-style
    const getAllRecipes = async () => {
      return await recipes.getAllRecipes();
    };
    const allRecipes: Ref<Recipe[]> = ref([]);
    onMounted(async () => {
      allRecipes.value = await getAllRecipes();
    });

    return {
      allRecipes,
    };
  },
};
</script>
