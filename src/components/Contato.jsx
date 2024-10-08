import React from 'react'

export const Contato = () => {
    const [dadosFormulario, setDadosFormulario] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
    };

    const enviarEmail = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o e-mail
        console.log('Formulário enviado:', dadosFormulario);
    };

    return (
        <div className="contato">
            <form id="contato" onSubmit={enviarEmail}>
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={dadosFormulario.nome}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={dadosFormulario.email}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="assunto">Assunto</label>
                <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    value={dadosFormulario.assunto}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                    id="mensagem"
                    name="mensagem"
                    value={dadosFormulario.mensagem}
                    onChange={handleChange}
                    required
                />
                
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};
