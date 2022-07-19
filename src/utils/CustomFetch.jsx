import React from 'react'

let is_ok = true;

const CustomFetch = (time,task) => {
  return (
    new Promise ((resolve, reject) => {
        if(is_ok) {
            setTimeout(() => {
                resolve(task)
            }, time);
        }else {
            reject("ERROR")
        }
    })
  )
}

export default CustomFetch