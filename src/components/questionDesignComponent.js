import React, { Component } from 'react';

class QuestionDesign extends Component {
    render() {
        return <div id="rightPane"  className={(this.props.state.showLeftPaneForMobile ? 'col-xs-12 col-sm-9  d-none d-sm-block' : 'col-xs-12 col-sm-9')}>
            <div className="showleftPane d-block d-sm-none">
                <span onClick={this.props.rootComponent.showLeftPaneForMobile.bind(this.props.rootComponent)} className="fa fa-caret-square-o-right"></span>
            </div>
            
            {
                this.props.state.questionList.length == 0 &&
                <h4> There are no questions added yet. </h4>

            }

            {
                this.props.state.questionList.length > 0 &&
                <div>
                    <div className="header">
                        <b>Design Question {this.props.state.currentIndex + 1}</b>
                    </div>

                    <div className="questionDetails">
                        <div className="row">
                            <div className="col-sm-2">
                                <label >Question</label>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" value={this.props.state.questionList[this.props.state.currentIndex].Question}
                                    onChange={this.props.rootComponent.updateQuestion.bind(this.props.rootComponent)} ></input>
                            </div>
                        </div>
                        <div className="row fileUpload">
                            {
                                this.props.state.questionList[this.props.state.currentIndex].Image &&
                                <div className="col-12 text-center">
                                    <img src={this.props.state.questionList[this.props.state.currentIndex].Image} />
                                </div>
                            }
                        </div>
                        <div className="row fileUpload">
                            {
                                this.props.state.enableImageUpload &&
                                <div className="col-12 text-center">
                                    <input key={this.props.state.fileUploadState} id="imgupload" type="file" accept="image/*" onChange={this.props.rootComponent.uploadFile.bind(this.props.rootComponent)} />
                                </div>
                            }
                        </div>
                        <div className="row fileUpload">
                            {
                                !this.props.state.questionList[this.props.state.currentIndex].Image &&
                                <div className="col-12 text-center">
                                    <label className="btn btn-primary btn-file" onClick={this.props.rootComponent.enableImageUpload.bind(this.props.rootComponent)}>Add Image</label>
                                </div>
                            }
                            {
                                this.props.state.questionList[this.props.state.currentIndex].Image &&
                                <div className="col-12 text-center">
                                    <label className="btn btn-primary btn-file" onClick={this.props.rootComponent.deleteImage.bind(this.props.rootComponent)}>Delete Image</label>
                                </div>
                            }
                        </div>
                       
                    </div>
                    <div className="questionOptions">

                        {
                            this.props.state.questionList[this.props.state.currentIndex].Options.map((item, index) => {
                                return <div className="row options" key={index}>
                                    <div className="col-sm-2">
                                        <label >Option {index + 1}</label>
                                    </div>
                                    <div className="col-sm-10">
                                        <input type="text" value={item.Value}  onChange={this.props.rootComponent.updateOption.bind(this.props.rootComponent, index)}></input>
                                        &nbsp;&nbsp;&nbsp;
                                        {
                                            this.props.state.optionDeleteMode &&
                                            <span onClick={this.props.rootComponent.deleteOption.bind(this.props.rootComponent, index)} className="fa fa-times" style={{cursor:'pointer'}}></span>
                                        }
                                    </div>

                                </div>
                            })
                        }


                    </div>
                    <div className="buttons">
                        <div className="row">
                            <div className="col-12 text-center">
                                <button className="btn btn-primary" onClick={this.props.rootComponent.addNewOption.bind(this.props.rootComponent)}>Add</button>
                                <button className="btn btn-primary" onClick={this.props.rootComponent.enableDeleteOption.bind(this.props.rootComponent)}>Delete</button>
                            </div>
                        </div>

                    </div>
                </div>
            }



        </div >
    }
};

export default QuestionDesign;