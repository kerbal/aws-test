<template>
  <div id="bugs-errors">
    <router-view />
    <div class="bg-blue-200">PageOverview</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OverviewWrapper',
});
</script>
