import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            404 not found <Link to="/"><span className='text-primary'>return home</span></Link>
        </div>
    )
}
