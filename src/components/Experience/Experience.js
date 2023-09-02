import React from 'react'
import { workExperience } from '../../portfolio'

const Experience = () => {
  if (!workExperience.length) return null

  return (
    <section className='section contact center' id='experience'>
      <h2 className='section__title'>Work Experience</h2>
      <ol>
        {workExperience.map((element) => (
          <li>
            <div>
            <span style={{backgroundColor : "#f1f1f1", padding: "0px 4px"}}>{element.company}</span>
            </div>
            <div>
            <span style={{ paddingRight: 10 }}>Joining date :</span>
            <span>{element.joining}</span>
            </div>
            <div>
            <span style={{ paddingRight: 10 }}>Ending date :</span>
            <span>{element.ending}</span>
            </div>
            <div>
            <span style={{ paddingRight: 10 }}>Period :</span>
            <span>{element.period}</span>
            </div>
            <div>
            <span style={{ paddingRight: 10 }}>What I did :</span>
            <span >{element.descripton.map(ele => (
                <ol style={{listStyleType: "circle"}}>
                    <li>{ele}</li>
                </ol>
            ))}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
