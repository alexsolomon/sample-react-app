import React, { Component } from 'react';

class Root extends Component {
    render() {
        return <div className="row" >
            <div id="leftPane"
                className="col-sm-3 d-none d-sm-block" >
                <div className="header">
                    <b>Select your questions</b>
                </div>

                <div className="questionlist">
                    <ol>
                        <li>What is the capital of India?</li>
                        <li>What is the capital of USA?</li>
                        <li>What is the capital of UK?</li>
                    </ol>

                </div>

                <div className="buttons">
                    <div className="row">
                        <div className="col-12 text-center">
                            <button className="btn btn-primary">Add</button>
                            <button className="btn btn-primary">Delete</button>
                        </div>
                    </div>

                </div>

            </div >
            <div id="rightPane" className="col-xs-12 col-sm-9" >
                <div className="showleftPane d-block d-sm-none">
                    <span className="fa fa-caret-square-o-right"></span>
                </div>
                <div className="header">
                    <b>Design Question 1</b>
                </div>

                <div className="questionDetails">
                    <div className="row">
                        <div className="col-sm-2">
                            <label >Question</label>
                        </div>
                        <div className="col-sm-10">
                            <input type="text"></input>
                        </div>

                    </div>
                    <div className="row fileUpload">
                        <div className="col-12 text-center">
                            <label className="btn btn-primary btn-file">Add Image</label>
                        </div>
                    </div>

                </div>
                <div className="questionOptions">
                    <div className="row">
                        <div className="col-sm-2">
                            <label >Option 1</label>
                        </div>
                        <div className="col-sm-10">
                            <input type="text"></input>
                        </div>

                    </div>
                    <div className="row options">
                        <div className="col-sm-2">
                            <label >Option 2</label>
                        </div>
                        <div className="col-sm-10">
                            <input type="text"></input>
                        </div>

                    </div>
                </div>
                <div className="buttons">
                    <div className="row">
                        <div className="col-12 text-center">
                            <button className="btn btn-primary">Add</button>
                            <button className="btn btn-primary">Delete</button>
                        </div>
                    </div>

                </div>
            </div >
        </div>;
    }
};

export default Root;