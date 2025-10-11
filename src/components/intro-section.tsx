import { Download, Mail } from 'lucide-react'

import { ExternalLink } from '@/components/external-link'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export function IntroSection() {
  return (
    <section>
      <MaxWidthWrapper className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Jenish Adhikari</h1>
          <p>@jenishxadhikari</p>
        </div>
        <p className="text-sm">
          I am Jenish, a Computer Science student from Nepal. Currently focused on backend
          engineering, learning how systems are designed and built. I also have experience in
          frontend development, which allows me to create applications that not only work well but
          also look good.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <ExternalLink href="https://www.linkedin.com/in/jenishxadhikari">
            <Mail className="animate-pulse text-green-400 transition-all duration-500" />
            Available for new opportunities
          </ExternalLink>

          <ExternalLink href="#">
            <Download />
            Download CV
          </ExternalLink>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
