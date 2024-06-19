import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function MainContent(props) {
  return (
    <ThemeContextConsumer>
        {
            (context) => (
                <div className={`context ${context.theme}`}>
                    <h1>Welcome to my App</h1>
                    <p>
                        Use Context API to share data between Components 
                    </p>
                </div>
            )
        }
    </ThemeContextConsumer>
  )
}
