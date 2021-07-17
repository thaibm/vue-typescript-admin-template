<template>
  <div class="table-outer">
    <el-table :data="devices">
      <el-table-column min-width="110px" label="Device Name" align="left">
        <template slot-scope="{row}">
          {{ row.name }}
        </template>
      </el-table-column>

      <el-table-column min-width="110px" label="Description" align="left">
        <template slot-scope="{row}">
          {{ row.description }}
        </template>
      </el-table-column>

      <el-table-column min-width="120px" label="Manufacturer" align="left">
        <template slot-scope="{row}">
          {{ row.manufacturer }}
        </template>
      </el-table-column>

      <el-table-column min-width="125px" label="Guarantee Date" align="left">
        <template slot-scope="{row}">
          {{ row.guaranteeDate | parseTime }}
        </template>
      </el-table-column>

      <el-table-column label="Status" align="left">
        <template slot-scope="{row}">
          <el-tag :type="getStatusType(row.status)" size="mini">
            {{ row.status | deviceStatus }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="left" min-width="100px">
        <template slot-scope="{row}">
          <el-button
            circle
            type="primary"
            size="mini"
            @click="editDevice(row.id)"
          >
            <i class="el-icon-edit"></i>
          </el-button>
          <el-button
            circle
            v-if="canDelete(row.status)"
            type="danger"
            size="mini"
            @click="deleteDevice(row.id)"
            :disabled="!canDelete(row.status)"
          >
            <i class="el-icon-delete"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="totalItems"
      background
      layout="prev, pager, next"
      :total="totalItems"
      :page-size="pageSize"
      class="mt-10"
      :current-page="currentPage"
      @current-change="changeCurrentPage"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IDevice, EDeviceStatus, IDevicesParams } from '../types'
import {
  deleteDeviceByIdApi,
  getDeviceByIdApi,
  getDevicesApi
} from '@/api/device'
import { DeviceModule } from '@/store/modules/device'

@Component({
  name: 'Empty',
  filters: {
    deviceStatus: (status: EDeviceStatus) => {
      switch (status) {
        case EDeviceStatus.AVAILABLE:
          return 'Available'
        case EDeviceStatus.USING:
          return 'Using'
        case EDeviceStatus.BROKEN:
          return 'Broken'
        default:
          return ''
      }
    }
  }
})
export default class extends Vue {
  private devices: IDevice[] = []
  readonly pageSize = 10
  private currentPage = 1
  private totalItems = 0

  mounted() {
    this.fetchDevices()
  }

  async fetchDevices() {
    const params: IDevicesParams = {
      skipCount: this.currentPage - 1,
      maxResultCount: this.pageSize
      // searchText: '',
      // filterItems: [],
      // sort: 'desc',
      // sortDirection: 0
    }
    try {
      const { data } = await getDevicesApi(params)
      this.totalItems = data.result.totalCount
      this.devices = data.result.items
    } catch (error) {
      console.error(error)
    }
  }

  getStatusType(status: EDeviceStatus) {
    switch (status) {
      case EDeviceStatus.AVAILABLE:
        return 'success'
      case EDeviceStatus.USING:
        return 'warning'
      case EDeviceStatus.BROKEN:
        return 'danger'
      default:
        return ''
    }
  }

  canDelete(status: EDeviceStatus) {
    switch (status) {
      case EDeviceStatus.AVAILABLE:
      case EDeviceStatus.BROKEN:
        return true
      case EDeviceStatus.USING:
        return false
      default:
        return false
    }
  }

  async editDevice(id: string) {
    try {
      const { data } = await getDeviceByIdApi(id)
      console.log(
        '🚀 ~ file: DeviceTable.vue ~ line 148 ~ extends ~ editDevice ~ data',
        data
      )
      const { result }: { result: IDevice } = data
      DeviceModule.setCurrentDevice(result)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteDevice(id: string) {
    try {
      await deleteDeviceByIdApi(id)
    } catch (error) {
      console.error(error)
    }
  }

  changeCurrentPage(pageNumber: number) {
    this.currentPage = pageNumber
    this.fetchDevices()
  }
}
</script>

<style lang="scss" scoped>
.table-outer {
  background: #fff;
  padding: 15px;
  overflow: auto;
}
.mt-10 {
  margin-top: 10px;
}
</style>
