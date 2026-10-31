import {type ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {HeartPulse,X} from 'lucide-react';
import {jsPDF} from 'jspdf';
import {type Row} from './store';
export const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
export function Logo(){return <Link to="/clinic" className="brand"><span className="brand-icon"><HeartPulse size={25}/></span><span>suhrudaya<small>HEART CLINIC</small></span></Link>}
export function Badge({value}:{value:string}){return <span className={'badge '+value.toLowerCase().replaceAll(' ','-')}>{value}</span>}
export function Avatar({name}:{name:string}){return <span className={'avatar tone'+name.length%4}>{name.split(' ').map(x=>x[0]).slice(0,2).join('')}</span>}
export function Modal({title,children,close}:{title:string;children:ReactNode;close:()=>void}){return <div className="overlay" onClick={close}><section className="modal" role="dialog" aria-modal="true" aria-label={title} onClick={e=>e.stopPropagation()}><header><h2>{title}</h2><button className="icon-btn" aria-label="Close dialog" onClick={close}><X/></button></header>{children}</section></div>}
export function Heading({title,sub,children}:{title:string;sub:string;children?:ReactNode}){return <div className="page-heading"><div><h1>{title}</h1><p>{sub}</p></div><div className="heading-actions">{children}</div></div>}
export function pdf(row:Row,title:string){const doc=new jsPDF();doc.setTextColor(21,54,83);doc.setFontSize(21);doc.text('Suhrudaya Heart Clinic',20,24);doc.setFontSize(10);doc.text('Dr. P. V. Suresh - Pediatric & Adult Cardiologist',20,32);doc.text('Jayanagar, Bengaluru 560041 - +91 78299 93111',20,39);doc.text('DEMONSTRATION ONLY - NOT A VALID MEDICAL DOCUMENT',20,49);doc.setFontSize(16);doc.text(title,20,63);let y=76;Object.entries(row).filter(([k])=>k!=='fileData').forEach(([k,v])=>{const lines=doc.splitTextToSize(k+': '+v,170);if(y+lines.length*6>275){doc.addPage();y=20}doc.setFontSize(11);doc.text(lines,20,y);y+=lines.length*6+5});doc.save(row.id+'.pdf')}
