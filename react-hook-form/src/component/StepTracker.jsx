const StepTracker = ({ steps, currentStep }) => {
  return (
    <div className="step-tracker">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-item ${currentStep === index ? "active" : ""} ${
            currentStep > index ? "done" : ""
          }`}
        >
          <div className="step-number">{index + 1}</div>
          <div className="step-label">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default StepTracker;
