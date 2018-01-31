import React, { Component } from 'react';
import QuestionList from "./questionListComponent";
import QuestionDesign from "./questionDesignComponent.js";
import QuestionHelper from "./questionHelper";

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = QuestionHelper.getAll();
    }

    render() {
        return <div className="row" >
            <QuestionList rootComponent = {this} state = { this.state } 
            addQuestion = { this.addQuestion } />
            <QuestionDesign rootComponent = {this} state = { this.state } />
        </div>;
    }

    addQuestion(){
        let list = this.state.questionList.slice();
        let length = list.length + 1;
        list = list.concat({
            Id: length,
            Question: "New Question " + length + " ?",
            Options: [{ Id: 1, Value: "" }, { Id: 2, Value: "" }]
        });

        let currentState = {
            questionList: list,
            currentIndex: length - 1
        }

        this.setState(currentState);
    }

    selectQuestion(index){
        this.setState({currentIndex: index});
        this.setState({questionDeleteMode: false});
        this.setState({optionDeleteMode: false});
    }

    updateQuestion(e) {
        let list = this.state.questionList.slice();
        let index = this.state.currentIndex;
        list[index].Question = e.target.value;
       
        this.setState({questionList: list});
        //QuestionList.updateList(currentState);
    }

    addNewOption() {
        let list = this.state.questionList.slice();
        let currentList = list[this.state.currentIndex];
        currentList.Options.push({ Id: currentList.Options.length + 1, Value: "" });
        
        this.setState({questionList: list});
        //QuestionList.updateList(currentState);
    }

    updateOption(optionIndex, e) {
        let list = this.state.questionList.slice();
        let currentList = list[this.state.currentIndex]; 
        currentList.Options[optionIndex].Value = e.target.value;
       
        this.setState({questionList: list});
        //QuestionList.updateList(currentState);
    }

    showLeftPaneForMobile(){
        this.setState({showLeftPaneForMobile: true});
    }

    showRightPaneForMobile(){
        this.setState({showLeftPaneForMobile: false});
    }

    enableDeleteQuestion(){
        this.setState({questionDeleteMode: true});
    }

    deleteQuestion(index){
        let list = this.state.questionList.slice();
        let currentIndex = this.state.currentIndex;
        list.splice(index, 1);
        this.setState({currentIndex: currentIndex == 0 ? 0 : currentIndex-1});
        this.setState({questionList: list});
    }

    enableDeleteOption(){
        this.setState({optionDeleteMode: true});
    }

    deleteOption(index){
        let list = this.state.questionList.slice();
        let currentList = list[this.state.currentIndex]; 
        currentList.Options.splice(index, 1);
        this.setState({questionList: list});
    }

    enableImageUpload(){
        let fileUploadState = this.state.fileUploadState;
        fileUploadState = fileUploadState ? fileUploadState + 1 : 1;
        this.setState({enableImageUpload: true});
        this.setState({fileUploadState: fileUploadState});
    }

    uploadFile(e) {
        let list = this.state.questionList;
        let index = this.state.currentIndex;

        let img = new Image();
        let reader = new FileReader();
        reader.onload = (e) => {
            img.onload = (e) => {
                let canvas = document.createElement('canvas');
                let maxHeight = 1280;
                let maxWidth = 960;
                let actualHeight = img.height;
                let actualWidth = img.width;
                let imgRatio = actualWidth / actualHeight;
                let maxRatio = maxWidth / maxHeight;
                if (actualHeight > maxHeight || actualWidth > maxWidth) {
                    if (imgRatio < maxRatio) {
                        imgRatio = maxHeight / actualHeight;
                        actualWidth = imgRatio * actualWidth;
                        actualHeight = maxHeight;
                    }
                    else if (imgRatio > maxRatio) {
                        imgRatio = maxWidth / actualWidth;
                        actualHeight = imgRatio * actualHeight;
                        actualWidth = maxWidth;
                    } else {
                        actualHeight = maxHeight;
                        actualWidth = maxWidth;
                    }
                }
                canvas.width = actualWidth;
                canvas.height = actualHeight;
                let ctx = canvas.getContext("2d").drawImage(img, 0, 0, actualWidth, actualHeight);
                list[index].Image = canvas.toDataURL("image/png");
                
                this.setState({questionList: list});
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    deleteImage(){
        let list = this.state.questionList.slice();
        let index = this.state.currentIndex;
        list[index].Image = null;
       
        this.setState({questionList: list});

        let fileUploadState = this.state.fileUploadState;
        fileUploadState = fileUploadState ? fileUploadState + 1 : 1;
        this.setState({fileUploadState: fileUploadState});
    }
};

export default Root;