import {
  Dialog,
  // DialogClose,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/presentation/components/ui/dialog"
import { Separator } from "@/presentation/components/ui/separator"
// import { Input } from "@/presentation/components/ui/input"
// import { Label } from "@/presentation/components/ui/label"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  children: React.ReactNode
}

export default function Modal({open, onOpenChange, title, description, children}: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <Separator />
        {children}
      </DialogContent>
    </Dialog>
  )
}
