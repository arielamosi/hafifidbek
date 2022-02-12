<template>
  <all-recipes class="justify-center"></all-recipes>
</template>

<script lang="ts">
import AllRecipes from 'components/AllRecipes.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { AllRecipes },
});
</script>
