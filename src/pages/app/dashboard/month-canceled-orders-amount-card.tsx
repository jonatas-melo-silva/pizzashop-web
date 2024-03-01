import { useQuery } from '@tanstack/react-query'
import { cva } from 'class-variance-authority'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components'
import { cn } from '@/libs'

import { MetricCardSkeleton } from './metric-card-skeleton'

const styles = cva('')

export type MonthCanceledOrdersAmountCardProps = {
  readonly className?: string
}

export function MonthCanceledOrdersAmountCard({
  className,
  ...props
}: MonthCanceledOrdersAmountCardProps) {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount,
  })

  return (
    <Card className={cn(styles({ className }))} {...props}>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
