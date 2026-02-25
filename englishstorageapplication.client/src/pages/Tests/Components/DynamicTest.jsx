import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TestTemplate from "@/pages/Tests/TestTemplateComponent/TestTemplate.jsx";

function DynamicTest() {
    const { level } = useParams();

    const levelCode = level ? level.replace('-test', '') : '';

    const [testData, setTestData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadTest() {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}tests/by-level/${levelCode}.json`);

                if (!response.ok) {
                    throw new Error(`Test not found for level ${levelCode} (Status: ${response.status})`);
                }

                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    const text = await response.text();
                    console.error('Received non-JSON response:', text.substring(0, 200));
                    throw new Error('Server returned non-JSON response (HTML page)');
                }

                const data = await response.json();
                console.log('Test data loaded:', data);
                setTestData(data);
            } catch (err) {
                console.error(`Failed to load test for level ${levelCode}:`, err);
                setError(`Test for level ${levelCode} not found or failed to load. Error: ${err.message}`);
            } finally {
                setLoading(false);
            }
        }

        if (levelCode) {
            loadTest();
        }
    }, [level, levelCode]);

    if (loading) {
        return <div className="text-center p-5">Loading {levelCode} test...</div>;
    }

    if (error) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Error Loading Test!</h4>
                    <p>{error}</p>
                    <p className="mt-2">Tried to load: {import.meta.env.BASE_URL}tests/by-level/{levelCode}.json</p>
                    <hr />
                    <p className="mb-0">
                        <strong>Debug info:</strong><br />
                        Check if file exists: <code>public/tests/by-level/{levelCode}.json</code><br />
                        Current URL: {window.location.href}
                    </p>
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
            testId={testData.testInfo.id}
            testName={testData.testInfo?.name || `${levelCode} Level Test`}
            questions={testData.questions}
            testInfo={testData.testInfo}
        />
    );
}

export default DynamicTest;
