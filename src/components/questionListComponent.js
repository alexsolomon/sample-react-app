import React, { Component } from 'react';

class QuestionList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div id="leftPane"
            className={(this.props.state.showLeftPaneForMobile ? 'col-sm-3' : 'col-sm-3 d-none d-sm-block')}>
            <div className="showrightPane d-block d-sm-none" >
                <span onClick={this.props.rootComponent.showRightPaneForMobile.bind(this.props.rootComponent)} className="fa fa-caret-square-o-left"></span>
            </div>
            {
                this.props.state.questionList.length == 0 &&
                <h4> There are no questions added yet. </h4>

            }

            {
                this.props.state.questionList.length > 0 &&
                <div>
                    <div className="header">
                        <b>Select your questions</b>
                    </div>

                    <div className="questionlist">
                        <ol>
                            {
                                this.props.state.questionList.map((item, index) => {
                                    return <li>
                                        <span className={(this.props.state.currentIndex == index ? 'selectedQuestion' : '')}
                                            onClick={this.props.rootComponent.selectQuestion.bind(this.props.rootComponent, index)}>{item.Question}
                                        </span>
                                        &nbsp;&nbsp;&nbsp;
                                        {
                                            this.props.state.questionDeleteMode &&
                                            <span onClick={this.props.rootComponent.deleteQuestion.bind(this.props.rootComponent, index)} className="fa fa-times" style={{cursor:'pointer'}}></span>
                                        }
                                    </li>
                                })
                            }

                        </ol>

                    </div>


                </div>
            }

            <div className="buttons">
                <div className="row">
                    <div className="col-12 text-center">
                        <button className="btn btn-primary" onClick={this.props.addQuestion.bind(this.props.rootComponent)}>Add</button>
                        <button className="btn btn-primary" onClick={this.props.rootComponent.enableDeleteQuestion.bind(this.props.rootComponent)}>Delete</button>
                    </div>
                </div>

            </div>
        </div >
    }
};

export default QuestionList;