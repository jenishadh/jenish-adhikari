import { Download, Mail, Zap } from 'lucide-react'

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
          I am Jenish, a Computer Science & Information Technology student from Nepal. Currently
          focused on backend engineering learning how systems are designed and built. I also have
          experience in front end development so I can make things look good and actually work.
        </p>
        <div className="flex items-center gap-x-4">
          <ExternalLink href="mailto:jenishadhikari2060@gmail.com">
            <Zap className="animate-pulse text-green-400 transition-all duration-500" />
            Available for new opportunities
            <Mail />
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
