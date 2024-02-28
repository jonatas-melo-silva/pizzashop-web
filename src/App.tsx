import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button variant={'outline'}>Click me</Button>

      <Avatar>
        <AvatarImage src="https://github.com/jonatas-melo-silva.png" />
        <AvatarFallback>JMS</AvatarFallback>
      </Avatar>
    </div>
  )
}
