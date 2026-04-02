import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TestTemplate from "@/pages/tests/template/TestTemplate.jsx";
import PlsAuthorizeBlock from "@/Components/Auth/PlsAuthorizeBlock.jsx";
import Cookies from "js-cookie";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function DynamicOnlineTest() {
    const { id } = useParams();
    const [testName, setTestName] = useState("");
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const authorized = Boolean(Cookies.get("token"));

    useEffect(() => {
        if (!id) {
            setError("Test id is missing.");
            setIsLoading(false);
            return;
        }

        const loadTest = async () => {
            try {
                setIsLoading(true);
                setError("");

                const [testsResponse, questionsResponse] = await Promise.all([
                    axios.get(`${API_BASE_URL}/api/Tests`),
                    axios.get(`${API_BASE_URL}/api/TestQuestion/${id}`)
                ]);

                const tests = Array.isArray(testsResponse.data) ? testsResponse.data : [];
                const test = tests.find((item) => item.id === id);
                setTestName(test?.name || "Online Test");

                const mappedQuestions = (questionsResponse.data || []).map((question, index) => ({
                    id: index + 1,
                    type: question.type,
                    question: question.question,
                    options: Array.isArray(question.options) ? question.options : [],
                    correctAnswer: question.correctAnswer
                }));

                setQuestions(mappedQuestions);
            } catch (err) {
                console.error("Failed to load online test:", err);
                setError("Failed to load test. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        loadTest();
    }, [id]);

    if (!authorized) {
        return <PlsAuthorizeBlock />;
    }

    if (isLoading) {
        return <div className="text-center p-5">Loading test...</div>;
    }

    if (error) {
        return (
            <div className="alert alert-danger text-center" role="alert">
                {error}
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="alert alert-warning text-center" role="alert">
                No questions available for this test.
            </div>
        );
    }

    return (
        <TestTemplate
            testId={id}
            testName={testName || "Online Test"}
            questions={questions}
        />
    );
}

export default DynamicOnlineTest;
