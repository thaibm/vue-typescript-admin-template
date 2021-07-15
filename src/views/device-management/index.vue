<template>
  <div class="app-container">
    <div class="header">
      <h1 class="page-title">Device Management</h1>
      <el-button type="primary" size="small" @click="toggleDialogVisible(true)"
        >Import Device</el-button
      >
    </div>
    <DeviceTable :devices="devices" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { DEVICE_LIST } from './mock'
import DeviceTable from './components/DeviceTable.vue'

@Component({
  name: 'Empty',
  components: {
    DeviceTable
  }
})
export default class extends Vue {
  private devices = DEVICE_LIST

  private toggleDialogVisible(visible: boolean) {
    console.log(
      '🚀 ~ file: index.vue ~ line 28 ~ extends ~ toggleDialogVisible ~ visible',
      visible
    )
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .header {
    display: flex;
    align-items: center;

    .page-title {
      flex: 1;
    }
  }
}
</style>
