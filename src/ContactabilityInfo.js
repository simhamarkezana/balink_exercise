import React , { useState } from "react";
import Modal from './Modal';
import axios from 'axios';
import validate from "./Validate"
import GenericItem from "./GenericItem";


const ContactabilityInfo = ({ setForm, formData, navigation ,t }) => {
    const { phone, email,option } = formData;
    const {previous } = navigation;
    const [showModal,setShow] = useState(false);

    const hideModal = () => {
        setShow(false);
    }

    const handleSubmit = () => {
        axios.post('http://localhost:3001/submit',formData,{headers:{"Content-Type": "application/json"	  }})
                .then((res)=>{console.log(res)});
        setShow(true);
    };

    return (
        <div className="form">
            <Modal show={showModal} onClose={hideModal}>
                <p>{t('static.success')}</p>
            </Modal>
            <div>
                <GenericItem
                    placeholder={t('formData.phone')}
                    name="phone"
                    value={phone}
                    onChange={setForm}
                />
                {validate(formData).phone && formData.phone != null && <p className="error">{validate(formData).phone}</p>}
            </div>
            <div>
                <GenericItem
                    placeholder={t('formData.emailAdress')}
                    name="email"
                    value={email}
                    onChange={setForm}
                />
              {validate(formData).email && formData.email != null && <p className="error">{validate(formData).email}</p>}
            </div>
            <label>Option</label>
            <input type="checkbox" name="option" checked={option} onChange={setForm} />
            <div>
                <button onClick={previous}>{t('static.previous')}</button>
                <button onClick={handleSubmit} disabled={validate(formData).email} >Submit</button>
            </div>
        </div>
    );
};

export default ContactabilityInfo;
