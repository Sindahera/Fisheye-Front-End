function photographerFactory(data) {
    // The data structure passed can change depending on the page (index vs photographer page),
    // so we check to assign data to variables correctly
    const photographer = data.photographer ? data.photographer : data;
    const media = data.media ? data.media : null;
    const picture = `assets/photographers/${photographer.portrait}`;

    function getUserCardDOM() {
    const photographerProfile = document.createElement('article');
    const photographerLink = document.createElement('a');
    photographerLink.href = `./photographer.html?id=${photographer.id}`;
    const photographerImg = document.createElement('img');
    photographerImg.setAttribute('src', picture);
    const photographerName = document.createElement('h2');
    const photographerCity = document.createElement('h3');
    const photographerTagline = document.createElement('p');
    const photographerPrice = document.createElement('span');

    // assigning the data to the DOM Elements
    photographerName.textContent = name;
    photographerCity.textContent = city;
    photographerTagline.textContent = tagline;
    photographerPrice.textContent = `${price}€/jour`;

    // Setting classes
    photographerProfile.classList.add('photographer-card');
    photographerLink.classList.add('photographer-card__link');
    photographerImg.classList.add('photographer-card__img');
    photographerName.classList.add('photographer-card__name');
    photographerCity.classList.add('photographer-card__city');
    photographerTagline.classList.add('photographer-card__tagline');
    photographerPrice.classList.add('photographer-card__price');

    // making the displayed data accessible
    photographerImg.setAttribute(
      'alt',
      `Photo de profil de ${photographer.name}`
    );
    photographerLink.setAttribute(
      'aria-label',
      `En savoir plus sur ${photographer.name}`
    );

    // clickable part, containing photo and title
    photographerProfile.appendChild(photographerLink);
    photographerLink.appendChild(photographerImg);
    photographerLink.appendChild(photographerName);

    // paragraph
    photographerProfile.appendChild(photographerCity);
    photographerProfile.appendChild(photographerTagline);
    photographerProfile.appendChild(photographerPrice);
    return photographerProfile;

    }

    function getUserHeaderDOM() {
        const photographerDescription = document.createElement('div');
        const photographerImgContainer = document.createElement('div');
        const photographerImg = document.createElement('img');
        photographerImg.setAttribute('src', picture);
        const photographerName = document.createElement('h2');
        const photographerCity = document.createElement('h3');
        const photographerTagline = document.createElement('p');
        // const photographerPrice = document.createElement('span');
    
        // assigning the data to the DOM Elements
        // Setting classes
        photographerDescription.classList.add('photograph-header__description');
        photographerImg.classList.add('photograph-header__img');
        photographerName.classList.add('photograph-header__name');
        photographerCity.classList.add('photograph-header__city');
        photographerTagline.classList.add('photograph-header__tagline');
    
        // Setting text content
        photographerName.textContent = photographer.name;
        photographerCity.textContent = photographer.city;
        photographerTagline.textContent = photographer.tagline;
        photographerPrice.textContent = `${photographer.price}€/jour`;
    
        // making the displayed data accessible
        photographerImg.setAttribute(
          'alt',
          `Photo de profil de ${photographer.name}`
        );
    
        photographerDescription.appendChild(photographerName);
        photographerDescription.appendChild(photographerCity);
        photographerDescription.appendChild(photographerTagline);
    
        photographerImgContainer.appendChild(photographerImg);
        // photographerHeader.appendChild(photographerPrice);
        return { photographerDescription, photographerImgContainer };
      }
    // return { city, picture, getUserCardDOM }


    function getUserMediaDOM() {
      // Creating the section
      const mediaSection = document.createElement('section');
      mediaSection.classList.add('media-section');
  
      media.forEach((item) => {
        const mediaPath = `assets/photos/${photographer.name
          .toLowerCase()
          .split(' ')[0]
          .split(' ')
          .join('-')}/${item.image ? item.image : item.video}`;
  
        // Creating HTML elements
        const mediaCard = document.createElement('article');
        const mediaLink = document.createElement('a');
        mediaLink.setAttribute('href', '#');
        const mediaThumbnail = document.createElement(
          `${item.image ? 'img' : 'video'}`
        );
        mediaThumbnail.setAttribute('src', mediaPath);
        mediaThumbnail.setAttribute('alt', `Photo titled ${item.title}`);
        const mediaDescription = document.createElement('div');
        const mediaTitle = document.createElement('h2');
        mediaThumbnail.setAttribute('alt', `Photo titled ${item.title}`);
        const mediaLikes = document.createElement('span');
        const mediaHeart = document.createElement('i');
  
        // Setting classes
        mediaCard.classList.add('media-card');
        mediaLink.classList.add('media-card__link');
        mediaThumbnail.classList.add('media-card__img');
        mediaDescription.classList.add('media-card__description');
        mediaTitle.classList.add('media-card__title');
        mediaLikes.classList.add('media-card__likes');
        mediaHeart.classList.add('fa-solid');
        mediaHeart.classList.add('fa-heart');
  
        // Setting text content
        mediaTitle.textContent = item.title;
        mediaLikes.textContent = item.likes;
  
        // Appending html children elements to the main card element
        mediaSection.appendChild(mediaCard);
        mediaCard.appendChild(mediaLink);
        mediaCard.appendChild(mediaDescription);
        mediaLink.appendChild(mediaThumbnail);
        mediaDescription.appendChild(mediaTitle);
        mediaDescription.appendChild(mediaLikes);
        mediaLikes.appendChild(mediaHeart);
      });
      // Returning the main element
      return mediaSection;
    }
  
    function getUserInfoCardDOM() {
      const media = data.media;
      const totalLikes = media.reduce(
        (total, currentItem) => total + currentItem.likes,
        0
      );
        // Creating HTML elements
        const infoCard = document.createElement('div');
        const photographerLikes = document.createElement('span');
        const photographerPrice = document.createElement('span');
        const heart = document.createElement('i');
    
        // Setting classes
        infoCard.classList.add('info-card');
        photographerLikes.classList.add('info-card__likes');
        photographerPrice.classList.add('info-card__price');
        heart.classList.add('fa-solid');
        heart.classList.add('fa-heart');
    
        // Setting text content
        photographerLikes.textContent = totalLikes;
        photographerPrice.textContent = `${photographer.price}€/jour`;
    
        // Appending html children elements to the main element
        photographerLikes.appendChild(heart);
        infoCard.appendChild(photographerLikes);
        infoCard.appendChild(photographerPrice);
    
        // Returning the main elements
        return infoCard;
      }


      return {
        getUserCardDOM,
        getUserHeaderDOM,
        getUserMediaDOM,
        getUserInfoCardDOM,
      }

function mediaFactory(data, name) {
  const { id, photographerId, title, image, video, likes, date, price } = data;
  const picture = `assets/photos/${name}/${data.image ? image : video}`;

  function getUserMediaDOM() {
    // Creating HTML elements
    const media = document.createElement('article');
    const mediaLink = document.createElement('a');
    mediaLink.setAttribute('href', '#');
    const mediaThumbnail = document.createElement(`${image ? 'img' : 'video'}`);
    mediaThumbnail.setAttribute('src', picture);
    mediaThumbnail.setAttribute('alt', `Photo titled ${title}`);
    const mediaDescription = document.createElement('div');
    const mediaTitle = document.createElement('h2');
    mediaThumbnail.setAttribute('alt', `Photo titled ${title}`);
    const mediaLikes = document.createElement('span');
    const mediaHeart = document.createElement('i');
    mediaHeart.classList.add('fa-heart');
    mediaHeart.classList.add('fa-solid');

    // Setting classes
    media.classList.add('media-card');
    mediaLink.classList.add('media-card__link');
    mediaThumbnail.classList.add('media-card__img');
    mediaDescription.classList.add('media-card__description');
    mediaTitle.classList.add('media-card__title');
    mediaLikes.classList.add('media-card__likes');

    // Setting text content
    mediaTitle.textContent = title;
    mediaLikes.textContent = likes;

    // Appending html children elements to the main card element
    media.appendChild(mediaLink);
    media.appendChild(mediaDescription);
    mediaLink.appendChild(mediaThumbnail);
    mediaDescription.appendChild(mediaTitle);
    mediaDescription.appendChild(mediaLikes);
    mediaLikes.appendChild(mediaHeart);

    // Returning the main element
    return media;
  }
  return { getUserMediaDOM };
}
}