import "../styles.css";
import TestCardLink from "../TestTemplateComponent/TestCardLink.jsx";
import {useEffect, useState, useRef} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const testConfig = [
    {
        id: "a0b1c2d3-e4f5-6789-abcd-ef0123456789",
        level: "A0",
        name: "A0 Beginner Level Test",
        path: "/A0-test",
        icon: "🔹",
        description: "Basic vocabulary and simple sentences for absolute beginners",
    },
    {
        id: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
        level: "A1",
        name: "A1 Elementary Level Test",
        path: "/A1-test",
        icon: "🔸",
        description: "Everyday expressions and basic phrases",
    },
    {
        id: "a3b4c5d6-e7f8-9012-abcd-ef0123456789",
        level: "A2",
        name: "A2 Pre-Intermediate Test",
        path: "/A2-test",
        icon: "🔻",
        description: "Simple direct communication on familiar topics",
    },
    {
        id: "b1c2d3e4-f5f6-7890-abcd-ef0123456789",
        level: "B1",
        name: "B1 Intermediate Test",
        path: "/B1-test",
        icon: "🔺",
        description: "Dealing with most situations while traveling",
    },
    {
        id: "b2c3d4e5-f6f7-8901-abcd-ef0123456789",
        level: "B2",
        name: "B2 Upper-Intermediate Test",
        path: "/B2-test",
        icon: "🔲",
        description: "Main ideas of complex text on both concrete and abstract topics",
    },
    {
        id: "c1d2e3f4-f5f6-7890-abcd-ef0123456789",
        level: "C1",
        name: "C1 Advanced Test",
        path: "/C1-test",
        icon: "🔳",
        description: "Express ideas fluently and spontaneously",
    },
    {
        id: "c2d3e4f5-f6f7-9012-abcd-ef0123456789",
        level: "C2",
        name: "C2 Proficiency Test",
        path: "/C2-test",
        icon: "🔴",
        description: "Understand virtually everything read or heard",
    }
];

function ByLevelTestPage() {
    const ids = testConfig.map(item => item.id);
    const [results, setResults] = useState([]);
    const effectRan = useRef(null);

    useEffect(() => {
        if (effectRan.current === true) {
            return;
        }
        const fetchData = async () => {
            const token = Cookies.get("token");
            if (!token) return;
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.userId;

                const response = await axios.post(`${API_BASE_URL}/api/UsersStudyResults/users/${userId}/tests-results`,
                    ids);
                console.log(response.data)
                setResults(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
        return () => {
            effectRan.current = true;
        };
    }, []);

    const getTestResult = (testId) => {
        const result = results.find(result => result.testId === testId);
        return result ? result.percentResult : null;
    };

    return (
        <div className="lessons-container">
            <h1 className="text-center main-title mb-5">Language level tests</h1>
            <div className="lessons-grid">
                {testConfig.map((test) => {
                    const testResult = getTestResult(test.id);
                    return (
                        <TestCardLink
                            key={test.id}
                            test={test}
                            testResult={testResult}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ByLevelTestPage;