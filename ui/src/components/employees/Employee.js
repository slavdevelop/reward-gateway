import React from 'react';

const Employee = ({avatar, bio, company, name, title}) => {
    
    return (
        <div className="card flex-row flex-wrap">
            <div className="card-header border-0">
                <img src={avatar} />
            </div>
            <div className="card-block px-2">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{title}</p>
                <p className="card-text">{company}</p>
            </div>
            <div className="card-footer w-100 text-muted">
                <p className="card-text">{bio}</p>
            </div>
        </div>
    )
};

export default Employee;