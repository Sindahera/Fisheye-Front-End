function photographerFactory(data) {
    const { city, portrait  } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = city;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { city, picture, getUserCardDOM }
}