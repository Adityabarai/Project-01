import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden border border-slate-900 font-black",
        "group flex items-center gap-2 transition-none hover:bg-transparent hover:text-primary-foreground",
        className
      )}
      {...props}
    >
      <span
        className="absolute inset-0 flex items-center justify-center gap-2 bg-background text-foreground transition-transform duration-200 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-y-full"
      >
        {children}
        <ChevronRight className="h-4 w-4" />
      </span>
      <div className="flex items-center gap-2 opacity-0 transition-all duration-200 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:opacity-100">
        <span className="translate-y-[-15px] transition-transform duration-200 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-y-0">
          {children}
        </span>
        <ChevronRight 
          className="h-4 w-4 translate-y-[15px] transition-transform duration-200 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-y-0 group-hover:delay-[0.1s]" 
        />
      </div>
    </Button>
  )
}

