import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import ContactabilityInfo from "./ContactabilityInfo";

import {
    setTranslations,
    setDefaultLanguage,
    setLanguageCookie,
    setLanguage,
    translate,
} from 'react-switch-lang';
import en from './translation/en';
import fr from './translation/fr';

import "./style.css";
import NavBarSteps from "./NavBatSteps";

const steps = [
    { id: "personal" ,key : 0},
    { id: "address" ,key : 1},
    { id: "contactability",key : 2}
];

const defaultData = {
    firstName: null,
    lastName: null,
    title: null,
    country: null,
    city: null,
    street: null,
    zip: null,
    email: null,
    phone: null,
    option:null
};

setTranslations({ en, fr });
setDefaultLanguage('en');

const FormApp = (props) => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    const handleSetLanguage = (key) => () => {
        setLanguage(key);
    };
    const { t } = props;
    const propsToPass= { formData, setForm, navigation,t };


    const componentMap= {
        personal: <PersonalInfo {...propsToPass}/>,
        address: <AddressInfo {...propsToPass}/>,
        contactability : <ContactabilityInfo {...propsToPass}/>
    };
    const renderApp = () => {
        return componentMap[id];
    }

    return (
        <>
            <button type="button" onClick={handleSetLanguage('fr')}>
                Switch language
            </button>
            <NavBarSteps step={id} steps={steps} t={t}/>
            { renderApp() }
        </>
    )
};

export default translate(FormApp);
