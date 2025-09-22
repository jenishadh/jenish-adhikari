import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

type ExternalLinkProps = {
  href: string
  children: React.ReactNode
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={buttonVariants({
        size: 'sm',
        variant: 'secondary',
        className: 'border text-xs font-normal hover:border-green-400'
      })}
    >
      {children}
    </Link>
  )
}
