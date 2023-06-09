const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let galleryInsert = "";

const select = document.querySelector('.gallery');
select.style.display = "flex";
select.style.gap = "10px";

images.forEach(function (element) {
  galleryInsert += `<li> <img src="${element.url}" alt="${element.alt}" width="300" /></li>`});

select.insertAdjacentHTML("beforeend", galleryInsert);
select.insertAdjacentHTML("beforebegin", "<h2>Gallery</h2>");

