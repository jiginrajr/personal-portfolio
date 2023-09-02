import uniqid from 'uniqid'
import './Skills.css'

const Skills = ({elements, title}) => {
  // if (!skills.length) return null
  if (!elements?.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>{title}</h2>
      <ul className='skills__list'>
        {elements.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
