export interface Customer {
  id?: number
  name: string
  email: string
  birthDate: Date
  signedPlanId: number
  isDependent: boolean
  phoneNumber: string
  lastPaymentDate: Date
}
