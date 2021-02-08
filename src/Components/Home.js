import React, { useState } from 'react';

import Card from './Card';
import AddIndices from './AddIndices';
import DeleteIndices from './DeleteIndices';
import HomeRightDiv from './HomeRightDiv';
import IndicesWhiteCard from './IndicesWhiteCard';
import IndicesGreyCard from './IndicesGreyCard';

import building from '../images/building.jpg';
import bargraph from '../images/bar-graph.PNG';
import lineargraph from '../images/linear-graph.PNG';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const blogs = [
    {
        id: 'more1',
        title: 'BLOG',
    },
    {
        id: 'more2',
        title: 'ARTICLES',
    },
    {
        id: 'more3',
        title: 'WHITEPAPERS',
    }
]
function Home() {
    // Indices state
    const [Indices, setIndices] = useState({
        In: [
            {
                image: bargraph,
            },
            {
                image: lineargraph,
            },
            {
                image: 'https://picsum.photos/seed/picsum/200/300',
            },
            {
                image: 'https://picsum.photos/200',
            },
            {
                image: 'https://source.unsplash.com/random.PNG',
            }
        ]
    })
    const { In } = Indices

    // Index state 
    const [index, setindex] = useState({
        index: ''
    })

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

    const delToggleIndexClass = (ind) => {
        if (showDelModal === 'shown') {
            setDelModal({ showDelModal: 'hidden' })
            setindex({ index: ind })
        } else {
            setDelModal({ showDelModal: 'shown' })
        }
    }

    // Add Indices to carousel
    const addCarousel = () => {
        setIndices(previousState => ({
            In: [...previousState.In, { image: 'https://source.unsplash.com/random.PNG' }]
        }));
        setTimeout(() => {
            addToggleIndexClass()
        }, 500);
    }

    // Delete Indices from carousel
    const deleteCarousel = (i) => {
        setIndices({ In: In.splice(i.index) });
        delToggleIndexClass()
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
                    {In.map((indices, index) => (
                        <IndicesWhiteCard INDEX={index} INDICES={indices} DELTOGGLECLASS={delToggleIndexClass} />
                    ))}
                    <IndicesGreyCard ADDTOGGLECLASS={addToggleIndexClass} />
                </OwlCarousel>
                <AddIndices ADDTOGGLECLASS={addToggleIndexClass} ADDCAROUSEL={addCarousel} showAddModal={showAddModal} />
                <DeleteIndices DELTOGGLECLASS={delToggleIndexClass} DELETEINDICES={deleteCarousel} INDEX={index} showDelModal={showDelModal} />
            </section>
            {/* Section 3 */}
            <section className="blog-article" id="section3">
                {blogs.map((blog, index) => (<Card INDEX={index} BLOG={blog} />))}
            </section>
        </div>
    )
}
export default Home