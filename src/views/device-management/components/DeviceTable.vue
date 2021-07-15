<template>
  <div class="table-outer">
    <el-table :data="devices">
      <el-table-column label="Device Name" align="left">
        <template slot-scope="{row}">
          {{ row.name }}
        </template>
      </el-table-column>

      <el-table-column label="Description" align="left">
        <template slot-scope="{row}">
          {{ row.description }}
        </template>
      </el-table-column>

      <el-table-column label="Manufacturer" align="left">
        <template slot-scope="{row}">
          {{ row.manufacturer }}
        </template>
      </el-table-column>

      <el-table-column label="Guarantee Date" align="left">
        <template slot-scope="{row}">
          {{ row.guaranteeDate | parseTime }}
        </template>
      </el-table-column>

      <el-table-column label="Status" align="left">
        <template slot-scope="{row}">
          <el-tag :type="getStatusType(row.status)" size="mini">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="left">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="editDevice(row.id)">
            Edit
          </el-button>
          <el-button
            v-if="canDelete(row.status)"
            type="danger"
            size="mini"
            @click="canDelete(row.id)"
            :disabled="!canDelete(row.status)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      class="mt-10"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IDevice, EDeviceStatus } from '../types'

@Component({
  name: 'Empty'
})
export default class extends Vue {
  @Prop({ required: true }) private devices!: IDevice[]

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

  editDevice(id: string) {
    console.log(
      '🚀 ~ file: DeviceTable.vue ~ line 91 ~ extends ~ editDevice ~ id',
      id
    )
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
}
</script>

<style lang="scss" scoped>
.table-outer {
  background: #fff;
  padding: 15px;
}
.mt-10 {
  margin-top: 10px;
}
</style>
