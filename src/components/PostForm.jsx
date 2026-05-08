// Esempio di utilizzo di un CSS Module.
//
// Importando il file ".module.css" come oggetto `styles`, possiamo
// applicare le sue regole con la sintassi `className={styles.nomeClasse}`.
// Le classi così applicate rimangono "scoped" al componente, evitando
// collisioni con altri stili globali (per esempio quelli di Bootstrap).
//
// Per combinare una classe del modulo con altre classi (globali o di
// Bootstrap) si usa un template literal, come nell'`<h1>` qui sotto.

import styles from "./PostForm.module.css";

function PostForm() {
    return <>
        <div className="container d-flex justify-content-center align-items-center">
            <h1 className={`${styles.title} text-primary`}>Post Form</h1>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <form>
                {/* Nome autore */}
                <div>
                    <label htmlFor="autore">Autore</label>
                    <input type="text" placeholder="Inserire il nome dell'autore" />
                </div>
                {/* Titolo del post */}
                <div>
                    <label htmlFor="titolo">Titolo</label>
                    <input type="text" placeholder="Inserire il titolo del post" />
                </div>
                {/* Corpo del testo */}
                <div>
                    <label htmlFor="corpo">Contenuto</label>
                    <textarea type="text" rows="5" placeholder="Inserire il contenuto del post" />
                </div>
                {/* Pubblico o bozza */}
                <div>
                    <label htmlFor="pubblico">Pubblico</label>
                    <input type="checkbox"/>
                </div>
            </form>
        </div>
    </>;
}
export default PostForm;
