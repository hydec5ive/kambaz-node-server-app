import QuizDao from "./dao.js";

export default function QuizRoutes(app) {
  const dao = QuizDao();

  const findQuizzesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await dao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  };

  const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.findQuizById(quizId);
    res.json(quiz);
  };

  const createQuiz = async (req, res) => {
    const { courseId } = req.params;
    const quiz = { ...req.body, course: courseId };
    const newQuiz = await dao.createQuiz(quiz);
    res.json(newQuiz);
  };

  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    await dao.updateQuiz(quizId, quizUpdates);
    res.sendStatus(200);
  };

  const deleteQuiz = async (req, res) => {
    const { quizId } = req.params;
    await dao.deleteQuiz(quizId);
    res.sendStatus(200);
  };

  const publishQuiz = async (req, res) => {
    const { quizId } = req.params;
    const { published } = req.body;
    await dao.updateQuiz(quizId, { published });
    res.sendStatus(200);
  };

  const getQuizAttempts = async (req, res) => {
    const { quizId, userId } = req.params;
    const attempts = await dao.getQuizAttempts(quizId, userId);
    res.json(attempts);
  };

  const submitQuizAttempt = async (req, res) => {
    const { quizId } = req.params;
    const attempt = { ...req.body, quiz: quizId };
    const newAttempt = await dao.submitQuizAttempt(attempt);
    res.json(newAttempt);
  };

  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
  app.put("/api/quizzes/:quizId/publish", publishQuiz);
  app.get("/api/quizzes/:quizId/attempts/:userId", getQuizAttempts);
  app.post("/api/quizzes/:quizId/attempts", submitQuizAttempt);
}