import React, { Component } from 'react';
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
export class Home extends Component {
    state = {
        Indices: [
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
        ],
        index: '',
    }

    addToggleIndexClass = (param) => {
        let id = document.getElementById(param)
        id.classList.toggle('hidden')
    }

    delToggleIndexClass = (param, ind) => {
        let id = document.getElementById(param)
        // console.log(id, id.classList.contains('hidden'), ind);
        if (id.classList.contains('hidden')) {
            this.setState({ index: ind })
            console.log(this.state.index);
        }
        id.classList.toggle('hidden')
    }

    addCarousel = () => {
        this.setState(previousState => ({
            Indices: [...previousState.Indices, { image: 'https://source.unsplash.com/random.PNG' }]
        }));
        setTimeout(() => {
            this.addToggleIndexClass('id01')
        }, 1000);
    }

    deleteCarousel = () => {
        this.setState({ Indices: this.state.Indices.splice(this.state.index) });
        setTimeout(() => {
            this.delToggleIndexClass('id02')
        }, 1000);
    }

    render() {
        const options = {
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
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
                    <OwlCarousel className='owl-theme' nav dots options={options}>
                        {this.state.Indices.map((indices, index) => (
                            <IndicesWhiteCard INDEX={index} INDICES={indices} TOGGLECLASS={this.delToggleIndexClass} />
                        ))}
                        <IndicesGreyCard TOGGLECLASS={this.addToggleIndexClass} />
                    </OwlCarousel>
                    <AddIndices ADDTOGGLECLASS={this.addToggleIndexClass} ADDCAROUSEL={this.addCarousel} />
                    <DeleteIndices DELTOGGLECLASS={this.delToggleIndexClass} DELETEINDICES={this.deleteCarousel} />
                </section>
                {/* Section 3 */}
                <section className="blog-article" id="section3">
                    {blogs.map((blog, index) => (<Card INDEX={index} BLOG={blog} />))}
                </section>
            </div>
        )
    }
}
export default Home