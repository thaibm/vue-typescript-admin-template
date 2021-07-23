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
import { ERequestType, IDeviceRequest, IRequestsParams } from './types'
import { DEVICE_REQUESTS } from './mock'
import AdditionRequestTable from './components/AdditionRequestTable.vue'
import ReturnRequestTable from './components/ReturnRequestTable.vue'
import CreateEditRequest from './components/CreateEditRequest.vue'
import { RequestModule } from '@/store/modules/request'
import {
  getRequestsApi
} from '@/api/request'

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
  private currentPage = 1
  readonly pageSize = 10
  private totalItems = 0

  mounted() {
    this.fetchAddtionRequests()
  }

  async fetchAddtionRequests(fetch = true) {
    if (!fetch) return
    const params: IRequestsParams = {
      skipCount: this.currentPage - 1,
      maxResultCount: this.pageSize,
      // searchText: '',
      filterItems: [{
        propertyName: 'Type',
        value: ERequestType.ADDITION
      }]
      // sort: 'desc',
      // sortDirection: 0
    }
    try {
      const { data } = await getRequestsApi(params)
      this.totalItems = data.result.totalCount
      this.addtionRequests = data.result.items
    } catch (error) {
      console.error(error)
    }
  }

  async fetchReturnRequests(fetch = true) {
    if (!fetch) return
    const params: IRequestsParams = {
      skipCount: this.currentPage - 1,
      maxResultCount: this.pageSize,
      // searchText: '',
      filterItems: [{
        propertyName: 'Type',
        value: ERequestType.RETURN
      }]
      // sort: 'desc',
      // sortDirection: 0
    }
    try {
      const { data } = await getRequestsApi(params)
      this.totalItems = data.result.totalCount
      this.returnRequests = data.result.items
    } catch (error) {
      console.error(error)
    }
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
