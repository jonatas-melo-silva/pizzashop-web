import { cva } from 'class-variance-authority'
import { Search, X } from 'lucide-react'
import { ComponentProps } from 'react'

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components'
import { cn } from '@/libs'

const styles = cva('flex items-center gap-2')

export type OrderTableFiltersProps = ComponentProps<'form'>

export function OrderTableFilters({
  className,
  ...props
}: OrderTableFiltersProps) {
  return (
    <form className={cn(styles({ className }))} {...props}>
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="pending">Pendentes</SelectItem>
          <SelectItem value="canceled">Cancelados</SelectItem>
          <SelectItem value="in-preparation">Em preparo</SelectItem>
          <SelectItem value="in-transit">Em trânsito</SelectItem>
          <SelectItem value="delivered">Entregues</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="secondary" size="xs">
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
