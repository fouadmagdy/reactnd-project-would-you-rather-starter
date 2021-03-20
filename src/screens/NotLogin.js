import React from 'react'
import { Link } from 'react-router-dom'

const NotLogin = () => {
    return (
        <div>
            Please log in <Link to="/"><span className='text-primary'>return home</span></Link>
        </div>
    )
}

export default NotLogin
