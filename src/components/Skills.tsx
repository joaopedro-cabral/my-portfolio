import React from 'react'
import { skills } from '@/constants'
import SkillCard from './SkillCard'
import Reveal from './Reveal'

const Skills = () => {
  return (
    <div className="p-10 md:p-14 flex flex-col justify-between">
      <span>
        <Reveal>
          <h1 
            style={{fontStretch: "125%"}} 
            className='font-mona font-medium text-[35px] md:text-[55px] text-black-dark dark:text-white-light leading-none'>
            my-skills/
          </h1>
        </Reveal>
      </span>
      <div className='mt-10 grid grid-cols-3 gap-4 md:grid-cols-5'>
        {skills.map((skill) => (
          <Reveal
          width='100%'>
            <SkillCard
              name={skill.name}
              icon={skill.icon}
            />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Skills