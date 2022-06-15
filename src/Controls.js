const Controls = ({ score, setScore, setStart }) => {

    return (
        <>
            <h1 style={{textAlign: "center"}}>React a Mole!</h1>
            <h2 style={{textAlign: "center", color: 'red'}}>{score}</h2>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary m-2" onClick={() => setStart(true)}>Start</button>
                <button className="btn btn-primary m-2" onClick={() => setStart(false)}>Pause</button>
                <button className="btn btn-primary m-2" onClick={() => setScore(0)}>Reset</button>
            </div>
        </>
    )
}

export default Controls