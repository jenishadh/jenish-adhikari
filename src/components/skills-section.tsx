import Image from 'next/image'

import { BsGithub } from 'react-icons/bs'
import { RiNextjsFill } from 'react-icons/ri'
import { SiDrizzle, SiExpress, SiPrisma } from 'react-icons/si'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { SkillButton } from '@/components/skill-button'

export function SkillsSection() {
  return (
    <section>
      <MaxWidthWrapper className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>

        <h3 className="text-sm">{`< LANGUAGES />`}</h3>
        <div className="flex items-center gap-x-4">
          <SkillButton>
            <Image height={16} width={16} src="/typescript-logo.svg" alt="JavaScript Logo" />
            TypeScript
          </SkillButton>
          <SkillButton>
            <Image height={16} width={16} src="/javascript-logo.svg" alt="TypeScript Logo" />
            JavaScript
          </SkillButton>
          <SkillButton>
            <Image height={16} width={16} src="/cplusplus-logo.svg" alt="C Plus Plus Logo" />
            C++
          </SkillButton>
        </div>

        <h3 className="text-sm">{`< FRAMEWORKS / LIBRARIES / RUNTIME />`}</h3>
        <div className="flex flex-wrap items-center gap-4">
          <SkillButton>
            <Image height={16} width={16} src="/react-logo.svg" alt="React Logo" />
            React
          </SkillButton>
          <SkillButton>
            <RiNextjsFill />
            NextJS
          </SkillButton>
          <SkillButton>
            <SiExpress />
            Express
          </SkillButton>
          <SkillButton>
            <Image height={16} width={16} src="/react-query-logo.svg" alt="Tanstack query Logo" />
            Tanstack Query
          </SkillButton>
          <SkillButton>
            <Image height={16} width={16} src="/zustand-logo.svg" alt="Zustand Logo" />
            Zustand
          </SkillButton>
          <SkillButton>
            <Image height={16} width={16} src="/tailwind-logo.svg" alt="Tailwind Logo" />
            TailwindCSS
          </SkillButton>
          <SkillButton>
            <SiDrizzle />
            Drizzle
          </SkillButton>
          <SkillButton>
            <SiPrisma />
            Prisma
          </SkillButton>
          <SkillButton>
            <Image height={16} width={16} src="/mongoose-logo.svg" alt="Mongoose Logo" />
            Mongoose
          </SkillButton>
          <SkillButton>
            <Image height={16} width={16} src="/nodejs-logo.svg" alt="Node JS Logo" />
            NodeJS
          </SkillButton>
          <SkillButton>
            <Image height={16} width={16} src="/bun-logo.svg" alt="BUN Logo" />
            Bun
          </SkillButton>
        </div>

        <h3 className="text-sm">{`< DATABASE />`}</h3>
        <div className="flex items-center gap-x-4">
          <SkillButton>
            <Image height={16} width={16} src="/postgreSQL-logo.svg" alt="PostgreSQL Logo" />
            PostgreSQL
          </SkillButton>
          <SkillButton>
            <Image height={16} width={16} src="/mongoDB-logo.svg" alt="MongoDB Logo" />
            MongoDB
          </SkillButton>
          <SkillButton>
            <Image height={16} width={16} src="/redis-logo.svg" alt="Redis Logo" />
            Redis
          </SkillButton>
        </div>

        <h3 className="text-sm">{`< DEVELOPER TOOLS />`}</h3>
        <div className="flex items-center gap-x-4">
          <SkillButton>
            <Image height={16} width={16} src="/git-logo.svg" alt="Git Logo" />
            GIT
          </SkillButton>
          <SkillButton>
            <BsGithub />
            GITHUB
          </SkillButton>
          <SkillButton>
            <Image height={16} width={16} src="/postman-logo.svg" alt="Postman Logo" />
            POSTMAN
          </SkillButton>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
