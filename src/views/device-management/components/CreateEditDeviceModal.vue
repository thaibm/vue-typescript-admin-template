<template>
  <el-dialog :title="dialogTitle" :visible.sync="visible" :width="dialogWidth">
    <DeviceForm v-model="form" />

    <span slot="footer" class="dialog-footer">
      <el-button @click="toggleDialogVisible(false)">Cancel</el-button>
      <el-button type="primary" @click="onSubmit">
        Confirm
      </el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DeviceForm from './DeviceForm.vue'
import { DeviceModule } from '@/store/modules/device'
import { EDeviceStatus, IDeviceForm } from '../types'
import { Message } from 'element-ui'
import { createDeviceApi } from '@/api/device'

const DEFAULT_FORM: IDeviceForm = {
  name: '',
  description: '',
  manufacturer: '',
  guaranteeDate: new Date(),
  status: EDeviceStatus.AVAILABLE
}

@Component({
  name: 'CreateEditDeviceModal',
  components: {
    DeviceForm
  }
})
export default class extends Vue {
  get visible() {
    return DeviceModule.dialogVisible
  }

  set visible(visible: boolean) {
    DeviceModule.setDialogVisible(visible)
  }

  get dialogWidth() {
    if (window.innerWidth < 576) {
      return '100%'
    }
    if (window.innerWidth < 780) {
      return '80%'
    }
    return '50%'
  }

  dialogTitle = DeviceModule.currentDevice ? 'Edit Device' : 'Import New Device'
  form = { ...DEFAULT_FORM }

  mounted() {
    if (DeviceModule.currentDevice) {
      this.form = {
        name: DeviceModule.currentDevice.name,
        manufacturer: DeviceModule.currentDevice.manufacturer,
        status: DeviceModule.currentDevice.status,
        description: DeviceModule.currentDevice.description
      }
    }
  }

  toggleDialogVisible(visible: boolean) {
    DeviceModule.setDialogVisible(visible)
  }

  async onSubmit() {
    try {
      await createDeviceApi(this.form)
    } catch (error) {
      Message.error(error)
    }
  }
}
</script>

<style lang="scss" scoped></style>
