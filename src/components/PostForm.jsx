import { useState } from "react";
import styles from "./PostForm.module.css";


const API_URL = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts';

const formDataInitial = {
    author:'',
    title:'',
    body:'',
    public: false
};

function PostForm() {
    const [formData, setFormData] = useState(formDataInitial);

    const handleChange = (event) =>{
        // Recupero il necessario dal target
        const {name, value, tagType, checked} = event.target;

        // Terna per decidere cosa salvare
        // Se è un checkbox checked, altrimenti value
        const valueToUpdate = (tagType === 'checked' ? checked : value);

        // Two way data binding
        const newDataForm = {
            ...formData,            // Copio i valori con spread
            [name]: valueToUpdate   // aggiorno la chiave
        };

        setFormData(newDataForm)
    };

    return <>
        <div className="container d-flex justify-content-center align-items-center">
            <h1 className={`${styles.title} text-primary`}>Post Form</h1>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <form>
                {/* Nome autore */}
                <div>
                    <label htmlFor="author">Autore</label>
                    <input id="author" name="author" onChange={handleChange} value={formData.author} type="text" placeholder="Inserire il nome dell'autore" />
                </div>
                {/* Titolo del post */}
                <div>
                    <label htmlFor="title">Titolo</label>
                    <input id="title" name="title" onChange={handleChange} value={formData.title} type="text" placeholder="Inserire il titolo del post" />
                </div>
                {/* Corpo del testo */}
                <div>
                    <label htmlFor="body">Contenuto</label>
                    <textarea id="body" name="body" onChange={handleChange} value={formData.body} type="text" rows="5" placeholder="Inserire il contenuto del post" />
                </div>
                {/* Pubblico o bozza */}
                <div>
                    <label htmlFor="public">Pubblico</label>
                    <input type="checkbox" name="public" id="public" checked={formData.public} onChange={handleChange}/>
                </div>
            </form>
            <p>{JSON.stringify(formData)}</p>
        </div>
    </>;
}
export default PostForm;
