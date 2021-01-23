<template>
  <div id="project-detail" class="project-detail">
    <div class="project-detail-container">
      <div class="project-detail-appname">
        <p class="project-detail-appname-text">{{ appName }}</p>
      </div>
      <div class="project-detail-subroutes">
        <ul>
          <li v-for="item in subRoutes" v-bind:key="item.id">
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <div class="project-detail-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectDetailWrapper',
  data() {
    return {
      appName: 'Targo Backpacker',
      subRoutes: [
        {
          id: 0,
          name: 'Overview',
          path: '',
        },
        {
          id: 1,
          name: 'Bugs & Errors',
          path: '',
        },
        {
          id: 2,
          name: 'Setting',
          path: '',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.project-detail,
.project-detail-container {
  @apply h-full;
}
.project-detail-container {
  @apply h-full;
  @apply flex;
  @apply flex-col;
}
.project-detail-appname {
  @apply bg-white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  padding-left: 16px;
}
.project-detail-appname .project-detail-appname-text {
  @apply text-primary;
  font-weight: 600;
  font-size: 18px;
  line-height: 56px;
}
.project-detail-subroutes {
  padding: 16px;
}
.project-detail-subroutes ul {
  display: flex;
}
.project-detail-subroutes ul li {
  @apply bg-white;
  width: 160px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 50px;
  margin-right: 30px;
}
.project-detail-subroutes ul li:hover {
  @apply bg-hover;
}
.project-detail-subroutes ul li p {
  @apply text-primary;
  font-weight: 600;
  font-size: 14px;
  line-height: 32px;
}
.project-detail-content {
  @apply bg-white;
  @apply flex-grow;
  border-radius: 5px;
  margin: 0px 16px 16px 16px;
}
</style>
