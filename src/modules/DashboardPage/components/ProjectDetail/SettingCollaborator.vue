<template>
  <div id="setting-collaboration" class="setting-content-wrapper">
    <p class="setting-content-title">Collaborator</p>
    <form>
      <input placeholder="Add a user by email address" />
      <button>Invite</button>
    </form>
    <ul>
      <li v-for="collaborator in collaborators" :key="collaborator.id">
        <div class="collaborator-info">
          <p class="collaborator-name">{{ collaborator.name }}</p>
          <p class="collaborator-email">
            {{ collaborator.email }}
          </p>
        </div>
        <div class="collaborator-actions">
          <div class="collaborator-role">
            {{ collaborator.role }}
          </div>
          <img
            class="collaborator-remove"
            src="../../../../assets/images/Remove_icon.svg"
          />
        </div>
      </li>
    </ul>
    <div
      v-if="isInvitationSent === true"
      class="collaborator-invitation-notify"
    >
      <p>Invitation sent</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * @param {array} collaborators - List of collaborators in current project
 * @param {boolean} isInvitationSent
 * - Check if "Invitation sent" element at the bottom right corner should be displayed
 */

export default Vue.extend({
  name: 'SettingCollaborator',
  data() {
    return {
      collaborators: [
        {
          id: 0,
          name: 'Huy Tran Tuan',
          email: 'huy@gmail.com',
          role: 'collaborator',
        },
        {
          id: 1,
          name: 'Khoa Ngo',
          email: 'khoa@gmail.com',
          role: 'collaborator',
        },
        {
          id: 2,
          name: 'Lam Hong',
          email: 'doge@gmail.com',
          role: 'collaborator',
        },
        {
          id: 3,
          name: 'Anh Nguyen',
          email: 'xamloz@gmail.com',
          role: 'collaborator',
        },
      ],
      isInvitationSent: true,
    };
  },
});
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  display: flex;
  margin-bottom: 24px;
}
form input {
  @apply text-placeholdertext;
  flex-grow: 1;
  border: 1px solid rgba(33, 77, 113, 0.5);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 19px;
  padding: 6px 8px;
}
form button {
  @apply bg-primary;
  @apply text-white;
  margin-left: 8px;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 13px;
  line-height: 18px;
}
ul {
  width: 100%;
}
ul li {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #4e7693;
  padding: 8px 0px;
}
ul li .collaborator-info .collaborator-name {
  @apply text-primary;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
}
ul li .collaborator-info .collaborator-email {
  @apply text-placeholdertext;
  font-size: 13px;
  line-height: 18px;
}
ul li .collaborator-actions {
  display: flex;
}
ul li .collaborator-actions .collaborator-role {
  @apply bg-primary;
  @apply text-white;
  font-size: 13px;
  line-height: 34px;
  border-radius: 4px;
  padding: 0px 16px;
}
ul li .collaborator-actions .collaborator-remove {
  margin-left: 37px;
}
.collaborator-invitation-notify {
  @apply bg-primary;
  @apply text-white;
  position: absolute;
  bottom: 6px;
  right: 7px;
  font-size: 14px;
  line-height: 19px;
  padding: 8px 26px;
  border-radius: 4px;
}
</style>
