import './modalAdd.css'

const ModalAdd = ({ children, stateModal }) => { 
    return (
        <div > 
            {stateModal &&
            <div className="overlay">
                <div className="modalAddContainer">
                    {children}
                </div>
             </div>  
            }
        </div>
    );
}

export default ModalAdd;