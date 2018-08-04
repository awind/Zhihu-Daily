import React, { Component } from 'react'
import Slider from 'react-slick'
import '../css/HotNews.css'
import { connect } from 'react-redux'
import filter from '../utils/filter'

class HotNews extends Component {
    
    render() {
        const topStories = this.props.topStories

        const settings = {
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
        }

        return (
            <div className="slider-container">
                <Slider className="slider" {...settings}>
                    { topStories && topStories.map((item, index) => {
                        return (
                            <div className="slider-item" key={index}>
                                <img className="slider-image" alt={item.title} src={filter.replaceUrl(item.image)} />
                                <p className="title">{item.title}</p>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        topStories: state.news.topStories,
    }
}

export default connect(mapStateToProps)(HotNews)