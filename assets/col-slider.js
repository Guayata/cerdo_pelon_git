$('.dawn-product-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 44.567 44.567"><g id="Grupo_95" data-name="Grupo 95" ><line id="Línea_35" data-name="Línea 35" x2="25.801" transform="translate(11.397 21.909)" fill="none" stroke="#ACA9A0" stroke-width="1"/><path id="Trazado_408" data-name="Trazado 408" d="M174.36,3951l-14-10.04s14.386-10.8,14.386-11.094" transform="translate(-149.448 -3919.048)" fill="none" stroke="#ACA9A0" stroke-width="1"/><circle id="Elipse_105" data-name="Elipse 105" cx="21.784" cy="21.784" r="21.784" fill="none" stroke="#ACA9A0" stroke-width="1"/></g></svg>',
    nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 44.567 44.567"><g id="Grupo_94" data-name="Grupo 94" transform="translate(44.067 44.067) rotate(180)"><line id="Línea_35" data-name="Línea 35" x2="25.801" transform="translate(11.397 21.909)" fill="none" stroke="#ACA9A0" stroke-width="1"/><path id="Trazado_408" data-name="Trazado 408" d="M174.36,3951l-14-10.04s14.386-10.8,14.386-11.094" transform="translate(-149.448 -3919.048)" fill="none" stroke="#ACA9A0" stroke-width="1"/><circle id="Elipse_105" data-name="Elipse 105" cx="21.784" cy="21.784" r="21.784" fill="none" stroke="#ACA9A0" stroke-width="1"/></g></svg>',
    arrows: true,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

function filterProduct(e){
  let collection = e.value;
  document.querySelector('.dawn-product-slider:not(.d-none)')?.classList.add('d-none')
  document.querySelector(`.dawn-product-slider[collection="${collection}"]`)?.classList.remove('d-none')
}

function showPopup(e){
  let title = e.title;
  let res = fetch(`https://foodnewsisgoodnews.myshopify.com/products/${title.replace(/\s/g, '-')}.js`).then((res)=>{
    res.json().then((json)=>{
      console.log('json', json);
      document.querySelector('#product-popup h1.product-title').innerHTML = json.title;
      document.querySelector('#product-popup img.product-image').src = json.featured_img  || "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_large.gif";
      document.querySelector('#product-popup div.product-info').innerHTML = json.description;
      document.getElementById('product-popup').style.display = 'flex';
    })
  });
}
document.querySelectorAll(`.dawn-product-slider`).forEach((e)=>e.classList.add('d-none'))
