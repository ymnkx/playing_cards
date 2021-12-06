import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { playing_cards_data, CardType } from './PlayingCardsData';

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}
type ColorType = 'red' | 'black' | null;
type DivideType = 'even' | 'odd' | null;


@customElement('playing-cards')
export class PlayingCards extends LitElement {
  @property({ type: Array })
  data = playing_cards_data;

  @property({ type: String })
  divide: DivideType = null;

  @property({ type: String })
  color: ColorType = null;

  static styles = css`
    :host {
      --color-grey: #ccc;
    }
    .selector-wrapper {
      display: flex;
    }
    .selector-set {
      display: flex;
    }
    .selector-set + .selector-set {
      margin-left: 0.5rem;
    }
    .selector-set.-control {
      margin-left: auto;
      padding-left: 1rem;
    }
    .selector {
      cursor: pointer;
    }
    .selector input {
      display: none;
    }
    .selector span {
      padding: 0.25rem 1rem;
      border: 1px solid var(--color-black);
      box-sizing: border-box;
      font-size: 1rem;
      display: block;
    }
    .selector:not(:first-child) span {
      border-left: 0;
    }
    .selector input:checked + span {
      background-color: violet;
    }
    .selector-button {
      cursor: pointer;
      padding: 0.25rem 1rem;
      font-size: 1rem;
      background-color: var(--color-white);
      border: 1px solid var(--color-black);
    }
    .selector-button:disabled {
      border: 1px solid var(--color-grey);
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
    }
  `;

  render() {
    return html`<div>
      <div class="selector-wrapper">
        <div class="selector-set">
          ${['even', 'odd'].map((v) => {
            return html`<label for="pc-${v}" class="selector"
              ><input
                id="pc-${v}"
                type="radio"
                name="divide"
                value="${v}"
                .checked=${this.divide === v}
                @change=${() => (this.divide = v as DivideType)}
                @click=${this.cancelCheck}
              /><span>${v}</span></label
            >`;
          })}
        </div>
        <div class="selector-set">
          ${['red', 'black'].map((v) => {
            return html`<label for="pc-${v}" class="selector"
              ><input
                id="pc-${v}"
                type="radio"
                name="color"
                value="${v}"
                .checked=${this.color === v}
                @change=${() => (this.color = v as ColorType)}
                @click=${this.cancelCheck}
              /><span>${v}</span></label
            >`;
          })}
        </div>
        <div class="selector-set -control">
          <button
            @click=${this.reset}
            class="selector-button"
            ?disabled=${!this.color && !this.divide ? true : false}
          >
            reset
          </button>
        </div>
      </div>
      <ul class="items">
        ${this.data.map((v) => {
          return this.check(v)
            ? html`<playing-cards-item
                tag="li"
                .num=${v.num}
                .mark=${v.mark}
              ></playing-cards-item>`
            : ``;
        })}
      </ul>
    </div>`;
  }

  cancelCheck(ev:HTMLElementEvent<HTMLInputElement>) {
    if (ev.target.value === this.divide) this.divide = null;
    if (ev.target.value === this.color) this.color = null;
  }

  reset() {
    this.divide = null;
    this.color = null;
  }

  check(d: CardType): boolean {
    // For Joker
    if (d.num === 0 && (this.color || this.divide)) return false;
    let result = false;
    const this_color =
      d.mark === 'heart' || d.mark === 'diamond' ? 'red' : 'black';
    const this_divide = d.num % 2 == 0 ? 'even' : 'odd';
    if (
      (this.color === this_color || this.color === null) &&
      (this.divide === this_divide || this.divide === null)
    ) {
      result = true;
    }
    return result;
  }
}
