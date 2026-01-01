import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TestTemplate from "@/pages/Tests/TestTemplateComponent/TestTemplate.jsx";

function DynamicTopicTest() {
    const { topic } = useParams();

    const getFileName = (param) => {
        if (!param) return '';
        const withoutTest = param.replace('-test', '');
        return withoutTest.replace(/-/g, '_');
    };

    const fileName = getFileName(topic);
    const displayName = topic ? topic.replace('-test', '') : '';

    const [testData, setTestData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadTest() {
            try {
                if (!fileName) {
                    throw new Error('No topic specified');
                }

                console.log(`Loading topic test: ${fileName}.json`);

                const response = await fetch(`/tests/by-topic/${fileName}.json`);

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error(`File not found: ${fileName}.json`);
                    }
                    throw new Error(`Server error: ${response.status}`);
                }

                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new Error('Server returned non-JSON response (probably HTML 404 page)');
                }

                const data = await response.json();
                setTestData(data);
            } catch (err) {
                console.error(`Failed to load topic test for ${fileName}:`, err);
                setError(`Test for topic "${displayName}" not found. Error: ${err.message}`);
            } finally {
                setLoading(false);
            }
        }

        loadTest();
    }, [topic, fileName, displayName]);

    if (loading) {
        return <div className="text-center p-5">Loading {displayName} test...</div>;
    }

    if (error) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Error Loading Test!</h4>
                    <p>{error}</p>
                    <p className="mt-2">
                        Please make sure the file exists at: <code>public/tests/by-topic/{fileName}.json</code>
                    </p>
                    <hr />
                    <p className="mb-0">
                        <strong>Check if JSON file is accessible</strong><br />
                        URL Parameter: {topic}<br />
                        File name: {fileName}.json<br />
                        Expected path: /tests/by-topic/{fileName}.json
                    </p>
                </div>
            </div>
        );
    }

    if (!testData) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-warning" role="alert">
                    No test data available for topic {displayName}
                </div>
            </div>
        );
    }

    return (
        <TestTemplate
            testName={testData.testInfo?.name || `${displayName} Test`}
            questions={testData.questions}
            testInfo={testData.testInfo}
        />
    );
}

export default DynamicTopicTest;