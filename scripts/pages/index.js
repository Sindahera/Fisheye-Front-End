
// import tagNavigation from './tagNavigation.js';
/* global photographerFactory */

async function getPhotographers() {
  // Fetch photographers data
  const response = await fetch('data/photographers.json').catch((e) =>
    console.error(e.message)
  );
  const photographers = await response.json();
  return {
    photographers: [...photographers.photographers],
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// testing for tagnavigation

  function tagNavigation() {
  // Filter navigation section
  const tagList = document.querySelectorAll('.nav ul li, .card__photographer-tags-list-item');
  const selectionArt = document.querySelectorAll('.art');
  const selectionPortrait = document.querySelectorAll('.portrait');
  const selectionFashion = document.querySelectorAll('.fashion');
  const selectionArchitecture = document.querySelectorAll('.architecture');
  const selectionTravel = document.querySelectorAll('.travel');
  const selectionSport = document.querySelectorAll('.sport');
  const selectionAnimals = document.querySelectorAll('.animals');
  const selectionEvents = document.querySelectorAll('.events');
  const cardSelections = document.querySelectorAll('.card__photographer');

  const selection = {
    art: selectionArt,
    portrait: selectionPortrait,
    fashion: selectionFashion,
    architecture: selectionArchitecture,
    travel: selectionTravel,
    sport: selectionSport,
    animals: selectionAnimals,
    events: selectionEvents,
    all: cardSelections,
  };

  // forEach loop to get each tag option
  tagList.forEach((tagListItem) => {
    const tagValue = tagListItem.getAttribute('data-filter-tag');
    // function for selecting tags to use in event listener
    function tagSelection(tagValueSelection) {
      tagList.forEach((tagListItemRemove) => {
        tagListItemRemove.classList.remove('active');
      });
      tagListItem.classList.add('active');
      cardSelections.forEach((cardSelection) => {
        cardSelection.style.display = 'none';
      });
      // allow filtering based on nav option
      tagValueSelection = tagValue;
      const selectionChoice = selection[tagValueSelection];
      selectionChoice.forEach((selectionCard) => {
        selectionCard.style.display = 'block';
      });
    }
    // adding Event Listener for selecting options
    tagListItem.addEventListener('click', () => {
      tagSelection();
    });
    tagListItem.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        tagListItem.click();
      }
    });
  });
}

// end


async function init() {
  // Get photographers data
  const photographers = await getPhotographers();
  displayData(photographers.photographers);
}

init();


      