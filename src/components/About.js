import React from 'react';

export default function About(props) {

    let myStyle =  {
        color : props.mode === 'dark' ? 'white' : '#0f2641',
        backgroundColor : props.mode === 'dark' ? '#0f2641' : 'white'
    };

    return (
        <div className="container" style={myStyle}>
            <h2 className="my-3">About eNotes</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Store Your Notes on the Cloud</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>eNotes allows you to securely store and access your notes from anywhere, anytime. Say goodbye to the hassle of losing your notes or not being able to access them when you need them.</strong> 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Effortless Organization</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>eNotes provides a user-friendly interface for organizing your notes efficiently. Categorize them, add tags, and easily search for any note with our intuitive organization system.</strong> 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Collaborate with Others</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Share your notes with friends, colleagues, or classmates and collaborate in real-time. With eNotes, teamwork becomes seamless and productive.</strong> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
