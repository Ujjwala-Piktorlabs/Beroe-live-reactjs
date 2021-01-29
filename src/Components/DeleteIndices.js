import React, { Component } from 'react'

export class DeleteIndices extends Component {
    render() {
        return (
            <div id="id02" className='modal hidden'>
                <div className="modal-content">
                    <header className="container">
                        <span onClick={()=>this.props.DELTOGGLECLASS('id02')}
                            className="button display-topright">&times;</span>
                        <h1>Delete Indices</h1>
                    </header>
                    <div className="container">
                        <h4>Click Submit to delete this Index</h4>
                    </div>
                    <footer className="container">
                        <button className="btn delete" id="click-del" onClick={()=>this.props.DELETEINDICES('id02')}>Delete</button>
                    </footer>
                </div>
            </div>
        )
    }
}

export default DeleteIndices