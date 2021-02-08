import React from 'react'

const DeleteIndices = (props) => {
    return (
        <div id="id02" className={`modal ${props.showDelModal}`}>
            <div className="modal-content">
                <header className="container">
                    <span onClick={() => props.DELTOGGLECLASS()}
                        className="button display-topright">&times;</span>
                    <h1>Delete Indices</h1>
                </header>
                <div className="container">
                    <h4>Click Submit to delete this Index</h4>
                </div>
                <footer className="container">
                    <button className="btn delete" id="click-del" onClick={()=>props.DELETEINDICES(props.INDEX)}>Delete</button>
                </footer>
            </div>
        </div>
    )
}

export default DeleteIndices