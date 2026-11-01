(function(){
"use strict";
/* ================= PIANO DEI CONTI (quadro TE204, impresa commerciale individuale) =================
   natura: F finanziario, E economico, T transitorio, O conto d'ordine */
const PIANO_SRC=`01.01|Costi di impianto|E
01.03|Brevetti|E
01.04|Software|E
01.05|Avviamento|E
01.11|Fondo ammortamento costi di impianto|E
01.13|Fondo ammortamento brevetti|E
01.14|Fondo ammortamento software|E
01.15|Fondo ammortamento avviamento|E
01.20|Fornitori immobilizzazioni immateriali c/acconti|F
02.01|Fabbricati|E
02.02|Impianti e macchinari|E
02.04|Attrezzature commerciali|E
02.05|Macchine d’ufficio|E
02.06|Arredamento|E
02.07|Automezzi|E
02.08|Imballaggi durevoli|E
02.11|Fondo ammortamento fabbricati|E
02.12|Fondo ammortamento impianti e macchinari|E
02.14|Fondo ammortamento attrezzature commerciali|E
02.15|Fondo ammortamento macchine d’ufficio|E
02.16|Fondo ammortamento arredamento|E
02.17|Fondo ammortamento automezzi|E
02.18|Fondo ammortamento imballaggi durevoli|E
02.30|Fornitori immobilizzazioni materiali c/acconti|F
03.01|Mutui attivi|F
04.01|Materie di consumo|E
04.04|Merci|E
04.10|Fornitori c/acconti|F
05.01|Crediti v/clienti|F
05.02|Fatture da emettere|F
05.03|Crediti commerciali diversi|F
05.04|Crediti v/clienti esteri|F
05.05|Clienti c/costi anticipati|F
05.06|Cambiali attive|F
05.07|Cambiali allo sconto|F
05.08|Cambiali all’incasso|F
05.09|Crediti da liquidare|F
05.10|Crediti insoluti|F
05.11|Cambiali insolute|F
05.15|Crediti per acconti da clienti|F
05.20|Fondo svalutazione crediti|F
06.01|IVA ns/credito|F
06.02|IVA c/acconto|F
06.03|Crediti per IVA|F
06.04|Crediti v/Istituti previdenziali|F
06.05|Crediti per cauzioni|F
06.10|Crediti diversi|F
06.20|Personale c/acconti|F
08.01|Banche c/c attivi|F
08.02|C/c postali|F
08.10|Assegni|F
08.20|Denaro in cassa|F
08.21|Valori bollati|F
09.01|Ratei attivi|F
09.02|Risconti attivi|E
10.01|Patrimonio netto|E
10.02|Prelevamenti extragestione|E
10.03|Titolare c/ritenute subite|E
10.04|Utile d’esercizio|E
10.05|Perdita d’esercizio|E
11.01|Fondo responsabilità civile|F
11.10|Fondo manutenzioni programmate|F
12.01|Debiti per TFR|F
13.01|Mutui passivi|F
13.10|Banche c/Ri.Ba. sbf|F
13.11|Banche c/anticipi su fatture|F
13.15|Sovvenzioni bancarie|F
13.20|Banche c/c passivi|F
13.21|Banche c/interessi maturati|F
13.30|Debiti v/altri finanziatori|F
14.01|Debiti v/fornitori|F
14.02|Fatture da ricevere|F
14.03|Debiti commerciali diversi|F
14.04|Debiti v/fornitori esteri|F
14.06|Cambiali passive|F
14.09|Debiti da liquidare|F
14.15|Debiti per acconti a fornitori|F
14.20|Clienti c/acconti|F
15.01|IVA ns/debito|F
15.02|Debiti per ritenute da versare|F
15.03|Debiti per IVA|F
15.04|Debiti fiscali diversi|F
15.06|Debiti v/Istituti previdenziali|F
15.07|Debiti per cauzioni|F
15.20|Personale c/retribuzioni|F
15.21|Personale c/liquidazione|F
15.22|Debiti v/fondi pensione|F
15.23|Cedente c/cessione|F
15.30|Debiti diversi|F
15.31|Vettori c/spese anticipate|F
16.01|Ratei passivi|F
16.02|Risconti passivi|E
18.01|Bilancio di apertura|T
18.02|Bilancio di chiusura|T
18.10|IVA c/liquidazione|F
18.11|Istituti previdenziali|F
18.20|Banca X c/c|F
18.25|Banca X c/valuta estera|F
19.01|Beni di terzi|O
19.02|Depositanti beni|O
19.11|Impegni per beni in leasing|O
19.12|Creditori c/leasing|O
19.21|Rischi per fideiussioni|O
19.22|Creditori per fideiussioni|O
20.01|Merci c/vendite|E
20.02|Merci c/vendite on line|E
20.03|Servizi on line|E
20.04|Merci c/vendite estero|E
20.05|Lavorazioni c/terzi|E
20.10|Resi su vendite|E
20.11|Ribassi e abbuoni passivi|E
20.12|Premi su vendite|E
20.15|Fitti attivi|E
20.16|Proventi vari|E
20.17|Arrotondamenti attivi|E
20.20|Plusvalenze|E
20.21|Sopravvenienze attive|E
20.22|Insussistenze attive|E
20.30|Rimborsi costi di vendita|E
30.01|Merci c/acquisti|E
30.02|Materie di consumo c/acquisti|E
30.03|Merci c/acquisti estero|E
30.05|Merci c/apporti|E
30.10|Resi su acquisti|E
30.11|Ribassi e abbuoni attivi|E
30.12|Premi su acquisti|E
31.01|Costi di trasporto|E
31.02|Costi per energia|E
31.03|Pubblicità|E
31.04|Consulenze|E
31.05|Costi telefonici|E
31.06|Costi di vigilanza|E
31.07|Costi postali|E
31.08|Assicurazioni|E
31.09|Costi per i locali|E
31.10|Manutenzioni e riparazioni|E
31.11|Costi di etichettatura|E
31.12|Lavorazioni presso terzi|E
31.13|Provvigioni passive|E
31.14|Costi di incasso|E
31.15|Commissioni bancarie|E
31.16|Costi di tenuta c/c|E
32.01|Fitti passivi|E
32.02|Canoni di leasing|E
33.01|Salari e stipendi|E
33.02|Oneri sociali|E
33.03|TFR|E
34.01|Ammortamento costi di impianto|E
34.03|Ammortamento brevetti|E
34.04|Ammortamento software|E
34.05|Ammortamento avviamento|E
35.01|Ammortamento fabbricati|E
35.02|Ammortamento impianti e macchinari|E
35.04|Ammortamento attrezzature commerciali|E
35.05|Ammortamento macchine d’ufficio|E
35.06|Ammortamento arredamento|E
35.07|Ammortamento automezzi|E
35.08|Ammortamento imballaggi durevoli|E
36.20|Svalutazione crediti|E
37.01|Merci c/esistenze iniziali|E
37.02|Materie di consumo c/esistenze iniziali|E
37.10|Merci c/rimanenze finali|E
37.11|Materie di consumo c/rimanenze finali|E
38.01|Accantonamento per responsabilità civile|E
38.10|Accantonamento per manutenzioni programmate|E
39.01|Arrotondamenti passivi|E
39.02|Oneri fiscali diversi|E
39.05|Perdite su crediti|E
39.06|Accantonamento per imposte indirette|E
39.10|Minusvalenze|E
39.11|Sopravvenienze passive|E
39.12|Insussistenze passive|E
40.01|Interessi attivi da clienti|E
40.02|Interessi attivi bancari|E
40.03|Interessi attivi postali|E
40.20|Proventi finanziari diversi|E
40.21|Differenze attive in cambi|E
41.01|Interessi passivi a fornitori|E
41.02|Interessi passivi bancari|E
41.03|Sconti passivi bancari|E
41.04|Interessi passivi su mutui|E
41.20|Oneri finanziari diversi|E
41.21|Differenze passive in cambi|E
90.01|Conto di risultato economico|E`;
const PIANO=PIANO_SRC.split('\n').map(l=>{const[c,n,t]=l.split('|');return{c,n,t}});
const ACC=new Map(PIANO.map(a=>[a.c,a]));
const norm=s=>String(s||'').toLowerCase().replace(/[’`´]/g,"'").replace(/\s+/g,' ').trim();
const BYNAME=new Map(PIANO.map(a=>[norm(a.n),a.c]));
const TOPICS=['Costituzione','Costi di impianto','Acquisti','Vendite','Resi e ribassi','Acconti','Regolamento','Riepilogo'];

const $=id=>document.getElementById(id);
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function fmt(n){const neg=n<0;n=Math.abs(n);let[i,d]=n.toFixed(2).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,'.');return(neg?'−':'')+i+','+d}
function parseAmt(s){
  s=String(s||'').replace(/[\s€]/g,'');if(!s)return 0;
  if(s.includes(','))s=s.replace(/\./g,'').replace(',','.');
  else if(/^\d{1,3}(\.\d{3})+$/.test(s))s=s.replace(/\./g,'');
  const v=Number(s);return isFinite(v)&&v>0?Math.round(v*100)/100:NaN;
}
function accOf(txt){
  const t=String(txt||'').trim();if(!t)return '';
  const m=t.match(/^(\d{2}\.\d{2})\b/);if(m&&ACC.has(m[1]))return m[1];
  return BYNAME.get(norm(t))||null;
}
const accName=c=>ACC.has(c)?ACC.get(c).n:c;
const accLabel=c=>ACC.has(c)?c+' '+ACC.get(c).n:'';

/* ================= NATURA E DESTINAZIONE (colonne Natura, Destinazione ed Eccedenza del quadro TE204) =================
   nat: F finanziario · Ee economico, variazioni d'esercizio · Ep economico, costi pluriennali · En economico, patrimonio netto
        Es economico, costi e ricavi sospesi · T transitorio · O conto d'ordine
   dest: SA SP attività · SPP SP passività e netto · SC SE costi · SR SE ricavi (secondo destinazione ed eccedenza del conto) */
const NAT={F:'Finanziario',Ee:'Economico · variazioni d’esercizio',Ep:'Economico · costi pluriennali',En:'Economico · patrimonio netto',Es:'Economico · costi e ricavi sospesi'};
const NATSHORT={Ee:'es.',Ep:'plur.',En:'PN',Es:'sosp.'};
const NATCOL={Ee:'b',Ep:'v',En:'t',Es:'o'};
const DEST={SA:'SP · Attività',SPP:'SP · Passività e netto',SC:'SE · Costi',SR:'SE · Ricavi'};
function classify(c,n){
  const g=c.slice(0,2),k=+c.slice(3);let nat,dest,desc;
  if(g==='01'||g==='02'){
    if(k===20||k===30){nat='F';dest='SA';desc='credito'}
    else if(k>=11){nat='Ep';dest='SPP';desc='rettifica di costo pluriennale'}
    else{nat='Ep';dest='SA';desc='costo pluriennale'}
  }else if(g==='03'){nat='F';dest='SA';desc='credito'}
  else if(g==='04'){if(k===10){nat='F';dest='SA';desc='credito'}else{nat='Es';dest='SA';desc='costo sospeso'}}
  else if(g==='05'){nat='F';if(k===20){dest='SPP';desc='rettifica di credito'}else{dest='SA';desc='credito'}}
  else if(g==='06'){nat='F';dest='SA';desc='credito'}
  else if(g==='08'){nat='F';dest='SA';desc=k>=10?'valori in cassa':'credito'}
  else if(g==='09'){if(k===1){nat='F';dest='SA';desc='rateo'}else{nat='Es';dest='SA';desc='costo sospeso'}}
  else if(g==='10'){nat='En';desc=k===1?'capitale proprio':k===4?'utile d’esercizio':'rettifica di patrimonio netto';dest=(k===1||k===4)?'SPP':'SA'}
  else if(g==='11'){nat='F';dest='SPP';desc=k===1?'fondo rischi':'fondo oneri'}
  else if(g==='12'||g==='13'||g==='14'||g==='15'){nat='F';dest='SPP';desc='debito'}
  else if(g==='16'){if(k===1){nat='F';dest='SPP';desc='rateo'}else{nat='Es';dest='SPP';desc='ricavo sospeso'}}
  else if(g==='18'){if(k<=2){nat='T';dest=null;desc='transitorio di contropartita'}else{nat='F';dest=null;desc='crediti e debiti'}}
  else if(g==='19'){nat='O';dest=null;desc='conto d’ordine'}
  else if(g==='90'){nat='Ee';dest=null;desc='conto di risultato'}
  else{
    nat='Ee';
    if(g==='20'){if(k>=10&&k<=12){dest='SC';desc='rettifica di ricavo'}else{dest='SR';desc='ricavo d’esercizio'}}
    else if(g==='30'){if(k>=10){dest='SR';desc='rettifica di costo'}else{dest='SC';desc='costo d’esercizio'}}
    else if(g==='37'){if(k>=10){dest='SR';desc='rettifica di costo'}else{dest='SC';desc='costo d’esercizio'}}
    else if(g==='40'){dest='SR';desc='ricavo d’esercizio'}
    else{dest='SC';desc='costo d’esercizio'}
  }
  return{nat,dest,desc};
}
PIANO.forEach(a=>Object.assign(a,classify(a.c,a.n)));
/* variazione: finanziario in Dare VF+ (verde), in Avere VF− (rosso); economico in Dare VE−, in Avere VE+ con il colore del suo tipo */
function variation(c,side){
  const a=ACC.get(c);if(!a||!side)return null;
  if(a.nat==='F')return side==='D'?{t:'VF+',k:'g'}:{t:'VF−',k:'r'};
  if(NATCOL[a.nat])return{t:(side==='D'?'VE−':'VE+')+' '+NATSHORT[a.nat],k:NATCOL[a.nat]};
  return{t:a.nat==='T'?'transit.':'ordine',k:'k'};
}
const natura=c=>{const a=ACC.get(c);return !a?'':a.nat==='F'?'finanziario':a.nat==='T'||a.nat==='O'?'transitorio':'economico'};
const rowCls=v=>!v?'':v.k==='g'?'vfp':v.k==='r'?'vfm':'ve-'+v.k;
const chip=v=>v?`<span class="vchip ${v.k}">${v.t}</span>`:'';
function legendHtml(){
  const it=[['g','VF+','Finanziario in Dare'],['r','VF−','Finanziario in Avere'],['b','VE','Economico · variazioni d’esercizio'],['v','VE','Economico · costi pluriennali'],['t','VE','Economico · patrimonio netto'],['o','VE','Economico · costi e ricavi sospesi']];
  return `<div class="legend2" aria-label="Codice colore dei conti">${it.map(([k,t,l])=>`<span><span class="vchip ${k}">${t}</span>${l}</span>`).join('')}</div>`;
}

/* ================= STATO ================= */
let db=null,user=null,uid=null,editor=false;
let exercises=[],progress={},quizStats={prove:0,migliore:0,ultimo:0},fogli=[],curF=null;
let mode='ex',cur=null,curOp=0,sub='reg',fsub='lg',saveTimer=null,saveFTimer=null,loadedEx=false,results=[];
let quiz=null;
const pal=$('pal');

/* ================= CORREZIONE ================= */
function sums(rows,sol){
  const alt=new Map();(sol||[]).forEach(r=>(r.alt||[]).forEach(a=>alt.set(a,r.c)));
  const m=new Map();
  rows.forEach(r=>{
    if(!r.c)return;const c=alt.get(r.c)||r.c;
    [['D',r.d],['A',r.a]].forEach(([s,v])=>{if(v>0){const k=c+'|'+s;m.set(k,Math.round(((m.get(k)||0)+v)*100)/100)}});
  });
  return m;
}
function grade(rawRows,sol){
  const msgs=[];
  const rows=rawRows.map(r=>({c:accOf(r.txt),txt:r.txt,d:parseAmt(r.d),a:parseAmt(r.a)})).filter(r=>r.txt||r.d||r.a);
  if(rows.length<2){return{ok:false,msgs:['Un articolo in partita doppia ha almeno due conti: uno in Dare e uno in Avere.']}}
  rows.forEach(r=>{
    if(r.c===null)msgs.push(`«${r.txt}» non è nel piano dei conti: scegli il conto dall’elenco.`);
    else if(!r.c)msgs.push('C’è un importo senza conto: scegli il conto o cancella la riga.');
    if(Number.isNaN(r.d)||Number.isNaN(r.a))msgs.push(`L’importo di «${r.txt||'una riga'}» non è un numero valido.`);
    if(r.c&&!(r.d>0)&&!(r.a>0))msgs.push(`Al conto ${accName(r.c)} manca l’importo.`);
    if(r.d>0&&r.a>0)msgs.push(`Il conto ${accName(r.c)} ha un importo sia in Dare sia in Avere: usa una sola sezione per riga.`);
  });
  const clean=rows.filter(r=>r.c).map(r=>({c:r.c,d:r.d>0?r.d:0,a:r.a>0?r.a:0}));
  const tD=rows.reduce((s,r)=>s+(r.d>0?r.d:0),0),tA=rows.reduce((s,r)=>s+(r.a>0?r.a:0),0);
  if(Math.abs(tD-tA)>0.005)msgs.push(`L’articolo non quadra: totale Dare ${fmt(tD)} e totale Avere ${fmt(tA)}.`);
  const S=sums(clean,sol),E=new Map();
  sol.forEach(r=>{const k=r.c+'|'+r.s;E.set(k,Math.round(((E.get(k)||0)+r.v)*100)/100)});
  const solCodes=new Set(sol.map(r=>r.c));
  S.forEach((v,k)=>{
    const[c,s]=k.split('|');
    if(E.has(k)){if(Math.abs(E.get(k)-v)>0.005)msgs.push(`L’importo del conto ${accName(c)} non è corretto.`)}
    else if(solCodes.has(c))msgs.push(`Il conto ${accName(c)} è nella sezione sbagliata: ricontrolla se va in ${s==='D'?'Avere':'Dare'}.`);
    else msgs.push(`Il conto ${accName(c)} non serve in questa operazione.`);
  });
  const missing=[];E.forEach((v,k)=>{const[c]=k.split('|');if(!S.has(k)&&![...S.keys()].some(x=>x.startsWith(c+'|')))missing.push(c)});
  if(missing.length){
    const f=missing.filter(c=>natura(c)==='finanziario').length,e=missing.length-f;
    const parts=[];if(f)parts.push(f===1?'un conto finanziario':f+' conti finanziari');if(e)parts.push(e===1?'un conto economico':e+' conti economici');
    msgs.push(`Manca ${parts.join(' e ')}.`);
  }
  return{ok:msgs.length===0,msgs:[...new Set(msgs)]};
}

/* ================= SALVATAGGI (solo nel browser dello studente: nessun dato lascia il dispositivo) ================= */
const KEY_P='pd3-progressi',KEY_F='pd3-fogli',KEY_ME='pd3-profilo';
let profilo={nome:'',classe:''},storageOk=true;
function lsGet(k,def){try{const v=JSON.parse(localStorage.getItem(k)||'null');return v==null?def:v}catch(e){return def}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}
function P(exId){return progress[exId]||(progress[exId]={ops:{}})}
function OP(exId,i){const p=P(exId);return p.ops[i]||(p.ops[i]={rows:[],st:'',tries:0,hints:0})}
function summary(){
  const out={};
  exercises.forEach(ex=>{const p=progress[ex._id];if(!p)return;const n=(ex.operazioni||[]).length;let ok=0,sol=0,primo=0,tent=0;
    for(let i=0;i<n;i++){const o=p.ops[i];if(!o)continue;tent+=o.tries||0;if(o.st==='ok'){ok++;if(o.tries===1&&!o.hints)primo++}else if(o.st==='sol')sol++}
    if(tent||ok||sol)out[ex._id]={n,ok,sol,primo,tent}});
  return out;
}
function saveSoon(){clearTimeout(saveTimer);saveTimer=setTimeout(()=>{storageOk=lsSet(KEY_P,{ex:progress,quiz:quizStats})},400)}
function saveFogli(){clearTimeout(saveFTimer);saveFTimer=setTimeout(()=>{storageOk=lsSet(KEY_F,fogli)},500)}
function loadSaved(){
  const s=lsGet(KEY_P,null);if(s){progress=s.ex||{};quizStats=s.quiz||quizStats}
  const f=lsGet(KEY_F,null);if(Array.isArray(f))fogli=f;
  profilo=Object.assign({nome:'',classe:''},lsGet(KEY_ME,{}));
  storageOk=lsSet('pd3-prova',1);
}
function exStats(ex){
  const n=(ex.operazioni||[]).length;let ok=0,sol=0;
  for(let i=0;i<n;i++){const o=(progress[ex._id]||{ops:{}}).ops[i];if(o&&o.st==='ok')ok++;else if(o&&o.st==='sol')sol++}
  return{n,ok,sol};
}

/* ================= STRUTTURA DELLA PALESTRA ================= */
function navHtml(){
  const m=[['ex','Esercizi guidati'],['foglio','Foglio libero'],['natura','Natura dei conti'],['me','Il mio resoconto']];
  return `<div class="palnav" role="group" aria-label="Sezioni della palestra">${m.map(([k,l])=>`<button type="button" data-mode="${k}" aria-pressed="${mode===k}">${l}</button>`).join('')}</div>${legendHtml()}`;
}
function paint(html){pal.innerHTML=navHtml()+html}
function render(){
  if(mode==='foglio')return renderFoglio();
  if(mode==='natura')return renderNatura();
  if(mode==='me')return renderMe();
  if(cur)return renderWs();
  return renderList();
}

/* ================= ESERCIZI GUIDATI: ELENCO ================= */
function renderList(){
  cur=null;
  if(!loadedEx)return paint(`<div class="notice"><h2>Carico gli esercizi…</h2><p>Un momento.</p></div>`);
  const vis=exercises.filter(e=>editor||!e.bozza).sort((a,b)=>(a.ordine||0)-(b.ordine||0));
  const head=`<div class="pal-intro"><p>Registra ogni operazione nel libro giornale scegliendo i conti dal piano dei conti. Premi <b>Verifica</b>: la palestra ti dice se l’articolo è corretto e, se non lo è, dove ricontrollare.</p>${editor?`<button class="btn primary" type="button" data-newex>+ Nuovo esercizio</button>`:''}</div>`;
  if(!vis.length)return paint(head+`<div class="empty"><h2>Nessun esercizio disponibile</h2><p>${editor?'Crea il primo esercizio con il pulsante qui sopra.':'Gli esercizi compariranno qui quando la docente li pubblica.'}</p></div>`);
  const groups=TOPICS.concat(['Altro']).map(t=>({t,items:vis.filter(e=>(TOPICS.includes(e.argomento)?e.argomento:'Altro')===t)})).filter(g=>g.items.length);
  paint(head+groups.map(g=>`<section class="exgroup"><h3>${esc(g.t)}</h3><div class="exgrid">${g.items.map(e=>{
    const s=exStats(e);const pOk=s.n?s.ok/s.n*100:0,pSol=s.n?s.sol/s.n*100:0;
    return `<button type="button" class="excard" data-ex="${esc(e._id)}"><div class="meta"><span>${'●'.repeat(e.livello||1)}${'○'.repeat(3-(e.livello||1))}</span><span>${s.n} operazioni</span>${e.bozza?'<span class="tag draft">Bozza</span>':''}</div><h4>${esc(e.titolo)}</h4><div class="progress" aria-hidden="true"><i class="ok" style="width:${pOk}%"></i><i class="sol" style="width:${pSol}%"></i></div><small>${s.ok?`${s.ok} di ${s.n} corrette`:'Da iniziare'}${s.sol?` · ${s.sol} con soluzione`:''}</small></button>`}).join('')}</div></section>`).join(''));
}

/* ================= ESERCIZI GUIDATI: AREA DI LAVORO ================= */
function openEx(id,op){
  cur=exercises.find(e=>e._id===id);if(!cur)return renderList();
  curOp=op!=null?op:Math.max(0,(cur.operazioni||[]).findIndex((o,i)=>OP(cur._id,i).st!=='ok'));
  if(curOp<0)curOp=0;sub='reg';renderWs();
  pal.scrollIntoView({block:'start'});
}
function rowState(r){
  const c=accOf(r.txt);const side=parseAmt(r.d)>0?'D':parseAmt(r.a)>0?'A':null;
  return{c,v:c?variation(c,side):null};
}
function journalRows(rows,ro,delAttr){
  delAttr=delAttr||'data-del';
  return rows.map((r,i)=>{
    const st=rowState(r);const cls=rowCls(st.v);
    if(ro)return `<tr class="${cls}"><td class="code">${st.c||''}</td><td>${esc(st.c?accName(st.c):r.txt)}</td><td class="n">${parseAmt(r.d)>0?fmt(parseAmt(r.d)):''}</td><td class="n">${parseAmt(r.a)>0?fmt(parseAmt(r.a)):''}</td><td class="vc">${chip(st.v)}</td></tr>`;
    return `<tr class="${cls}" data-i="${i}"><td class="code">${st.c||''}</td>
      <td class="acc"><input list="pianoList" data-f="txt" value="${esc(r.txt)}" aria-label="Conto riga ${i+1}" placeholder="Scrivi o scegli il conto" class="${st.c===null?'bad':''}" autocomplete="off"></td>
      <td><input class="amt" data-f="d" inputmode="decimal" value="${esc(r.d)}" aria-label="Dare riga ${i+1}"></td>
      <td><input class="amt" data-f="a" inputmode="decimal" value="${esc(r.a)}" aria-label="Avere riga ${i+1}"></td>
      <td class="vc">${chip(st.v)}</td>
      <td class="x"><button type="button" class="btn ghost small" ${delAttr}="${i}" aria-label="Elimina riga ${i+1}">✕</button></td></tr>`;
  }).join('');
}
function totals(rows){let d=0,a=0;rows.forEach(r=>{const x=parseAmt(r.d),y=parseAmt(r.a);if(x>0)d+=x;if(y>0)a+=y});return{d,a}}
function footRow(rows,ro){
  const t=totals(rows);const ok=Math.abs(t.d-t.a)<0.005&&t.d>0;
  return `<tr><td></td><td>Totali ${t.d||t.a?`<span class="balance ${ok?'ok':'ko'}">· ${ok?'quadra':'non quadra'}</span>`:''}</td><td class="n">${fmt(t.d)}</td><td class="n">${fmt(t.a)}</td><td></td>${ro?'':'<td></td>'}</tr>`;
}
/* aggiorna codice, colore e totali di una tabella senza ridisegnarla (il cursore resta dov'è) */
function refreshTable(tbody,rows,tfoot){
  tbody.querySelectorAll('tr').forEach(tr=>{
    const r=rows[+tr.dataset.i];if(!r)return;const st=rowState(r);
    tr.className=rowCls(st.v);
    tr.querySelector('.code').textContent=st.c||'';
    tr.querySelector('.vc').innerHTML=chip(st.v);
    tr.querySelector('[data-f="txt"]').classList.toggle('bad',st.c===null&&!!r.txt.trim());
  });
  if(tfoot)tfoot.innerHTML=footRow(rows,false);
}
function exEntries(ex){
  const out=[];(ex.operazioni||[]).forEach((op,i)=>{
    const o=(progress[ex._id]||{ops:{}}).ops[i];if(!o)return;
    const rows=o.st==='sol'?op.righe.map(r=>({txt:accLabel(r.c),d:r.s==='D'?fmt(r.v):'',a:r.s==='A'?fmt(r.v):''})):o.rows;
    rows.forEach(r=>{const c=accOf(r.txt),d=parseAmt(r.d),a=parseAmt(r.a);if(c&&(d>0||a>0))out.push({grp:i,data:op.data,descr:'',c,d:d>0?d:0,a:a>0?a:0,st:o.st})});
  });return out;
}
function renderWs(){
  const ex=cur,ops=ex.operazioni||[],op=ops[curOp],o=OP(ex._id,curOp);
  if(!o.rows.length)o.rows=[{txt:'',d:'',a:''},{txt:'',d:'',a:''}];
  const stepBtns=ops.map((x,i)=>{const s=OP(ex._id,i).st;return `<button type="button" data-op="${i}" class="${i===curOp?'cur ':''}${s}" aria-label="Operazione ${i+1}${s==='ok'?', corretta':s==='ko'?', da correggere':s==='sol'?', soluzione vista':''}" ${i===curOp?'aria-current="step"':''}>${i+1}</button>`}).join('');
  const subs=[['reg','Registra'],['lg','Libro giornale'],['ma','Mastrini'],['sc','Situazione contabile'],['sd','Per destinazione']];
  let body='';
  if(sub==='reg'){
    const locked=o.st==='ok'||o.st==='sol';
    body=`<div class="opcard">
      <div class="optext"><time>${esc(op.data||'')}</time><span>${esc(op.testo)}</span></div>
      <div class="jwrap"><table class="j${locked?' ro':''}"><thead><tr><th>Codice</th><th>Conto</th><th class="n">Dare</th><th class="n">Avere</th><th>Var.</th>${locked?'':'<th><span class="sr">Azioni</span></th>'}</tr></thead>
      <tbody id="jb">${journalRows(o.rows,locked)}</tbody><tfoot id="jf">${footRow(o.rows,locked)}</tfoot></table></div>
      <div class="opbar">${locked?`<button type="button" class="btn small" data-redo>Rifai l’operazione</button>`:`<button type="button" class="btn small" data-addrow>+ Riga</button><button type="button" class="btn primary" data-verify>Verifica</button><button type="button" class="btn" data-hint>Suggerimento</button>${o.tries>=2||o.hints>=2?`<button type="button" class="btn ghost" data-sol>Mostra la soluzione</button>`:''}`}
        <span class="spacer"></span>${curOp<ops.length-1?`<button type="button" class="btn${o.st==='ok'?' primary':''}" data-next>Operazione successiva →</button>`:`<button type="button" class="btn" data-back>Torna agli esercizi</button>`}</div>
      <div id="fb" aria-live="polite">${feedbackHtml(o)}</div>
    </div>`;
  }else{
    const E=exEntries(ex);
    body=sub==='lg'?lgHtml(E,'Il libro giornale si riempie man mano che registri le operazioni.',true):sub==='ma'?mastriHtml(E):sub==='sc'?scHtml(E):sdHtml(E);
  }
  paint(`<div class="ws">
    <div class="ws-head"><div><div class="tmeta"><span>${esc(ex.argomento||'')}</span>${ex.bozza?'<span class="tag draft">Bozza</span>':''}</div><h2>${esc(ex.titolo)}</h2></div>
      <div class="tactions">${editor?`<button class="btn small" type="button" data-editex>Modifica esercizio</button>`:''}<button class="btn small" type="button" data-back>← Tutti gli esercizi</button></div></div>
    ${ex.intro?`<div class="traccia"><b>TRACCIA</b>${esc(ex.intro)}</div>`:''}
    <div class="steps" role="list" aria-label="Operazioni">${stepBtns}</div>
    <div class="subtabs" role="group" aria-label="Vista">${subs.map(([k,l])=>`<button type="button" data-sub="${k}" aria-pressed="${sub===k}">${l}</button>`).join('')}</div>
    ${body}
  </div>`);
}
function feedbackHtml(o){
  if(o.st==='ok')return `<div class="fb ok"><h3>Corretto</h3><p style="margin:0">L’articolo è registrato bene${o.tries>1?` (dopo ${o.tries} tentativi)`:' al primo tentativo'}. I colori mostrano la natura di ogni conto e la variazione che registra.</p></div>`;
  if(o.st==='sol')return `<div class="fb hint"><h3>Soluzione</h3><p style="margin:0">Questa è la registrazione corretta. Rileggi l’operazione e confrontala con il tuo tentativo, poi prova l’operazione successiva.</p></div>`;
  let h='';
  if(o.msgs&&o.msgs.length)h+=`<div class="fb ko"><h3>Da ricontrollare</h3><ul>${o.msgs.map(m=>`<li>${esc(m)}</li>`).join('')}</ul></div>`;
  if(o.hints>0){
    const sol=cur.operazioni[curOp].righe;const nd=sol.filter(r=>r.s==='D').length,na=sol.length-nd;
    let t=`<li>L’articolo ha ${sol.length} righe: ${nd} in Dare e ${na} in Avere.</li>`;
    if(o.hints>1)t+=`<li>Conti in Dare: ${[...new Set(sol.filter(r=>r.s==='D').map(r=>accName(r.c)))].join(', ')}.</li><li>Conti in Avere: ${[...new Set(sol.filter(r=>r.s==='A').map(r=>accName(r.c)))].join(', ')}.</li>`;
    h+=`<div class="fb hint"><h3>Suggerimento</h3><ul>${t}</ul></div>`;
  }
  return h;
}

/* ================= PROSPETTI: libro giornale, mastrini, situazioni contabili ================= */
function lgHtml(E,emptyMsg,withEsito){
  if(!E.length)return `<p class="empty-note">${emptyMsg}</p>`;
  let n=0,prev=null;const t=E.reduce((s,x)=>({d:s.d+x.d,a:s.a+x.a}),{d:0,a:0});
  return `<div class="jwrap"><table class="j ro"><thead><tr><th>Nr.</th><th>Data</th><th>Codice</th><th>Conto</th><th>Descrizione</th><th class="n">Dare</th><th class="n">Avere</th>${withEsito?'<th>Esito</th>':''}</tr></thead><tbody>${E.map(x=>{const sep=prev!==null&&x.grp!==prev;prev=x.grp;n++;
    return `<tr class="${sep?'sep ':''}${rowCls(variation(x.c,x.d?'D':'A'))}"><td>${n}</td><td>${esc(x.data||'')}</td><td class="code">${x.c}</td><td>${esc(accName(x.c))}</td><td>${esc(x.descr||'')}</td><td class="n">${x.d?fmt(x.d):''}</td><td class="n">${x.a?fmt(x.a):''}</td>${withEsito?`<td>${x.st==='ok'?'<span class="vchip g">corretta</span>':x.st==='sol'?'<span class="vchip k">soluzione</span>':x.st==='ko'?'<span class="vchip r">da correggere</span>':'<span class="vchip k">non verificata</span>'}</td>`:''}</tr>`}).join('')}</tbody>
    <tfoot><tr><td></td><td></td><td></td><td>Totali</td><td></td><td class="n">${fmt(t.d)}</td><td class="n">${fmt(t.a)}</td>${withEsito?'':''}<td>${Math.abs(t.d-t.a)<0.005?'<span class="balance ok">quadra</span>':'<span class="balance ko">non quadra</span>'}</td></tr></tfoot></table></div>`;
}
function ledger(E){
  const m=new Map();E.forEach(x=>{if(!m.has(x.c))m.set(x.c,{c:x.c,D:[],A:[]});const L=m.get(x.c);if(x.d)L.D.push(x);if(x.a)L.A.push(x)});
  return [...m.values()].map(a=>{a.td=a.D.reduce((s,x)=>s+x.d,0);a.ta=a.A.reduce((s,x)=>s+x.a,0);return a}).sort((a,b)=>a.c.localeCompare(b.c));
}
function natTag(c){const a=ACC.get(c);if(!a)return '';const k=a.nat==='F'?'f':(NATCOL[a.nat]||'k');return `<span class="nt nt-${k}">${a.nat==='F'?'Finanziario':a.nat==='T'?'Transitorio':(NAT[a.nat]||'').replace('Economico · ','Econ. ')}</span>`}
function mastriHtml(E){
  const L=ledger(E);if(!L.length)return `<p class="empty-note">I conti di mastro compaiono quando registri le prime scritture.</p>`;
  return `<div class="mastri">${L.map(a=>{const sal=a.td-a.ta;const nat=(ACC.get(a.c)||{}).nat;const k=nat==='F'?'f':(NATCOL[nat]||'k');
    return `<article class="taccount tk-${k}"><h4><span>${a.c}</span>${esc(accName(a.c))}</h4>${natTag(a.c)}<div class="tcols"><div>${a.D.map(x=>`<div class="e"><i>${esc(x.data||'')}</i>${fmt(x.d)}</div>`).join('')}</div><div>${a.A.map(x=>`<div class="e"><i>${esc(x.data||'')}</i>${fmt(x.a)}</div>`).join('')}</div></div>
      <div class="tsaldo">${Math.abs(sal)<0.005?'Saldo 0 · conto chiuso':`Saldo ${sal>0?'Dare':'Avere'} ${fmt(Math.abs(sal))}`}</div></article>`}).join('')}</div>`;
}
function scHtml(E){
  const L=ledger(E);if(!L.length)return `<p class="empty-note">La situazione contabile si compila con i saldi dei conti movimentati.</p>`;
  let T={d:0,a:0,ed:0,ea:0};
  const rows=L.map(a=>{const d=a.td,av=a.ta,ed=d>av?d-av:0,ea=av>d?av-d:0;T.d+=d;T.a+=av;T.ed+=ed;T.ea+=ea;
    return `<tr><td class="code">${a.c}</td><td>${esc(accName(a.c))} ${natTag(a.c)}</td><td class="n">${d?fmt(d):''}</td><td class="n">${av?fmt(av):''}</td><td class="n">${ed>0.004?fmt(ed):''}</td><td class="n">${ea>0.004?fmt(ea):''}</td></tr>`}).join('');
  const ok=Math.abs(T.d-T.a)<0.005;
  return `<div class="jwrap"><table class="j ro"><thead><tr><th>Codice</th><th>Conto</th><th class="n">Totale Dare</th><th class="n">Totale Avere</th><th class="n">Eccedenza Dare</th><th class="n">Eccedenza Avere</th></tr></thead><tbody>${rows}</tbody>
    <tfoot><tr><td></td><td>Totali <span class="balance ${ok?'ok':'ko'}">· ${ok?'quadra':'non quadra'}</span></td><td class="n">${fmt(T.d)}</td><td class="n">${fmt(T.a)}</td><td class="n">${fmt(T.ed)}</td><td class="n">${fmt(T.ea)}</td></tr></tfoot></table></div>`;
}
/* situazione contabile per destinazione: SP (attività / passività e netto) e SE (costi / ricavi), con il saldo economico */
function sdHtml(E){
  const L=ledger(E).filter(a=>Math.abs(a.td-a.ta)>0.004);if(!L.length)return `<p class="empty-note">La situazione per destinazione si compila con i saldi dei conti movimentati.</p>`;
  const sp={D:[],A:[]},se={D:[],A:[]};
  L.forEach(a=>{const acc=ACC.get(a.c)||{};const s=a.td-a.ta;const side=s>0?'D':'A';const isSE=acc.dest==='SC'||acc.dest==='SR';(isSE?se:sp)[side].push({c:a.c,v:Math.abs(s)})});
  const sum=l=>l.reduce((s,x)=>s+x.v,0);
  const cost=sum(se.D),ric=sum(se.A),res=ric-cost;
  const li=l=>l.map(x=>`<div class="sdrow"><span>${esc(accName(x.c))}</span><span>${fmt(x.v)}</span></div>`).join('');
  const att=sum(sp.D),pas=sum(sp.A);
  const extraSP=res<-0.004?{side:'D',t:'Saldo economico negativo (perdita)',v:-res}:res>0.004?{side:'A',t:'Saldo economico positivo (utile)',v:res}:null;
  const extraSE=res>0.004?{side:'D',t:'Saldo economico positivo (utile)',v:res}:res<-0.004?{side:'A',t:'Saldo economico negativo (perdita)',v:-res}:null;
  const col=(title,list,extra,side)=>`<div class="sdcol"><h4>${title}</h4>${li(list)||'<div class="sdrow empty-note"><span>—</span></div>'}${extra&&extra.side===side?`<div class="sdrow res"><span>${extra.t}</span><span>${fmt(extra.v)}</span></div>`:''}<div class="sdrow tot"><span>Totale</span><span>${fmt(sum(list)+(extra&&extra.side===side?extra.v:0))}</span></div></div>`;
  return `<div class="sdbox"><h3>Situazione patrimoniale</h3><div class="sdgrid">${col('Attività',sp.D,extraSP,'D')}${col('Passività e netto',sp.A,extraSP,'A')}</div></div>
    <div class="sdbox"><h3>Situazione economica</h3><div class="sdgrid">${col('Costi',se.D,extraSE,'D')}${col('Ricavi',se.A,extraSE,'A')}</div></div>
    <p class="empty-note">I conti si dispongono secondo la loro destinazione (SP o SE) e la sezione in cui hanno l’eccedenza. Se tutte le scritture quadrano, i totali delle due colonne coincidono.</p>`;
}

/* ================= FOGLIO LIBERO (come il libro giornale di T-SMART) ================= */
const newArt=()=>({data:'',descr:'',rows:[{txt:'',d:'',a:''},{txt:'',d:'',a:''}]});
function ensureFoglio(){
  if(!fogli.length)fogli.push({id:'f'+Date.now().toString(36),nome:'Foglio 1',articoli:[newArt()]});
  if(!curF||!fogli.find(f=>f.id===curF))curF=fogli[0].id;
  return fogli.find(f=>f.id===curF);
}
function artState(a){const t=totals(a.rows);const any=t.d>0||t.a>0;const ok=any&&Math.abs(t.d-t.a)<0.005;
  const bad=a.rows.some(r=>r.txt.trim()&&accOf(r.txt)===null);return{t,any,ok,bad}}
function artStatusHtml(a){const s=artState(a);
  if(!s.any)return '<span class="vchip k">vuoto</span>';
  if(s.bad)return '<span class="vchip r">conto non valido</span>';
  return s.ok?'<span class="vchip g">quadra</span>':`<span class="vchip r">non quadra · differenza ${fmt(Math.abs(s.t.d-s.t.a))}</span>`}
function fEntries(f){
  const out=[];f.articoli.forEach((a,i)=>a.rows.forEach(r=>{const c=accOf(r.txt),d=parseAmt(r.d),a2=parseAmt(r.a);if(c&&(d>0||a2>0))out.push({grp:i,data:a.data,descr:a.descr,c,d:d>0?d:0,a:a2>0?a2:0})}));return out;
}
let delF=false,delArt=-1;
function countHtml(f){const nOk=f.articoli.filter(a=>artState(a).ok).length,nTot=f.articoli.filter(a=>artState(a).any).length;return nTot?`${nOk} articoli su ${nTot} quadrano`:'Scrivi il primo articolo'}
function renderFoglio(){
  const f=ensureFoglio();
  const subs=[['lg','Libro giornale'],['ma','Mastrini'],['sc','Situazione contabile'],['sd','Per destinazione']];
  const nOk=f.articoli.filter(a=>artState(a).ok).length,nTot=f.articoli.filter(a=>artState(a).any).length;
  let body='';
  if(fsub==='lg'){
    body=`<div class="arts">${f.articoli.map((a,i)=>`<article class="art" data-art="${i}">
      <div class="art-h"><span class="art-n">Art. ${i+1}</span>
        <div class="field inl"><label for="ad${i}">Data</label><input id="ad${i}" data-af="data" value="${esc(a.data)}" placeholder="gg/mm"></div>
        <div class="field inl grow"><label for="ade${i}">Descrizione</label><input id="ade${i}" data-af="descr" value="${esc(a.descr)}" placeholder="Es. fattura n. 12 di Alfa srl"></div>
        <span class="art-st" aria-live="polite">${artStatusHtml(a)}</span>
        ${delArt===i?`<button type="button" class="btn small danger" data-artdel-ok="${i}">Conferma</button><button type="button" class="btn small" data-artdel-no>Annulla</button>`:`<button type="button" class="btn ghost small" data-artdel="${i}" aria-label="Elimina articolo ${i+1}">Elimina</button>`}</div>
      <div class="jwrap"><table class="j"><thead><tr><th>Codice</th><th>Conto</th><th class="n">Dare</th><th class="n">Avere</th><th>Var.</th><th><span class="sr">Azioni</span></th></tr></thead><tbody>${journalRows(a.rows,false,'data-frow-del')}</tbody><tfoot>${footRow(a.rows,false)}</tfoot></table></div>
      <div><button type="button" class="btn small" data-frow-add="${i}">+ Riga</button></div></article>`).join('')}</div>
      <div class="opbar"><button type="button" class="btn primary" data-artadd>+ Nuovo articolo</button><span class="spacer"></span><span class="empty-note" id="fCount">${countHtml(f)}</span></div>`;
  }else{
    const E=fEntries(f);
    body=fsub==='ma'?mastriHtml(E):fsub==='sc'?scHtml(E):sdHtml(E);
  }
  paint(`<div class="ws">
    <div class="pal-intro"><p>Un libro giornale libero, come il foglio T-SMART: scrivi le scritture in partita doppia di un esercizio che hai sul libro o sulla fotocopia. Ogni articolo viene controllato mentre scrivi; mastrini e situazioni contabili si aggiornano da soli.</p></div>
    <div class="fbar">
      <div class="field inl"><label for="fSel">Foglio</label><select id="fSel">${fogli.map(x=>`<option value="${esc(x.id)}"${x.id===f.id?' selected':''}>${esc(x.nome)}</option>`).join('')}</select></div>
      <div class="field inl"><label for="fName">Nome</label><input id="fName" value="${esc(f.nome)}" maxlength="60"></div>
      <button type="button" class="btn small" data-fnew>+ Nuovo foglio</button>
      ${delF?`<button type="button" class="btn small danger" data-fdel-ok>Conferma eliminazione</button><button type="button" class="btn small" data-fdel-no>Annulla</button>`:`<button type="button" class="btn ghost small" data-fdel>Elimina foglio</button>`}
    </div>
    <div class="subtabs" role="group" aria-label="Vista">${subs.map(([k,l])=>`<button type="button" data-fsub="${k}" aria-pressed="${fsub===k}">${l}</button>`).join('')}</div>
    ${body}</div>`);
}

/* ================= NATURA DEI CONTI ================= */
const QUIZ_POOL=()=>PIANO.filter(a=>a.dest&&NAT[a.nat]&&a.c!=='90.01');
function newQuiz(n){
  const pool=QUIZ_POOL().slice();for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
  const k=n==='all'?pool.length:Math.min(+n,pool.length);
  quiz={n:String(n),showCode:quiz?quiz.showCode:false,checked:false,items:pool.slice(0,k).map(a=>({c:a.c,nat:'',dest:''}))};
}
function renderNatura(){
  if(!quiz)newQuiz(20);
  const natOpts=Object.entries(NAT),destOpts=Object.entries(DEST);
  let ok1=0,ok2=0;
  const rows=quiz.items.map((it,i)=>{const a=ACC.get(it.c);const g1=it.nat===a.nat,g2=it.dest===a.dest;if(g1)ok1++;if(g2)ok2++;
    const k=a.nat==='F'?'f':NATCOL[a.nat];
    return `<tr data-q="${i}" class="${quiz.checked?(g1&&g2?'qok':'qko'):''}"><td>${i+1}</td><td><b>${esc(a.n)}</b>${quiz.showCode?` <span class="code">${a.c}</span>`:''}${quiz.checked?`<div class="qsol"><span class="nt nt-${k}">${NAT[a.nat]}</span> · ${a.desc} · ${DEST[a.dest]}</div>`:''}</td>
      <td><select data-qf="nat" aria-label="Natura di ${esc(a.n)}" ${quiz.checked?'disabled':''} class="${quiz.checked?(g1?'sok':'sko'):''}"><option value="">Scegli…</option>${natOpts.map(([v,l])=>`<option value="${v}"${it.nat===v?' selected':''}>${l}</option>`).join('')}</select></td>
      <td><select data-qf="dest" aria-label="Destinazione di ${esc(a.n)}" ${quiz.checked?'disabled':''} class="${quiz.checked?(g2?'sok':'sko'):''}"><option value="">Scegli…</option>${destOpts.map(([v,l])=>`<option value="${v}"${it.dest===v?' selected':''}>${l}</option>`).join('')}</select></td></tr>`}).join('');
  const n=quiz.items.length,pct=n?Math.round((ok1+ok2)/(2*n)*100):0;const filled=quiz.items.filter(x=>x.nat&&x.dest).length;
  paint(`<div class="ws">
    <div class="pal-intro"><p>Per ogni conto scegli la <b>natura</b> (finanziario oppure economico, e in questo caso a quale tipo di valori è acceso) e la <b>destinazione</b> nella situazione contabile: Situazione patrimoniale (attività o passività e netto) o Situazione economica (costi o ricavi), secondo la sezione in cui il conto ha l’eccedenza.</p></div>
    <div class="fbar">
      <div class="field inl"><label for="qN">Quanti conti</label><select id="qN">${['20','30','40','60','all'].map(v=>`<option value="${v}"${quiz.n===v?' selected':''}>${v==='all'?'Tutti ('+QUIZ_POOL().length+')':v}</option>`).join('')}</select></div>
      <label class="tog2"><input type="checkbox" id="qCode"${quiz.showCode?' checked':''}> Mostra il codice del conto</label>
      <button type="button" class="btn small" data-qnew>Nuova estrazione</button>
      ${quizStats.prove?`<span class="empty-note">Prove fatte: ${quizStats.prove} · miglior risultato ${quizStats.migliore}%</span>`:''}
    </div>
    ${quiz.checked?`<div class="fb ${pct>=80?'ok':pct>=50?'hint':'ko'}"><h3>Risultato: ${pct}%</h3><p style="margin:0">Natura corretta in ${ok1} conti su ${n} · destinazione corretta in ${ok2} conti su ${n}. Sotto ogni conto trovi la risposta giusta.</p></div>`:''}
    <div class="jwrap"><table class="j quiz"><thead><tr><th>Nr.</th><th>Conto</th><th>Natura</th><th>Destinazione</th></tr></thead><tbody>${rows}</tbody></table></div>
    <div class="opbar">${quiz.checked?`<button type="button" class="btn primary" data-qnew>Nuova estrazione</button>`:`<button type="button" class="btn primary" data-qcheck>Correggi</button><span class="empty-note">${filled} di ${n} completati</span>`}</div>
  </div>`);
}

/* ================= IL MIO RESOCONTO (file da consegnare all'insegnante) ================= */
/* la firma segnala all'insegnante se il file è stato modificato a mano dopo il download */
function firma(o){const s='pd3|'+JSON.stringify(o);let h=0x811c9dc5;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0}return h.toString(16).padStart(8,'0')}
let resetArm=false;
function renderMe(){
  const exs=exercises.slice().sort((a,b)=>(a.ordine||0)-(b.ordine||0));
  const S=summary();let ok=0,tot=0;
  const rows=exs.map((ex,i)=>{const n=(ex.operazioni||[]).length;tot+=n;const s=S[ex._id];if(s)ok+=s.ok;
    return `<tr><td>${i+1}</td><td>${esc(ex.titolo)}</td><td class="n"><span class="vchip ${!s?'k':s.ok===n?'g':s.ok?'b':'r'}">${s?s.ok:0}/${n}</span></td><td class="n">${s?s.primo:0}</td><td class="n">${s?s.sol:0}</td><td class="n">${s?s.tent:0}</td></tr>`}).join('');
  paint(`<div class="ws">
    <div class="pal-intro"><p>I tuoi progressi sono salvati solo in questo browser, su questo dispositivo. Per consegnarli all’insegnante scrivi nome e classe e scarica il resoconto: è un piccolo file da caricare sulla piattaforma della scuola, come un compito.</p></div>
    ${storageOk?'':'<div class="fb ko"><h3>Il browser non salva i progressi</h3><p style="margin:0">Succede per esempio in navigazione privata. Scarica il resoconto prima di chiudere la pagina.</p></div>'}
    <div class="fbar">
      <div class="field inl grow"><label for="meName">Nome e cognome</label><input id="meName" value="${esc(profilo.nome)}" maxlength="60" autocomplete="name"></div>
      <div class="field inl"><label for="meClasse">Classe</label><input id="meClasse" value="${esc(profilo.classe)}" maxlength="12" placeholder="3EE"></div>
      <button type="button" class="btn primary" data-download>Scarica il mio resoconto</button>
    </div>
    <p class="formerr" id="meErr" hidden></p>
    <div class="jwrap"><table class="j ro"><thead><tr><th>Nr.</th><th>Esercizio guidato</th><th class="n">Corrette</th><th class="n">Al primo tentativo</th><th class="n">Soluzioni viste</th><th class="n">Verifiche</th></tr></thead><tbody>${rows}</tbody>
    <tfoot><tr><td></td><td>Totale</td><td class="n">${ok}/${tot}</td><td></td><td></td><td></td></tr></tfoot></table></div>
    <div class="traccia"><b>NATURA DEI CONTI</b>${quizStats.prove?`Prove fatte: ${quizStats.prove} · miglior risultato ${quizStats.migliore}% · ultimo risultato ${quizStats.ultimo}%`:'Non hai ancora fatto prove.'}</div>
    <div class="opbar"><span class="spacer"></span>${resetArm?'<span class="formerr">Gli esercizi guidati e le prove sulla natura dei conti ripartono da zero. I fogli liberi restano.</span><button type="button" class="btn small danger" data-reset-ok>Conferma</button><button type="button" class="btn small" data-reset-no>Annulla</button>':'<button type="button" class="btn ghost small" data-reset>Azzera i miei progressi</button>'}</div>
  </div>`);
}
function downloadResoconto(){
  const nome=(profilo.nome||'').trim();
  if(!nome){const e=$('meErr');e.textContent='Scrivi nome e cognome prima di scaricare il resoconto.';e.hidden=false;$('meName').focus();return}
  const o={tipo:'resoconto-partita-doppia',versione:1,nome,classe:(profilo.classe||'').trim(),data:new Date().toISOString(),riepilogo:summary(),quiz:quizStats};
  o.firma=firma(o);
  const slug=nome.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'studente';
  const blob=new Blob([JSON.stringify(o,null,1)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`resoconto-${slug}-${o.data.slice(0,10)}.json`;
  document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),3000);
}

/* ================= EVENTI ================= */
pal.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.mode){mode=b.dataset.mode;if(mode==='ex')cur=null;delF=false;delArt=-1;resetArm=false;return render()}
  if(mode==='me'){
    if(b.hasAttribute('data-download'))return downloadResoconto();
    if(b.hasAttribute('data-reset')){resetArm=true;return renderMe()}
    if(b.hasAttribute('data-reset-no')){resetArm=false;return renderMe()}
    if(b.hasAttribute('data-reset-ok')){progress={};quizStats={prove:0,migliore:0,ultimo:0};resetArm=false;saveSoon();return renderMe()}
    return;
  }
  /* esercizi guidati */
  if(b.dataset.ex)return openEx(b.dataset.ex);
  if(b.hasAttribute('data-back')){cur=null;return renderList()}
  if(b.hasAttribute('data-newex'))return openEditor(null);
  if(b.hasAttribute('data-editex'))return openEditor(cur);
  /* foglio libero */
  if(mode==='foglio'){
    const f=ensureFoglio();
    if(b.dataset.fsub){fsub=b.dataset.fsub;return renderFoglio()}
    if(b.hasAttribute('data-artadd')){f.articoli.push(newArt());saveFogli();renderFoglio();const ins=pal.querySelectorAll('[data-af="data"]');ins[ins.length-1].focus();return}
    if(b.dataset.frowAdd!=null){f.articoli[+b.dataset.frowAdd].rows.push({txt:'',d:'',a:''});saveFogli();return renderFoglio()}
    if(b.dataset.frowDel!=null){const a=f.articoli[+b.closest('[data-art]').dataset.art];a.rows.splice(+b.dataset.frowDel,1);if(a.rows.length<2)a.rows.push({txt:'',d:'',a:''});saveFogli();return renderFoglio()}
    if(b.dataset.artdel!=null){delArt=+b.dataset.artdel;return renderFoglio()}
    if(b.hasAttribute('data-artdel-no')){delArt=-1;return renderFoglio()}
    if(b.dataset.artdelOk!=null){f.articoli.splice(+b.dataset.artdelOk,1);if(!f.articoli.length)f.articoli.push(newArt());delArt=-1;saveFogli();return renderFoglio()}
    if(b.hasAttribute('data-fnew')){const nf={id:'f'+Date.now().toString(36),nome:'Foglio '+(fogli.length+1),articoli:[newArt()]};fogli.push(nf);curF=nf.id;fsub='lg';saveFogli();renderFoglio();$('fName').focus();$('fName').select();return}
    if(b.hasAttribute('data-fdel')){delF=true;return renderFoglio()}
    if(b.hasAttribute('data-fdel-no')){delF=false;return renderFoglio()}
    if(b.hasAttribute('data-fdel-ok')){fogli=fogli.filter(x=>x.id!==f.id);curF=null;delF=false;saveFogli();return renderFoglio()}
    return;
  }
  /* natura dei conti */
  if(mode==='natura'){
    if(b.hasAttribute('data-qnew')){newQuiz(quiz?quiz.n:20);return renderNatura()}
    if(b.hasAttribute('data-qcheck')){
      quiz.checked=true;let ok=0;quiz.items.forEach(it=>{const a=ACC.get(it.c);if(it.nat===a.nat)ok++;if(it.dest===a.dest)ok++});
      const pct=Math.round(ok/(2*quiz.items.length)*100);quizStats={prove:(quizStats.prove||0)+1,migliore:Math.max(quizStats.migliore||0,pct),ultimo:pct};
      saveSoon();renderNatura();pal.scrollIntoView({block:'start'});return;
    }
    return;
  }
  if(!cur)return;
  const o=OP(cur._id,curOp);
  if(b.dataset.op!=null){curOp=+b.dataset.op;sub='reg';return renderWs()}
  if(b.dataset.sub){sub=b.dataset.sub;return renderWs()}
  if(b.hasAttribute('data-addrow')){o.rows.push({txt:'',d:'',a:''});renderWs();const ins=pal.querySelectorAll('[data-f="txt"]');ins[ins.length-1].focus();return}
  if(b.dataset.del!=null){o.rows.splice(+b.dataset.del,1);if(o.rows.length<2)o.rows.push({txt:'',d:'',a:''});saveSoon();return renderWs()}
  if(b.hasAttribute('data-verify')){
    const g=grade(o.rows,cur.operazioni[curOp].righe);o.tries++;o.msgs=g.msgs;o.st=g.ok?'ok':'ko';
    if(g.ok)o.rows=o.rows.filter(r=>r.txt||r.d||r.a).map(r=>({txt:accLabel(accOf(r.txt)),d:r.d,a:r.a}));
    saveSoon();renderWs();const fb=$('fb');if(fb)fb.scrollIntoView({block:'nearest'});return;
  }
  if(b.hasAttribute('data-hint')){o.hints=Math.min(2,o.hints+1);saveSoon();return renderWs()}
  if(b.hasAttribute('data-sol')){o.st='sol';o.rows=cur.operazioni[curOp].righe.map(r=>({txt:accLabel(r.c),d:r.s==='D'?fmt(r.v):'',a:r.s==='A'?fmt(r.v):''}));saveSoon();return renderWs()}
  if(b.hasAttribute('data-redo')){o.st='';o.msgs=[];o.rows=[{txt:'',d:'',a:''},{txt:'',d:'',a:''}];o.tries=0;o.hints=0;saveSoon();return renderWs()}
  if(b.hasAttribute('data-next')){curOp=Math.min(cur.operazioni.length-1,curOp+1);sub='reg';return renderWs()}
});
function onRowInput(inp,rows){
  const tr=inp.closest('tr');if(!tr||tr.dataset.i==null)return null;
  const r=rows[+tr.dataset.i];r[inp.dataset.f]=inp.value;
  if(inp.dataset.f==='d'&&inp.value.trim()){r.a='';tr.querySelector('[data-f="a"]').value=''}
  if(inp.dataset.f==='a'&&inp.value.trim()){r.d='';tr.querySelector('[data-f="d"]').value=''}
  return r;
}
pal.addEventListener('input',e=>{
  const inp=e.target;
  if(inp.id==='meName'||inp.id==='meClasse'){profilo[inp.id==='meName'?'nome':'classe']=inp.value;lsSet(KEY_ME,profilo);const er=$('meErr');if(er)er.hidden=true;return}
  if(mode==='foglio'){
    const f=ensureFoglio();
    if(inp.id==='fName'){f.nome=inp.value||'Foglio';const opt=$('fSel').querySelector(`option[value="${CSS.escape(f.id)}"]`);if(opt)opt.textContent=f.nome;saveFogli();return}
    const box=inp.closest('[data-art]');if(!box)return;const a=f.articoli[+box.dataset.art];
    if(inp.dataset.af){a[inp.dataset.af]=inp.value;saveFogli();return}
    if(inp.dataset.f&&onRowInput(inp,a.rows)){refreshTable(box.querySelector('tbody'),a.rows,box.querySelector('tfoot'));box.querySelector('.art-st').innerHTML=artStatusHtml(a);const fc=$('fCount');if(fc)fc.textContent=countHtml(f);saveFogli()}
    return;
  }
  if(!cur||!inp.dataset.f)return;
  const o=OP(cur._id,curOp);if(onRowInput(inp,o.rows)){if(o.st==='ko')o.st='';refreshTable($('jb'),o.rows,$('jf'));saveSoon()}
});
pal.addEventListener('change',e=>{
  const t=e.target;
  if(t.id==='fSel'){curF=t.value;delF=false;delArt=-1;return renderFoglio()}
  if(t.id==='qN'){newQuiz(t.value);return renderNatura()}
  if(t.id==='qCode'){quiz.showCode=t.checked;return renderNatura()}
  if(t.dataset.qf){const i=+t.closest('[data-q]').dataset.q;quiz.items[i][t.dataset.qf]=t.value;const s=pal.querySelector('.opbar .empty-note');if(s)s.textContent=`${quiz.items.filter(x=>x.nat&&x.dest).length} di ${quiz.items.length} completati`}
});
pal.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&mode==='ex'&&e.target.dataset&&e.target.dataset.f){e.preventDefault();const b=pal.querySelector('[data-verify]');if(b)b.click()}
});

/* ================= EDITOR ================= */
/* nel sito gli esercizi si aggiungono nel file contenuti.js */
function openEditor(){}

/* ================= SCHEDE DELLA PAGINA ================= */
function showTab(t){
  const p=t==='pal';$('tabArg').setAttribute('aria-selected',!p);$('tabPal').setAttribute('aria-selected',p);
  $('vArg').hidden=p;$('vPal').hidden=!p;
}
$('tabArg').addEventListener('click',()=>showTab('arg'));
$('tabPal').addEventListener('click',()=>showTab('pal'));
document.querySelector('.tabs').addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){const p=$('tabPal').getAttribute('aria-selected')==='true';showTab(p?'arg':'pal');(p?$('tabArg'):$('tabPal')).focus()}});
const H0=(location.hash||'').toLowerCase();
if(['#palestra','#foglio','#natura','#resoconto'].includes(H0)){showTab('pal');if(H0==='#foglio')mode='foglio';if(H0==='#natura')mode='natura';if(H0==='#resoconto')mode='me'}

/* ================= AVVIO ================= */
$('pianoList').innerHTML=PIANO.filter(a=>a.nat!=='O').map(a=>`<option value="${a.c} ${esc(a.n)}"></option>`).join('');
const SITO=window.SITO||{argomenti:[],esercizi:[]};
exercises=(SITO.esercizi||[]).filter(e=>!e.bozza).map(e=>({...e,_id:e.id}));
loadedEx=true;
loadSaved();
render();
})();
