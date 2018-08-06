import React, { Component } from 'react'
import '../css/HotNews.css'
import { connect } from 'react-redux'
import filter from '../utils/filter'
import { withRouter } from 'react-router'
import Slider from 'react-slick'

class HotNews extends Component {

    handleOnClick = (item) => {
        console.log("item .....")
        const { history } = this.props
        // history.push('/detail/' + item.id)
    }
    
    render() {
        const topStories = this.props.topStories

        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
        }

        return (
            <div className="slider-container">
                <Slider className="slider" {...settings}>
                    { topStories && topStories.map((item, index) => {
                        return (
                            <div className="slider-item" key={index}>
                                <img className="slider-image" alt={item.title} src={filter.replaceUrl(item.image)} />
                                <p className="title">{item.title}</p>
                                <div className="overlay-layer"></div>
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

export default withRouter(connect(mapStateToProps)(HotNews))