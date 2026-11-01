[README.md](https://github.com/user-attachments/files/34238576/README.md)
# Economia Aziendale classe Terza

Sito per la classe: lezioni animate, materiali e una palestra di partita doppia con correzione automatica. Funziona in qualsiasi browser, senza account e senza installare nulla.

## Cosa contiene

| File | A cosa serve |
|---|---|
| `index.html` | Pagina iniziale: argomenti, materiali e palestra di partita doppia |
| `lezione.html` | Lezione animata "La partita doppia a colori" (presentazione passo per passo o video continuo) |
| `slide-costituzione-acquisti-vendite.pdf` | Le slide della lezione in PDF |
| `palestra.js` | La palestra: esercizi guidati, foglio libero, natura dei conti, il mio resoconto |
| `contenuti.js` | **Argomenti, materiali ed esercizi.** È l'unico file da modificare per aggiungere contenuti |
| `docente.html` | Registro dell'insegnante: legge i resoconti consegnati dagli studenti |
| `stile.css` | Grafica del sito |

## Pubblicare il sito su GitHub Pages (una volta sola)

1. Crea un account gratuito su [github.com](https://github.com) e accedi.
2. In alto a destra premi **+** → **New repository**.
   - *Repository name*: per esempio `economia-terza`
   - lascia **Public** (GitHub Pages gratuito richiede un repository pubblico)
   - premi **Create repository**.
3. Nella pagina del repository premi **uploading an existing file**.
4. Trascina **tutti i file di questa cartella** (non la cartella stessa) e premi **Commit changes**.
5. Vai in **Settings** → **Pages**. In *Branch* scegli `main` e la cartella `/ (root)`, poi premi **Save**.
6. Dopo uno o due minuti in alto compare l'indirizzo del sito, del tipo
   `https://tuonome.github.io/economia-terza/`. È il link da dare agli studenti.

## Aggiornare i contenuti

- Apri `contenuti.js` con un editor di testo (anche TextEdit, in modalità testo semplice) e segui le istruzioni all'inizio del file.
- Per caricare la versione aggiornata: nel repository premi **Add file** → **Upload files**, trascina il file modificato e premi **Commit changes**. Il sito si aggiorna in un paio di minuti.
- Per aggiungere un PDF o un'altra lezione: caricalo nello stesso modo e aggiungilo tra i `materiali` dell'argomento in `contenuti.js`, scrivendo il nome del file in `url`.

## Come lavorano gli studenti

- Aprono il link, vanno su **Palestra di partita doppia** e lavorano in autonomia: esercizi guidati con correzione, foglio libero come il libro giornale di T-SMART, esercizio sulla natura dei conti.
- I progressi si salvano **solo nel loro browser**, sul dispositivo che usano: nessun dato viene inviato su internet. Se cambiano computer o usano la navigazione privata, ripartono da zero.
- Per consegnare i risultati vanno su **Il mio resoconto**, scrivono nome e classe e premono **Scarica il mio resoconto**. Ottengono un file `resoconto-….json` da caricare su Classroom o sulla piattaforma della scuola, come un compito.

## Vedere i risultati della classe

1. Scarica i file `resoconto-….json` consegnati dagli studenti.
2. Apri `docente.html` (indirizzo del sito + `docente.html`, per esempio `https://tuonome.github.io/economia-terza/docente.html`).
3. Trascina i file nel riquadro: compare la tabella con le operazioni corrette per esercizio, le soluzioni viste, il risultato sulla natura dei conti e la media della classe. Con **Scarica la tabella** ottieni un file CSV da aprire con Excel.

I file vengono letti solo sul tuo computer. La pagina `docente.html` è raggiungibile da chiunque conosca l'indirizzo, ma non contiene dati: mostra solo i file che carichi tu in quel momento.

Se uno studente modifica a mano il file dopo averlo scaricato, il registro lo segnala con l'etichetta **modificato**.

## Limiti da conoscere

- Le soluzioni degli esercizi sono dentro il sito: va bene per esercitarsi, non per le verifiche.
- Il sito usa i caratteri di Google Fonts: senza connessione funziona lo stesso, con caratteri di sistema.
