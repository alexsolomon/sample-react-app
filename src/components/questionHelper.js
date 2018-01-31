let QuestionHelper = {
    getAll: function() {
        return JSON.parse(localStorage.getItem('questions') || '{"questionList":[], "currentIndex":null}');
    },
    updateList: function(list) {
        localStorage.setItem("questions", JSON.stringify(list));
    }
}

export default QuestionHelper;