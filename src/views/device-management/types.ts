export enum EDeviceStatus {
  AVAILABLE = 'AVAILABLE',
  USING = 'USING',
  BROKEN = 'BROKEN'
}

export interface IDevice {
  id: string
  name: string
  description: string
  manufacturer: string
  guaranteeDate: Date
  status: EDeviceStatus
  borrowedUserId: string
  borrowedDate: Date
}
