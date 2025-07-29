
function Container({ children }){

    const styles = {
        margin: "auto",
        maxWidth: "1440px",
        height: "100vh",
    }

    return(
        <div style={styles}>
            {children}
        </div>
    )
}

export default Container;