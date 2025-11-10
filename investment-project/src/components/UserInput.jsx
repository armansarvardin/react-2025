
export default function UserInput({userInput, setUserInput}) {

    function handleChange(inputType, value) {
        setUserInput((prevValue) => {
            return {
                ...prevValue,
                [inputType]: value,
            };
        });
    }
    return <section id="user-input">
        <form>
            <div className="input-group">
            <p>
                    <label >Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} onChange={(event) =>
                        handleChange("initialInvestment", event.target.value)
                    }/>
                </p>
                <p>
                    <label >Duration</label>
                    <input type="number" value={userInput.duration} onChange={(event) => 
                        handleChange("duration", event.target.value)
                    }/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label >Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} onChange={(event) => 
                        handleChange("expectedReturn", event.target.value)
                    }/>
                </p>
                <p>
                    <label >Annual Investment</label>
                    <input type="number" value={userInput.annualInvestment} onChange={(event) => 
                        handleChange("annualInvestment", event.target.value)
                    }/>
                </p>
            </div>
        </form>
    </section>
}