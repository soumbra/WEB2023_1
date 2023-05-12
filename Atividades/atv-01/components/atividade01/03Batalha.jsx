import { Children, cloneElement  } from "react"
const Hero = ({name, arena, img}) => {
    return (
        <div>
            <h1>Meu nome: {name} e estou na arena: {arena}</h1>
            <img 
            src={img}
            alt="robin" 
            style={{width:"240px"}}/>
            
        </div>
    )
}

const Enemy = ({name, img}) => {
    return (
        <div>
            <h1>Sou Inimigo e Meu nome: {name} </h1>
            <img 
            src={img} 
            alt="Lucina" 
            style={{width:"240px"}}/>
            
        </div>
    )
}

const Arena = ({name}) => {
    return (
        <div>
            <h1>Arena: {name}</h1>
            <Hero name = "JJ" />
            <Enemy name = "JG" />
        </div>
    )
}


const Arena2 = ({name, children}) => {
    return (
        <div >
            <h1 style={{backgroundColor: "blue"}}>Arena: {name}</h1>
            {
                Children.map(
                    children, 
                    (child) => {
                        return cloneElement(child,{arena:name});
                    }
                )
            }
        </div>
    )
}

const World = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
} 

export {Hero, Enemy, Arena, Arena2, World}