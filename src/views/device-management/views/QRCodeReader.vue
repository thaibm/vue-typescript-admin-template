<template>
  <div class="empty-container">
    <QrcodeStream @decode="onDecode" />
  </div>
</template>

<script lang="js">
import { Component, Vue } from 'vue-property-decorator'
import { QrcodeStream } from 'vue-qrcode-reader'

@Component({
  name: 'QRCodeReader',
  components: { QrcodeStream }
})
export default class extends Vue {
  onDecode(decodedString) {
    console.log('extends ~ onDecode ~ decodedString', decodedString)
  }
}
</script>

<style lang="scss" scoped></style>
