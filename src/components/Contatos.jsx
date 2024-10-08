import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contatos = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const enviarEmail = (e) => {
        e.preventDefault();

        // Validação simples
        const { nome, email, assunto, mensagem } = formData;
        if (!nome || !email || !assunto || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Validação de e-mail
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }

        const emailData = {
            to_name: 'WebBoys',
            from_name: nome,
            from_email: email,
            subject: assunto,
            message: mensagem
        };

        // Enviando o e-mail via EmailJS
        emailjs.send("service_4k4gbop", "template_uwuk8js", emailData, "0b2s8H36UmrQsKvND")
            .then((response) => {
                console.log('Email enviado com sucesso:', response.status, response.text);
                alert("Email enviado com sucesso!");
                // Limpa os campos após o envio
                setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
            }, (error) => {
                console.log('Ocorreu um erro ao enviar o email:', error);
                alert("Erro ao enviar o email, tente novamente mais tarde.");
            });
    };

    return (

      <>
        <div id='contact' className='container-fluid bg-grey'>
            <h2 className='text-center'>CONTACT</h2>
            <div className='row'>
                <div className='col-sm-5'>
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p><span className='glyphicon glyphicon-map-marker'></span> Chicago, US</p>
                    <p><span className='glyphicon glyphicon-phone'></span> +00 1515151515</p>
                    <p><span className='glyphicon glyphicon-envelope'></span> myemail@something.com</p>
                </div>
                <div className='col-sm-7'>
                    <form onSubmit={enviarEmail}>
                        <div className='row'>
                            <div className='col-sm-6 form-group'>
                                <input
                                    className='form-control'
                                    id='nome'
                                    name='nome'
                                    placeholder='Nome'
                                    type='text'
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='col-sm-6 form-group'>
                                <input
                                    className='form-control'
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                    type='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                id='assunto'
                                name='assunto'
                                placeholder='Assunto'
                                type='text'
                                value={formData.assunto}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <textarea
                            className='form-control'
                            id='mensagem'
                            name='mensagem'
                            placeholder='Mensagem'
                            rows='5'
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                        ></textarea><br />
                        <div className='row'>
                            <div className='col-sm-12 form-group'>
                                <button className='btn btn-default pull-right' type='submit'>Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        </>
    );
};
