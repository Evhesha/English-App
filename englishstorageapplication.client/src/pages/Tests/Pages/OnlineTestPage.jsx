import { useEffect, useMemo, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from "react-i18next";
import axios from "axios";
import { TestListElementForUsers } from "@/Components/Teacher";
import Pagination from "@/Components/Pagination/Pagination.jsx";
import PlsAuthorizeBlock from "@/Components/Auth/PlsAuthorizeBlock.jsx";
import Cookies from "js-cookie";
import "@/pages/lessons/online-list/OnlineLessonsListPage.css";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function OnlineTestPage() {
    const { t } = useTranslation();
    const [tests, setTests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);
    const [filtrationText, setFiltrationText] = useState("");
    const [appliedFiltrationText, setAppliedFiltrationText] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [sortDirection, setSortDirection] = useState("");
    const [authorized, setAuthorized] = useState(false);
    const [author, setAuthor] = useState("");
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            setAuthorized(false);
            setIsLoading(false);
            return;
        }
        setAuthorized(true);
    }, []);

    useEffect(() => {
        if (!authorized) return;

        const fetchTests = async () => {
            try {
                setIsLoading(true);
                const params = {
                    Page: currentPage,
                    PageSize: pageSize,
                    AuthorName: author || undefined,
                    Title: appliedFiltrationText || undefined,
                    OrderBy: sortBy || undefined,
                    Direction: sortDirection || undefined
                };
                const response = await axios.get(`${API_BASE_URL}/api/Tests/params`, { params });

                console.log("Response data:", response.data);

                // Проверяем структуру ответа
                if (response.data && Array.isArray(response.data.tests)) {
                    setTests(response.data.tests);
                    setTotalPages(Math.ceil(response.data.totalCount / pageSize));
                } else if (Array.isArray(response.data)) {
                    setTests(response.data);
                    setTotalPages(Math.ceil(response.data.length / pageSize));
                } else {
                    setTests([]);
                    setTotalPages(1);
                }

                setHasError(false);
            } catch (error) {
                console.error("Ошибка при получении тестов:", error);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTests();
    }, [authorized, currentPage, pageSize, author, appliedFiltrationText, sortBy, sortDirection]);

    const handleSearch = () => {
        setAppliedFiltrationText(filtrationText);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setFiltrationText("");
        setAppliedFiltrationText("");
        setCurrentPage(1);
    };

    const handleSortByChange = (field) => {
        setSortBy(field);
        setCurrentPage(1);
    };

    const handleSortDirectionChange = (direction) => {
        setSortDirection(direction);
        setCurrentPage(1);
    };

    if (!authorized) {
        return <PlsAuthorizeBlock />;
    }

    return (
        <div className="lessons-container">
            <h1 className="text-center main-title mb-5">
                {t("online-tests.online-tests", t("sidebar.online-tests"))}
            </h1>
            <div className="filtration-section mb-4">
                <h3>{t("online-tests.filters-sorting", "Filters and sorting")}</h3>
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
                            <label htmlFor="filterInput">{t("online-tests.filter-title", "Filter by title")}</label>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="filterInput"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <label htmlFor="filterInput">{t("online-lessons.author")}</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex gap-2 h-100">
                            <button
                                className="btn btn-primary flex-grow-1"
                                onClick={handleSearch}
                            >
                                {t("online-tests.find-tests", "Find tests")}
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
                                <h6 className="mb-0">{t("online-tests.sort-by", "Sort by")}</h6>
                            </div>
                            <div className="card-body">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sortBy"
                                        id="sortByPassCount"
                                        checked={sortBy === "PassCount"}
                                        onChange={() => handleSortByChange("PassCount")}
                                    />
                                    <label className="form-check-label" htmlFor="sortByPassCount">
                                        {t("online-tests.pass-count", "Pass count")}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sortBy"
                                        id="sortByUpdatedDate"
                                        checked={sortBy === "LastUpdateAt"}
                                        onChange={() => handleSortByChange("LastUpdateAt")}
                                    />
                                    <label className="form-check-label" htmlFor="sortByUpdatedDate">
                                        {t("online-tests.updated-date", "Updated date")}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h6 className="mb-0">{t("online-tests.sort-direction", "Sort direction")}</h6>
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
                                        {t("online-tests.ascending", "Ascending")}
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
                                        {t("online-tests.descending", "Descending")}
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
                    Failed to load tests. Please try again later.
                </div>
            ) : tests.length === 0 ? (
                <div className="alert alert-info text-center">
                    {t("online-tests.empty", "No tests found.")}
                </div>
            ) : (
                <>
                    <ul className="lessons-list list-group">
                        {tests.map((test) => (
                            <TestListElementForUsers
                                key={test.id}
                                id={test.id}
                                name={test.name}
                                author={test.authorName}
                                description={test.description}
                                passCount={test.passCount}
                                createdDate={test.lastUpdateAt}
                                to={`/test/online/${test.id}`}
                            />
                        ))}
                    </ul>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                    <div className="text-center text-muted mt-2">
                        Page {currentPage} of {totalPages}
                    </div>
                </>
            )}
        </div>
    );
}

export default OnlineTestPage;
