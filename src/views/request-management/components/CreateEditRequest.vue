<template>
  <el-dialog :title="dialogTitle" :visible.sync="visible" label-width="160px">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="Request Type" prop="type" label-width="160px">
        <el-select
          v-model="form.type"
          placeholder="Please select a request type"
        >
          <el-option
            v-for="option in requestOptions"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <template v-if="isAddtionalRequest">
        <el-form-item label="Device Name" prop="deviceName" label-width="160px">
          <el-input
            placeholder="Enter device name"
            v-model="form.deviceName"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Device Description"
          prop="description"
          label-width="160px"
        >
          <el-input
            type="textarea"
            placeholder="Enter Device Description"
            v-model="form.description"
          ></el-input>
        </el-form-item>

        <el-form-item label="Reason" prop="reason" label-width="160px">
          <el-input
            type="textarea"
            placeholder="Enter Reason"
            v-model="form.reason"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Request Priority"
          prop="priority"
          label-width="160px"
        >
          <el-select
            v-model="form.priority"
            placeholder="Please select a request priority"
          >
            <el-option
              v-for="option in priorityOptions"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </template>
      <template v-if="form.type === ERequestType.RETURN">
        <!-- TODO -->
      </template>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="toggleDialogVisible(false)">Cancel</el-button>
      <el-button type="primary" @click="toggleDialogVisible(false)">
        Confirm
      </el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import {
  ERequestPriority,
  ERequestType,
  IDeviceRequest,
  REQUEST_PRIORITY_OPTIONS,
  REQUEST_TYPE_OPTIONS
} from '../types'
import { RequestModule } from '@/store/modules/request'

const DEFAULT_REQUEST_FORM = {
  type: ERequestType.ADDITION,
  deviceName: '',
  description: '',
  reason: '',
  priority: ERequestPriority.MEDIUM,
  deviceId: ''
}

@Component({
  name: 'CreateEditRequest'
})
export default class CreateEditRequest extends Vue {
  @Prop({ required: false }) private request!: IDeviceRequest
  private ERequestType = ERequestType
  private form = Object.assign({}, DEFAULT_REQUEST_FORM)
  private requestOptions = [...REQUEST_TYPE_OPTIONS]
  private priorityOptions = [...REQUEST_PRIORITY_OPTIONS]

  get visible() {
    return RequestModule.createEditDialogVisible
  }

  set visible(visible: boolean) {
    RequestModule.toggleCreateEditDialogVisible(visible)
  }

  get dialogTitle() {
    if (this.request) {
      return 'Edit Request'
    }
    return 'Create New Request'
  }

  get isAddtionalRequest() {
    return this.form.type === ERequestType.ADDITION
  }

  toggleDialogVisible(visible: boolean) {
    RequestModule.toggleCreateEditDialogVisible(visible)
  }

  rules = {
    type: [
      {
        required: true,
        message: 'Request type is required.',
        trigger: 'blur'
      }
    ],
    deviceName: [
      {
        required: this.isAddtionalRequest,
        message: 'Device name is required.',
        trigger: 'blur'
      }
    ],
    reason: [
      {
        required: this.isAddtionalRequest,
        message: 'Reason is required.',
        trigger: 'blur'
      }
    ],
    description: [
      {
        required: this.isAddtionalRequest,
        message: 'Device description is required.',
        trigger: 'blur'
      }
    ],
    priority: [
      {
        required: this.isAddtionalRequest,
        message: 'Priority is required.',
        trigger: 'blur'
      }
    ]
  }
}
</script>

<style lang="sass"></style>
