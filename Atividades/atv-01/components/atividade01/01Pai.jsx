import Filho from "./01Filho"

const Pai = ({altura, peso}) => {
    return (
        <div>
            <h1>Jarpa</h1>
            <Filho altura={altura} peso={peso}/>
        </div>
    )
}

export default Pai