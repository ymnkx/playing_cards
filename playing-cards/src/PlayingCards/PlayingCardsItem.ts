import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { translateNum } from './PlayingCardsData';

@customElement('playing-cards-item')
export class PlayingCardsItem extends LitElement {
  @property()
  mark = '';
  @property({ type: Number })
  num = 0;

  static styles = css`
    :host {
      --color-red: #f33;
    }
    .box {
      padding: 0;
      padding: 1rem;
      border: 1px solid var(--color-black);
      border-style: dotted;
      font-size: 1.5rem;
      margin-right: 0.5rem;
      margin-top: 0.5rem;
      position: relative;
      width: 2em;
      height: 3.25em;
      text-align: center;
      border-radius: 0.25em;
    }
    .box.-red {
      border-color: var(--color-red);
      color: var(--color-red);
    }
  `;
  render() {
    return html`<div
      class="box ${this.mark === 'heart' || this.mark === 'diamond'
        ? '-red'
        : ''}"
    >
      <div class="num">${translateNum[this.num]}</div>
      <playing-cards-mark .mark=${this.mark}></playing-cards-mark>
    </div>`;
  }
}
