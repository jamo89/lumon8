import "./App.css";
import { useState } from "react";
import App from "./App";

function FeedbackForm({onSubmit}) {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const isDisabled = Number(score) < 5 && comment.length <= 10;

    const textAreaPlaceholder = isDisabled
        ? "what you mean you had a bad experience? explain MFer"
        : "Optional feedback";

        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit({score, comment})
        };

       //this is the final version of the feedback form.
        //if the score is less than or equal to 5, the comment is mandatory

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback form</h2>
                    <div className="Field">
                        <label aria-labelledby={score}>Score: {score} 🌟</label>
                        <input
                            value={score}
                            onChange={(e) => {
                                setScore(e.target.value)
                        }}
                            type="range"
                            min="0"
                            max="10"
                        />
                    </div>
                    <div className="Field">
                        <label>Comment:</label>
                        <textarea
                            placeholder={textAreaPlaceholder}
                            name="comment"
                            value={comment}
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                        />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default FeedbackForm;