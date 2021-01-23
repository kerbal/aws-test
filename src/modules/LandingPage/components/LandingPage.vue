<template>
<div class="bg-primary lg:h-screen">
    <NavBar />
    <div class="max-w-7xl mx-auto px-2 flex items-center body-container">
        <div class="flex items-center flex-col lg:flex-row flex-1
        justify-between">
            <div class="max-w-xl pr-0 lg:pr-10 text-white">
                <div class="text-5xl mb-6 font-semibold leading-tight px-6 lg:px-0 lg:pr-10
                text-center lg:text-left mt-6 lg:mt-0">
                    Working Code, Happy Customers
                </div>
                <div class="text-2xl mb-6 font-normal text-center lg:text-left px-4 sm:px-0">
                    Behind The Scene's application monitoring platform helps every developer
                    diagnose, fix, and optimize the performance of their code.
                </div>
                <div class="text-2xl font-normal mb-10 text-center lg:text-left px-4 sm:px-0">
                    Over 1M developers and 60K organizations already ship better software
                    faster with Behind The Scene. Won't you join them?
                </div>
                <div v-on:click="openLogin=true" v-if="!openLogin"
                class="flex justify-center lg:justify-start">
                    <button
                    class="bg-white py-1 px-8 rounded-full hover:text-white focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span class="text-base lg:text-2xl text-primary">Let's Get Started</span>
                    </button>
                </div>
            </div>
            <img v-if="!openLogin" class="lg:mr-16 my-6 lg:mt-0 image"
            alt="Landing Page Image" src="../../../assets/images/LandingPage_img.png">
            <div v-else class="bg-white flex flex-col justify-center items-center rounded-lg
            login-container my-6 lg:my-0 py-10 sm:py-0">
                <span class="text-primary text-4xl mb-16">
                    Sign in
                </span>
                <button
                class="border-primary block py-3 px-4 rounded-full hover:text-white
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-offset-gray-800 focus:ring-white border-2
                flex flex-row items-center mb-8">
                    <img class="w-12 h-12 mr-4" src="../../../assets/images/google_icon.png">
                    <span class="text-base lg:text-2xl text-primary">Sign in with Google</span>
                </button>
                <button
                class="border-primary block py-3 px-4 rounded-full hover:text-white
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-offset-gray-800 focus:ring-white border-2
                flex flex-row items-center">
                    <img class="w-12 h-12 mr-4" src="../../../assets/images/github-icon.png">
                    <span class="text-base lg:text-2xl text-primary">Sign in with GitHub</span>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from './NavBar.vue';

export default Vue.extend({
  name: 'LandingPage',
  components: {
    NavBar,
  },
  data() {
    return {
      openLogin: false,
    };
  },
});
</script>

<style scoped lang="scss">
.body-container {
    @media only screen and (min-width: 1024px) {
        height: calc(100% - 80px);
    }
}
.image {
    width: 300px;
    height: 300px;
    @media only screen and (min-width: 768px) {
        width: 400px;
        height: 400px;
    }
}
.login-container {
    width: 350px;
    @media only screen and (min-width: 640px) {
        width: 450px;
        height: 400px;
    }
}
</style>
