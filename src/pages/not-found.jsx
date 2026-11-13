import {Link} from 'react-router'

const NotFoundPage = () => {
    return(
        <div Style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>
                Opps the page your are looking for does not exists!!
            </p>
            <Link to='/' style={styles.link}>Go back home!</Link>
        </div>
    )
}

const styles = {
    container:{
        textAling: 'center',
        padding: '80px 10px',
        color: '#fff'
    },
    title: {
        fontSize: '72px',
        marginBottom: '20px'
        },
    message: {
        fontSize: '19px',
        marginBottom: '30px'
    },
    link: {
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold'
    }   
}

export default NotFoundPage