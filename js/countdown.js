export default class Countdown {
  constructor(dataFutura) {
    this.dataFutura = dataFutura;
  }
  get _diferencaTempo() {
    return this._dataFutura.getTime() - this._dataAtual.getTime();
  }
  get _dataAtual() {
    return new Date();
  }
  get _dataFutura() {
    return new Date(this.dataFutura);
  }
  get _transDia() {
    return Math.floor(this._diferencaTempo / (1000 * 60 * 60 * 24));
  }
  get _transHora() {
    return Math.floor(this._diferencaTempo / (1000 * 60 * 60));
  }
  get _transMin() {
    return Math.floor(this._diferencaTempo / (1000 * 60));
  }
  get _transSeg() {
    return Math.floor(this._diferencaTempo / 1000);
  }
  get total() {
    const dia = this._transDia;
    const hora = this._transHora % 24;
    const min = this._transMin % 60;
    const seg = this._transSeg % 60;

    return { dia, hora, min, seg };
  }
}

const tempoParaNatal = new Countdown("24 December 2020 23:59:59 GMT-0300");
const contador = document.querySelector('[data-contador="display"]');

setInterval(() => {
  contador.innerText = `${tempoParaNatal.total.dia} dias ${tempoParaNatal.total.hora} horas ${tempoParaNatal.total.min} minutos ${tempoParaNatal.total.seg} segundos`;
}, 1);
