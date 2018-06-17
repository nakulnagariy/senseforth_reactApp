import React from 'react'
import { render } from 'react-dom'

//import { SkiDayCount, Toggle, Nakul } from './components/SkiDayCount'
import { Body } from './components/Body/stats'
import { Listing } from './components/Body/listing'
import { Header } from './components/Header/header'
import { Subheader } from './components/Header/SubHeader/subheader'
import { Eventhandler } from './components/EventHandling/events'
import { Subject } from './components/EventHandling/subject'
import { Footer } from './components/Footer/footer'
import { BasicExample } from './components/Routing/routingExample1'
import { Users } from './components/Users/users'
import { Techsit } from './components/Techsit/techsit'



window.React = React;


render (
  <div>
    <Techsit />
    <Subject students = {
      [
        {
          math: 70,
          english: 78,
          science: 76,
          computer: 89,
          total: 400
        },
        {
          math: 98,
          english: 45,
          science: 98,
          computer: 79,
          total: 400
        },
        {
          math: 76,
          english: 89,
          science: 94,
          computer: 34,
          total: 400
        }
      ]
    }/>
  </div>,
  document.getElementById('react-container')
)