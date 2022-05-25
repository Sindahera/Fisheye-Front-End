const params = new URL(document.location).searchParams;
const id = parseInt(params.get('id'));

async function getPhotographers() {
  // fetching the photographers data
  const response = await fetch('./data/photographers.json').catch(
    console.error
  );
  const photographers = await response.json().catch(console.error);
  return {
    photographers: [...photographers.photographers],
    media: [...photographers.media],
  };
}
async function getPhotographer() {
  const photographers = await getPhotographers();
  const photographer = photographers.photographers.find(
    (item) => item.id === id
  );
  const media = photographers.media.filter(
    (element) => element.photographerId === id
  );
  // adding the totalLikes to photographer data
  photographer.totalLikes = media.reduce(
    (total, currentItem) => total + currentItem.likes,
    0
  );
  // adding the photographerName to the media data
  media.forEach((item) => (item.photographerName = photographer.name));
  return { photographer: photographer, media: [...media] };
}

function displayHeader(photographer) {
  const photographerHeader = document.querySelector('.photograph-header');
  // eslint-disable-next-line no-undef
  const photographerModel = photographerFactory(photographer);
  const { photographerDescription, photographerImgContainer } =
    photographerModel.getUserHeaderDOM();
  photographerHeader.insertAdjacentElement(
    'afterbegin',
    photographerDescription
  );
  photographerHeader.insertAdjacentElement(
    'beforeend',
    photographerImgContainer
  );
}

function displayMedia(photographer) {
  // eslint-disable-next-line no-undef

  const mediaModel = mediaFactory(photographer);
  const mediaElement = mediaModel.getUserMediaDOM();
  document.querySelector('#main').appendChild(mediaElement);
}

function displayInfoBar(photographer) {
  // eslint-disable-next-line no-undef
  const infoBarModel = photographerFactory(photographer);
  const infoBarElement = infoBarModel.getUserInfoBarDOM();
  document.querySelector('#main').appendChild(infoBarElement);
}

async function init() {
  // Récupère les datas des photographes
  const photographer = await getPhotographer();
  displayHeader(photographer.photographer);
  displayMedia(photographer.media);
  displayInfoBar(photographer.photographer);
}

init();