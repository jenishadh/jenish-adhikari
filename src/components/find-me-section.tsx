import { Mail } from 'lucide-react'
import { BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'

import { ExternalLink } from '@/components/external-link'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export function FindMeSection() {
  return (
    <section>
      <MaxWidthWrapper className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Find me on!</h2>
        <div className="flex items-center gap-x-4">
          <ExternalLink href="https://github.com/jenishxadhikari">
            <BsGithub />
            Github
          </ExternalLink>

          <ExternalLink href="https://x.com/jenishxadhikari">
            <BiLogoTwitter />
            Twitter
          </ExternalLink>

          <ExternalLink href="https://www.linkedin.com/in/jenishxadhikari/">
            <BiLogoLinkedin />
            Linked In
          </ExternalLink>

          <ExternalLink href="mailto:jenishadhikari2060@gmail.com">
            <Mail />
            Mail
          </ExternalLink>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
