import React from "react";

const mapStep={"personal": 0, 'address':1, 'contactability': 2};


const NavBarSteps = ({step, steps, t}) => {
     return (
         <div className="container">
        <div id="stepProgressBar">
            {
                steps.map((currentStep, key) => {
                    console.log(mapStep[currentStep.id], mapStep[step]);
                    return  <div className="step">
                        <p className="step-text">{t('formData.' + currentStep.id)}</p>
                        <div className={mapStep[currentStep.id] <= mapStep[step]  ? 'bullet completed' : 'bullet'}>{key + 1}</div>
                    </div>
                })
            }
        </div>
    </div>)
};

export default NavBarSteps;
