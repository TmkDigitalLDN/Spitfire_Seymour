import { Link } from "react-router-dom";
import AboutData from "../../../data/global/about.json";

const AboutService = () => {
    return (
        <div className="service-area">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-100 col-xl-100 mb-sm-50 mb-md-70"
                        data-aos="fade-up"
                    >
                        <h2 className="title">{AboutData[0].title}</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: AboutData[0].excerpt,
                            }}
                        />
                        <br />
                             <h2 className="title">{AboutData[0].title2}</h2>
                        <p
                    
                            dangerouslySetInnerHTML={{
                                __html: AboutData[0].excerpt2,
                            }}
                        />
                    </div>
        
                </div>
            </div>
        </div>
    );
};

export default AboutService;
