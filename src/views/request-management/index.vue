<template>
  <div class="app-container">
    <h1 class="page-title">Request Management</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="Addtion">
        <AdditionRequestTable :requests="addtionRequests"></AdditionRequestTable>
      </el-tab-pane>
      <el-tab-pane label="Return">
        <ReturnRequestTable :requests="returnRequests"></ReturnRequestTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ERequestType, IDeviceRequest } from './types'
import { DEVICE_REQUESTS } from './mock'
import AdditionRequestTable from './components/AdditionRequestTable.vue'
import ReturnRequestTable from './components/ReturnRequestTable.vue'

@Component({
  name: 'Guide',
  components: {
    AdditionRequestTable,
    ReturnRequestTable
  }
})
export default class RequestManagement extends Vue {
  addtionRequests: IDeviceRequest[] = []
  returnRequests: IDeviceRequest[] = []

  mounted() {
    this.addtionRequests = DEVICE_REQUESTS.filter(req => req.type === ERequestType.ADDITION)
    this.returnRequests = DEVICE_REQUESTS.filter(req => req.type === ERequestType.RETURN)
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
}
</style>
