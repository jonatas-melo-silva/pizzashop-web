import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { cva } from 'class-variance-authority'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { getManagedRestaurant } from '@/api'
import { cn } from '@/libs'

import {
  Button,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Textarea,
} from './ui'

const storeProfileFormSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

type StoreProfileFormInputs = z.infer<typeof storeProfileFormSchema>

const styles = cva('')

export type StoreProfileDialogProps = {
  readonly className?: string
}

export function StoreProfileDialog({
  className,
  ...props
}: StoreProfileDialogProps) {
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
  })

  const { register } = useForm<StoreProfileFormInputs>({
    resolver: zodResolver(storeProfileFormSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  console.log(managedRestaurant)

  return (
    <DialogContent className={cn(styles({ className }))} {...props}>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form action="">
        <div className="space-y-4 py-4">
          <fieldset className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </fieldset>
          <fieldset className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </fieldset>
        </div>

        <DialogFooter>
          <Button variant="ghost" type="button">
            Cancelar
          </Button>
          <Button variant="success" type="submit">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
