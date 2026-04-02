import { CreateLessonPopUp } from "@/Components/Modals";

function CreateLesson({onCreate}) {
    return (
        <div className="create-lesson-card">
            <div className="create-lesson-right-content">
                <div className="create-lesson-actions">
                    <CreateLessonPopUp onPost={onCreate} />
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default CreateLesson;
