<template>
  <el-dialog :title="dialogTitle" :visible.sync="visible" :width="dialogWidth">
    <DeviceForm
      v-model="form"
      @onSubmit="onSubmit"
      @onCancel="toggleDialogVisible"
    />

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

  toggleDialogVisible(visible: boolean) {
    DeviceModule.setDialogVisible(visible)
  }

  onSubmit() {
    console.log(
      '🚀 ~ file: CreateEditDeviceModal.vue ~ line 36 ~ extends ~ onSubmit ~ form',
      this.form
    )
  }
}
</script>

<style lang="scss" scoped></style>
