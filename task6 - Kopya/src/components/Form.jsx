import React, { useState } from "react";
import "./index.css";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        comment: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        let errors = {};

        if (formData.name.trim() === "") {
            errors.name = "Ad mütləq daxil edilməlidir";
        }

        if (formData.surname.trim() === "") {
            errors.surname = "Soyad mütləq daxil edilməlidir";
        }

        if (formData.phone.trim() === "") {
            errors.phone = "Telefon nömrəsi mütləq daxil edilməlidir";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = "Telefon nömrəsi düzgün formatda deyil (10 rəqəm olmalıdır)";
        }

        if (formData.email.trim() === "") {
            errors.email = "E-mail mütləq daxil edilməlidir";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "E-mail düzgün deyil";
        }

        if (formData.comment.trim() === "") {
            errors.comment = "Şərh daxil edilməlidir";
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            alert("Form uğurla göndərildi!");
            setFormData({
                name: "",
                surname: "",
                phone: "",
                email: "",
                comment: "",
            });
        } else {
            console.log("Form göndərilmədi, səhvlər var.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label>Ad:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınızı daxil edin"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div>
                <label>Soyad:</label>
                <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder="Soyadınızı daxil edin"
                />
                {errors.surname && <span className="error-message">{errors.surname}</span>}
            </div>
            <div>
                <label>Telefon:</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefon nömrənizi daxil edin"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div>
                <label>E-mail:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mailinizi daxil edin"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div>
                <label>Şərh:</label>
                <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Şərhinizi daxil edin"
                ></textarea>
                {errors.comment && <span className="error-message">{errors.comment}</span>}
            </div>
            <button type="submit">Göndər</button>
        </form>
    );
};

export default Form;
