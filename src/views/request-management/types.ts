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
