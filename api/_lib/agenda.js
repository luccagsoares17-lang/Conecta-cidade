// Regra compartilhada entre a API (Neon) e o modo sem banco (src/dados/local.js).
// Não importa nada do Node, para rodar também no navegador.

const recusa = (mensagem) => Object.assign(new Error(mensagem), { status: 400 });

// "Data e hora da publicação" (ex.: "quarta, 5/11, 18h") → instante no horário de Carajás (UTC−3).
export function horarioAgendado(texto) {
  const t = String(texto || '').toLowerCase();
  const data = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/.exec(t);
  const hora = /(\d{1,2})\s*(?:h|:)\s*(\d{2})?/.exec(t.replace(data ? data[0] : '', ''));
  if (!data || !hora) {
    throw recusa('Escreva a data e a hora da publicação, por exemplo: quarta, 5/11, 18h.');
  }
  const dia = Number(data[1]);
  const mes = Number(data[2]);
  const h = Number(hora[1]);
  const min = Number(hora[2] || 0);
  if (mes < 1 || mes > 12 || dia < 1 || dia > 31 || h > 23 || min > 59) {
    throw recusa('Confira a data e a hora da publicação.');
  }
  const agora = new Date();
  let ano = data[3] ? Number(data[3].length === 2 ? '20' + data[3] : data[3]) : agora.getUTCFullYear();
  const montar = (a) =>
    new Date(`${a}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}T${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}:00-03:00`);
  let quando = montar(ano);
  if (!data[3] && quando.getTime() < agora.getTime() - 86400000) quando = montar(++ano);
  if (Number.isNaN(quando.getTime())) throw recusa('Confira a data e a hora da publicação.');
  return quando.toISOString();
}
