import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './OnlineLessonsListPage.css';
import { useTranslation } from "react-i18next";
import axios from "axios";
import LessonListElementForUsers from "@/Components/TeacherPageComp/LessonListElementForUsers.jsx";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function OnlineLessonsListPage() {
    const [lessons, setLessons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize] = useState(10);
    const {t} = useTranslation();

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                setIsLoading(true);
                const url = `${API_BASE_URL}/api/Lessons/lessons/params`;
                console.log("Загружаем уроки по URL:", url);

                const response = await axios.get(url, {
                    params: {
                        //OrderBy: lessons,
                        //Direction: direction
                        Page: currentPage,
                        PageSize: pageSize
                    }
                });

                console.log("Ответ получен:", response);

                setLessons(response.data.lessons);
                setTotalPages(Math.ceil(response.data.totalCount / pageSize));

                setIsLoading(false);
                setHasError(false);
            } catch (error) {
                console.error("Полная ошибка при получении уроков:", {
                    message: error.message,
                    status: error.response?.status,
                    data: error.response?.data,
                    url: error.config?.url
                });
                setIsLoading(false);
                setHasError(true);
            }
        };

        fetchLessons();
    }, [currentPage, pageSize]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pages = [];
        const maxVisiblePages = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        pages.push(
            <li key="prev" className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &laquo;
                </button>
            </li>
        );
        
        if (startPage > 1) {
            pages.push(
                <li key={1} className="page-item">
                    <button className="page-link" onClick={() => handlePageChange(1)}>1</button>
                </li>
            );
            if (startPage > 2) {
                pages.push(<li key="dots1" className="page-item disabled"><span className="page-link">...</span></li>);
            }
        }
        
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(i)}>
                        {i}
                    </button>
                </li>
            );
        }
        
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(<li key="dots2" className="page-item disabled"><span className="page-link">...</span></li>);
            }
            pages.push(
                <li key={totalPages} className="page-item">
                    <button className="page-link" onClick={() => handlePageChange(totalPages)}>
                        {totalPages}
                    </button>
                </li>
            );
        }
        
        pages.push(
            <li key="next" className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &raquo;
                </button>
            </li>
        );

        return pages;
    };

    return (
        <div className="lessons-container">
            <h1 className="text-center main-title mb-5">Online lessons</h1>

            {isLoading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : hasError ? (
                <div className="alert alert-danger text-center">
                    Failed to load lessons. Please try again later.
                </div>
            ) : (
                <>
                    <div className="lessons-list">
                        {lessons.map((lesson, index) => (
                            <LessonListElementForUsers
                                key={lesson.id || index}
                                to={lesson.path}
                                id={lesson.id}
                                author={lesson.userId}
                                name={lesson.title}
                                watchCount={lesson.watchCount}
                            />
                        ))}
                    </div>

                    {/* Пагинация */}
                    {totalPages > 1 && (
                        <nav aria-label="Lesson pagination" className="mt-4">
                            <ul className="pagination justify-content-center">
                                {renderPagination()}
                            </ul>
                        </nav>
                    )}

                    {/* Информация о текущей странице */}
                    <div className="text-center text-muted mt-2">
                        Page {currentPage} of {totalPages}
                    </div>
                </>
            )}
        </div>
    );
}

export default OnlineLessonsListPage;