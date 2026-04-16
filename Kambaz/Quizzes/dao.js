import QuizModel from "./model.js";
import QuizAttemptModel from "./attemptModel.js";

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

  // Quiz Attempts
  const getQuizAttempts = (quizId, userId) => {
    return QuizAttemptModel.find({ quiz: quizId, user: userId });
  };

  const submitQuizAttempt = (attempt) => {
    const newAttempt = {
      ...attempt,
      _id: new Date().getTime().toString(),
    };
    return QuizAttemptModel.create(newAttempt);
  };

  return {
    findQuizzesForCourse,
    findQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz,
    getQuizAttempts,
    submitQuizAttempt,
  };
}