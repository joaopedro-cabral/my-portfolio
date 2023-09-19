import { Hero, About, Projects, Skills, Certificates } from '@/components'

export default function Page() {
  return (
    <main>
      <section>
        <Hero/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='certificates'>
        <Certificates/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
    </main>
  )
}
