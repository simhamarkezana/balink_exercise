export default function validate(data) {
    let errors = {};
    if (!data['firstName']) {
        errors.firstname = 'First name is required';
    }
    if (!data['lastName']) {
        errors.lastname = 'Last name is required';
    }
    if (!data['country']) {
        errors.country = 'Country is required';
    }
    if (!data['email']) {
        errors.email = 'Email address is required';
    }
    if (data['email'] && !(/\S+@\S+\.\S+/.test(data['email']))) {
        errors.email = 'Email address is invalid';
    }

    if (!(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(data['phone']))) {
        errors.phone = 'Phone is invalid';
    }
    return errors;
};