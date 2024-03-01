import { useQuery } from '@tanstack/react-query'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getOrders } from '@/api'
import {
  Pagination,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components'
import { cn } from '@/libs'

import { OrderTableFilters } from './order-table-filters'
import { OrderTableRow } from './order-table-row'
import { OrderTableSkeleton } from './order-table-skeleton'

const styles = cva('flex flex-col gap-4')

export type OrdersProps = ComponentProps<'div'>

export function Orders({ className, ...props }: OrdersProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['orders', pageIndex, orderId, customerName, status],
    queryFn: () =>
      getOrders({
        pageIndex,
        orderId,
        customerName,
        status: status === 'all' ? null : status,
      }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((prev) => {
      prev.set('page', String(pageIndex + 1))
      return prev
    })
  }

  return (
    <>
      <Helmet title="Pedidos" />
      <div className={cn(styles({ className }))} {...props}>
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />

          <section className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[140px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingOrders && <OrderTableSkeleton />}
                {result && (
                  <>
                    {result.orders.map((order) => (
                      <OrderTableRow key={order.orderId} order={order} />
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </section>

          {result && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
            />
          )}
        </div>
      </div>
    </>
  )
}
