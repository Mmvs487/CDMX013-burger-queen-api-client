import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ rol, children }) => {
    if (!rol) {
        return <Navigate to={'/'}/>
     }
    return children 
}