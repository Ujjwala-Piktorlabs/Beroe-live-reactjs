import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addIndices, delIndices } from '../Actions/carouselActions';
import axios from 'axios'

import Card from './Card';
import AddIndices from './AddIndices';
import DeleteIndices from './DeleteIndices';
import HomeRightDiv from './HomeRightDiv';
import IndicesWhiteCard from './IndicesWhiteCard';
import IndicesGreyCard from './IndicesGreyCard';

import building from '../images/building.jpg';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Home({ In, addIndices, delIndices }) {
    // Indices redux state
    // Blogs state
    const [index, setindex] = useState({
        index: ''
    })
    // Index state 
    const [blogs, setBlogs] = useState({
        blogitems: []
    })
    const {blogitems} = blogs

    // Add Indices modal state 
    const [AddModal, setAddModal] = useState({
        showAddModal: 'hidden'
    })
    const { showAddModal } = AddModal

    // Display Add modal
    const addToggleIndexClass = () => {
        if (showAddModal === 'shown') {
            setAddModal({ showAddModal: 'hidden' })
        } else {
            setAddModal({ showAddModal: 'shown' })
        }
    }

    // Del Indices modal state 
    const [DelModal, setDelModal] = useState({
        showDelModal: 'hidden'
    })
    const { showDelModal } = DelModal

    // Display Del modal
    const delToggleIndexClass = (ind) => {
        if (showDelModal === 'shown') {
            setDelModal({ showDelModal: 'hidden' })
        } else {
            setindex({ index: ind })
            setDelModal({ showDelModal: 'shown' })
        }
    }

    // Add Indices to carousel
    const addCarousel = () => {
        addIndices();
        setTimeout(() => {
            addToggleIndexClass()
        }, 500);
    }

    // Delete Indices from carousel
    const deleteCarousel = () => {
        delIndices(index);
        setTimeout(() => {
            delToggleIndexClass()
        }, 500);
    }

    // Owl carousel responsive options
    const options = {
        responsive: {
            0: {
                items: 1
            },
            770: {
                items: 3
            }
        }
    }

    useEffect(async () => {
        try {
            const response = await axios.get('https://api.jsonbin.io/b/6023d3043b303d3d964ea312');
            setBlogs({ blogitems: response.data.blogs })
            return blogs
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <div className="page-content">
            {/* Section 1 */}
            <section className="home-section">
                <div className="home-info">
                    <div className="home-img-div">
                        <img className="home-img" src={building} alt="building" />
                    </div>
                    <HomeRightDiv />
                </div>
                <div className="home-footer">
                    <p>For DEEPER INSIGHTS in a category, request for a <a href="#">Customised Report.</a></p>
                    <button className="btn">Get Customised Report</button>
                </div>
            </section>
            {/* Section 2 */}
            <section className="graph-section">
                <h4>INDICIES</h4>
                <div className="fade-line"></div>
                <OwlCarousel className='owl-theme' autoHeight={true} nav dots {...options}>
                    {In && In.length > 0 && In.map((indices, idx) => (
                        <IndicesWhiteCard INDEX={idx} INDICES={indices} DELTOGGLECLASS={delToggleIndexClass} />
                    ))}
                    <IndicesGreyCard ADDTOGGLECLASS={addToggleIndexClass} />
                </OwlCarousel>
                <AddIndices ADDTOGGLECLASS={addToggleIndexClass} ADDCAROUSEL={addCarousel} showAddModal={showAddModal} />
                <DeleteIndices DELTOGGLECLASS={delToggleIndexClass} DELETEINDICES={deleteCarousel} INDEX={index} showDelModal={showDelModal} />
            </section>
            {/* Section 3 */}
            <section className="blog-article" id="section3">
                {blogitems.map((blog, index) => (<Card INDEX={index} BLOG={blog} />))}
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    In: state.carousel.In
})

export default connect(mapStateToProps, { addIndices, delIndices })(Home);