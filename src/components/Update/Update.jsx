import styles from './update.module.css';


const Update = ()=>{
    return(
        <div style={{"padding" : "0 50px"}}>
            <h3 style={{textAlign:"center",fontSize:"50px"}}>Updating</h3>
            <p>An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:</p>
            <ul>
                <li className={styles.li}>
                    static getDerivedStateFromProps()
                </li>
                <li className={styles.li}>
                    shouldComponentUpdate()
                </li>
                <li>
                    render()
                </li>
                <li className={styles.li}>
                    getSnapshotBeforeUpdate()
                </li>
                <li>
                    componentDidUpdate()
                </li>
            </ul>   
        </div>
    )
} 

export default Update;