export default function UserInput(props) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invesment</label>
          <input
            type="number"
            required
            value={props.userInput.initialInvestment}
            onChange={(event) =>
              props.onChangeInput('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Anual Investment</label>
          <input
            type="number"
            required
            value={props.userInput.annualInvestment}
            onChange={(event) =>
              props.onChangeInput('annualInvestment', event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={props.userInput.expectedReturn}
            onChange={(event) =>
              props.onChangeInput('expectedReturn', event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={props.userInput.duration}
            onChange={(event) =>
              props.onChangeInput('duration', event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
