<template>
<nav class="bg-primary">
  <div class="max-w-7xl mx-auto px-2 h-20 flex items-center justify-between">
    <div class="relative flex flex-1">
      <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
        <button v-on:click="isHidden=!isHidden"
        class="inline-flex items-center justify-center ml-2 p-2
        rounded-md text-white hover:text-white
        hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-expanded="false">
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center sm:items-stretch">
        <div class="hidden md:block">
          <div class="flex space-x-4 items-center">
            <a href="#" class="text-white pr-3 py-2 rounded-md text-2xl font-semibold">
              Behind The Scene
            </a>
            <a href="#" class="text-white px-3 py-2 rounded-md text-xl lg:text-2xl">Document</a>
            <a href="#" class="text-white px-3 py-2 rounded-md text-xl lg:text-2xl">Pricing</a>
            <a href="#" class="text-white px-3 py-2 rounded-md text-xl lg:text-2xl">About us</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center
      pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button class="bg-white py-1 px-4 rounded-full hover:text-white
        focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-offset-gray-800 focus:ring-white">
          <span class="text-base lg:text-2xl text-primary">Go To App</span>
        </button>
      </div>
    </div>
  </div>
  <div v-show="!isHidden" class="sm:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a href="#" class="block text-white px-3 py-2 rounded-md text-lg lg:text-2xl font-semibold">
        Behind The Scene
      </a>
      <a href="#" class="block text-white px-3 py-2 rounded-md text-lg lg:text-2xl">Document</a>
      <a href="#" class="block text-white px-3 py-2 rounded-md text-lg lg:text-2xl">Pricing</a>
      <a href="#" class="block text-white px-3 py-2 rounded-md text-lg lg:text-2xl">About us</a>
    </div>
  </div>
</nav>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavBar',
  data() {
    return {
      isHidden: true,
    };
  },
});
</script>
