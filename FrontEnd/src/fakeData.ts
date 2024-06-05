import { IBalanceData, IFinancialHistory } from "./interfaces/interfaces"

export const financialHistory: IFinancialHistory[] = [
  {
    description: "Matrícula 12345",
    date: "2024-05-03",
    value: 500.0,
    isEntry: true,
    isPending: true,
  },
  {
    description: "Matrícula 67890",
    date: "2024-05-04",
    value: 200.0,
    isEntry: false,
    isPending: true,
  },
  {
    description: "Matrícula 13579",
    date: "2024-05-06",
    value: 400.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 24680",
    date: "2024-05-05",
    value: 300.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 11223",
    date: "2024-05-07",
    value: 700.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 44556",
    date: "2024-05-08",
    value: 100.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 99001",
    date: "2024-05-10",
    value: 150.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 77889",
    date: "2024-05-09",
    value: 600.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 22334",
    date: "2024-05-11",
    value: 800.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 55667",
    date: "2024-05-12",
    value: 250.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 22334",
    date: "2024-05-11",
    value: 800.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 55667",
    date: "2024-05-12",
    value: 250.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 22334",
    date: "2024-05-11",
    value: 800.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 22334",
    date: "2024-05-11",
    value: 800.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 55667",
    date: "2024-05-12",
    value: 250.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 55667",
    date: "2024-05-12",
    value: 250.0,
    isEntry: false,
    isPending: false,
  },
]

export const balanceData: IBalanceData = [
  1000, 1200, 1500, 1800, 2000, 2200, 2300, 2400, 2500, 2600, 2700, 2800,
]

export const entryData: IBalanceData = [1000, 1200, 2000, 3000, 1000, 2000]
