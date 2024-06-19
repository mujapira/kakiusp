
export interface ISidebarNavItem {
  icon: string
  text: string
  route: string
  isActive?: boolean
}


export interface IFinancialHistory {
  description: string
  date: string
  value: number
  isEntry: boolean
  isPending: boolean
}

export interface IChartData {
  category: string
  value: number
}

export interface IBalanceData extends Array<number> {}
