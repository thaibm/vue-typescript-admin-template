<template>
  <el-form ref="form" :model="form" label-width="170px">
    <el-form-item label="Device name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Device description">
      <el-input v-model="form.description"></el-input>
    </el-form-item>
    <el-form-item label="Manufacturer">
      <el-input v-model="form.manufacturer"></el-input>
    </el-form-item>

    <el-form-item label="Status">
      <el-select v-model="form.status" placeholder="Please select status">
        <el-option
          v-for="option in deviceStatusOptions"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        ></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="Guarantee Date">
      <el-date-picker
        type="date"
        placeholder="Pick a date"
        v-model="form.guaranteeDate"
        style="width: 100%;"
      ></el-date-picker>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, VModel, Vue } from 'vue-property-decorator'
import { DEVICE_STATUS_OPTIONS, IDeviceForm } from '../types'

@Component({
  name: 'DeviceForm'
})
export default class extends Vue {
  @VModel() private form!: IDeviceForm
  deviceStatusOptions = DEVICE_STATUS_OPTIONS
}
</script>

<style lang="scss" scoped></style>
