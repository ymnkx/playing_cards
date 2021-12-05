import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import imgHeartUrl from '../img/heart.svg';
import imgDiamondtUrl from '../img/diamond.svg';
import imgSpadeUrl from '../img/spade.svg';
import imgClubUrl from '../img/club.svg';
import imgJokerUrl from '../img/joker.svg';

@customElement('playing-cards-mark')
export class PlayingCardsMark extends LitElement {
  @property()
  mark = '';

  static styles = css`
    .icon img {
      width: 80%;
    }
  `;

  render() {
    return html`<span class="icon">
      <img src="${this.getImageUrl(this.mark)}" alt="${this.mark}" />
    </span>`;
  }

  getImageUrl(type: string) {
    let result = '';
    if (type === 'heart') {
      result = imgHeartUrl;
    } else if (type === 'diamond') {
      result = imgDiamondtUrl;
    } else if (type === 'spade') {
      result = imgSpadeUrl;
    } else if (type === 'club') {
      result = imgClubUrl;
    } else if (type === 'joker') {
      result = imgJokerUrl;
    }
    return result;
  }
}
