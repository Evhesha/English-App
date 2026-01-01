import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TestTemplate from "@/pages/Tests/TestTemplateComponent/TestTemplate.jsx";

function DynamicTimeTest() {
    const { time } = useParams();

    const getFileName = (param) => {
        if (!param) return '';
        const withoutTest = param.replace('-test', '');
        return withoutTest.replace(/-/g, '_');
    };

    const fileName = getFileName(time);

    const [testData, setTestData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadTest() {
            try {
                if (!fileName) {
                    throw new Error('No file name specified');
                }

                const response = await fetch(`/tests/by-time/${fileName}.json`);

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error(`File not found: ${fileName}.json`);
                    }
                    throw new Error(`Server error: ${response.status}`);
                }

                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    const text = await response.text();
                    console.error('Received non-JSON response:', text.substring(0, 200));
                    throw new Error('Server returned non-JSON response');
                }

                const data = await response.json();
                setTestData(data);
            } catch (err) {
                console.error(`Failed to load test for ${fileName}:`, err);
                setError(`Failed to load test. Error: ${err.message}`);
            } finally {
                setLoading(false);
            }
        }

        loadTest();
    }, [time, fileName]);

    if (loading) {
        return <div className="text-center p-5">Loading {time?.replace('-test', '')} test...</div>;
    }

    if (error) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Error Loading Test!</h4>
                    <p>{error}</p>
                    <p className="mt-2">
                        Tried to load file: <code>/tests/by-time/{fileName}.json</code>
                    </p>
                    <hr />
                    <p className="mb-0">
                        <strong>Debug info:</strong><br />
                        URL Parameter: {time}<br />
                        File name: {fileName}<br />
                        Check if file exists in: <code>public/tests/by-time/</code>
                    </p>
                </div>
            </div>
        );
    }

    if (!testData) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-warning" role="alert">
                    No test data available for {time?.replace('-test', '') || 'this test'}
                </div>
            </div>
        );
    }

    return (
        <TestTemplate
            testName={testData.testInfo?.name || `${time?.replace('-test', '')} Test`}
            questions={testData.questions}
            testInfo={testData.testInfo}
        />
    );
}

export default DynamicTimeTest;