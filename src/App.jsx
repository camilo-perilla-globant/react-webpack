import React from 'react'
import styles from './style.css'

/* eslint-disable react/prop-types */

const App = ({ title }) => (
  <div>
    <h2 className={styles.title}>{title}</h2>
  </div>
)

export default App
