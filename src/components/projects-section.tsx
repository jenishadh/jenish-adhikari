import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export function ProjectsSection() {
  return (
    <section>
      <MaxWidthWrapper className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>

        <h3 className="text-center text-sm">{`< Work In Progress />`}</h3>
      </MaxWidthWrapper>
    </section>
  )
}
