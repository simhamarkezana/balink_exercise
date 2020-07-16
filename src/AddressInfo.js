import React, { useState, useEffect } from "react";
import axios from 'axios';
import countriesList from "./countriesList";
import GenericItem from "./GenericItem";
import validate from "./Validate"

const AddressInfo = ({ setForm, formData, navigation, t }) => {
    const { country, city, street} = formData;
    const [countries, setCountries] = useState(null );
    const { previous, next } = navigation;

    const headers = {"Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*"};

    useEffect(() => {
        const getCountry = () => {
                //j'ai mi en commentaire cette partie la car j'ai une erreur de CORS que je n'ai pas reussi  resoudre
                // mais si j'aurai eu la response j'aurai fait a peu pres pareil que plus bas
                // axios.get('http://localhost:3001/countries',{headers: headers})
                //     .then(response => {
                //         console.log('res'+response);
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     })

            var Listcountries = [];
            countriesList.forEach(element=>{
                Listcountries.push(element.name);
            });
            setCountries(Listcountries);
        };
        getCountry();
    }, [] );

    return (
        <div className="form">
            <div>
                <label className="label">{t('formData.country')}</label>
                {countries!=null && <select name="country"
                                    value={country} onChange={setForm}  required>
                                    <option key="" value="Choose a country"></option>
                                    {countries.map(country => (
                                        <option key={country}>{country}</option>
                                    ))}
                </select>}
                {validate(formData).country && formData.country != null && <p className="error ">{validate(formData).country}</p>}
            </div>

            <GenericItem placeholder={t('formData.city')} name="city" value={city} onChange={setForm} />
            <GenericItem placeholder={t('formData.street')} name="street" value={street} onChange={setForm} />
            <div>
                <button onClick={previous}>{t('static.previous')}</button>
                <button onClick={next}>{t('static.next')}</button>
            </div>
        </div>
    );
};

export default AddressInfo;
