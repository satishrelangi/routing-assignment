import './mount.css';
const Mount = ()=>{
    return(
        <div style={{"padding" : "0 50px"}}>
            <h3 style={{textAlign:"center",fontSize:"50px"}}>Mounting</h3>
            <p>These methods are called in the following order when an instance of a component is being created and inserted into the DOM:</p>
            <ul>
                <li>
                    constructor()
                </li>
                <li style={{fontWeight:"normal"}}>
                    static getDerivedStateFromProps()
                </li>
                <li>
                    render()
                </li>
                <li>
                    componentDidMount()
                </li>
            </ul>   
        </div>
    )
} 

export default Mount;