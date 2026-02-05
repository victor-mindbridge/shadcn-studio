'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import {
  Archive,
  ArrowRight,
  ArrowUpRight,
  Bell,
  ChevronDown,
  CreditCard,
  DollarSign,
  Download,
  Eye,
  Home,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  Settings,
  Trash,
  User,
  Users,
  Wallet,
  Menu,
  Activity,
  Globe,
  MoreVertical,
  CheckCircle2
} from 'lucide-react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset
} from '@/components/ui/sidebar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'

import TotalEarningCard from '@/components/shadcn-studio/blocks/widget-total-earning'

// --- Mock Data & Configs ---

const incomeData = [
  { month: 'Jan', income: 2000 },
  { month: 'Feb', income: 4500 },
  { month: 'Mar', income: 3200 },
  { month: 'Apr', income: 5280 },
  { month: 'May', income: 4000 },
  { month: 'Jun', income: 5600 }
]

const expenseData = [
  { month: 'Jan', expense: 3000 },
  { month: 'Feb', expense: 2500 },
  { month: 'Mar', expense: 4120 },
  { month: 'Apr', expense: 3200 },
  { month: 'May', expense: 3800 },
  { month: 'Jun', expense: 2000 }
]

const revenueData = [
  { month: 'Jan', revenue2023: 12, revenue2024: 18 },
  { month: 'Feb', revenue2023: 8, revenue2024: 10 },
  { month: 'Mar', revenue2023: 15, revenue2024: 22 },
  { month: 'Apr', revenue2023: 10, revenue2024: 14 },
  { month: 'May', revenue2023: 20, revenue2024: 25 },
  { month: 'Jun', revenue2023: 8, revenue2024: 12 },
  { month: 'Jul', revenue2023: 14, revenue2024: 18 }
]

const radialData = [
  {
    activity: 'growth',
    value: 78,
    fill: 'var(--color-growth)',
  },
]

const recentTransactions = [
  {
    id: 'TRX-9871',
    type: 'Credit card',
    desc: 'Digital ocean',
    amount: '-$2,820',
    trend: 'down',
    icon: CreditCard,
    iconColor: 'text-primary'
  },
  {
    id: 'TRX-9872',
    type: 'Bank account',
    desc: 'Received money',
    amount: '+$1,260',
    trend: 'up',
    icon: Home,
    iconColor: 'text-green-500'
  }
  ,
  {
    id: 'TRX-9873',
    type: 'Credit card',
    desc: 'Netflix',
    amount: '-$149',
    trend: 'down',
    icon: CreditCard,
    iconColor: 'text-primary'
  },
  {
    id: 'TRX-9874',
    type: 'Wallet',
    desc: 'Starbucks',
    amount: '-$49',
    trend: 'down',
    icon: Wallet,
    iconColor: 'text-yellow-500'
  },
    {
    id: 'TRX-9875',
    type: 'Bank account',
    desc: 'Refund from amazon',
    amount: '+$268',
    trend: 'up',
    icon: Home,
    iconColor: 'text-yellow-500'
  }
]

const countriesData = [
  { name: 'United states', amount: '$867k', grow: true, value: '20.3%' },
  { name: 'China', amount: '$1.2M', grow: true, value: '15.7%' },
  { name: 'United Kingdom', amount: '$750k', grow: false, value: '18.2%' },
  { name: 'India', amount: '$1.5M', grow: true, value: '22.1%' },
  { name: 'Australia', amount: '$980k', grow: false, value: '18.6%' }
]

const invoicesData = [
  {
    id: '#5099',
    status: 'Paid',
    client: { name: 'Jack alfredo', role: 'UI/UX designer', avatar: '/avatars/01.png' },
    total: '$3120',
    date: '03 April 2025',
    balance: 'Paid',
  },
  {
    id: '#5008',
    status: 'Pending',
    client: { name: 'Maria Gonzalez', role: 'Frontend developer', avatar: '/avatars/02.png' },
    total: '$1450',
    date: '12 May 2025',
    balance: 'Paid',
  },
  {
    id: '#5101',
    status: 'Pending',
    client: { name: 'John Doe', role: 'Graphic designer', avatar: '/avatars/03.png' },
    total: '$1200',
    date: '26 June 2025',
    balance: 'Paid',
  },
  {
    id: '#4586',
    status: 'Processing',
    client: { name: 'Emily Carter', role: 'UI/UX designer', avatar: '/avatars/04.png' },
    total: '$2680',
    date: '05 July 2025',
    balance: '-$78',
  },
    {
    id: '#4350',
    status: 'Paid',
    client: { name: 'David Lee', role: 'Backend developer', avatar: '/avatars/05.png' },
    total: '$3120',
    date: '07 August 2025',
    balance: 'Paid',
  }
]

const earningData = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/zipcar.png',
    platform: 'Zipcar',
    technologies: 'Vuejs & HTML',
    earnings: '-$23,569.26',
    progressPercentage: 75
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/bitbank.png',
    platform: 'Bitbank',
    technologies: 'Figma & React',
    earnings: '-$12,650.31',
    progressPercentage: 25
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/aviato.png',
    platform: 'Aviato',
    technologies: 'HTML & Angular',
    earnings: '-$55,699.50',
    progressPercentage: 50
  }
]

// --- Charts Handlers ---

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },
  expense: {
    label: "Expense",
    color: "hsl(var(--chart-2))",
    },
    revenue2023: {
      label: "2023",
      color: "hsl(var(--muted-foreground))", // Light Gray
    },
    revenue2024: {
      label: "2024",
      color: "hsl(var(--primary))", // Orange/Primary
    },
     growth: {
    label: "Growth",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

function IncomeChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[80px] w-full">
      <AreaChart data={incomeData}>
        <defs>
            <linearGradient id="fillIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-income)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--color-income)" stopOpacity={0} />
            </linearGradient>
        </defs>
        <Area
            dataKey="income"
            type="natural"
            fill="url(#fillIncome)"
            fillOpacity={0.4}
            stroke="var(--color-income)"
        />
      </AreaChart>
    </ChartContainer>
  )
}

function ExpenseChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[80px] w-full">
      <AreaChart data={expenseData}>
           <defs>
            <linearGradient id="fillExpense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-expense)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--color-expense)" stopOpacity={0} />
            </linearGradient>
        </defs>
        <Area
            dataKey="expense"
            type="natural"
            fill="url(#fillExpense)"
            fillOpacity={0.4}
            stroke="var(--color-expense)"
        />
      </AreaChart>
    </ChartContainer>
  )
}

function TotalRevenueChart() {
    return (
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <BarChart data={revenueData} barGap={4}>
                 <CartesianGrid vertical={false} strokeDasharray="3 3" />
                 <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                <Bar dataKey="revenue2024" fill="var(--color-revenue2024)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="revenue2023" fill="var(--color-revenue2023)" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ChartContainer>
    )
}

function RadialGrowthChart() {
return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <RadialBarChart
        data={radialData}
        startAngle={0}
        endAngle={250}
        innerRadius={80}
        outerRadius={110}
      >
        <RadialBar dataKey="value" background cornerRadius={10} />
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey="value"
          tick={false}
        />
      </RadialBarChart>
    </ChartContainer>
  )
}

// --- Main Page Component ---

export default function DashboardShell04() {
  return (
    <SidebarProvider>
      <Sidebar className="border-r-0 bg-sidebar/50">
        <SidebarHeader className="h-16 justify-center px-6">
            <div className="flex items-center gap-2 font-bold text-xl">
               <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <LayoutDashboard className="size-5" />
               </div>
               Payment
            </div>
        </SidebarHeader>
        <SidebarContent className="px-4">
            <SidebarGroup>
                <SidebarGroupLabel>Pages</SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton isActive>
                            <Home />
                            <span>Home</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Wallet />
                            <span>Balance</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton>
                            <ArrowRight />
                            <span>Transaction</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Plus />
                            <span>Add money</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton>
                            <ArrowUpRight />
                            <span>Send</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Download />
                            <span>Request</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup className="mt-4">
               <SidebarGroupLabel>Recipients</SidebarGroupLabel>
               <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                             <Avatar className="size-6">
                                <AvatarImage src="/avatars/01.png" />
                                <AvatarFallback>IT</AvatarFallback>
                             </Avatar>
                            <span>Ilia Topuria</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton>
                             <Avatar className="size-6">
                                <AvatarImage src="/avatars/02.png" />
                                <AvatarFallback>MH</AvatarFallback>
                             </Avatar>
                            <span>Max Holloway</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton>
                             <Avatar className="size-6">
                                <AvatarImage src="/avatars/03.png" />
                                <AvatarFallback>AV</AvatarFallback>
                             </Avatar>
                            <span>Alexander Volk</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
               </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4">
             <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent p-3 text-sidebar-accent-foreground">
                 <Avatar>
                    <AvatarImage src="/avatars/shadcn.jpg" />
                    <AvatarFallback>SA</AvatarFallback>
                 </Avatar>
                 <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Shadcn</span>
                    <span className="truncate text-xs">Administrator</span>
                  </div>
                  <ChevronDown className="size-4 opacity-50" />
             </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="bg-muted/20">
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-6 bg-background/50 backdrop-blur-sm sticky top-0 z-10 border-b">
            <div className="flex items-center gap-4">
                <SidebarTrigger className="-ml-1 md:hidden" />
                <div className="grid gap-0.5">
                    <h1 className="text-xl font-bold tracking-tight">Hey, John</h1>
                    <p className="text-muted-foreground text-xs">Welcome back to dashboard</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative w-64 hidden md:flex">
                     <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                     <Input
                        type="search"
                        placeholder="Type to search..."
                        className="pl-8 rounded-full bg-muted/50 border-none shadow-none"
                    />
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Globe className="size-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                     <Activity className="size-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full relative">
                    <Bell className="size-5" />
                    <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full" />
                </Button>
                <Avatar>
                    <AvatarImage src="/avatars/shadcn.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </header>

        <main className="flex-1 p-6 space-y-6">
            {/* Row 1: Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Income this month</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline gap-2 mb-4">
                            <div className="text-3xl font-bold">$5,280</div>
                            <Badge variant="secondary" className="rounded-md font-normal">+12.2%</Badge>
                             <span className="text-xs text-muted-foreground">VS Last month</span>
                        </div>
                        <IncomeChart />
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Expense this month</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline gap-2 mb-4">
                             <div className="text-3xl font-bold">$4,120</div>
                             <Badge variant="secondary" className="rounded-md font-normal">-12.2%</Badge>
                             <span className="text-xs text-muted-foreground">VS Last month</span>
                        </div>
                        <ExpenseChart />
                    </CardContent>
                </Card>
                <Card className="flex flex-row items-center justify-between pr-0">
                     <div className="p-6">
                        <div className="text-sm font-medium text-muted-foreground">Total orders</div>
                        <Badge variant="secondary" className="mt-2 rounded-md font-normal mb-8">Last Week</Badge>
                         <div className="text-3xl font-bold">42.5k <span className="text-green-500 text-base font-normal">+10.8%</span></div>
                     </div>
                     <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-shell/dashboard-04-illustration.png" alt="Illustration" className="h-[140px] w-auto object-contain self-end rounded-br-xl" />
                </Card>
            </div>

             {/* Row 2: Charts Area */}
             <div className="grid gap-4 md:grid-cols-3">
                <Card className="col-span-1">
                     <CardHeader className="flex flex-row items-center justify-between">
                         <CardTitle className="text-base font-semibold">Payment History</CardTitle>
                         <MoreVertical className="size-4 text-muted-foreground" />
                     </CardHeader>
                     <CardContent className="grid gap-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                                   <div className="size-6 rounded-full bg-red-500" />
                                </div>
                                <div className="grid gap-0.5">
                                    <span className="font-semibold">*5688</span>
                                    <span className="text-xs text-muted-foreground">Credit card</span>
                                </div>
                            </div>
                            <div className="text-right text-xs">
                                <div>05/Jan</div>
                                <div className="font-semibold">-$2,820</div>
                            </div>
                        </div>
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                     <div className="size-6 text-xl font-bold flex items-center justify-center">V</div>
                                </div>
                                <div className="grid gap-0.5">
                                    <span className="font-semibold">*8562</span>
                                    <span className="text-xs text-muted-foreground">Debit card</span>
                                </div>
                            </div>
                            <div className="text-right text-xs">
                                <div>15/Feb</div>
                                <div className="font-semibold">-$1,450</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
                                   <div className="size-6 text-[10px] font-bold flex items-center justify-center">AMEX</div>
                                </div>
                                <div className="grid gap-0.5">
                                    <span className="font-semibold">*5238</span>
                                    <span className="text-xs text-muted-foreground">ATM card</span>
                                </div>
                            </div>
                            <div className="text-right text-xs">
                                <div>20/Mar</div>
                                <div className="font-semibold">-$500</div>
                            </div>
                        </div>
                         <div className="flex items-center justify-between">
                             <div className="flex items-center gap-4">
                                <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                     <div className="size-6 text-xl font-bold flex items-center justify-center">V</div>
                                </div>
                                <div className="grid gap-0.5">
                                    <span className="font-semibold">*8562</span>
                                    <span className="text-xs text-muted-foreground">Debit card</span>
                                </div>
                            </div>
                            <div className="text-right text-xs">
                                <div>10/Apr</div>
                                <div className="font-semibold">-$750</div>
                            </div>
                        </div>
                     </CardContent>
                </Card>

                <Card className="col-span-1 md:col-span-2 grid md:grid-cols-2 gap-0 border-0 shadow-none bg-transparent">
                     {/* Total Revenue */}
                     <Card className="rounded-r-none border-r-0 md:rounded-r-none md:border-r pr-4">
                         <CardHeader className="flex flex-col items-start space-y-0 pb-2">
                             <div className="flex w-full items-center justify-between">
                                 <CardTitle className="text-base font-semibold">Total Revenue</CardTitle>
                                 <MoreVertical className="size-4 text-muted-foreground" />
                             </div>
                             <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="size-2 rounded-full bg-primary" /> 2024
                                </div>
                                 <div className="flex items-center gap-2 text-xs">
                                    <span className="size-2 rounded-full bg-muted-foreground" /> 2023
                                </div>
                             </div>
                         </CardHeader>
                         <CardContent>
                             <TotalRevenueChart />
                         </CardContent>
                     </Card>
                     {/* Report */}
                     <Card className="rounded-l-none border-l-0 md:rounded-l-none md:border-l-0">
                         <CardHeader className="flex flex-row items-center justify-end space-y-0 pb-2">
                            <Button variant="outline" size="sm" className="h-8 gap-1 rounded-md text-xs">
                                Report
                                <ChevronDown className="size-3" />
                            </Button>
                         </CardHeader>
                         <CardContent className="flex flex-col items-center justify-center relative">
                             <RadialGrowthChart />
                             <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                                 <div className="text-3xl font-bold">78%</div>
                                 <div className="text-xs text-muted-foreground">Growth</div>
                             </div>
                             <div className="mt-4 text-center text-sm font-medium text-muted-foreground">62% Company Growth</div>
                             <div className="mt-8 flex w-full items-center justify-between px-8">
                                 <div className="flex items-center gap-2">
                                     <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-100 text-orange-600">
                                         <DollarSign className="size-4" />
                                     </div>
                                     <div className="text-xs">
                                         <div className="text-muted-foreground flex items-center justify-between w-full">2024</div>
                                         <div className="font-bold">$32.5K</div>
                                     </div>
                                 </div>
                                  <div className="flex items-center gap-2">
                                     <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                                         <Wallet className="size-4" />
                                     </div>
                                     <div className="text-xs">
                                         <div className="text-muted-foreground">2023</div>
                                         <div className="font-bold">$41.2K</div>
                                     </div>
                                 </div>
                             </div>
                         </CardContent>
                     </Card>
                </Card>
             </div>

             {/* Row 3: Lists & Earning */}
             <div className="grid gap-4 md:grid-cols-3">
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-4">
                        <CardTitle className="text-base font-semibold">Sales by countries</CardTitle>
                         <MoreVertical className="size-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="text-xs text-muted-foreground">Monthly sales overview</div>
                        {countriesData.map((country, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                   <div className="size-8 rounded-full bg-muted flex items-center justify-center text-xs overflow-hidden relative">
                                       {/* Mock Flag */}
                                       <span className="absolute inset-0 bg-secondary flex items-center justify-center text-[10px]">{country.name.substring(0,2).toUpperCase()}</span>
                                   </div>
                                   <div>
                                       <div className="font-bold">{country.amount}</div>
                                       <div className="text-xs text-muted-foreground">{country.name}</div>
                                   </div>
                                </div>
                                <div className={cn("text-xs font-medium flex items-center gap-1", country.grow ? "text-green-500" : "text-red-500")}>
                                    {country.grow ? <ArrowUpRight className="size-3" /> : <ChevronDown className="size-3" />}
                                    {country.value}
                                </div>
                            </div>
                        ))}
                    </CardContent>
                 </Card>

                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-4">
                        <CardTitle className="text-base font-semibold">Transactions</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        {recentTransactions.map((trx, index) => (
                             <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                   <div className={cn("size-10 rounded-lg flex items-center justify-center bg-muted/50", trx.type === 'Bank account' ? 'bg-green-100 text-green-600' : trx.type === 'Wallet' ? 'bg-yellow-100 text-yellow-600' :  'bg-slate-100 text-slate-600')}>
                                       <trx.icon className="size-5" />
                                   </div>
                                   <div>
                                       <div className="font-medium text-sm">{trx.type}</div>
                                       <div className="text-xs text-muted-foreground">{trx.desc}</div>
                                   </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-sm">{trx.amount}</div>
                                    <div className={cn("flex justify-end", trx.trend === 'up' ? "text-green-500" : "text-red-500")}>
                                        {trx.trend === 'up' ? <ArrowUpRight className="size-3" /> : <ArrowRight className="size-3 rotate-45" />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                 </Card>

                 <TotalEarningCard
                  title='Total Earning'
                  earning={24650}
                  trend='up'
                  percentage={10}
                  comparisonText='Compare to last year ($84,325)'
                  earningData={earningData}
                  className='justify-between gap-5 sm:min-w-0 [&>[data-slot=card-content]]:space-y-7'
                />
             </div>

             {/* Row 4: Table */}
             <Card>
                 <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-4 pb-4">
                     <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Show</span>
                        <Button variant="outline" size="sm" className="h-8 gap-1">5 <ChevronDown className="size-3" /></Button>
                        <Button className="bg-primary text-primary-foreground h-8 text-xs">Create Invoice</Button>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="relative w-48">
                            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search client"
                                className="pl-8 h-8 text-xs bg-muted/50"
                            />
                        </div>
                        <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
                             All <ChevronDown className="size-3" />
                         </Button>
                     </div>
                 </CardHeader>
                 <CardContent>
                     <Table>
                         <TableHeader>
                             <TableRow>
                                 <TableHead className="w-[50px]"><Checkbox /></TableHead>
                                 <TableHead>ID</TableHead>
                                 <TableHead>Status</TableHead>
                                 <TableHead>Client</TableHead>
                                 <TableHead>Total</TableHead>
                                 <TableHead>Issued date</TableHead>
                                 <TableHead>Balance</TableHead>
                                 <TableHead className="text-right">Actions</TableHead>
                             </TableRow>
                         </TableHeader>
                         <TableBody>
                             {invoicesData.map((invoice) => (
                                 <TableRow key={invoice.id}>
                                     <TableCell><Checkbox /></TableCell>
                                     <TableCell className="font-medium text-xs text-muted-foreground">{invoice.id}</TableCell>
                                     <TableCell>
                                         <Badge variant="outline" className={cn("font-normal rounded-md",
                                            invoice.status === 'Paid' && "border-green-200 bg-green-50 text-green-700",
                                            invoice.status === 'Pending' && "border-yellow-200 bg-yellow-50 text-yellow-700",
                                            invoice.status === 'Processing' && "border-blue-200 bg-blue-50 text-blue-700"
                                         )}>
                                           {invoice.status === 'Paid' && <CheckCircle2 className="mr-1 size-3" />}
                                            {invoice.status}
                                         </Badge>
                                     </TableCell>
                                     <TableCell>
                                         <div className="flex items-center gap-3">
                                             <Avatar className="size-8">
                                                 <AvatarImage src={invoice.client.avatar} />
                                                 <AvatarFallback>{invoice.client.name.substring(0,2)}</AvatarFallback>
                                             </Avatar>
                                             <div>
                                                 <div className="font-medium text-sm">{invoice.client.name}</div>
                                                 <div className="text-xs text-muted-foreground font-normal">{invoice.client.role}</div>
                                             </div>
                                         </div>
                                     </TableCell>
                                     <TableCell className="font-bold">{invoice.total}</TableCell>
                                     <TableCell className="text-muted-foreground text-sm">{invoice.date}</TableCell>
                                     <TableCell>
                                          <Badge variant="secondary" className={cn("font-normal rounded-md",
                                             invoice.balance === 'Paid' ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-transparent text-foreground"
                                          )}>
                                              {invoice.balance}
                                          </Badge>
                                     </TableCell>
                                     <TableCell className="text-right">
                                         <div className="flex items-center justify-end gap-2 text-muted-foreground">
                                             <Trash className="size-4 hover:text-red-500 cursor-pointer" />
                                             <Eye className="size-4 hover:text-primary cursor-pointer" />
                                             <MoreVertical className="size-4 hover:text-foreground cursor-pointer" />
                                         </div>
                                     </TableCell>
                                 </TableRow>
                             ))}
                         </TableBody>
                     </Table>
                     <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 text-xs text-muted-foreground">
                         <div>Showing 1 to 5 of 25 entries</div>
                         <div className="flex items-center gap-2">
                             <Button variant="ghost" size="sm" className="h-8 disabled:opacity-50" disabled>
                                 <ChevronDown className="mr-1 size-3 rotate-90" /> Previous
                             </Button>
                             <div className="flex items-center gap-1">
                                 <Button variant="secondary" size="icon" className="h-8 w-8 text-xs">1</Button>
                                 <Button variant="ghost" size="icon" className="h-8 w-8 text-xs">2</Button>
                                 <Button variant="ghost" size="icon" className="h-8 w-8 text-xs bg-primary text-primary-foreground">3</Button>
                                 <Button variant="ghost" size="icon" className="h-8 w-8 text-xs">4</Button>
                             </div>
                             <Button variant="ghost" size="sm" className="h-8">
                                 Next <ChevronDown className="ml-1 size-3 -rotate-90" />
                             </Button>
                         </div>
                     </div>
                 </CardContent>
             </Card>

             {/* Footer */}
             <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                 <div>@2025 Shadcn/studio. Made for better web design</div>
                 <div className="flex items-center gap-4">
                     <span className="hover:text-foreground cursor-pointer">Facebook</span>
                     <span className="hover:text-foreground cursor-pointer">Instagram</span>
                     <span className="hover:text-foreground cursor-pointer">Twitter</span>
                 </div>
             </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
