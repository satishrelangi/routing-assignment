const Unmount = ()=>{
    return(
        <div style={{"padding" : "0 50px"}}>
            <h3 style={{textAlign:"center",fontSize:"50px"}}>Unmounting</h3>
            <p>This method is called when a component is being removed from the DOM:</p>
            <ul>
                <li>
                    componentWillUnmount()
                </li>
            </ul>
            <p>componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().</p>   
            <p>You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.

</p>
        </div>
    )
} 

export default Unmount;