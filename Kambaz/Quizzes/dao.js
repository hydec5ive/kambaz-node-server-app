import QuizModel from "./model.js";

export default function QuizDao() {
  const findQuizzesForCourse = (courseId) => {
    return QuizModel.find({ course: courseId });
  };

  const findQuizById = (quizId) => {
    return QuizModel.findById(quizId);
  };

  const createQuiz = (quiz) => {
    const newQuiz = {
      ...quiz,
      _id: new Date().getTime().toString(),
    };
    return QuizModel.create(newQuiz);
  };

  const updateQuiz = (quizId, quizUpdates) => {
    return QuizModel.updateOne({ _id: quizId }, { $set: quizUpdates });
  };

  const deleteQuiz = (quizId) => {
    return QuizModel.deleteOne({ _id: quizId });
  };

  return {
    findQuizzesForCourse,
    findQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz,
  };
}