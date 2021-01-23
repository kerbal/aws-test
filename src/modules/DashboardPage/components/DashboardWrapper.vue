<template>
  <div id="dashboard">
    <div class="dashboard-container">
      <div class="side-bar">
        <div class="upper-content">
          <p class="app-name">Behind The Scene</p>
          <side-bar-user-info
            :userEmail="userEmail"
            :avatarUrl="userAvatarUrl"
            :userFullname="userFullname"
          />
          <div class="sb-projects">
            <div class="sb-item-primary">
              <div class="sb-item-content">
                <img src="../../../assets/images/Folder_icon.svg" />
                <p>Projects</p>
              </div>
              <img src="../../../assets/images/Plus_icon.svg" />
            </div>
            <ul class="sb-project-items">
              <li
                class="sb-item-secondary"
                v-for="item in projects"
                v-bind:key="item.id"
              >
                <img src="../../../assets/images/File_icon.svg" />
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="sb-item-primary">
          <div class="sb-item-content">
            <img src="../../../assets/images/Help_icon.svg" />
            <p>Help</p>
          </div>
        </div>
      </div>
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SideBarUserInfo from './SideBarUserInfo.vue';
import sidebarImage from '../../../assets/images/SideBarUserInfoAvatar.png';

/**
 * @param {string} userAvatarUrl - Url to avatar image
 * @param {string} userFullname - Full name of current user
 * @param {string} userEmail - Email of current user
 * @param {array} projects - List projects of current user
 */

export default Vue.extend({
  name: 'DashboardWrapper',
  components: {
    SideBarUserInfo,
  },
  data() {
    return {
      userAvatarUrl: sidebarImage,
      userFullname: 'Tran Quoc Khanh',
      userEmail: 'qkhanh@gmail.com',
      projects: [
        { id: '1', name: 'Targo Backpacker' },
        { id: '2', name: 'Piggy Bank' },
        { id: '3', name: 'Bug Tracking System' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
}
.dashboard-container .side-bar {
  @apply flex;
  @apply text-primarytext;
  @apply bg-primary;
  @apply flex-col;
  @apply justify-between;
  width: 300px;
  padding: 0px 20px;
}
.dashboard-container .side-bar .upper-content {
  @apply divide-y;
  @apply divide-primarydivide;
}
.dashboard-container .side-bar .upper-content .app-name {
  @apply text-primarytext;
  font-weight: 600;
  font-size: 18px;
  line-height: 56px;
}
.dashboard-container .side-bar .upper-content .sb-projects {
  @apply pt-3;
}
.dashboard-container .main-content {
  @apply flex-grow;
  @apply bg-secondary;
}
.sb-item-primary {
  @apply pb-5;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.sb-item-primary .sb-item-content {
  display: flex;
}
.sb-item-primary .sb-item-content p {
  @apply pl-2;
}
.sb-item-secondary {
  display: flex;
  margin-left: 27px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.sb-item-secondary:hover {
  @apply bg-hover;
}
.sb-item-secondary p {
  padding-left: 8px;
  font-size: 14px;
  line-height: 19px;
}
</style>
