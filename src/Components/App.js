import React from 'react'
import { Header, Footer } from './Layouts'
import Articles from './Articles/Articles'
import Select from './select'
const app = () => (
  <div className="App">
    <Header />
    <Articles />
    <Select />
    <Footer />
  </div>
)

export default app
