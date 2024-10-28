import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/presentation/components/ui/popover"
import { Menu } from "lucide-react"

export default function NavMenu() {
  return (
    <Popover>
      <PopoverTrigger className="bg-[#a78bfa] rounded-md p-1">
        <Menu className="text-white" />
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  )
}
