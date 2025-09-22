import React from 'react'

import { Button } from '@/components/ui/button'

type SkillButtonProps = {
  children: React.ReactNode
}

export function SkillButton({ children }: SkillButtonProps) {
  return (
    <Button
      size="sm"
      variant="secondary"
      className="border text-xs font-normal hover:border-green-400"
    >
      {children}
    </Button>
  )
}
