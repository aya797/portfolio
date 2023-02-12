
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skillsbg from "../assets/images/skills-bg.jpg";
import progress1 from "../assets/images/progress1.svg";
import progress2 from "../assets/images/progress2.svg";
import progress3 from "../assets/images/progress3.svg";

export const Skills = () => {
  const responsive = {

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    LargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    }
  }

  return (
    <section className="skills" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skills-contain wow zoomIn">
                        <h2>Skills</h2>
                        <p>You can see my skills here</p>
                        <Carousel responsive={responsive} infinite={true} className=" skill-slider">
                            <div className="item">
                                <img src={progress2} alt="progress2" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={progress2} alt="progress2" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={progress1} alt="progress1" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={progress3} alt="progress3" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image" src={skillsbg} alt="skills-bg" />
    </section>
  )
}
