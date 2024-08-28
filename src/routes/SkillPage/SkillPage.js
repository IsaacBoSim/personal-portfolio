import python from "../../assets/image/skillimage/python.svg";
import javascript from "../../assets/image/skillimage/javascript.svg";
import java from "../../assets/image/skillimage/java.svg";
import react from "../../assets/image/skillimage/react.svg";
import css from "../../assets/image/skillimage/css.svg";
import html from "../../assets/image/skillimage/html.svg";
import django from "../../assets/image/skillimage/django.svg";
import mongodb from "../../assets/image/skillimage/mongodb.svg";
import csharp from "../../assets/image/skillimage/csharp.svg";
import cplusplus from "../../assets/image/skillimage/cplusplus.svg";
import postgres from "../../assets/image/skillimage/postgres.svg";
import sql from "../../assets/image/skillimage/sql.svg";

import Carousel from 'react-multi-carousel';
import coffeebean from "../../assets/image/coffeebean.jpeg"
import {SkillCard} from "../../components/SkillCard/SkillCard";

import 'react-multi-carousel/lib/styles.css';
import './SkillPage.scss';

export const SkillPage = () => {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 4
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technology Stack</h2>
                        <Carousel responsive={responsive} infinite={true}
                                  className="owl-carousel owl-theme skill-slider">
                            <SkillCard imageSrc={python} title="Python"/>
                            <SkillCard imageSrc={javascript} title="JavaScript"/>
                            <SkillCard imageSrc={java} title="Java"/>
                            <SkillCard imageSrc={csharp} title="C#"/>
                            <SkillCard imageSrc={cplusplus} title="C++"/>
                            <SkillCard imageSrc={react} title="React"/>
                            <SkillCard imageSrc={html} title="HTML"/>
                            <SkillCard imageSrc={css} title="CSS"/>
                            <SkillCard imageSrc={django} title="Django"/>
                            <SkillCard imageSrc={mongodb} title="MongoDB"/>
                            <SkillCard imageSrc={postgres} title="PostgreSQL"/>
                            <SkillCard imageSrc={sql} title="SQL"/>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={coffeebean} alt="CoffeeBeans" />
    </section>
  )
}
