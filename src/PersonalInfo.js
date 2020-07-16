import React, {useState} from "react";
import validate from "./Validate"
import GenericItem from "./GenericItem";


const usePersonalInfo = ({ setForm, formData, navigation, t }) => {
    const { firstName, lastName, title} = formData;
    const { next } = navigation;

    return (
        <div>
            <div>
                <GenericItem
                    placeholder={t('formData.firstName')}
                    name="firstName"
                    value={firstName}
                    onChange={setForm}
                />
                {validate(formData).firstname &&  formData.firstName !== null && <p className="error">{validate(formData).firstname}</p>}
            </div>
            <div>
                <GenericItem
                    placeholder={t('formData.lastName')}
                    name="lastName"
                    value={lastName}
                    onChange={setForm}/>
                {validate(formData).lastname &&  formData.lastName !== null && <p className="error ">{validate(formData).lastname}</p>}
            </div>
            <GenericItem
                placeholder={t('formData.title')}
                name="title"
                value={title}
                onChange={setForm}
            />
            <div>
                <button onClick={next} disabled={validate(formData).firstname || validate(formData).lastname }>{t('static.next')}</button>
            </div>
        </div>
    );


}
export default usePersonalInfo;
