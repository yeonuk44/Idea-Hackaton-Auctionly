function writePrice(class1, class2, type, p) {
  let price = document.createElement('P');
  price.setAttribute('class', 'price');
  let tag1 = document.createElement('SPAN');
  tag1.setAttribute('class', class1);
  let which = document.createTextNode(type);
  tag1.appendChild(which)
  price.appendChild(tag1);
  let tag2 = document.createElement('SPAN');
  tag2.setAttribute('class', class2);
  let priceTag = document.createTextNode(p);
  tag2.appendChild(priceTag);
  price.appendChild(tag2);
  return price;
}

function createBody(className, imgsrc, productName, gp, jp, np) {
  let mainDiv = document.createElement('DIV');
  mainDiv.setAttribute('class', className);
  let img = document.createElement('IMG');
  img.setAttribute('src', imgsrc);
  img.setAttribute('width', '150');
  img.setAttribute('height', '155');
  mainDiv.appendChild(img);
  let title = document.createElement('P');
  title.setAttribute('class', 'productname');
  let titleName = document.createTextNode(productName);
  title.appendChild(titleName);
  mainDiv.appendChild(title);
  mainDiv.appendChild(writePrice('gam', 'gamprice', '감', gp));
  mainDiv.appendChild(document.createElement('BR'));
  mainDiv.appendChild(writePrice('jeo', 'jeoprice', '저', jp));
  mainDiv.appendChild(document.createElement('BR'));
  mainDiv.appendChild(writePrice('nak', 'nakprice', '낙', np));
  return mainDiv;
}

function renderHot(idName, c, data) {
  let id = document.getElementById(idName);
  for (let element of data) {
    id.appendChild(createBody(c, element['s'], element['name'], element['gp'], element['jp'], element['np']));
  }

}
