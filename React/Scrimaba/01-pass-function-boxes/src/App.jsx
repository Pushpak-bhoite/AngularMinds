import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {

        console.log('id: ' + id)

        setSquares((prev) => {

            let x = prev.map(square => {
                 return  square.id === id ? { ...square, on: !square.on } : square;
            })
            console.log(x);
            return x;
        })

    }

    const squareElements = squares.map(square => (
        <Box
            key={square.id}
            id={square.id}
            on={square.on}
            toggle={()=>toggle(square.id)}
        />
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}






