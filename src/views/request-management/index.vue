<template>
  <div class="app-container">
    <div class="header">
      <h1 class="page-title">Request Management</h1>
      <el-button type="primary" size="small" @click="toggleDialogVisible(true)"
        >Request Device</el-button
      >
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="Addtion">
        <AdditionRequestTable
          :requests="addtionRequests"
          @onEditRequest="onEditRequest"
        ></AdditionRequestTable>
      </el-tab-pane>
      <el-tab-pane label="Return">
        <ReturnRequestTable :requests="returnRequests"></ReturnRequestTable>
      </el-tab-pane>
    </el-tabs>

    <create-edit-request :request="request"></create-edit-request>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ERequestType, IDeviceRequest } from './types'
import { DEVICE_REQUESTS } from './mock'
import AdditionRequestTable from './components/AdditionRequestTable.vue'
import ReturnRequestTable from './components/ReturnRequestTable.vue'
import CreateEditRequest from './components/CreateEditRequest.vue'
import { RequestModule } from '@/store/modules/request'

@Component({
  name: 'Guide',
  components: {
    AdditionRequestTable,
    ReturnRequestTable,
    CreateEditRequest
  }
})
export default class RequestManagement extends Vue {
  addtionRequests: IDeviceRequest[] = []
  returnRequests: IDeviceRequest[] = []
  request: IDeviceRequest | null = null

  mounted() {
    this.addtionRequests = DEVICE_REQUESTS.filter(
      req => req.type === ERequestType.ADDITION
    )
    this.returnRequests = DEVICE_REQUESTS.filter(
      req => req.type === ERequestType.RETURN
    )
  }

  toggleDialogVisible(visible: boolean) {
    RequestModule.toggleCreateEditDialogVisible(visible)
  }

  onEditRequest(id: string) {
    // TODO fetch the lastest request by id
    console.log(
      '🚀 ~ file: index.vue ~ line 61 ~ RequestManagement ~ onEditRequest ~ id',
      id
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
