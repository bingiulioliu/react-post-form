import { useState } from "react";
import styles from "./PostForm.module.css";
import { Alert } from "bootstrap";


const API_URL = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts';

const formDataInitial = {
    author: '',
    title: '',
    body: '',
    public: false
};

function PostForm() {
    const [formData, setFormData] = useState(formDataInitial);

    const handleChange = (event) => {
        // Recupero il necessario dal target
        const { name, value, type, checked } = event.target;

        // Terna per decidere cosa salvare
        // Se è un checkbox checked, altrimenti value
        const valueToUpdate = (type === 'checkbox' ? checked : value);

        // Two way data binding
        const newDataForm = {
            ...formData,            // Copio i valori con spread
            [name]: valueToUpdate   // aggiorno la chiave
        };

        setFormData(newDataForm)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('click');
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
            alert('Post inviato!');
            setFormData(formDataInitial);
        }).catch(error => alert('Qualcosa è andato storto!'));
    };


    return <>
        <div className="container d-flex justify-content-center align-items-center mb-3">
            <h1 className={`${styles.title} text-primary`}>Post Form</h1>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="row g-3 shadow p-4 rounded bg-secondary">
                {/* Nome autore */}
                <div className="col-12">
                    <label htmlFor="author" className="form-label fw-bold">Autore</label>
                    <input id="author" name="author" onChange={handleChange} value={formData.author} type="text" placeholder="Inserire il nome dell'autore" />
                </div>
                {/* Titolo del post */}
                {formData.author !== '' && (
                <div className="col-12">
                    <label htmlFor="title" className="form-label fw-bold">Titolo</label>
                    <input id="title" name="title" onChange={handleChange} value={formData.title} type="text" placeholder="Inserire il titolo del post" />
                </div> )}
                {/* Corpo del testo */}
                {formData.title !== '' && (
                <div className="col-12">
                    <label htmlFor="body" className="form-label fw-bold">Contenuto</label>
                    <textarea id="body" name="body" onChange={handleChange} value={formData.body} type="text" rows="1" cols="80" placeholder="Inserire il contenuto del post" />
                </div> )}
                {/* Pubblico o bozza */}
                {formData.body !== '' && (
                <div className="col-12">
                    <label htmlFor="public" className="form-label fw-bold">Pubblica o salva in bozza</label>
                    <input type="checkbox" name="public" id="public" checked={formData.public} onChange={handleChange} />
                </div>)}
                {formData.body !== '' && (
                <button className="btn btn-primary btn-sm">Invia post</button>)}
            </form>
        </div>
        <p>{JSON.stringify(formData)}</p>
    </>;
}
export default PostForm;
