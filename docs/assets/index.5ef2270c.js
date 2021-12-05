import{r as m,e as a,s as f,p as n,n as h}from"./vendor.1b1266fd.js";const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};b();const y={0:"",1:"A",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K"},$=([...e])=>{for(let t=e.length-1;t>=0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e},k=(()=>{let e=[];for(let t=1;t<=13;t++)for(let o of["spade","heart","diamond","club"])e.push({num:t,mark:o});return e.push({num:0,mark:"joker"}),$(e)})();var _=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(e,t,o,l)=>{for(var r=l>1?void 0:l?x(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(l?i(t,o,r):i(r))||r);return l&&r&&_(t,o,r),r};let c=class extends f{constructor(){super(...arguments);this.data=k,this.divide=null,this.color=null}render(){return n`<div>
      <div class="selector-wrapper">
        <div class="selector-set">
          ${["even","odd"].map(e=>n`<label for="pc-${e}" class="selector"
              ><input
                id="pc-${e}"
                type="radio"
                name="divide"
                value="${e}"
                .checked=${this.divide===e}
                @change=${()=>this.divide=e}
                @click=${this.cancelCheck}
              /><span>${e}</span></label
            >`)}
        </div>
        <div class="selector-set">
          ${["red","black"].map(e=>n`<label for="pc-${e}" class="selector"
              ><input
                id="pc-${e}"
                type="radio"
                name="color"
                value="${e}"
                .checked=${this.color===e}
                @change=${()=>this.color=e}
                @click=${this.cancelCheck}
              /><span>${e}</span></label
            >`)}
        </div>
        <div class="selector-set -control">
          <button
            @click=${this.reset}
            class="selector-button"
            ?disabled=${!this.color&&!this.divide}
          >
            reset
          </button>
        </div>
      </div>
      <ul class="items">
        ${this.data.map(e=>this.check(e)?n`<playing-cards-item
                tag="li"
                .num=${e.num}
                .mark=${e.mark}
              ></playing-cards-item>`:"")}
      </ul>
    </div>`}cancelCheck(e){e.target.value===this.divide&&(this.divide=null),e.target.value===this.color&&(this.color=null)}reset(){this.divide=null,this.color=null}check(e){let t=!1;const o=e.mark==="heart"||e.mark==="diamond"?"red":"black",l=e.num%2==0?"even":"odd";return(this.color===o||this.color===null)&&(this.divide===l||this.divide===null)&&(t=!0),t}};c.styles=m`
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
  `;p([a({type:Array})],c.prototype,"data",2);p([a({type:String})],c.prototype,"divide",2);p([a({type:String})],c.prototype,"color",2);c=p([h("playing-cards")],c);var P=Object.defineProperty,O=Object.getOwnPropertyDescriptor,g=(e,t,o,l)=>{for(var r=l>1?void 0:l?O(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(l?i(t,o,r):i(r))||r);return l&&r&&P(t,o,r),r};let d=class extends f{constructor(){super(...arguments);this.mark="",this.num=0}render(){return n`<div
      class="box ${this.mark==="heart"||this.mark==="diamond"?"-red":""}"
    >
      <div class="num">${y[this.num]}</div>
      <playing-cards-mark .mark=${this.mark}></playing-cards-mark>
    </div>`}};d.styles=m`
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
  `;g([a()],d.prototype,"mark",2);g([a({type:Number})],d.prototype,"num",2);d=g([h("playing-cards-item")],d);var w="/assets/heart.46d4fe51.svg",j="/assets/diamond.9d13be7c.svg",C="/assets/spade.d8a8e7ee.svg",D="/assets/club.36fc7bcf.svg",U="/assets/joker.86313060.svg",L=Object.defineProperty,N=Object.getOwnPropertyDescriptor,v=(e,t,o,l)=>{for(var r=l>1?void 0:l?N(t,o):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=(l?i(t,o,r):i(r))||r);return l&&r&&L(t,o,r),r};let u=class extends f{constructor(){super(...arguments);this.mark=""}render(){return n`<span class="icon">
      <img src="${this.getImageUrl(this.mark)}" alt="${this.mark}" />
    </span>`}getImageUrl(e){let t="";return e==="heart"?t=w:e==="diamond"?t=j:e==="spade"?t=C:e==="club"?t=D:e==="joker"&&(t=U),t}};u.styles=m`
    .icon img {
      width: 80%;
    }
  `;v([a()],u.prototype,"mark",2);u=v([h("playing-cards-mark")],u);
