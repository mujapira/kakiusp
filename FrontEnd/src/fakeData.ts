import { IBalanceData, IChartData, IFinancialHistory } from "./interfaces/interfaces"

export const financialHistory: IFinancialHistory[] = [
  {
    description: "Matrícula 12345",
    metadata: {
      date: "2024-05-12"
    },
    value: 500.0,
    isEntry: true,
    isPending: true,
  },
  {
    description: "Matrícula 67890",
    metadata: {
      date: "2024-05-12"
    },
    value: 200.0,
    isEntry: false,
    isPending: true,
  },
  {
    description: "Matrícula 13579",
    metadata: {
      date: "2024-05-12"
    },
    value: 400.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 24680",
    metadata: {
      date: "2024-05-12"
    },
    value: 300.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 11223",
    metadata: {
      date: "2024-05-12"
    },
    value: 700.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 44556",
    metadata: {
      date: "2024-05-12"
    },
    value: 100.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 99001",
    metadata: {
      date: "2024-05-12"
    },
    value: 150.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 77889",
    metadata: {
      date: "2024-05-12"
    },
    value: 600.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 22334",
    metadata: {
      date: "2024-05-12"
    },
    value: 800.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 55667",
    metadata: {
      date: "2024-05-12"
    },
    value: 250.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 22334",
    metadata: {
      date: "2024-05-12"
    },
    value: 800.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 55667",
    metadata: {
      date: "2024-05-12"
    },
    value: 250.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 22334",
    metadata: {
      date: "2024-05-12"
    },
    value: 800.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 22334",
    metadata: {
      date: "2024-05-12"
    },
    value: 800.0,
    isEntry: true,
    isPending: false,
  },
  {
    description: "Matrícula 55667",
    metadata: {
      date: "2024-05-12"
    },
    value: 250.0,
    isEntry: false,
    isPending: false,
  },
  {
    description: "Matrícula 55667",
    metadata: {
      date: "2024-05-12"
    },
    value: 250.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 1,
    description: "Pagamento de mensalidade",
    metadata: {
      date: "2024-06-01"
    },
    value: 1500.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 2,
    description: "Compra de material",
    metadata: {
      date: "2024-06-05"
    },
    value: 200.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 3,
    description: "Reembolso de atividade",
    metadata: {
      date: "2024-06-10"
    },
    value: 100.0,
    isEntry: true,
    isPending: true,
  },
  {
    id: 4,
    description: "Multa por atraso",
    metadata: {
      date: "2024-06-15"
    },
    value: 50.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 5,
    description: "Desconto de pontualidade",
    metadata: {
      date: "2024-06-20"
    },
    value: 100.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 6,
    description: "Venda de livros",
    metadata: {
      date: "2024-06-25"
    },
    value: 300.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 7,
    description: "Taxa de exame",
    metadata: {
      date: "2024-07-01"
    },
    value: 50.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 8,
    description: "Doação",
    metadata: {
      date: "2024-07-05"
    },
    value: 100.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 9,
    description: "Compra de uniforme",
    metadata: {
      date: "2024-07-10"
    },
    value: 150.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 10,
    description: "Serviço de transporte",
    metadata: {
      date: "2024-07-15"
    },
    value: 75.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 11,
    description: "Recebimento de bolsa",
    metadata: {
      date: "2024-07-20"
    },
    value: 500.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 12,
    description: "Pagamento de atividade extracurricular",
    metadata: {
      date: "2024-07-25"
    },
    value: 100.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 13,
    description: "Reembolso de viagem",
    metadata: {
      date: "2024-08-01"
    },
    value: 200.0,
    isEntry: true,
    isPending: true,
  },
  {
    id: 14,
    description: "Pagamento de seguro",
    metadata: {
      date: "2024-08-05"
    },
    value: 75.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 15,
    description: "Venda de material didático",
    metadata: {
      date: "2024-08-10"
    },
    value: 250.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 16,
    description: "Pagamento de excursão",
    metadata: {
      date: "2024-08-15"
    },
    value: 300.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 17,
    description: "Recebimento de prêmio",
    metadata: {
      date: "2024-08-20"
    },
    value: 150.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 18,
    description: "Desconto de bolsa",
    metadata: {
      date: "2024-08-25"
    },
    value: 500.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 19,
    description: "Taxa de biblioteca",
    metadata: {
      date: "2024-09-01"
    },
    value: 25.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 20,
    description: "Pagamento de eventos",
    metadata: {
      date: "2024-09-05"
    },
    value: 100.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 21,
    description: "Venda de ingressos",
    metadata: {
      date: "2024-09-10"
    },
    value: 200.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 22,
    description: "Multa por danos",
    metadata: {
      date: "2024-09-15"
    },
    value: 50.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 23,
    description: "Recebimento de patrocínio",
    metadata: {
      date: "2024-09-20"
    },
    value: 1000.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 24,
    description: "Taxa de inscrição",
    metadata: {
      date: "2024-09-25"
    },
    value: 75.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 25,
    description: "Doação de evento",
    metadata: {
      date: "2024-10-01"
    },
    value: 500.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 26,
    description: "Taxa de manutenção",
    metadata: {
      date: "2024-10-05"
    },
    value: 150.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 27,
    description: "Recebimento de fundos",
    metadata: {
      date: "2024-10-10"
    },
    value: 2000.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 28,
    description: "Pagamento de curso",
    metadata: {
      date: "2024-10-15"
    },
    value: 300.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 29,
    description: "Compra de software",
    metadata: {
      date: "2024-10-20"
    },
    value: 500.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 30,
    description: "Venda de equipamento",
    metadata: {
      date: "2024-10-25"
    },
    value: 1000.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 31,
    description: "Multa administrativa",
    metadata: {
      date: "2024-11-01"
    },
    value: 200.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 32,
    description: "Reembolso de inscrição",
    metadata: {
      date: "2024-11-05"
    },
    value: 50.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 33,
    description: "Taxa de laboratório",
    metadata: {
      date: "2024-11-10"
    },
    value: 150.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 34,
    description: "Recebimento de doação",
    metadata: {
      date: "2024-11-15"
    },
    value: 700.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 35,
    description: "Pagamento de conferência",
    metadata: {
      date: "2024-11-20"
    },
    value: 400.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 36,
    description: "Venda de serviço",
    metadata: {
      date: "2024-11-25"
    },
    value: 300.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 37,
    description: "Taxa de reprografia",
    metadata: {
      date: "2024-12-01"
    },
    value: 50.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 38,
    description: "Recebimento de patrocínio",
    metadata: {
      date: "2024-12-05"
    },
    value: 1200.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 39,
    description: "Compra de equipamentos",
    metadata: {
      date: "2024-12-10"
    },
    value: 1000.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 40,
    description: "Venda de espaços publicitários",
    metadata: {
      date: "2024-12-15"
    },
    value: 500.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 41,
    description: "Pagamento de licença",
    metadata: {
      date: "2024-12-20"
    },
    value: 250.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 42,
    description: "Recebimento de bonificação",
    metadata: {
      date: "2024-12-25"
    },
    value: 800.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 43,
    description: "Taxa de manutenção",
    metadata: {
      date: "2024-12-30"
    },
    value: 150.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 44,
    description: "Recebimento de bônus",
    metadata: {
      date: "2025-01-05"
    },
    value: 600.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 45,
    description: "Pagamento de mensalidade",
    metadata: {
      date: "2025-01-10"
    },
    value: 1500.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 46,
    description: "Compra de material",
    metadata: {
      date: "2025-01-15"
    },
    value: 200.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 47,
    description: "Reembolso de atividade",
    metadata: {
      date: "2025-01-20"
    },
    value: 100.0,
    isEntry: true,
    isPending: true,
  },
  {
    id: 48,
    description: "Multa por atraso",
    metadata: {
      date: "2025-01-25"
    },
    value: 50.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 49,
    description: "Desconto de pontualidade",
    metadata: {
      date: "2025-01-30"
    },
    value: 100.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 50,
    description: "Venda de livros",
    metadata: {
      date: "2025-02-05"
    },
    value: 300.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 51,
    description: "Taxa de exame",
    metadata: {
      date: "2025-02-10"
    },
    value: 50.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 52,
    description: "Doação",
    metadata: {
      date: "2025-02-15"
    },
    value: 100.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 53,
    description: "Compra de uniforme",
    metadata: {
      date: "2025-02-20"
    },
    value: 150.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 54,
    description: "Serviço de transporte",
    metadata: {
      date: "2025-02-25"
    },
    value: 75.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 55,
    description: "Recebimento de bolsa",
    metadata: {
      date: "2025-03-01"
    },
    value: 500.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 56,
    description: "Pagamento de atividade extracurricular",
    metadata: {
      date: "2025-03-05"
    },
    value: 100.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 57,
    description: "Reembolso de viagem",
    metadata: {
      date: "2025-03-10"
    },
    value: 200.0,
    isEntry: true,
    isPending: true,
  },
  {
    id: 58,
    description: "Pagamento de seguro",
    metadata: {
      date: "2025-03-15"
    },
    value: 75.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 59,
    description: "Venda de material didático",
    metadata: {
      date: "2025-03-20"
    },
    value: 250.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 60,
    description: "Pagamento de excursão",
    metadata: {
      date: "2025-03-25"
    },
    value: 300.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 61,
    description: "Recebimento de prêmio",
    metadata: {
      date: "2025-03-30"
    },
    value: 150.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 62,
    description: "Desconto de bolsa",
    metadata: {
      date: "2025-04-05"
    },
    value: 500.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 63,
    description: "Taxa de biblioteca",
    metadata: {
      date: "2025-04-10"
    },
    value: 25.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 64,
    description: "Pagamento de eventos",
    metadata: {
      date: "2025-04-15"
    },
    value: 100.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 65,
    description: "Venda de ingressos",
    metadata: {
      date: "2025-04-20"
    },
    value: 200.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 66,
    description: "Multa por danos",
    metadata: {
      date: "2025-04-25"
    },
    value: 50.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 67,
    description: "Recebimento de patrocínio",
    metadata: {
      date: "2025-05-01"
    },
    value: 1000.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 68,
    description: "Taxa de inscrição",
    metadata: {
      date: "2025-05-05"
    },
    value: 75.0,
    isEntry: false,
    isPending: false,
  },
  {
    id: 69,
    description: "Doação de evento",
    metadata: {
      date: "2025-05-10"
    },
    value: 500.0,
    isEntry: true,
    isPending: false,
  },
  {
    id: 70,
    description: "Taxa de manutenção",
    metadata: {
      date: "2025-05-15"
    },
    value: 150.0,
    isEntry: false,
    isPending: true,
  },
  {
    id: 71,
    description: "Recebimento de fundos",
    metadata: {
      date: "2025-05-20"
    },
    value: 2000.0,
    isEntry: true,
    isPending: false,
  },
]

export const balanceData: IBalanceData = [
  1000, 1200, 1500, 1800, 2000, 2200, 2300, 2400, 2500, 2600, 2700, 2800,
]

export const entryData: IChartData[] = [
  {
    category: "Mensalidades",
    value: 1000
  },
  {
    category: "DPs",
    value: 1200
  },
  {
    category: "Prova Sub",
    value: 2000
  },
  {
    category: "Cantina",
    value: 3000
  },
  {
    category: "Doações",
    value: 1000
  },
  {
    category: "Eventos",
    value: 2000
  },
]

export const outData: IChartData[] = [
  {
    category: "Contas",
    value: 450
  },
  {
    category: "Jurídico",
    value: 300
  },
  {
    category: "Colaboradores",
    value: 300
  },
  {
    category: "Manutenção",
    value: 550
  },
  {
    category: "Livros",
    value: 200
  },
  {
    category: "Fornecedores",
    value: 400
  },
  {
    category: "Bolsas de estudo",
    value: 150
  },
  {
    category: "Marketing",
    value: 250
  },
  {
    category: "Pesquisa e desenvolvimento acadêmico",
    value: 500
  },
  {
    category: "Investimento em infraestrutura",
    value: 600
  },
  {
    category: "Assinaturas",
    value: 300
  },
]

export const pendingData: IChartData[] = [
  {
    category: "Mensalidades",
    value: 1000
  },
  {
    category: "DPs",
    value: 1200
  },
  {
    category: "Prova Sub",
    value: 2000
  },
  {
    category: "Cantina",
    value: 3000
  },
  {
    category: "Doações",
    value: 1000
  },
  {
    category: "Eventos",
    value: 2000
  },
  {
    category: "Contas",
    value: 450
  },
  {
    category: "Jurídico",
    value: 300
  },
  {
    category: "Colaboradores",
    value: 300
  },
  {
    category: "Manutenção",
    value: 550
  },
  {
    category: "Livros",
    value: 200
  },
  {
    category: "Fornecedores",
    value: 400
  },
  {
    category: "Bolsas de estudo",
    value: 150
  },
  {
    category: "Marketing",
    value: 250
  },
  {
    category: "Pesquisa e desenvolvimento acadêmico",
    value: 500
  },
  {
    category: "Investimento em infraestrutura",
    value: 600
  },
  {
    category: "Assinaturas",
    value: 300
  },
]
