import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TestTemplate from "@/pages/Tests/TestTemplate.jsx";

function DynamicTest() {
    const { level } = useParams(); // level будет "A0-test", "A1-test" и т.д.

    // Извлекаем только буквенно-цифровую часть (A0, A1 и т.д.)
    const levelCode = level ? level.replace('-test', '') : '';

    const [testData, setTestData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadTest() {
            try {
                console.log('Full level param:', level);
                console.log('Extracted level code:', levelCode);
                console.log('Fetching from:', `http://localhost:5173/tests/by-level/${levelCode}.json`);

                const response = await fetch(`http://localhost:5173/public/tests/by-level/${levelCode}.json`);

                if (!response.ok) {
                    throw new Error(`Test not found for level ${levelCode}`);
                }
                
                const data = await response.json();
                setTestData(data);
            } catch (err) {
                console.error(`Failed to load test for level ${levelCode}:`, err);
                setError(`Test for level ${levelCode} not found or failed to load`);
            } finally {
                setLoading(false);
            }
        }

        if (levelCode) {
            loadTest();
        }
    }, [level, levelCode]); // Добавляем levelCode в зависимости

    if (loading) {
        return <div className="text-center p-5">Loading {levelCode} test...</div>;
    }

    if (error) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Error!</h4>
                    <p>{error}</p>
                    <p className="mt-2">Tried to load: /tests/by-level/{levelCode}.json</p>
                </div>
            </div>
        );
    }

    if (!testData) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-warning" role="alert">
                    No test data available for level {levelCode}
                </div>
            </div>
        );
    }

    return (
        <TestTemplate
            testName={testData.testInfo?.name || `${levelCode} Level Test`}
            questions={testData.questions}
            testInfo={testData.testInfo}
        />
    );
}

export default DynamicTest;