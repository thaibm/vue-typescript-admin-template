export enum ERequestType {
  ADDITION = 'ADDITION',
  RETURN = 'RETURN'
}

export enum ERequestPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  CRITICAL = 'CRITICAL'
}

export enum ERequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  DELIVERED = 'DELIVERED',
  RETURNED = 'RETURNED'
}

export interface IDeviceRequest {
  id: string
  type: ERequestType
  deviceName: string
  description?: string
  reason?: string
  priority?: ERequestPriority
  status?: ERequestStatus
  deviceId?: string
}

export const REQUEST_TYPE_OPTIONS = [
  {
    label: 'Addition',
    value: ERequestType.ADDITION
  },
  {
    label: 'Return',
    value: ERequestType.RETURN
  }
]

export const REQUEST_PRIORITY_OPTIONS = [
  {
    label: 'Low',
    value: ERequestPriority.LOW
  },
  {
    label: 'Medium',
    value: ERequestPriority.MEDIUM
  },
  {
    label: 'Critical',
    value: ERequestPriority.CRITICAL
  }
]
