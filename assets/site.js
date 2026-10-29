const button=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));nav?.classList.toggle('is-open',!open)});

const doctorSearch=document.querySelector('[data-doctor-search]');
const specialtyFilter=document.querySelector('[data-specialty-filter]');
const doctorCards=[...document.querySelectorAll('.doctor-card')];
const count=document.querySelector('[data-result-count]');
const empty=document.querySelector('[data-empty]');
function filterDoctors(){const query=(doctorSearch?.value||'').trim().toLocaleLowerCase('bg');const specialty=specialtyFilter?.value||'';let visible=0;doctorCards.forEach(card=>{const show=card.dataset.name.includes(query)&&(!specialty||card.dataset.specialty===specialty);card.hidden=!show;if(show)visible+=1});if(count)count.textContent=String(visible);if(empty)empty.hidden=visible!==0}
doctorSearch?.addEventListener('input',filterDoctors);specialtyFilter?.addEventListener('change',filterDoctors);

const topicSearch=document.querySelector('[data-topic-search]');
const topics=[...document.querySelectorAll('[data-topic]')];
function filterTopics(){const query=(topicSearch?.value||'').trim().toLocaleLowerCase('bg');let visible=0;topics.forEach(topic=>{topic.hidden=!topic.dataset.topic.includes(query);if(!topic.hidden)visible++});const topicCount=document.querySelector('[data-topic-count]');const topicEmpty=document.querySelector('[data-topic-empty]');if(topicCount)topicCount.textContent=`Намерени направления: ${visible}`;if(topicEmpty)topicEmpty.hidden=visible!==0;}
topicSearch?.addEventListener('input',filterTopics);
if(topicSearch)filterTopics();
nav?.addEventListener('keydown',event=>{if(event.key==='Escape'){nav.classList.remove('is-open');button?.setAttribute('aria-expanded','false');button?.focus()}});
