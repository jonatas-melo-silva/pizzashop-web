import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Helmet } from 'react-helmet-async'

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

const styles = cva('flex flex-col gap-4')

export type OrdersProps = ComponentProps<'div'>

export function Orders({ className, ...props }: OrdersProps) {
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
                {[...Array(10)].map(() => {
                  return (
                    <OrderTableRow
                      key={new Date().getTimezoneOffset.toString()}
                    />
                  )
                })}
              </TableBody>
            </Table>
          </section>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
