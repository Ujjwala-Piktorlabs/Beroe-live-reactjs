import React from 'react'

function AddIndices(props) {
    return (
        <div id="id01" className= {`modal ${props.showAddModal}`}>
            <div className="modal-content">
                <header className="container">
                    <span onClick={()=>props.ADDTOGGLECLASS()}
                        className="button display-topright">&times;</span>
                    <h1>Add Indices</h1>
                </header>
                <div className="container">
                    <h4>Click Submit to add an index to the page</h4>
                </div>
                <footer className="container">
                    <button className="btn submit" id="click-add" onClick={props.ADDCAROUSEL}>Submit</button>
                </footer>
            </div>
        </div>
    )
}

export default AddIndices
