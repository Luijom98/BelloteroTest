import React from 'react';
import '../index.css';
import data from '../data/page1.json';
import appData from '../data/app.json';
import {
  Link
} from "react-router-dom";


class Testimonials extends React.Component {

  constructor() {
    super()

    this.state = {
      count: 0,
      sliderCount: 1
    }

  }

  increment = () => {
    if (this.state.count === 0) {
      this.setState(prevState => ({ count: prevState.count + 1 }))
      if (this.state.sliderCount != 4) {
        this.setState(prevState => ({ sliderCount: prevState.sliderCount + 1 }))
      } else {
        this.state.sliderCount = 1;
      }
    } else if (this.state.count === 1) {
      this.setState(prevState => ({ count: prevState.count - 1 }))
      if (this.state.sliderCount != 4) {
        this.setState(prevState => ({ sliderCount: prevState.sliderCount + 1 }))
      } else {
        this.state.sliderCount = 1;
      }
    }
  }

  decrement = () => {
    if (this.state.count == 1) {
      this.setState(prevState => ({ count: prevState.count - 1 }))
      if (this.state.sliderCount > 1) {
        this.setState(prevState => ({ sliderCount: prevState.sliderCount - 1 }))
      } else if (this.state.sliderCount == 1) {
        this.state.sliderCount = 4;
      }
    } else if (this.state.count == 0) {
      this.setState(prevState => ({ count: prevState.count + 1 }))
      if (this.state.sliderCount > 1) {
        this.setState(prevState => ({ sliderCount: prevState.sliderCount - 1 }))
      } else {
        this.state.sliderCount = 4;
      }
    }
  }


  render() {

    return (
      <div class="Testimonal">
        <div class="Rectangle-top"></div>
        <div class="Rectangle">
          <img src={require("../img/bellotero.png")} className="bellotero" alt="" />
          <span className="Home Text-Style-2">
            <Link className='Link' to="/">Home</Link>
          </span>
          <span class="Solutions Text-Style-2">
            Solutions
          </span>
          <span class="Stories Text-Style-2">
            {appData.menu.items[2].text}
          </span>
          <span class="Partners Text-Style-2">
            Partners
          </span>
          <span class="About Text-Style-2">
            {appData.menu.items[3].text}
          </span>
          <span class="Blog Text-Style-2">
            Blog
          </span>
        </div>

        <div class="Rectangle-customers">
          <span class="Our-customers-love-u">{data.slider.title}</span>
        </div>

        <div class="Rectangle-text">
          <div class="Rectangle-text_title">
            <span class="Pete-Zahut">
              {data.slider.reviews[this.state.count].name}
            </span>
            <span class="Chef-Maniak">
              {data.slider.reviews[this.state.count].position}
            </span>
          </div>
          <div className='Rectangle-text_content'>
            <span class="Its-funny-what-mem">
              {data.slider.reviews[this.state.count].comment}
            </span>
          </div>
        </div>

        <div class="paging">
          <div class="Rectangle-Copy-6">
            <span class="Text-Style" id='1'>
              {this.state.sliderCount}/4
            </span>
          </div>
          <div class="Rectangle-Copy-5">
            <button style={{ background: 'transparent', border: 'none' }} onClick={this.decrement}><div class="Combined-Shape-Copy-2 left"></div></button>
          </div>
          <div class="Rectangle-Copy-2">
            <button style={{ background: 'transparent', border: 'none' }} onClick={this.increment}><div class="Combined-Shape-Copy right  "></div></button>
          </div>
        </div>

      </div>
    );

  }
}

export default Testimonials;
