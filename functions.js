function revealEmail() {
    /* The e-mail is reversed and encoded in Base64. This function undoes this
    operation. This is sufficient to avoid internet scrapers, because for
    their own sakes, they do not generally run arbritrary JavaScript code */
    
    const c= "==QbvNmLslWYtdGQ3U3ckl2c" /* cyphertext */
    const m= atob(Array.from(c).reduce(((e, t) => t + e), "")); /* plaintext */

    const t= document.createElement("a")
    t.href= "mailto:" + m; /* construct url */
    t.textContent= m;

    document.getElementById("e-mail")?.parentElement?.appendChild(t);
    document.getElementById("e-mail")?.remove(); /* switch-a-roo! */
}
