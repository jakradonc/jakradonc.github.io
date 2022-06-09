class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <style>
        /*nav {*/
        /*  height: 40px;*/
        /*  display: flex;*/
        /*  align-items: center;*/
        /*  justify-content: center;*/
        /*  background-color:  #0a0a23;*/
        /*}*/
        
        /*ul {*/
        /*  padding: 0;*/
        /*}*/
        
        /*a {*/
        /*  font-weight: 700;*/
        /*  margin: 0 25px;*/
        /*  color: #fff;*/
        /*  text-decoration: none;*/
        /*}*/
        
        /*a:hover {*/
        /*  padding-bottom: 5px;*/
        /*  box-shadow: inset 0 -2px 0 0 #fff;*/
        /*}*/
      </style>
      <header class="main-header">
        <div class="logo site-title" style="letter-spacing: 0;" data-content-field="site-title">
            <a href="https://jaklab.io/">JAK Lab</a>
        </div>
        <button id="toggle" onclick="nav.toggle();" aria-hidden="false">Menu</button>
      </header>
    `;
    }
}

customElements.define('header-component', Header);
