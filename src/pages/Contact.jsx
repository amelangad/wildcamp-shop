import React from 'react'
import transition from '../transition'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Form from '../components/Form'

function Contact() {
  return (
    <>
      <Menu />
      <Form />
      <Footer />
    </>
  )
}

export default transition(Contact)

