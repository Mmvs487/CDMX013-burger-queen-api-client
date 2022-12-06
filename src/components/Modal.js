import './modals.css'

const Modal = ({ children, stateModal }) => { 
    return (
        <div > 
            {stateModal &&
            <div className="overlay">
                <div className="modalContainer">
                    {children}
                </div>
             </div>  
            }
        </div>
    );
}

export default Modal;