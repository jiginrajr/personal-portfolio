import React, { useState } from 'react'
import { workExperience } from '../../portfolio'
import './Experience.css'

const Experience = () => {

  const [show, setShow] = useState(true)

  if (!workExperience.length) return null

  const showDescription = () => {
    setShow(prevState => !prevState);
  }

  return (
    <section className='section contact center' id='experience'>
      <h2 className='section__title'>Work Experience</h2>
      <ol>
        {workExperience.map((element) => (
          <li>
            <div style={{marginBottom: "10px"}}>
            <span className='title' style={{ padding: "1px 16px", borderRadius:"4px"}}>{element.company}</span>
            </div>
            <div style={{marginBottom:"10px"}}>
            <span style={{ paddingRight: 10 }}>Period :</span>
            <span style={{fontStyle: 'italic'}}>{`${element.joining} - ${element.ending} (${element.period})`}</span>
            </div>
            <div>
            <span style={{ paddingRight: 10, textDecoration :"underline" }}>What I did :</span>
            {/* <button type='button' onClick={showDescription}>Show</button> */}
            {
              show && 
            <span >{element.descripton.map(ele => (
                <ol style={{listStyleType: "circle"}}>
                    <li>{ele}</li>
                </ol>
            ))}</span>
            }
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
