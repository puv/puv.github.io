import './assets/css/App.css'

import Projects from './assets/js/Projects'
import Socials from './assets/js/Socials'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img class="bg" src="/background.gif" alt="" srcset="" />
    <div class="wrapper">
        <div class="content">
            <div class="avatar"><img src="https://avatars.githubusercontent.com/u/16114858" /></div>
            <div class="info">
                <div class="title">@puv</div>
                <div class="description"> <label>Full-Stack Developer / CS Student</label>
                    <div class="buttons"> 
                    {
                      Socials.map((social, index) => {
                        return (
                          <a href={social.url}>{social.name}</a>
                        )
                      })
                    }
                    </div>
                </div>
            </div><label class="linked">If a platform is not linked here, the account is probably fake.</label>
        </div>
        <div class="projects">
            <div class="title">Projects</div>
            <div class="prj">
              {
                Projects.map((project, index) => {
                  return (
                    <a href={project.url} alt={project.description}>{project.name}</a>
                  )
                })
              }
            </div>
        </div>
    </div>
    </>
  )
}

export default App
