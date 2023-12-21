import { useState } from "react";
import styles from "./Form.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (e) => {
    e.preventDefault();

    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    //...
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    // the value of input here comes from the value of id in the input elem not the htmlFor
    console.log(input, value);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]} // since there is a dash in between the current-savings key, we have to use the square bracket notation to access the value
            onChange={(e) =>
              inputChangeHandler("current-savings", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(e) =>
              inputChangeHandler("yearly-contribution", e.target.value)
            }
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(e) =>
              inputChangeHandler("expected-return", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration} // since the duration key in the userInput object does not contain dash between the words, so dot notation can be used to access the value
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default Form;
