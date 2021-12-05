import{r as f,e as u,s as p,p as d,n as a}from"./vendor.1b1266fd.js";const m=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};m();var h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,c=(l,r,s,o)=>{for(var e=o>1?void 0:o?y(r,s):r,t=l.length-1,n;t>=0;t--)(n=l[t])&&(e=(o?n(r,s,e):n(e))||e);return o&&e&&h(r,s,e),e};let i=class extends p{constructor(){super(...arguments);this.name="World",this.count=0}render(){return d`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++}foo(){return"foo"}};i.styles=f`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;c([u()],i.prototype,"name",2);c([u({type:Number})],i.prototype,"count",2);i=c([a("my-element")],i);
