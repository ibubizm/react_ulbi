import classes from './myInput.module.css'
import { forwardRef } from 'react'

export const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} className={classes.myInput} {...props} type="text" />
})
