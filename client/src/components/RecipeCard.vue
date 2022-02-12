<template>
  <q-card class="my-card justify-center">
      <q-card-section class="title">
        <div class="text-h6 q-mb-xs">{{ displayRecipe.name }}</div>
        <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="displayStars" :max="5" color="primary" />
          <span class="text-caption text-grey q-ml-sm">
            {{ rate.toFixed(1) }} ({{ numOfRaters }})
          </span>
        </div>
      </q-card-section>

      <q-img :src="displayRecipe.imgUrl"/>
    </q-card>
</template>

<script lang="ts">
import { Ref, ref, toRefs } from '@vue/reactivity';
// import { computed } from '@vue/runtime-core';
import { computed } from '@vue/runtime-core';
import { Data, Recipe } from '../types';

export default {
  name: 'recipeCard',
  props: {
    singleRecipe: {
      required: true,
      type: Object,
    },
  },
  setup(props: Data) {
    const { singleRecipe } = toRefs(props);
    const { stars } = singleRecipe.value as Recipe;
    const displayRecipe: Ref<Recipe> = ref(singleRecipe.value as Recipe);
    const displayStars: Ref<number> = ref(0);
    const numOfRaters = stars.length;
    const rate = computed((): number => {
      const avg = stars.reduce((a: number, b: number) => a + b) / numOfRaters;

      return (Math.round(avg * 10) / 10);
    });

    displayStars.value = Math.floor(rate.value);
    return {
      numOfRaters,
      rate,
      displayStars,
      displayRecipe,
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
    height: 200px
    width: 300px

.title
    height: 100px
</style>
