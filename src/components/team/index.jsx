import PropTypes from "prop-types";

const Team = ({ data }) => {
    return (
        <div className={data.classOption}>
            <div className="thumb">
                <img style={{maxHeight: '272px', maxwidth: '272px', objectFit:'cover', borderRadius: '10px'}} src={data.image} alt="Alexis-Team" />
            </div>
            <div className="content">
                <div className="member-info">
                
                    <span className="designation">{data.designation}</span>
                </div>:
       
            </div>
        </div>
    );
};

Team.propTypes = {
    data: PropTypes.object,
};

export default Team;
