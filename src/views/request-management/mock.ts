import { ERequestPriority, ERequestStatus, ERequestType, IDeviceRequest } from './types'

export const DEVICE_REQUESTS: IDeviceRequest[] = [
  {
    id: '1',
    type: ERequestType.ADDITION,
    description:
      'I want to request a test device. It should be better if we have an iPhone 12 Pro Max.',
    priority: ERequestPriority.MEDIUM,
    status: ERequestStatus.PENDING
  },
  {
    id: '3',
    type: ERequestType.ADDITION,
    description:
      'I want to request a test device. It should be better if we have an iPhone 12 Pro Max.',
    priority: ERequestPriority.LOW,
    status: ERequestStatus.APPROVED
  },
  {
    id: '4',
    type: ERequestType.ADDITION,
    description:
      'I want to request a test device. It should be better if we have an iPhone 12 Pro Max.',
    priority: ERequestPriority.CRITICAL,
    status: ERequestStatus.DELIVERED
  },
  {
    id: '5',
    type: ERequestType.ADDITION,
    description:
      'I want to request a test device. It should be better if we have an iPhone 12 Pro Max.',
    priority: ERequestPriority.MEDIUM,
    status: ERequestStatus.REJECTED
  },
  {
    id: '2',
    type: ERequestType.RETURN,
    deviceId: 'device1',
    status: ERequestStatus.PENDING
  },
  {
    id: '6',
    type: ERequestType.RETURN,
    deviceId: 'device2',
    status: ERequestStatus.RETURNED
  }
]
