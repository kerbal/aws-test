<template>
  <div id="setting-configuration" class="setting-content-wrapper">
    <p class="setting-content-title">Configuration</p>
    <div class="text-field-long">
      <p class="text-field-caption">Project Name</p>
      <p class="text-field-value">{{ projectName }}</p>
    </div>
    <div class="text-field-long">
      <p class="text-field-caption">Domain</p>
      <p class="text-field-value">{{ domain }}</p>
    </div>
    <div class="text-field-short">
      <p class="text-field-caption">API Token</p>
      <input disabled class="text-field-value" :value="apiToken" />
    </div>
    <p class="text-caption">Integrate to your frontend app</p>
    <div class="code-field">
      <p class="code-field-caption">
        Embed our Behind The Scene SDK
      </p>
      <code class="code-field-value">{{ embedScript }}</code>
    </div>
    <div class="code-field">
      <p class="code-field-caption">
        Init our SDK as soon as possible
      </p>
      <code class="code-field-value bg-code">{{ initCode }}</code>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SettingConfiguration',
  data() {
    return {
      projectName: ' Targo backpackager',
      domain: '  https://targo-backpackager.herokuapp.com',
      apiToken: 'IKLM-5678-NOPQ-1234',
      embedScript: 'abc',
      initCode: 'BTS.init({ key="IKLM-5678-NOPQ-1234" });',
    };
  },
});
</script>

<style lang="scss" scoped>
.text-field-long {
  margin-bottom: 16px;
}
.text-field-short {
  margin-bottom: 16px;
}
.text-field-caption,
.text-caption {
  @apply text-primary;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
}
.text-field-value {
  margin-top: 6px;
  background: rgba(33, 77, 113, 0.25);
  border-radius: 4px;
  font-size: 13px;
  line-height: 32px;
  padding-left: 8px;
}
</style>
