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

export const DEVICE_STATUS_OPTIONS = [
  {
    label: 'Available',
    value: EDeviceStatus.AVAILABLE
  },
  {
    label: 'Broken',
    value: EDeviceStatus.BROKEN
  },
  {
    label: 'Using',
    value: EDeviceStatus.USING
  }
]

export interface IDeviceForm {
  name: string
  description: string
  manufacturer: string
  guaranteeDate: Date
  status: EDeviceStatus
}
