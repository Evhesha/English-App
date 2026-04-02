import { CreateTestPopUp } from "@/Components/Modals";

function CreateTest() {
    return (
        <div className="create-lesson-card">
            <div className="create-lesson-right-content">
                <div className="create-lesson-actions">
                    <CreateTestPopUp/>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default CreateTest;
