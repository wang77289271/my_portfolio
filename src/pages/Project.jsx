import { useParams } from 'react-router-dom'

import ButtonGradient from '../assets/svg/ButtonGradient'
import { Contact, Footer, Navbar } from '../components'
import ProjectHeader from '../components/ProjectHeader'
import { projectNavigation, works } from '../constants'
import ProjectContent from '../components/ProjectContent'
import { useEffect } from 'react'

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { id } = useParams()
  const project = works.find((work) => work.id === id)

  return (
    <>
      <div className='pt-[4.75em] lg:pt-[5.25em] overflow-hidden'>
        <Navbar navigation={projectNavigation} />
        {project && <ProjectHeader project={project} />}
        {project && <ProjectContent project={project} />}
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default Project
