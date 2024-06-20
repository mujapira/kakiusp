
export interface ISidebarNavItem {
  icon: string
  text: string
  route: string
  isActive?: boolean
}

export interface IMetadata {
  paymentMethod?: string
  customerName?: string
  customerId?: number
  date: string
}


export interface IFinancialHistory {
  id?: number
  description: string
  value: number
  isEntry: boolean
  isPending: boolean
  metadata: IMetadata
}

export interface IChartData {
  category: string
  value: number
}

export interface IBalanceData extends Array<number> {}
