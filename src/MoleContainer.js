
import { useEffect, useState } from "react"
import Mole from "./Mole"

const MoleContainer = (props) => {
    const [displayMole, setDisplayMole] = useState(false)
    const handleClick = () =>  {
        props.setScore(prev => prev + 1)
        setDisplayMole(false)
    }

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <>
            {displayMole ? <Mole setDisplayMole={setDisplayMole} handleClick={handleClick} />
            :
            <img style={{'width': '10vw'}} src="molehill.png" alt="Mole Mountain" />}
        </>
    )
}

export default MoleContainer