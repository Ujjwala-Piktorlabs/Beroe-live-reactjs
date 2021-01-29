import React, { Component } from 'react'

export class AddIndices extends Component {
    render() {
        return (
            <div id="id01" className='modal hidden'>
                <div className="modal-content">
                    <header className="container">
                        <span onClick={() => this.props.ADDTOGGLECLASS('id01')}
                            className="button display-topright">&times;</span>
                        <h1>Add Indices</h1>
                    </header>
                    <div className="container">
                        <h4>Click Submit to add an index to the page</h4>
                    </div>
                    <footer className="container">
                        <button className="btn submit" id="click-add" onClick={this.props.ADDCAROUSEL}>Submit</button>
                    </footer>
                </div>
            </div>
        )
    }
}

export default AddIndices
