import {useEffect} from 'react'

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <img style={{'width': '10vw'}} src="mole.png" alt="mole" onClick={props.handleClick} />
    )
}

export default Mole