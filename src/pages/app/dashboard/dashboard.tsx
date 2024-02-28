import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Helmet } from 'react-helmet-async'

import { cn } from '@/libs'

import {
  DayOrdersAmountCard,
  MonthCanceledOrdersAmountCard,
  MonthOrdersAmountCard,
  MonthRevenueCard,
  PopularProductsChart,
  RevenuesChart,
} from './'

const styles = cva('flex flex-col gap-4')

export type DashboardProps = ComponentProps<'div'>

export function Dashboard({ className, ...props }: DashboardProps) {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className={cn(styles({ className }))} {...props}>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <section className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </section>

        <section className="grid grid-cols-9 gap-4">
          <RevenuesChart />
          <PopularProductsChart />
        </section>
      </div>
    </>
  )
}
