import React from 'react';

export default function DGEGCertBlock() {
  return (
    <section className="dgeg-cert" style={{background: '#f4f9fb', border: '1px solid #0a4d68', borderRadius: '8px', padding: '1.5rem', margin: '2rem auto', maxWidth: '920px'}}>
      <h2 style={{marginTop: 0, color: '#0a4d68', fontSize: '1.15rem'}}⚡ Tecnico Responsavel inscrito na DGEG</h2>
      <p style={{margin: 0, color: '#222'}}>
        <strong>Tecnico Responsavel de Instalacoes Eletricas inscrito na DGEG - TRIESP n. 90062</strong> (dominio Execucao em Baixa Tensao, instalacoes ate 41,4 kVA). Emitimos <strong>Ficha Eletrotecnica</strong> e <strong>Termo de Responsabilidade</strong> no final de cada intervencao. Seguro de responsabilidade civil valido (Lei n. 14/2015).
      </p>
      <p style={{margin: '0.75rem 0 0 0'}}>
        Ver guias detalhados: <a href="/quem-pode-emitir-ficha-eletrotecnica" style={{color: '#0a4d68', fontWeight: 700}}>Quem pode emitir?</a> · <a href="/ficha-eletrotecnica" style={{color: '#0a4d68', fontWeight: 700}}>Ficha Eletrotecnica</a> · <a href="/lei-14-2015" style={{color: '#0a4d68', fontWeight: 700}}>Lei 14/2015</a>
      </p>
    </section>
  );
}
