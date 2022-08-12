import React, { useState } from "react"
import "./Semaforo.css"

const Semaforo = () => {
const [isGreen, setIsGreen] = useState(false)
const [isYellow, setIsYellow] = useState(false)
const [isRed, setIsRed] = useState(false)


const activarGreen = () => {
    setIsGreen(!isGreen)
    setIsYellow(false)
    setIsRed(false)
}

const activarYellow = () => {
    setIsGreen(false)
    setIsYellow(!isYellow)
    setIsRed(false)
}

const activarRed = () => {
    setIsGreen(false)
    setIsYellow(false)
    setIsRed(!isRed)
}
 
    return (
        <div className="p-2">
            <div className={isGreen ? "border luzSize bg-success mx-auto my-2 brillo" : "border luzSize bg-success mx-auto my-2 bg-opacity-50"}
            onClick={activarGreen}></div>
            <div className={isYellow ? "border luzSize bg-warning mx-auto my-2 brillo" : "border luzSize bg-warning mx-auto my-2 bg-opacity-50"}
            onClick={activarYellow}></div>
            <div className={isRed ? "border luzSize bg-danger mx-auto my-2 brillo" : "border luzSize bg-danger mx-auto my-2 bg-opacity-50"}
            onClick={activarRed}></div>
        </div>
    )   
}


export default Semaforo