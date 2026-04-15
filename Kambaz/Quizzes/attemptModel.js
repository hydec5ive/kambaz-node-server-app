import mongoose from "mongoose";
import quizAttemptSchema from "./attemptSchema.js";

const QuizAttemptModel = mongoose.model("QuizAttemptModel", quizAttemptSchema);
export default QuizAttemptModel;