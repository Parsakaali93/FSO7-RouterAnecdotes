import { useState } from 'react'

export const useField = (type) => {
    const [value, setFieldValue] = useState('')
  
    const onChange = (event) => {
        setFieldValue(event.target.value)
    }


    const reset = () => {
        setFieldValue("")
    }
      
    return {
      type,
      value,
      onChange,
      reset
    }
  }