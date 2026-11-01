/* =====================================================================
   CONTENUTI DEL SITO · Economia Aziendale classe Terza
   Questo è l'unico file da modificare per aggiungere argomenti, materiali
   ed esercizi. Dopo ogni modifica ricarica il file su GitHub.

   ARGOMENTI
     stato: "corso" (in corso) oppure "svolto". Un argomento non ancora
     pronto si toglie dall'elenco oppure si lascia fuori dal file.
     materiali: url può essere il nome di un file caricato nel sito
     (es. "lezione.html", "esercizi.pdf") oppure un indirizzo internet.

   ESERCIZI GUIDATI
     argomento: Costituzione, Costi di impianto, Acquisti, Vendite,
     Resi e ribassi, Acconti, Regolamento, Riepilogo (altro = "Altro")
     livello: 1 base, 2 media, 3 avanzata · ordine: posizione nell'elenco
     righe della soluzione: c = codice del conto nel piano dei conti TE204,
     s = "D" (Dare) o "A" (Avere), v = importo (con il punto per i decimali:
     1370.60). Facoltativo alt = codici accettati come alternativa.
     Ogni soluzione deve quadrare: totale Dare = totale Avere.
   ===================================================================== */
window.SITO = {
argomenti: [
  {
    "titolo": "Costituzione, Acquisti, Vendite e Rettifiche",
    "modulo": "Partita doppia",
    "stato": "corso",
    "descrizione": "Le scritture in partita doppia di costituzione, costi d’impianto, acquisti, vendite, resi, ribassi, acconti e regolamento, con il codice colore.",
    "materiali": [
      {
        "titolo": "Lezione animata: la partita doppia a colori",
        "tipo": "Lezione animata",
        "url": "lezione.html",
        "nota": "Si avanza un passo alla volta; contiene anche la versione video"
      },
      {
        "titolo": "Video della lezione (MP4)",
        "tipo": "Video",
        "url": "video-partita-doppia.mp4",
        "nota": "7 minuti, con sottotitoli, da guardare o scaricare"
      },
      {
        "titolo": "Slide della lezione (PDF)",
        "tipo": "Presentazione",
        "url": "slide-costituzione-acquisti-vendite.pdf",
        "nota": "25 slide da scaricare per il ripasso"
      },
      {
        "titolo": "Palestra: esercizi guidati sull’argomento",
        "tipo": "Esercizi",
        "url": "#palestra",
        "nota": "Costituzione, acquisti, vendite, resi, acconti, regolamento"
      }
    ]
  }
],

esercizi: [
  {
    id:"e01-costituzione",
    titolo:"La costituzione dell’impresa Rossi",
    argomento:"Costituzione", livello:1, ordine:1,
    intro:"Luca Rossi avvia un’impresa individuale di commercio di articoli per la casa. Registra gli apporti del titolare e il versamento sul conto corrente aziendale aperto presso la Banca X.",
    operazioni:[
      {data:"01/03", testo:"Luca Rossi costituisce l’impresa versando 40.000 euro sul c/c della Banca X e apportando assegni bancari per 5.000 euro e denaro contante per 800 euro.",
       righe:[
        {"c": "18.20", "s": "D", "v": 40000, "alt": ["08.01"]},
        {"c": "08.10", "s": "D", "v": 5000},
        {"c": "08.20", "s": "D", "v": 800},
        {"c": "10.01", "s": "A", "v": 45800}]},
      {data:"01/03", testo:"Il titolare apporta anche un fabbricato valutato 180.000 euro, un automezzo valutato 22.000 euro e arredamento valutato 6.500 euro.",
       righe:[
        {"c": "02.01", "s": "D", "v": 180000},
        {"c": "02.07", "s": "D", "v": 22000},
        {"c": "02.06", "s": "D", "v": 6500},
        {"c": "10.01", "s": "A", "v": 208500}]},
      {data:"03/03", testo:"Gli assegni ricevuti in apporto vengono versati sul c/c della Banca X.",
       righe:[
        {"c": "18.20", "s": "D", "v": 5000, "alt": ["08.01"]},
        {"c": "08.10", "s": "A", "v": 5000}]}
    ]
  },
  {
    id:"e02-costi-impianto",
    titolo:"La parcella del notaio e la ritenuta d’acconto",
    argomento:"Costi di impianto", livello:2, ordine:2,
    intro:"L’impresa Bianchi Sara è stata appena costituita. Registra i costi sostenuti per l’avvio dell’attività e il pagamento del notaio come sostituto d’imposta.",
    operazioni:[
      {data:"05/03", testo:"Ricevuta la parcella del notaio Ferri: onorario 2.500 euro, cassa previdenza 4% 100 euro, IVA 22% su 2.600 euro, spese documentate (art. 15) 250 euro, imposta di bollo 2 euro. Ritenuta fiscale 20% sull’onorario.",
       righe:[
        {"c": "01.01", "s": "D", "v": 2852},
        {"c": "06.01", "s": "D", "v": 572},
        {"c": "14.01", "s": "A", "v": 3424}]},
      {data:"10/03", testo:"Pagata la parcella del notaio con bonifico bancario, trattenendo la ritenuta fiscale del 20% sull’onorario.",
       righe:[
        {"c": "14.01", "s": "D", "v": 3424},
        {"c": "15.02", "s": "A", "v": 500},
        {"c": "18.20", "s": "A", "v": 2924, "alt": ["08.01"]}]},
      {data:"12/03", testo:"Ricevuta la fattura per l’allacciamento dell’energia elettrica: 200 euro + IVA 22%, più un deposito cauzionale di 150 euro.",
       righe:[
        {"c": "01.01", "s": "D", "v": 200},
        {"c": "06.01", "s": "D", "v": 44},
        {"c": "06.05", "s": "D", "v": 150},
        {"c": "14.01", "s": "A", "v": 394}]},
      {data:"15/03", testo:"La fattura dell’allacciamento viene pagata con addebito sul c/c bancario.",
       righe:[
        {"c": "14.01", "s": "D", "v": 394},
        {"c": "18.20", "s": "A", "v": 394, "alt": ["08.01"]}]},
      {data:"16/04", testo:"Versata la ritenuta fiscale trattenuta al notaio con il modello F24, con addebito sul c/c bancario.",
       righe:[
        {"c": "15.02", "s": "D", "v": 500},
        {"c": "18.20", "s": "A", "v": 500, "alt": ["08.01"]}]}
    ]
  },
  {
    id:"e03-avviamento",
    titolo:"L’acquisto di un’azienda funzionante",
    argomento:"Costituzione", livello:3, ordine:3,
    intro:"Marta Galli avvia l’attività acquistando dal cedente Neri un’azienda già funzionante. Il prezzo pattuito è 130.000 euro. La cessione d’azienda è fuori campo IVA.",
    operazioni:[
      {data:"02/05", testo:"Rilevato l’acquisto dell’azienda: impianti e macchinari 90.000 euro, attrezzature commerciali 12.000 euro, crediti verso clienti 40.000 euro, debiti verso fornitori 30.000 euro. Prezzo 130.000 euro da pagare al cedente.",
       righe:[
        {"c": "02.02", "s": "D", "v": 90000},
        {"c": "02.04", "s": "D", "v": 12000},
        {"c": "05.01", "s": "D", "v": 40000},
        {"c": "01.05", "s": "D", "v": 18000},
        {"c": "14.01", "s": "A", "v": 30000},
        {"c": "15.23", "s": "A", "v": 130000}]},
      {data:"05/05", testo:"Pagato il prezzo al cedente con bonifico bancario.",
       righe:[
        {"c": "15.23", "s": "D", "v": 130000},
        {"c": "18.20", "s": "A", "v": 130000, "alt": ["08.01"]}]}
    ]
  },
  {
    id:"e04-acquisti-trasporti",
    titolo:"Acquisti con trasporto e imballaggi",
    argomento:"Acquisti", livello:2, ordine:4,
    intro:"L’impresa Verdi Anna acquista merci dal fornitore Alfa srl. Fai attenzione a come vengono addebitati il trasporto e gli imballaggi.",
    operazioni:[
      {data:"02/04", testo:"Ricevuta la fattura n. 120 di Alfa srl: merci 6.000 euro, trasporto forfettario 150 euro, imballaggi 80 euro; IVA 22%.",
       righe:[
        {"c": "30.01", "s": "D", "v": 6230},
        {"c": "06.01", "s": "D", "v": 1370.6},
        {"c": "14.01", "s": "A", "v": 7600.6}]},
      {data:"04/04", testo:"Ricevuta la fattura n. 45 del vettore Rapido Trasporti, intestata a noi ma pagata da Alfa srl: trasporto 300 euro + IVA 22%.",
       righe:[
        {"c": "31.01", "s": "D", "v": 300},
        {"c": "06.01", "s": "D", "v": 66},
        {"c": "14.01", "s": "A", "v": 366}]},
      {data:"05/04", testo:"Ricevuta la fattura n. 125 di Alfa srl: merci 3.000 euro + IVA 22%, più il riaddebito delle spese documentate (art. 15) per il trasporto pagato al vettore, 366 euro.",
       righe:[
        {"c": "30.01", "s": "D", "v": 3000},
        {"c": "06.01", "s": "D", "v": 660},
        {"c": "14.01", "s": "D", "v": 366},
        {"c": "14.01", "s": "A", "v": 4026}]},
      {data:"30/04", testo:"Pagata la fattura n. 120 di Alfa srl con bonifico bancario.",
       righe:[
        {"c": "14.01", "s": "D", "v": 7600.6},
        {"c": "18.20", "s": "A", "v": 7600.6, "alt": ["08.01"]}]}
    ]
  },
  {
    id:"e05-resi-acquisti",
    titolo:"Resi, ribassi e abbuoni sugli acquisti",
    argomento:"Resi e ribassi", livello:2, ordine:5,
    intro:"L’impresa Verdi Anna riceve merce in parte difettosa dal fornitore Beta spa e ottiene riduzioni di prezzo.",
    operazioni:[
      {data:"03/06", testo:"Ricevuta la fattura n. 88 di Beta spa: merci 5.000 euro + IVA 22%.",
       righe:[
        {"c": "30.01", "s": "D", "v": 5000},
        {"c": "06.01", "s": "D", "v": 1100},
        {"c": "14.01", "s": "A", "v": 6100}]},
      {data:"06/06", testo:"Restituite a Beta spa merci difettose: ricevuta la nota di variazione per 800 euro + IVA 22%.",
       righe:[
        {"c": "14.01", "s": "D", "v": 976},
        {"c": "30.10", "s": "A", "v": 800},
        {"c": "06.01", "s": "A", "v": 176}]},
      {data:"08/06", testo:"Per un lieve difetto sulle merci trattenute Beta spa concede un ribasso: nota di variazione per 200 euro + IVA 22%.",
       righe:[
        {"c": "14.01", "s": "D", "v": 244},
        {"c": "30.11", "s": "A", "v": 200},
        {"c": "06.01", "s": "A", "v": 44}]},
      {data:"30/06", testo:"Pagato a Beta spa il saldo della fattura n. 88 con bonifico bancario.",
       righe:[
        {"c": "14.01", "s": "D", "v": 4880},
        {"c": "18.20", "s": "A", "v": 4880, "alt": ["08.01"]}]},
      {data:"02/07", testo:"Pagato con bonifico il debito di 1.250,60 euro verso il fornitore Gamma srl, che accetta 1.250 euro a saldo.",
       righe:[
        {"c": "14.01", "s": "D", "v": 1250.6},
        {"c": "18.20", "s": "A", "v": 1250, "alt": ["08.01"]},
        {"c": "30.11", "s": "A", "v": 0.6}]}
    ]
  },
  {
    id:"e06-vendite",
    titolo:"Vendite con rimborsi e spese anticipate",
    argomento:"Vendite", livello:2, ordine:6,
    intro:"L’impresa Verdi Anna vende merci al cliente Delta srl. Registra le fatture emesse e i relativi incassi.",
    operazioni:[
      {data:"10/05", testo:"Emessa la fattura n. 15 a Delta srl: merci 9.000 euro, trasporto forfettario 120 euro, imballaggi 60 euro; IVA 22%.",
       righe:[
        {"c": "05.01", "s": "D", "v": 11199.6},
        {"c": "20.01", "s": "A", "v": 9000},
        {"c": "20.30", "s": "A", "v": 180},
        {"c": "15.01", "s": "A", "v": 2019.6}]},
      {data:"12/05", testo:"Pagata in contanti al vettore, per conto del cliente Delta srl, la fattura di trasporto intestata al cliente: 200 euro + IVA 22%.",
       righe:[
        {"c": "05.05", "s": "D", "v": 244},
        {"c": "08.20", "s": "A", "v": 244}]},
      {data:"14/05", testo:"Emessa la fattura n. 16 a Delta srl: merci 4.000 euro + IVA 22%, più il riaddebito delle spese anticipate (art. 15) per 244 euro.",
       righe:[
        {"c": "05.01", "s": "D", "v": 5124},
        {"c": "20.01", "s": "A", "v": 4000},
        {"c": "15.01", "s": "A", "v": 880},
        {"c": "05.05", "s": "A", "v": 244}]},
      {data:"31/05", testo:"Incassata con bonifico la fattura n. 15.",
       righe:[
        {"c": "18.20", "s": "D", "v": 11199.6, "alt": ["08.01"]},
        {"c": "05.01", "s": "A", "v": 11199.6}]}
    ]
  },
  {
    id:"e07-resi-vendite",
    titolo:"Resi, ribassi e abbuoni sulle vendite",
    argomento:"Resi e ribassi", livello:2, ordine:7,
    intro:"Il cliente Omega spa contesta parte della merce ricevuta dall’impresa Verdi Anna.",
    operazioni:[
      {data:"03/09", testo:"Emessa la fattura n. 30 a Omega spa: merci 7.500 euro + IVA 22%.",
       righe:[
        {"c": "05.01", "s": "D", "v": 9150},
        {"c": "20.01", "s": "A", "v": 7500},
        {"c": "15.01", "s": "A", "v": 1650}]},
      {data:"06/09", testo:"Omega spa restituisce merci non conformi: emessa la nota di variazione per 500 euro + IVA 22%.",
       righe:[
        {"c": "20.10", "s": "D", "v": 500},
        {"c": "15.01", "s": "D", "v": 110},
        {"c": "05.01", "s": "A", "v": 610}]},
      {data:"08/09", testo:"Concesso a Omega spa un ribasso per un lieve difetto: nota di variazione per 300 euro + IVA 22%.",
       righe:[
        {"c": "20.11", "s": "D", "v": 300},
        {"c": "15.01", "s": "D", "v": 66},
        {"c": "05.01", "s": "A", "v": 366}]},
      {data:"30/09", testo:"Incassato con bonifico il saldo della fattura n. 30.",
       righe:[
        {"c": "18.20", "s": "D", "v": 8174, "alt": ["08.01"]},
        {"c": "05.01", "s": "A", "v": 8174}]},
      {data:"02/10", testo:"Il cliente Sigma srl, che ci deve 1.830,40 euro, paga in contanti 1.830 euro: concediamo l’abbuono.",
       righe:[
        {"c": "08.20", "s": "D", "v": 1830},
        {"c": "20.11", "s": "D", "v": 0.4},
        {"c": "05.01", "s": "A", "v": 1830.4}]}
    ]
  },
  {
    id:"e08-acconti",
    titolo:"Acconti a fornitori e da clienti",
    argomento:"Acconti", livello:3, ordine:8,
    intro:"L’impresa Verdi Anna versa un acconto al fornitore Delta srl e riceve un acconto dal cliente Kappa srl. Ricorda: costo e ricavo si registrano sempre per intero nella fattura di saldo.",
    operazioni:[
      {data:"02/10", testo:"Pagato con bonifico un acconto a Delta srl di 2.440 euro (2.000 euro + IVA 22%).",
       righe:[
        {"c": "14.01", "s": "D", "v": 2440},
        {"c": "18.20", "s": "A", "v": 2440, "alt": ["08.01"]}]},
      {data:"02/10", testo:"Ricevuta da Delta srl la fattura d’acconto n. 70: acconto su merci 2.000 euro + IVA 22%.",
       righe:[
        {"c": "04.10", "s": "D", "v": 2000},
        {"c": "06.01", "s": "D", "v": 440},
        {"c": "14.01", "s": "A", "v": 2440}]},
      {data:"20/10", testo:"Ricevuta da Delta srl la fattura di saldo n. 81: merci 8.000 euro, meno l’acconto già fatturato di 2.000 euro; IVA 22% sulla differenza.",
       righe:[
        {"c": "30.01", "s": "D", "v": 8000},
        {"c": "06.01", "s": "D", "v": 1320},
        {"c": "04.10", "s": "A", "v": 2000},
        {"c": "14.01", "s": "A", "v": 7320}]},
      {data:"05/11", testo:"Incassato con bonifico un acconto dal cliente Kappa srl di 1.220 euro (1.000 euro + IVA 22%).",
       righe:[
        {"c": "18.20", "s": "D", "v": 1220, "alt": ["08.01"]},
        {"c": "05.01", "s": "A", "v": 1220}]},
      {data:"05/11", testo:"Emessa a Kappa srl la fattura d’acconto n. 52: acconto su merci 1.000 euro + IVA 22%.",
       righe:[
        {"c": "05.01", "s": "D", "v": 1220},
        {"c": "14.20", "s": "A", "v": 1000},
        {"c": "15.01", "s": "A", "v": 220}]},
      {data:"25/11", testo:"Emessa a Kappa srl la fattura di saldo n. 60: merci 6.000 euro, meno l’acconto già fatturato di 1.000 euro; IVA 22% sulla differenza.",
       righe:[
        {"c": "05.01", "s": "D", "v": 6100},
        {"c": "14.20", "s": "D", "v": 1000},
        {"c": "20.01", "s": "A", "v": 6000},
        {"c": "15.01", "s": "A", "v": 1100}]}
    ]
  },
  {
    id:"e09-regolamento",
    titolo:"Il regolamento con bonifici, contanti e cambiali",
    argomento:"Regolamento", livello:1, ordine:9,
    intro:"L’impresa Verdi Anna regola crediti e debiti con strumenti diversi. In ogni regolamento troverai una variazione finanziaria positiva e una negativa.",
    operazioni:[
      {data:"10/11", testo:"Il cliente Pi srl rilascia una cambiale attiva di 3.660 euro a saldo della fattura n. 41.",
       righe:[
        {"c": "05.06", "s": "D", "v": 3660},
        {"c": "05.01", "s": "A", "v": 3660}]},
      {data:"12/11", testo:"Rilasciata al fornitore Zeta spa una cambiale passiva di 4.270 euro a saldo della fattura n. 207.",
       righe:[
        {"c": "14.01", "s": "D", "v": 4270},
        {"c": "14.06", "s": "A", "v": 4270}]},
      {data:"10/12", testo:"Incassata tramite la banca la cambiale attiva di 3.660 euro; la banca addebita 4 euro di commissioni d’incasso.",
       righe:[
        {"c": "18.20", "s": "D", "v": 3656, "alt": ["08.01"]},
        {"c": "31.14", "s": "D", "v": 4, "alt": ["31.15"]},
        {"c": "05.06", "s": "A", "v": 3660}]},
      {data:"12/12", testo:"Pagata alla scadenza la cambiale passiva di 4.270 euro con addebito sul c/c bancario.",
       righe:[
        {"c": "14.06", "s": "D", "v": 4270},
        {"c": "18.20", "s": "A", "v": 4270, "alt": ["08.01"]}]},
      {data:"15/12", testo:"Un cliente paga in contanti una fattura di 350 euro.",
       righe:[
        {"c": "08.20", "s": "D", "v": 350},
        {"c": "05.01", "s": "A", "v": 350}]}
    ]
  },
  {
    id:"e10-riepilogo",
    titolo:"Prime operazioni di gestione",
    argomento:"Riepilogo", livello:3, ordine:10,
    intro:"Paolo Conti costituisce un’impresa commerciale e svolge le prime operazioni. Esercizio di riepilogo: dalla costituzione all’incasso della prima vendita.",
    operazioni:[
      {data:"15/01", testo:"Paolo Conti costituisce l’impresa versando 60.000 euro sul c/c della Banca X e apportando un computer valutato 1.200 euro.",
       righe:[
        {"c": "18.20", "s": "D", "v": 60000, "alt": ["08.01"]},
        {"c": "02.05", "s": "D", "v": 1200},
        {"c": "10.01", "s": "A", "v": 61200}]},
      {data:"18/01", testo:"Ricevuta la fattura di TIM spa per l’allacciamento della linea telefonica: 120 euro + IVA 22%, più un deposito cauzionale di 100 euro.",
       righe:[
        {"c": "01.01", "s": "D", "v": 120},
        {"c": "06.01", "s": "D", "v": 26.4},
        {"c": "06.05", "s": "D", "v": 100},
        {"c": "14.01", "s": "A", "v": 246.4}]},
      {data:"20/01", testo:"La fattura di TIM spa viene pagata con addebito sul c/c bancario.",
       righe:[
        {"c": "14.01", "s": "D", "v": 246.4},
        {"c": "18.20", "s": "A", "v": 246.4, "alt": ["08.01"]}]},
      {data:"25/01", testo:"Ricevuta la fattura del fornitore Esse srl: merci 4.500 euro + IVA 22%.",
       righe:[
        {"c": "30.01", "s": "D", "v": 4500},
        {"c": "06.01", "s": "D", "v": 990},
        {"c": "14.01", "s": "A", "v": 5490}]},
      {data:"27/01", testo:"Pagata la fattura di Esse srl con un assegno bancario tratto sul c/c della Banca X.",
       righe:[
        {"c": "14.01", "s": "D", "v": 5490},
        {"c": "18.20", "s": "A", "v": 5490, "alt": ["08.01"]}]},
      {data:"02/02", testo:"Emessa la prima fattura di vendita al cliente Elle srl: merci 3.200 euro + IVA 22%.",
       righe:[
        {"c": "05.01", "s": "D", "v": 3904},
        {"c": "20.01", "s": "A", "v": 3200},
        {"c": "15.01", "s": "A", "v": 704}]},
      {data:"05/02", testo:"Il cliente Elle srl paga la fattura in contanti.",
       righe:[
        {"c": "08.20", "s": "D", "v": 3904},
        {"c": "05.01", "s": "A", "v": 3904}]}
    ]
  }
]
};
