import { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './OnlineLessonsListPage.css';
import { useTranslation } from "react-i18next";
import { useDarkMode } from "@/hooks/useDarkMode.js";
import axios from "axios";
import LessonListElementForUsers from "@/Components/TeacherPageComp/LessonListElementForUsers.jsx";
import Pagination from "../../../Components/Pagination/Pagination.jsx";
import PlsAuthorizeBlock from "@/Components/Auth/PlsAuthorizeBlock.jsx";
import Cookies from "js-cookie";

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
    const [appliedFiltrationText, setAppliedFiltrationText] = useState("");
    const darkMode = useDarkMode();
    const [authorized, setAuthorized] = useState(false);
    const effectRan = useRef(false);

    const [sortBy, setSortBy] = useState("");
    const [sortDirection, setSortDirection] = useState("");
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const fetchLessons = async (useCache = false) => {
        try {
            setIsLoading(true);
            const token = Cookies.get("token");
            if (token) {
                setAuthorized(true);
            }
            else{
                return;
            }
            const url = useCache
                ? `${API_BASE_URL}/api/Lessons/lessons/params/cache`
                : `${API_BASE_URL}/api/Lessons/lessons/params`;

            const params = {
                Page: currentPage,
                PageSize: pageSize,
                Title: appliedFiltrationText || undefined,
                OrderBy: sortBy || undefined,
                Direction: sortDirection || undefined
            };

            const response = await axios.get(url, { params });
            
            setLessons(response.data.lessons);
            setTotalPages(Math.ceil(response.data.totalCount / pageSize));
            setIsLoading(false);
            setHasError(false);

            if (isFirstLoad) {
                setIsFirstLoad(false);
            }
        } catch (error) {
            console.error("Ошибка при получении уроков:", error);
            setIsLoading(false);
            setHasError(true);
        }
    };

    useEffect(() => {
        if (effectRan.current === true) {
            return;
        }
        fetchLessons(true);
        return () => {
            effectRan.current = true;
        };
    }, []);

    useEffect(() => {
        if (!isFirstLoad) {
            fetchLessons(false);
        }
    }, [currentPage, sortBy, sortDirection, appliedFiltrationText]);

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

    const handleSearch = () => {
        setAppliedFiltrationText(filtrationText);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setFiltrationText("");
        setAppliedFiltrationText("");
        setCurrentPage(1);
    };

    if (!authorized) {
        return <PlsAuthorizeBlock />;
    }

    return (
        <div className="lessons-container">
            <h1 className="text-center main-title mb-5">{t("online-lessons.online-lessons")}</h1>
            <div className="filtration-section mb-4">
                <h3>{t("online-lessons.filters-sorting")}</h3>
                <div className="row mb-3">
                    <div className="col-md-8">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="filterInput"
                                value={filtrationText}
                                onChange={(e) => setFiltrationText(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <label htmlFor="filterInput">{t("online-lessons.filter-title")}</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex gap-2 h-100">
                            <button
                                className="btn btn-primary flex-grow-1"
                                onClick={handleSearch}
                            >
                                {t("online-lessons.find-lessons")}
                            </button>
                            {appliedFiltrationText && (
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={handleClearSearch}
                                    title="Clear search"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h6 className="mb-0">{t("online-lessons.sort-by")}</h6>
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
                                        {t("online-lessons.watching-count")}
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
                                        {t("online-lessons.created-date")}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h6 className="mb-0">{t("online-lessons.sort-direction")}</h6>
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
                                        disabled={!sortBy}
                                    />
                                    <label className="form-check-label" htmlFor="sortAscending">
                                        {t("online-lessons.ascending")}
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
                                        disabled={!sortBy}
                                    />
                                    <label className="form-check-label" htmlFor="sortDescending">
                                        {t("online-lessons.descending")}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                author={lesson.userName}
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