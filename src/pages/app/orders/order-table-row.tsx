import { cva } from 'class-variance-authority'
import { ArrowRight, Search, X } from 'lucide-react'

import { Button, TableCell, TableRow } from '@/components'
import { cn } from '@/libs'

const styles = cva('')

export type OrderTableRowProps = {
  readonly className?: string
}

export function OrderTableRow({ className, ...props }: OrderTableRowProps) {
  return (
    <TableRow className={cn(styles({ className }))} {...props}>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        sdf897sdf987sdf98
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Jonatas Melo Silva</TableCell>
      <TableCell className="font-medium">R$ 1.500,00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
