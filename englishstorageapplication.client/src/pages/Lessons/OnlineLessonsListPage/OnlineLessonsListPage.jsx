import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './OnlineLessonsListPage.css';
import { useTranslation } from "react-i18next";
import { useDarkMode } from "@/hooks/useDarkMode.js";
import axios from "axios";
import LessonListElementForUsers from "@/Components/TeacherPageComp/LessonListElementForUsers.jsx";
import Pagination from "../../../Components/Pagination/Pagination.jsx";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function OnlineLessonsListPage() {
    const [lessons, setLessons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize] = useState(10);
    const {t} = useTranslation();
    const [filtrationText, setFiltrationText] = useState("");
    const darkMode = useDarkMode();
    
    const [sortBy, setSortBy] = useState(""); 
    const [sortDirection, setSortDirection] = useState(""); 
    
    const fetchLessons = async () => {
        try {
            setIsLoading(true);
            const url = `${API_BASE_URL}/api/Lessons/lessons/params`;

            const response = await axios.get(url, {
                params: {
                    Page: currentPage,
                    PageSize: pageSize,
                    Title: filtrationText,
                    OrderBy: sortBy || undefined,
                    Direction: sortDirection || undefined
                }
            });

            console.log("Ответ получен:", response);

            setLessons(response.data.lessons);
            setTotalPages(Math.ceil(response.data.totalCount / pageSize));

            setIsLoading(false);
            setHasError(false);
        } catch (error) {
            console.error("Полная ошибка при получении уроков:", error);
            setIsLoading(false);
            setHasError(true);
        }
    };
    
    useEffect(() => {
        

        fetchLessons();
    }, [currentPage, pageSize, sortBy, sortDirection]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    
    const handleSortByChange = (field) => {
        setSortBy(field);
        setCurrentPage(1);
    };

    const handleSortDirectionChange = (direction) => {
        setSortDirection(direction);
        setCurrentPage(1);
    };
    
    const handleResetSort = () => {
        setSortBy("");
        setSortDirection("");
        setCurrentPage(1);
    };

    return (
        <div className="lessons-container">
            <h1 className="text-center main-title mb-5">Online lessons</h1>
            
            <div className="filtration-section mb-4">
                <h3>Filters and Sorting</h3>
                
                <div className="row mb-3">
                    <div className="col-md-8">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="filterInput"
                                placeholder="Filter by title"
                                value={filtrationText}
                                onChange={(e) => setFiltrationText(e.target.value)}
                            />
                            <label htmlFor="filterInput">Filter by title</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary w-100 h-100" onClick={fetchLessons}>
                            Find lessons
                        </button>
                    </div>
                </div>
                
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h6 className="mb-0">Sort By</h6>
                            </div>
                            <div className="card-body">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sortBy"
                                        id="sortByWatchCount"
                                        checked={sortBy === "WatchCount"}
                                        onChange={() => handleSortByChange("WatchCount")}
                                    />
                                    <label className="form-check-label" htmlFor="sortByWatchCount">
                                        Watch Count
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sortBy"
                                        id="sortByCreatedDate"
                                        checked={sortBy === "CreatedDate"}
                                        onChange={() => handleSortByChange("CreatedDate")}
                                    />
                                    <label className="form-check-label" htmlFor="sortByCreatedDate">
                                        Created Date
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sortBy"
                                        id="sortByNone"
                                        checked={sortBy === ""}
                                        onChange={() => handleSortByChange("")}
                                    />
                                    <label className="form-check-label" htmlFor="sortByNone">
                                        No Sorting
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Направление сортировки */}
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h6 className="mb-0">Sort Direction</h6>
                            </div>
                            <div className="card-body">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sortDirection"
                                        id="sortAscending"
                                        checked={sortDirection === "ascending"}
                                        onChange={() => handleSortDirectionChange("ascending")}
                                        disabled={!sortBy} // Отключаем если не выбран field
                                    />
                                    <label className="form-check-label" htmlFor="sortAscending">
                                        Ascending
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sortDirection"
                                        id="sortDescending"
                                        checked={sortDirection === "descending"}
                                        onChange={() => handleSortDirectionChange("descending")}
                                        disabled={!sortBy} // Отключаем если не выбран field
                                    />
                                    <label className="form-check-label" htmlFor="sortDescending">
                                        Descending
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sortDirection"
                                        id="sortDirectionNone"
                                        checked={sortDirection === ""}
                                        onChange={() => handleSortDirectionChange("")}
                                    />
                                    <label className="form-check-label" htmlFor="sortDirectionNone">
                                        Default
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {(sortBy || sortDirection) && (
                    <div className="row">
                        <div className="col-12">
                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={handleResetSort}
                            >
                                Reset Sorting
                            </button>
                        </div>
                    </div>
                )}
            </div>
            
            {(sortBy || sortDirection) && (
                <div className="alert alert-info">
                    <strong>Active Sorting:</strong>
                    {sortBy && ` By ${sortBy === "watchCount" ? "Watch Count" : "Created Date"}`}
                    {sortDirection && ` (${sortDirection})`}
                </div>
            )}

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
                                createdDate={lesson.createdDate}
                            />
                        ))}
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />

                    <div className="text-center text-muted mt-2">
                        Page {currentPage} of {totalPages}
                    </div>
                </>
            )}
        </div>
    );
}

export default OnlineLessonsListPage;