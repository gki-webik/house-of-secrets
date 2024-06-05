let menu_pattern = document.querySelector(".menu-pattern");
let menu_pattern_tag = document.querySelector(".menu-pattern-tag");

menu_pattern.innerHTML = `
<div class="area"></div>
<nav class="main-menu">
<ul>
<li class="menu-li onne-lii">
<div class="checkbox">
<input class="custom-checkbox toggle-input2" type="checkbox" id="color-1" name="color-1" value="indigo">
<label for="color-1"><div class="theam-text">Светлая тема</div></label>
</div>
</li>
<li class="menu-li">
<button style="position: relative; z-index: 2004;" id="btn-close-menu">×</button>
</li>
<li class="menu-li" style='display: none;' id="searchs">
<input type="text" id="search" placeholder="Поиск">
<div class="m1">
<svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</div>
</li>
<li class="menu-li" style="margin-top: 50px;">
<a href="https://html.gki-webik.ru/"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-filetype-html" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
</svg><span class="nav-text">HTML - справочник</span></a>
</li>
<li class="menu-li">
<a href="https://css.gki-webik.ru/"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-filetype-css" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.397 14.841a1.13 1.13 0 0 0 .401.823c.13.108.289.192.478.252.19.061.411.091.665.091.338 0 .624-.053.859-.158.236-.105.416-.252.539-.44.125-.189.187-.408.187-.656 0-.224-.045-.41-.134-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.621-.144a.97.97 0 0 1-.404-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.512-.152.143 0 .266.023.37.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.551.05-.776.15-.225.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.082.149.2.27.352.367.152.095.332.167.539.213l.618.144c.207.049.361.113.463.193a.387.387 0 0 1 .152.326.505.505 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.223-.013-.32-.04a.838.838 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM.806 13.693c0-.248.034-.46.102-.633a.868.868 0 0 1 .302-.399.814.814 0 0 1 .475-.137c.15 0 .283.032.398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.441 1.441 0 0 0-.489-.272 1.838 1.838 0 0 0-.606-.097c-.356 0-.66.074-.911.223-.25.148-.44.359-.572.632-.13.274-.196.6-.196.979v.498c0 .379.064.704.193.976.131.271.322.48.572.626.25.145.554.217.914.217.293 0 .554-.055.785-.164.23-.11.414-.26.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.799.799 0 0 1-.118.363.7.7 0 0 1-.272.25.874.874 0 0 1-.401.087.845.845 0 0 1-.478-.132.833.833 0 0 1-.299-.392 1.699 1.699 0 0 1-.102-.627v-.495ZM6.78 15.29a1.176 1.176 0 0 1-.111-.449h.764a.578.578 0 0 0 .255.384c.07.049.154.087.25.114.095.028.201.041.319.041.164 0 .301-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.256-.144-.463-.193l-.618-.143a1.72 1.72 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.527-.422.225-.1.484-.149.777-.149.304 0 .564.05.779.152.217.102.384.239.5.41.12.17.187.359.2.566h-.75a.56.56 0 0 0-.12-.258.624.624 0 0 0-.246-.181.923.923 0 0 0-.37-.068c-.216 0-.387.05-.512.152a.472.472 0 0 0-.184.384c0 .121.047.22.143.3a.97.97 0 0 0 .404.175l.621.143c.217.05.406.12.566.211.16.09.285.21.375.358.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Z"/>
</svg><span class="nav-text">CSS - справочник</span></a>
</li>
<li class="menu-li tags-pattern">
<a href="#" id="none-pc"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-filetype-html" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
</svg><span class="nav-text">CSS свойства</span></a>
</li>
<li class="menu-li">
<a href="https://tool.gki-webik.ru/"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-tools" viewBox="0 0 16 16">
<path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
</svg><span class="nav-text">Инструменты</span></a>
</li>
<li class="menu-li">
<a href="https://raznoe.gki-webik.ru/"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-lightbulb" viewBox="0 0 16 16">
<path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
</svg><span class="nav-text">Разное</span></a>
</li>
<li class="menu-li">
<a href="https://resept.gki-webik.ru/"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-code-square" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
</svg><span class="nav-text">Рецепты кода</span></a>
</li>
<li class="menu-li">
<a href="https://book.gki-webik.ru/"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-journal-bookmark" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
<path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
<path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg><span class="nav-text">Книги</span></a>
</li>
<li class="menu-li">
<a href="https://products.gki-webik.ru/"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-columns-gap" viewBox="0 0 16 16">
<path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
</svg><span class="nav-text">Наши продукты</span></a>
</li>
<li class="menu-li">
<a href="https://faq.gki-webik.ru/"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-question-square" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
</svg><span class="nav-text">FAQ</span></a>
</li>
<li class="menu-li">
<a href="https://money.gki-webik.ru/"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="ico-m" class="bi bi-piggy-bank" viewBox="0 0 16 16">
<path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.138-1.496A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.602 7.602 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962z"/>
<path fill-rule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zM2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.558 6.558 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.649 4.649 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393zm12.621-.857a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199z"/>
</svg><span class="nav-text">Благотворительность</span></a>
</li>
<li class="menu-li">
<a href="https://gki-webik.ru/admin-webik/"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-people" viewBox="0 0 16 16">
<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
</svg><span class="nav-text">Для сотрудников</span></a>
</li>
</ul>
</nav>
`;

menu_pattern_tag.innerHTML = `
<div class="area2" id="area22">
<div class="tags-pp">
<ul class="ul-l1 ul-list-light"> 
<li>
<button style="position: relative; z-index: 2005;" id="btn-close-menu2">< Назад</button>
 </li>
<li id="z" class="p-item">
  <h2>!</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="important/index.html"><kbd class="kkL kk-light">!important</kbd> - приоритет в стилях</a></h3>
  </li>
</ul> 
</ul> 
<ul class="ul-l1 ul-list-light">
<li id="z" class="p-item">
  <h2>Префикс</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="#"><kbd class="kkL kk-light">-moz-</kbd> - для Firefox</a></h3>
  </li>
  <li>
    <h3><a href="#"><kbd class="kkL kk-light">-moz-</kbd> - для Internet Explorer</a></h3>
  </li>
  <li>
    <h3><a href="#"><kbd class="kkL kk-light">-webkit-</kbd> - для Chrome и Safari</a></h3>
  </li>
  <li>
    <h3><a href="#"><kbd class="kkL kk-light">-o-</kbd> - для Opera</a></h3>
  </li>
</ul> 
</ul>
<ul class="ul-l1 ul-list-light">
<li id="z" class="p-item">
  <h2>Значения свойств</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="currentColor/index.html"><kbd class="kkL kk-light">currentColor</kbd> - соответствует значению свойства color для текущего элемента</a></h3>
  </li>
  <li>
    <h3><a href="inherit/index.html"><kbd class="kkL kk-light">inherit</kbd> - наследие значений свойств от родительского элемента</a></h3>
  </li>
  <li>
    <h3><a href="initial/index.html"><kbd class="kkL kk-light">initial</kbd> - восстановление свойст по умолчанию</a></h3>
  </li>
  <li>
    <h3><a href="unset/index.html"><kbd class="kkL kk-light">unset</kbd> - комбинация initial и inherit</a></h3>
  </li>
</ul> 
</ul> 
<ul class="ul-l1 ul-list-light">
<li id="z" class="p-item">
  <h2>Функции</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="func-attr/index.html"><kbd class="kkL kk-light">attr()</kbd> - добавляет значение атрибута HTML - элемента в стилевое свойство</a></h3>
  </li>
  <li>
    <h3><a href="filter/index.html"><kbd class="kkL kk-light">blur()</kbd> - размытие</a></h3>
  </li>
  <li>
    <h3><a href="filter/index.html"><kbd class="kkL kk-light">brightness()</kbd> - яркость</a></h3>
  </li>
  <li>
    <h3><a href="func-calc/index.html"><kbd class="kkL kk-light">calc()</kbd> - вычисляемое значение свойств</a></h3>
  </li>
  <li>
    <h3><a href="filter/index.html"><kbd class="kkL kk-light">drop-shadow()</kbd> - тень</a></h3>
  </li>
  <li>
    <h3><a href="filter/index.html"><kbd class="kkL kk-light">grayscale()</kbd> - цветное в черно - белое</a></h3>
  </li>
  <li>
    <h3><a href="filter/index.html"><kbd class="kkL kk-light">hue-rotate()</kbd> - цветность</a></h3>
  </li>
  <li>
    <h3><a href="filter/index.html"><kbd class="kkL kk-light">invert()</kbd> - инверсия</a></h3>
  </li>
  <li>
    <h3><a href="func-linear-gradient/index.html"><kbd class="kkL kk-light">linear-gradient()</kbd> - линейный градиент</a></h3>
  </li>
  <li>
    <h3><a href="filter/index.html"><kbd class="kkL kk-light">opacity()</kbd> - прозрачность</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">perspective()</kbd> - перспектива</a></h3>
  </li>
  <li>
    <h3><a href="func-radial-gradient/index.html"><kbd class="kkL kk-light">radial-gradient()</kbd> - радиальный градиент</a></h3>
  </li>
  <li>
    <h3><a href="func-repeating-linear-gradient/index.html"><kbd class="kkL kk-light">repeating-linear-gradient()</kbd> - повторяющийся линейный градиент</a></h3>
  </li>
  <li>
    <h3><a href="func-repeating-radial-gradient/index.html"><kbd class="kkL kk-light">repeating-radial-gradient()</kbd> - повторяющийся радиальный градиент</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">rotate()</kbd> - поворот</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">rotateX()</kbd> - поворот по оси X</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">rotateY()</kbd> - поворот по оси Y</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">rotateZ()</kbd> - поворот по оси Z</a></h3>
  </li>
  <li>
    <h3><a href="filter/index.html"><kbd class="kkL kk-light">saturate()</kbd> - насыщенность</a></h3>
  </li>
  <li>
    <h3><a href="filter/index.html"><kbd class="kkL kk-light">sepia()</kbd> - сепия</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">scale()</kbd> - масштабирование</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">scaleX()</kbd> - масштабирование по оси X</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">scaleY()</kbd> - масштабирование по оси Y</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">scaleZ()</kbd> - масштабирование по оси Z</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">skew()</kbd> - наклон</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">skewX()</kbd> - наклон по оси X</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">skewY()</kbd> - наклон по оси Y</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">translate()</kbd> - наклон</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">translateX()</kbd> - наклон по оси X</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">translateY()</kbd> - наклон по оси Y</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">translateZ()</kbd> - наклон по оси Z</a></h3>
  </li>
  <li>
    <h3><a href="func-var/index.html"><kbd class="kkL kk-light">var()</kbd> - переменная</a></h3>
  </li>
</ul> 
</ul> 
<ul class="ul-l1 ul-list-light">
<li id="z" class="p-item">
  <h2>@-правила</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="charset/index.html"><kbd class="kkL kk-light">@charset</kbd> - кодировки внешнего CSS - файла</a></h3>
  </li>
  <li>
    <h3><a href="document/index.html"><kbd class="kkL kk-light">@document</kbd> - стилевые правила на основе адреса документа</a></h3>
  </li>
  <li>
    <h3><a href="font-face/index.html"><kbd class="kkL kk-light">@font-face</kbd> - настройки шрифтов</a></h3>
  </li>
  <li>
    <h3><a href="import/index.html"><kbd class="kkL kk-light">@import</kbd> - импорт содержимого CSS-файла в текущую стилевую таблицу</a></h3>
  </li>
  <li>
    <h3><a href="keyframes/index.html"><kbd class="kkL kk-light">@keyframes</kbd> - ключевые кадры при анимации элемента</a></h3>
  </li>
  <li>
    <h3><a href="media/index.html"><kbd class="kkL kk-light">@media</kbd> - тип носителя, для которого будет применяться указанный стиль</a></h3>
  </li>
  <li>
    <h3><a href="page/index.html"><kbd class="kkL kk-light">@page</kbd> - значение полей при печати документа</a></h3>
  </li>
  <li>
    <h3><a href="supports/index.html"><kbd class="kkL kk-light">@supports</kbd> - поддержка браузера какой - либо возможности</a></h3>
  </li>
  <li>
    <h3><a href="viewport/index.html"><kbd class="kkL kk-light">@viewport</kbd> - оптимизация веб страницы в зависимости от различных устройств и размероов</a></h3>
  </li>
</ul> 
</ul>
<ul class="ul-l1 ul-list-light">
<li id="z" class="p-item">
  <h2>Селекторы и их комбинации</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="tagA/index.html"><kbd class="kkL kk-light">A</kbd> - любой элемент HTML</a></h3>
  </li>
  <li>
    <h3><a href="idA/index.html"><kbd class="kkL kk-light">#id</kbd> - идентификатор</a></h3>
  </li>
  <li>
    <h3><a href="classA/index.html"><kbd class="kkL kk-light">.class</kbd> - класс</a></h3>
  </li>
  <li>
    <h3><a href="classAClassB/index.html"><kbd class="kkL kk-light">.class1.class2</kbd> - классы</a></h3>
  </li>
  <li>
    <h3><a href="universal/index.html"><kbd class="kkL kk-light">*</kbd> - универсальный селектор</a></h3>
  </li>
  <li>
    <h3><a href="aAndb/index.html"><kbd class="kkL kk-light">A B</kbd> - вложенные селекторы</a></h3>
  </li>
  <li>
    <h3><a href="bIna/index.html"><kbd class="kkL kk-light">A > B</kbd> - дочерние селекторы</a></h3>
  </li>
  <li>
    <h3><a href="bPusha/index.html"><kbd class="kkL kk-light">A + B</kbd> - соседние селекторы</a></h3>
  </li>
  <li>
    <h3><a href="bPa/index.html"><kbd class="kkL kk-light">A ~ B</kbd> - Родственные селекторы</a></h3>
  </li>
  <li>
    <h3><a href="attrsel/index.html"><kbd class="kkL kk-light">[attr]</kbd> - селекторы атрибутов</a></h3>
  </li>
  <li>
    <h3><a href="attrselvalue/index.html"><kbd class="kkL kk-light">[attr='value']</kbd> - селекторы атрибутов со значением</a></h3>
  </li>
  <li>
    <h3><a href="attrselvalue2/index.html"><kbd class="kkL kk-light">[attr^='value']</kbd> - селекторы атрибутов со значением в начале</a></h3>
  </li>
  <li>
    <h3><a href="attrselvalue3/index.html"><kbd class="kkL kk-light">[attr$='value']</kbd> - селекторы атрибутов со значением в конце</a></h3>
  </li>
  <li>
    <h3><a href="attrselvalue4/index.html"><kbd class="kkL kk-light">[attr*='value']</kbd> - селекторы атрибутов со значением в неопределенном месте</a></h3>
  </li>
  <li>
    <h3><a href="attrselvalue5/index.html"><kbd class="kkL kk-light">[attr~='value']</kbd> - селекторы атрибутов со значением через пробел</a></h3>
  </li>
  <li>
    <h3><a href="attrselvalue6/index.html"><kbd class="kkL kk-light">[attr|='value']</kbd> - селекторы атрибутов со значением через дефис</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="z" class="p-item">
  <h2>Селекторы и их комбинации</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="ps-active/index.html"><kbd class="kkL kk-light">:active</kbd> - стиль активного элемента</a></h3>
  </li>
  <li>
    <h3><a href="ps-empty/index.html"><kbd class="kkL kk-light">:empty</kbd> - пустые элементы</a></h3>
  </li>
  <li>
    <h3><a href="ps-checked/index.html"><kbd class="kkL kk-light">:checked</kbd> - стиль включенных элементов интерфейса</a></h3>
  </li>
  <li>
    <h3><a href="ps-default/index.html"><kbd class="kkL kk-light">:default</kbd> - стиль элементов форм</a></h3>
  </li>
  <li>
    <h3><a href="ps-disabled/index.html"><kbd class="kkL kk-light">:disabled</kbd> - стиль заблокированных элементов форм</a></h3>
  </li>
  <li>
    <h3><a href="ps-enabled/index.html"><kbd class="kkL kk-light">:enabled</kbd> - стиль доступных ( незаблокированных ) элементов форм</a></h3>
  </li>
  <li>
    <h3><a href="ps-first-child/index.html"><kbd class="kkL kk-light">:first-child</kbd> - стиль первого элемента</a></h3>
  </li>
  <li>
    <h3><a href="ps-first-of-type/index.html"><kbd class="kkL kk-light">:first-of-type</kbd> - стиль первого элемента определенного типа</a></h3>
  </li>
  <li>
    <h3><a href="ps-focus/index.html"><kbd class="kkL kk-light">:focus</kbd> - стиль для элемента, получающего фокус</a></h3>
  </li>
  <li>
    <h3><a href="ps-focus-within/index.html"><kbd class="kkL kk-light">:focus-within</kbd> - стиль для всего элемента, получающего фокус</a></h3>
  </li>
  <li>
    <h3><a href="ps-fullscreen/index.html"><kbd class="kkL kk-light">:fullscreen</kbd> - стили в полноэкранном режиме</a></h3>
  </li>
  <li>
    <h3><a href="ps-hover/index.html"><kbd class="kkL kk-light">:hover</kbd> - стиль элемента при наведении на него курсора мыши</a></h3>
  </li>
  <li>
    <h3><a href="ps-in-range/index.html"><kbd class="kkL kk-light">:in-range</kbd> - стиль элемента при верно введенных данных</a></h3>
  </li>
  <li>
    <h3><a href="ps-indeterminate/index.html"><kbd class="kkL kk-light">:indeterminate</kbd> - стиль для переключателей в неопределённом состоянии</a></h3>
  </li>
  <li>
    <h3><a href="ps-invalid/index.html"><kbd class="kkL kk-light">:invalid</kbd> - стиль невалидной формы</a></h3>
  </li>
  <li>
    <h3><a href="ps-lang/index.html"><kbd class="kkL kk-light">:lang</kbd> - задает определенные настроки для разных языков</a></h3>
  </li>
  <li>
    <h3><a href="ps-last-child/index.html"><kbd class="kkL kk-light">:last-child</kbd> - задает определенные настроки для разных языков</a></h3>
  </li>
  <li>
    <h3><a href="ps-last-of-type/index.html"><kbd class="kkL kk-light">:last-of-type</kbd> - стиль последнего элемента определённого типа</a></h3>
  </li>
  <li>
    <h3><a href="ps-link/index.html"><kbd class="kkL kk-light">:link</kbd> - стиль непосещенных ссылок</a></h3>
  </li>
  <li>
    <h3><a href="ps-not/index.html"><kbd class="kkL kk-light">:not</kbd> - стили не содержащие указанный селектор</a></h3>
  </li>
  <li>
    <h3><a href="ps-nth-child/index.html"><kbd class="kkL kk-light">:nth-child</kbd> - стили к элементам на основе нумерации</a></h3>
  </li>
  <li>
    <h3><a href="ps-nth-last-child/index.html"><kbd class="kkL kk-light">:nth-last-child</kbd> - стили к элементам на основе нумерации от последнего</a></h3>
  </li>
  <li>
    <h3><a href="ps-nth-last-of-type/index.html"><kbd class="kkL kk-light">:nth-last-of-type</kbd> - стили к элементам указанного типа</a></h3>
  </li>
  <li>
    <h3><a href="ps-nth-of-type/index.html"><kbd class="kkL kk-light">:nth-of-type</kbd> - стили к элементам указанного типа</a></h3>
  </li>
  <li>
    <h3><a href="ps-only-child/index.html"><kbd class="kkL kk-light">:only-child</kbd> - применяется к дочернему элементу</a></h3>
  </li>
  <li>
    <h3><a href="ps-only-of-type/index.html"><kbd class="kkL kk-light">:only-of-type</kbd> - применяется к дочернему элементу указанного типа</a></h3>
  </li>
  <li>
    <h3><a href="ps-optional/index.html"><kbd class="kkL kk-light">:optional</kbd> -  стили поля у которого не задан атрибут required</a></h3>
  </li>
  <li>
    <h3><a href="ps-out-of-range/index.html"><kbd class="kkL kk-light">:out-of-range</kbd> -  стили поля с неверными значениями, выходящими из заданного диапазона</a></h3>
  </li>
  <li>
    <h3><a href="ps-placeholder-shown/index.html"><kbd class="kkL kk-light">:placeholder-shown</kbd> -  стиль input / textarea, отображающего в данный момент подсказки</a></h3>
  </li>
  <li>
    <h3><a href="ps-read-only/index.html"><kbd class="kkL kk-light">:read-only</kbd> - стиль поля формы с атрибутом readonly</a></h3>
  </li>
  <li>
    <h3><a href="ps-read-write/index.html"><kbd class="kkL kk-light">:read-write</kbd> - стиль поля формы доступным для редактирования</a></h3>
  </li>
  <li>
    <h3><a href="ps-required/index.html"><kbd class="kkL kk-light">:required</kbd> - стиль поля формы с обязательным вводом</a></h3>
  </li>
  <li>
    <h3><a href="ps-root/index.html"><kbd class="kkL kk-light">:root</kbd> - обращение к самому главному родительскому элементу</a></h3>
  </li>
  <li>
    <h3><a href="ps-target/index.html"><kbd class="kkL kk-light">:target</kbd> - стиль целевого элемента</a></h3>
  </li>
  <li>
    <h3><a href="ps-valid/index.html"><kbd class="kkL kk-light">:valid</kbd> - стиль пройденного проверку  поля формы</a></h3>
  </li>
  <li>
    <h3><a href="ps-visited/index.html"><kbd class="kkL kk-light">:visited</kbd> - стиль посещенных ссылок</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="z" class="p-item">
  <h2>Псевдоэлементы</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="after/index.html"><kbd class="kkL kk-light">::after</kbd> - вывод контента после содержимого элемента</a></h3>
  </li>
  <li>
    <h3><a href="backdrop/index.html"><kbd class="kkL kk-light">::backdrop</kbd> - отображается ниже самого верхнего элемента в стеке по оси Z</a></h3>
  </li>
  <li>
    <h3><a href="before/index.html"><kbd class="kkL kk-light">::before</kbd> - вывод контента до содержимого элемента</a></h3>
  </li>
  <li>
    <h3><a href="first-letter/index.html"><kbd class="kkL kk-light">::first-letter</kbd> - стиль первого символа в тексте</a></h3>
  </li>
  <li>
    <h3><a href="first-line/index.html"><kbd class="kkL kk-light">::first-line</kbd> - стиль первой строки форматированного текста</a></h3>
  </li>
  <li>
    <h3><a href="placeholder/index.html"><kbd class="kkL kk-light">::placeholder</kbd> - стиль подсказывающего текста</a></h3>
  </li>
  <li>
    <h3><a href="selection/index.html"><kbd class="kkL kk-light">::selection</kbd> - стиль выделенного пользователем текста</a></h3>
  </li>
</ul>
</ul>   
<ul class="ul-l1 ul-list-light">
<li id="z" class="p-item">
  <h2>Единицы измерения</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="ed-izmerenia/index.html"><kbd class="kkL kk-light">px, em, rem, %, vw, vh, vmin, vmax, fr, ex, ch ...</kbd> - единицы измерения</a></h3>
  </li>
</ul> 
</ul>
<ul class="ul-l1 ul-list-light">
<li id="a" class="p-item">
  <h2>A</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="align-content/index.html"><kbd class="kkL kk-light">align-content</kbd> - выравнивание строк вдоль поперечной оси flex / grid</a></h3>
  </li>
  <li>
    <h3><a href="align-items/index.html"><kbd class="kkL kk-light">align-items</kbd> - выравнивание элементов flex / grid по поперечной оси</a></h3>
  </li>
  <li>
    <h3><a href="align-self/index.html"><kbd class="kkL kk-light">align-self</kbd> - выравнивает элемент flex / grid по поперечной оси</a></h3>
  </li>
  <li>
    <h3><a href="all/index.html"><kbd class="kkL kk-light">all</kbd> - сброс всех значений</a></h3>
  </li>
  <li>
    <h3><a href="animation/index.html"><kbd class="kkL kk-light">animation</kbd> - создание анимации</a></h3>
  </li>
  <li>
    <h3><a href="animation-delay/index.html"><kbd class="kkL kk-light">animation-delay</kbd> - задержка старта анимации</a></h3>
  </li>
  <li>
    <h3><a href="animation-direction/index.html"><kbd class="kkL kk-light">animation-direction</kbd> - направление анимации</a></h3>
  </li>
  <li>
    <h3><a href="animation-duration/index.html"><kbd class="kkL kk-light">animation-duration</kbd> - время длительности анимации</a></h3>
  </li>
  <li>
    <h3><a href="animation-fill-mode/index.html"><kbd class="kkL kk-light">animation-fill-mode</kbd> - стили объекта анимации до и после ее выполнения</a></h3>
  </li>
  <li>
    <h3><a href="animation-iteration-count/index.html"><kbd class="kkL kk-light">animation-iteration-count</kbd> - количество повторений анимации</a></h3>
  </li>
  <li>
    <h3><a href="animation-name/index.html"><kbd class="kkL kk-light">animation-name</kbd> - имя анимации</a></h3>
  </li>
  <li>
    <h3><a href="animation-play-state/index.html"><kbd class="kkL kk-light">animation-play-state</kbd> - состояние анимации</a></h3>
  </li>
  <li>
    <h3><a href="animation-timing-function/index.html"><kbd class="kkL kk-light">animation-timing-function</kbd> - функция расчета значений анимации</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="b" class="p-item">
  <h2>B</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="backface-visibility/index.html"><kbd class="kkL kk-light">backface-visibility</kbd> - видимость задней грани элемента</a></h3>
  </li>
  <li>
    <h3><a href="backdrop-filter/index.html"><kbd class="kkL kk-light">backdrop-filter</kbd> - эффекты / фильтры</a></h3>
  </li>
  <li>
    <h3><a href="background/index.html"><kbd class="kkL kk-light">background</kbd> - все правила фона</a></h3>
  </li>
  <li>
    <h3><a href="background-attachment/index.html"><kbd class="kkL kk-light">background-attachment</kbd> - поведение фонового изображения при скролле</a></h3>
  </li>
  <li>
    <h3><a href="background-blend-mode/index.html"><kbd class="kkL kk-light">background-blend-mode</kbd> - способ наложения фона</a></h3>
  </li>
  <li>
    <h3><a href="background-clip/index.html"><kbd class="kkL kk-light">background-clip</kbd> - поведение фона при наличии границы</a></h3>
  </li>
  <li>
    <h3><a href="background-color/index.html"><kbd class="kkL kk-light">background-color</kbd> - цвет фона</a></h3>
  </li>
  <li>
    <h3><a href="background-image/index.html"><kbd class="kkL kk-light">background-image</kbd> - фоновое изображение</a></h3>
  </li>
  <li>
    <h3><a href="background-origin/index.html"><kbd class="kkL kk-light">background-origin</kbd> - область позиционирования фонового изображения</a></h3>
  </li>
  <li>
    <h3><a href="background-position/index.html"><kbd class="kkL kk-light">background-position</kbd> - позиционирование фонового изображения</a></h3>
  </li>
  <li>
    <h3><a href="background-position-x/index.html"><kbd class="kkL kk-light">background-position-x</kbd> - позиционирование фонового изображения по оси X</a></h3>
  </li>
  <li>
    <h3><a href="background-position-y/index.html"><kbd class="kkL kk-light">background-position-y</kbd> - позиционирование фонового изображения по оси Y</a></h3>
  </li>
  <li>
    <h3><a href="background-repeat/index.html"><kbd class="kkL kk-light">background-repeat</kbd> - повтор фонового изображения</a></h3>
  </li>
  <li>
    <h3><a href="background-size/index.html"><kbd class="kkL kk-light">background-size</kbd> - размер фонового изображения</a></h3>
  </li>
  <li>
    <h3><a href="block-size/index.html"><kbd class="kkL kk-light">block-size</kbd> - размер элемента по блочной оси</a></h3>
  </li>
  <li>
    <h3><a href="border/index.html"><kbd class="kkL kk-light">border</kbd> - граница элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-bottom/index.html"><kbd class="kkL kk-light">border-bottom</kbd> - нижняя граница элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-bottom-color/index.html"><kbd class="kkL kk-light">border-bottom-color</kbd> - цвет нижней границы элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-bottom-left-radius/index.html"><kbd class="kkL kk-light">border-bottom-left-radius</kbd> - закругление нижнего левого угла элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-bottom-right-radius/index.html"><kbd class="kkL kk-light">border-bottom-right-radius</kbd> - закругление нижнего правого угла элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-style/index.html"><kbd class="kkL kk-light">border-style</kbd> - стиль границы</a></h3>
  </li>
  <li>
    <h3><a href="border-bottom-style/index.html"><kbd class="kkL kk-light">border-bottom-style</kbd> - стиль нижней границы</a></h3>
  </li>
  <li>
    <h3><a href="border-bottom-width/index.html"><kbd class="kkL kk-light">border-bottom-width</kbd> - толщина нижней границы</a></h3>
  </li>
  <li>
    <h3><a href="border-collapse/index.html"><kbd class="kkL kk-light">border-collapse</kbd> - поведение границ таблицы</a></h3>
  </li>
  <li>
    <h3><a href="border-color/index.html"><kbd class="kkL kk-light">border-color</kbd> - цвет границы</a></h3>
  </li>
  <li>
    <h3><a href="border-image/index.html"><kbd class="kkL kk-light">border-image</kbd> - рисованная рамка вокруг элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-left/index.html"><kbd class="kkL kk-light">border-left</kbd> - граница слева</a></h3>
  </li>
  <li>
    <h3><a href="border-left-color/index.html"><kbd class="kkL kk-light">border-left-color</kbd> - цвет левой границы элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-left-style/index.html"><kbd class="kkL kk-light">border-left-style</kbd> - стиль левой границы</a></h3>
  </li>
  <li>
    <h3><a href="border-left-width/index.html"><kbd class="kkL kk-light">border-left-width</kbd> - толщина левой границы</a></h3>
  </li>
  <li>
    <h3><a href="border-radius/index.html"><kbd class="kkL kk-light">border-radius</kbd> - закругление углов элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-right/index.html"><kbd class="kkL kk-light">border-right</kbd> - граница справа</a></h3>
  </li>
  <li>
    <h3><a href="border-right-color/index.html"><kbd class="kkL kk-light">border-right-color</kbd> - цвет правой границы элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-right-style/index.html"><kbd class="kkL kk-light">border-right-style</kbd> - стиль правой границы</a></h3>
  </li>
  <li>
    <h3><a href="border-right-width/index.html"><kbd class="kkL kk-light">border-right-width</kbd> - толщина правой границы</a></h3>
  </li>
  <li>
    <h3><a href="border-spacing/index.html"><kbd class="kkL kk-light">border-spacing</kbd> - расстояние между границами ячеек в таблице</a></h3>
  </li>
  <li>
    <h3><a href="border-top/index.html"><kbd class="kkL kk-light">border-top</kbd> - верхняя граница элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-top-color/index.html"><kbd class="kkL kk-light">border-top-color</kbd> - цвет верхней границы элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-top-left-radius/index.html"><kbd class="kkL kk-light">border-top-left-radius</kbd> - закругление верхнего левого угла элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-top-right-radius/index.html"><kbd class="kkL kk-light">border-top-right-radius</kbd> - закругление верхнего правого угла элемента</a></h3>
  </li>
  <li>
    <h3><a href="border-top-style/index.html"><kbd class="kkL kk-light">border-top-style</kbd> - стиль верхней границы</a></h3>
  </li>
  <li>
    <h3><a href="border-top-width/index.html"><kbd class="kkL kk-light">border-top-width</kbd> - толщина верхней границы</a></h3>
  </li>
  <li>
    <h3><a href="border-width/index.html"><kbd class="kkL kk-light">border-width</kbd> - толщина границы</a></h3>
  </li>
  <li>
    <h3><a href="bottom/index.html"><kbd class="kkL kk-light">bottom</kbd> - позиция от нижнего края</a></h3>
  </li>
  <li>
    <h3><a href="box-decoration-break/index.html"><kbd class="kkL kk-light">box-decoration-break</kbd> - оформление фрагмента текста при его переносе на другую строку</a></h3>
  </li>
  <li>
    <h3><a href="box-shadow/index.html"><kbd class="kkL kk-light">box-shadow</kbd> - тень элемента</a></h3>
  </li>
  <li>
    <h3><a href="box-sizing/index.html"><kbd class="kkL kk-light">box-sizing</kbd> - алгоритм подстчета размеров</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="c" class="p-item">
  <h2>C</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="caption-side/index.html"><kbd class="kkL kk-light">caption-side</kbd> - положение заголовка таблицы</a></h3>
  </li>
  <li>
    <h3><a href="caret-color/index.html"><kbd class="kkL kk-light">caret-color</kbd> - цвет текстового курсора</a></h3>
  </li>
  <li>
    <h3><a href="clear/index.html"><kbd class="kkL kk-light">clear</kbd> - очистка обтеканий</a></h3>
  </li>
  <li>
    <h3><a href="clip-path/index.html"><kbd class="kkL kk-light">clip-path</kbd> - создание ограниченной области</a></h3>
  </li>
  <li>
    <h3><a href="color/index.html"><kbd class="kkL kk-light">color</kbd> - цвет текста</a></h3>
  </li>
  <li>
    <h3><a href="column-count/index.html"><kbd class="kkL kk-light">column-count</kbd> - количество колонок в тексте</a></h3>
  </li>
  <li>
    <h3><a href="column-fill/index.html"><kbd class="kkL kk-light">column-fill</kbd> - распределение содержимого внутри колонок</a></h3>
  </li>
  <li>
    <h3><a href="column-gap/index.html"><kbd class="kkL kk-light">column-gap</kbd> - расстояние между колонками в тексте</a></h3>
  </li>
  <li>
    <h3><a href="column-rule/index.html"><kbd class="kkL kk-light">column-rule</kbd> - линия между колонок и ее параметры</a></h3>
  </li>
  <li>
    <h3><a href="column-rule-color/index.html"><kbd class="kkL kk-light">column-rule-color</kbd> - цвет линии между колонок</a></h3>
  </li>
  <li>
    <h3><a href="color-scheme/index.html"><kbd class="kkL kk-light">color-scheme</kbd> - отображение в цветовых схемах</a></h3>
  </li>
  <li>
    <h3><a href="column-rule-style/index.html"><kbd class="kkL kk-light">column-rule-style</kbd> - стиль линии между колонок</a></h3>
  </li>
  <li>
    <h3><a href="column-span/index.html"><kbd class="kkL kk-light">column-span</kbd> - отображение элемента в многоколоночном тексте</a></h3>
  </li>
  <li>
    <h3><a href="column-width/index.html"><kbd class="kkL kk-light">column-width</kbd> - ширина колонки в многоколоночном тексте</a></h3>
  </li>
  <li>
    <h3><a href="columns/index.html"><kbd class="kkL kk-light">columns</kbd> - ширина и количество колонок многоколоночного текста</a></h3>
  </li>
  <li>
    <h3><a href="content/index.html"><kbd class="kkL kk-light">content</kbd> - вставка генерированного содержимого</a></h3>
  </li>
  <li>
    <h3><a href="counter-increment/index.html"><kbd class="kkL kk-light">counter-increment</kbd> - увеличение или уменьшение значения одного или нескольких счетчиков CSS</a></h3>
  </li>
  <li>
    <h3><a href="counter-reset/index.html"><kbd class="kkL kk-light">counter-reset</kbd> - создает или сбрасывает один или несколько счетчиков CSS</a></h3>
  </li>
  <li>
    <h3><a href="cursor/index.html"><kbd class="kkL kk-light">cursor</kbd> - вид курсора</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="d" class="p-item">
  <h2>D</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="direction/index.html"><kbd class="kkL kk-light">direction</kbd> - направление текста</a></h3>
  </li>
  <li>
    <h3><a href="display/index.html"><kbd class="kkL kk-light">display</kbd> - тип элемента</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="e" class="p-item">
  <h2>E</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="empty-cells/index.html"><kbd class="kkL kk-light">empty-cells</kbd> - отображение границ и фона в ячейке</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="f" class="p-item">
  <h2>F</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="filter/index.html"><kbd class="kkL kk-light">filter</kbd> - эффекты для элемента</a></h3>
  </li>
  <li>
    <h3><a href="flex/index.html"><kbd class="kkL kk-light">flex</kbd> - сокращённое свойство для flex-grow, flex-shrink, flex-basis</a></h3>
  </li>
  <li>
    <h3><a href="flex-basis/index.html"><kbd class="kkL kk-light">flex-basis</kbd> - начальный размер flex элемента</a></h3>
  </li>
  <li>
    <h3><a href="flex-direction/index.html"><kbd class="kkL kk-light">flex-direction</kbd> - задает основную ось flex контейнера</a></h3>
  </li>
  <li>
    <h3><a href="flex-flow/index.html"><kbd class="kkL kk-light">flex-flow</kbd> - flex-direction + flex-wrap</a></h3>
  </li>
  <li>
    <h3><a href="flex-shrink/index.html"><kbd class="kkL kk-light">flex-shrink</kbd> - сжатие flex элементов</a></h3>
  </li>
  <li>
    <h3><a href="flex-wrap/index.html"><kbd class="kkL kk-light">flex-wrap</kbd> - перенос элементов flex контейнера</a></h3>
  </li>
  <li>
    <h3><a href="float/index.html"><kbd class="kkL kk-light">float</kbd> - плавающий элемент</a></h3>
  </li>
  <li>
    <h3><a href="font/index.html"><kbd class="kkL kk-light">font</kbd> - все правила шрифта</a></h3>
  </li>
  <li>
    <h3><a href="font-family/index.html"><kbd class="kkL kk-light">font-family</kbd> - семейство шрифов</a></h3>
  </li>
  <li>
    <h3><a href="font-kerning/index.html"><kbd class="kkL kk-light">font-kerning</kbd> - кернинг шрифта</a></h3>
  </li>
  <li>
    <h3><a href="font-size/index.html"><kbd class="kkL kk-light">font-size</kbd> - размер шрифта</a></h3>
  </li>
  <li>
    <h3><a href="font-stretch/index.html"><kbd class="kkL kk-light">font-stretch</kbd> - начертание шрифта</a></h3>
  </li>
  <li>
    <h3><a href="font-style/index.html"><kbd class="kkL kk-light">font-style</kbd> - наклон шрифта</a></h3>
  </li>
  <li>
    <h3><a href="font-variant/index.html"><kbd class="kkL kk-light">font-variant</kbd> - модификация символов шрифта</a></h3>
  </li>
  <li>
    <h3><a href="font-weight/index.html"><kbd class="kkL kk-light">font-weight</kbd> - толщина шрифта</a></h3>
  </li>
  <li>
    <h3><a href="font-feature-settings/index.html"><kbd class="kkL kk-light">font-feature-settings</kbd> - расширенные типографские функции в шрифтах OpenType</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="g" class="p-item">
  <h2>G</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="gap/index.html"><kbd class="kkL kk-light">gap</kbd> - промежутки между строками и столбцами сетки</a></h3>
  </li>
  <li>
    <h3><a href="grid/index.html"><kbd class="kkL kk-light">grid</kbd> - сокращенное свойство для свойств grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, и grid-auto-flow</a></h3>
  </li>
  <li>
    <h3><a href="grid-area/index.html"><kbd class="kkL kk-light">grid-area</kbd> - имя элемента сетки</a></h3>
  </li>
  <li>
    <h3><a href="grid-auto-columns/index.html"><kbd class="kkL kk-light">grid-auto-columns</kbd> - индекс размера столбца</a></h3>
  </li>
  <li>
    <h3><a href="grid-auto-flow/index.html"><kbd class="kkL kk-light">grid-auto-flow</kbd> - вставка автоматически размещаемых элементов в сетку</a></h3>
  </li>
  <li>
    <h3><a href="grid-auto-rows/index.html"><kbd class="kkL kk-light">grid-auto-rows</kbd> - индекс размера строки</a></h3>
  </li>
  <li>
    <h3><a href="grid-column-end/index.html"><kbd class="kkL kk-light">grid-column-end</kbd> - конец элемента сетки</a></h3>
  </li>
  <li>
    <h3><a href="grid-column-gap/index.html"><kbd class="kkL kk-light">grid-column-gap</kbd> - размер зазора между столбцами</a></h3>
  </li>
  <li>
    <h3><a href="grid-column-start/index.html"><kbd class="kkL kk-light">grid-column-start</kbd> - начало элемента сетки</a></h3>
  </li>
  <li>
    <h3><a href="grid-column/index.html"><kbd class="kkL kk-light">grid-column</kbd> - сокращение для grid-column-start + grid-column-end</a></h3>
  </li>
  <li>
    <h3><a href="grid-gap/index.html"><kbd class="kkL kk-light">grid-gap</kbd> - отступ между строк и ячеек grid</a></h3>
  </li>
  <li>
    <h3><a href="grid-row-end/index.html"><kbd class="kkL kk-light">grid-row-end</kbd> - конец элемента сетки</a></h3>
  </li>
  <li>
    <h3><a href="grid-row-gap/index.html"><kbd class="kkL kk-light">grid-row-gap</kbd> - размер зазора между строками</a></h3>
  </li>
  <li>
    <h3><a href="grid-row-start/index.html"><kbd class="kkL kk-light">grid-row-start</kbd> - начало элемента сетки</a></h3>
  </li>
  <li>
    <h3><a href="grid-row/index.html"><kbd class="kkL kk-light">grid-row</kbd> - сокращение для grid-row-start + grid-row-end</a></h3>
  </li>
  <li>
    <h3><a href="grid-template-areas/index.html"><kbd class="kkL kk-light">grid-template-areas</kbd> - элементы grid сетки</a></h3>
  </li>
  <li>
    <h3><a href="grid-template-columns/index.html"><kbd class="kkL kk-light">grid-template-columns</kbd> - размеры столбцов grid сетки</a></h3>
  </li>
  <li>
    <h3><a href="grid-template-rows/index.html"><kbd class="kkL kk-light">grid-template-rows</kbd> - размеры строк grid сетки</a></h3>
  </li>
  <li>
    <h3><a href="grid-template/index.html"><kbd class="kkL kk-light">grid-template</kbd> - сокращение для grid-template-rows, grid-template-columns и grid-template-areas</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="h" class="p-item">
  <h2>H</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="height/index.html"><kbd class="kkL kk-light">height</kbd> - высота элемента</a></h3>
  </li>
  <li>
    <h3><a href="hyphens/index.html"><kbd class="kkL kk-light">hyphens</kbd> - переносы слов в блоке текста</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="j" class="p-item">
  <h2>J</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="justify-content/index.html"><kbd class="kkL kk-light">justify-content</kbd> - выравнивание flex элементов по главной оси</a></h3>
  </li>
  <li>
    <h3><a href="justify-self/index.html"><kbd class="kkL kk-light">justify-self</kbd> - выравнивание grid элемента</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="l" class="p-item">
  <h2>L</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="left/index.html"><kbd class="kkL kk-light">left</kbd> - позиция от левого края</a></h3>
  </li>
  <li>
    <h3><a href="letter-spacing/index.html"><kbd class="kkL kk-light">letter-spacing</kbd> - отступ между символами</a></h3>
  </li>
  <li>
    <h3><a href="line-clamp/index.html"><kbd class="kkL kk-light">line-clamp</kbd> - ограничение текста</a></h3>
  </li>
  <li>
    <h3><a href="line-height/index.html"><kbd class="kkL kk-light">line-height</kbd> - минимальная высота строки текста</a></h3>
  </li>
  <li>
    <h3><a href="list-style/index.html"><kbd class="kkL kk-light">list-style</kbd> - стилизация списка</a></h3>
  </li>
  <li>
    <h3><a href="list-style-image/index.html"><kbd class="kkL kk-light">list-style-image</kbd> - изображение маркера элементов списка</a></h3>
  </li>
  <li>
    <h3><a href="list-style-position/index.html"><kbd class="kkL kk-light">list-style-position</kbd> - позиция маркера элементов списка</a></h3>
  </li>
  <li>
    <h3><a href="list-style-type/index.html"><kbd class="kkL kk-light">list-style-type</kbd> - стиль маркера элементов списка</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="m" class="p-item">
  <h2>M</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="margin/index.html"><kbd class="kkL kk-light">margin</kbd> - внешний отступ</a></h3>
  </li>
  <li>
    <h3><a href="margin-bottom/index.html"><kbd class="kkL kk-light">margin-bottom</kbd> - внешний отступ снизу</a></h3>
  </li>
  <li>
    <h3><a href="margin-top/index.html"><kbd class="kkL kk-light">margin-top</kbd> - внешний отступ сверху</a></h3>
  </li>
  <li>
    <h3><a href="margin-left/index.html"><kbd class="kkL kk-light">margin-left</kbd> - внешний отступ слева</a></h3>
  </li>
  <li>
    <h3><a href="margin-right/index.html"><kbd class="kkL kk-light">margin-right</kbd> - внешний отступ справа</a></h3>
  </li>
  <li>
    <h3><a href="max-height/index.html"><kbd class="kkL kk-light">max-height</kbd> - максимальная высота элемента</a></h3>
  </li>
  <li>
    <h3><a href="max-width/index.html"><kbd class="kkL kk-light">max-width</kbd> - максимальная ширина элемента</a></h3>
  </li>
  <li>
    <h3><a href="min-height/index.html"><kbd class="kkL kk-light">min-height</kbd> - минимальная высота элемента</a></h3>
  </li>
  <li>
    <h3><a href="min-width/index.html"><kbd class="kkL kk-light">min-width</kbd> - минимальная ширина элемента</a></h3>
  </li>
  <li>
    <h3><a href="mix-blend-mode/index.html"><kbd class="kkL kk-light">mix-blend-mode</kbd> - режим наложения исходного цвета на фоновый цвет или фоновое изображение</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="o" class="p-item">
  <h2>O</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="object-fit/index.html"><kbd class="kkL kk-light">object-fit</kbd> - заполнение элемента</a></h3>
  </li>
  <li>
    <h3><a href="opacity/index.html"><kbd class="kkL kk-light">opacity</kbd> - непрозрачность элемента</a></h3>
  </li>
  <li>
    <h3><a href="order/index.html"><kbd class="kkL kk-light">order</kbd> - порядок flex элемента</a></h3>
  </li>
  <li>
    <h3><a href="outline/index.html"><kbd class="kkL kk-light">outline</kbd> - обводка элемента</a></h3>
  </li>
  <li>
    <h3><a href="outline-color/index.html"><kbd class="kkL kk-light">outline-color</kbd> - цвет обводки</a></h3>
  </li>
  <li>
    <h3><a href="outline-offset/index.html"><kbd class="kkL kk-light">outline-offset</kbd> - отступ обводки</a></h3>
  </li>
  <li>
    <h3><a href="outline-style/index.html"><kbd class="kkL kk-light">outline-style</kbd> - стиль обводки</a></h3>
  </li>
  <li>
    <h3><a href="outline-width/index.html"><kbd class="kkL kk-light">outline-width</kbd> - ширина обводки</a></h3>
  </li>
  <li>
    <h3><a href="overflow/index.html"><kbd class="kkL kk-light">overflow</kbd> - отображение переполненного блока</a></h3>
  </li>
  <li>
    <h3><a href="overflow-x/index.html"><kbd class="kkL kk-light">overflow-x</kbd> - отображение переполненного блока по оси X</a></h3>
  </li>
  <li>
    <h3><a href="overflow-y/index.html"><kbd class="kkL kk-light">overflow-y</kbd> - отображение переполненного блока по оси Y</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="p" class="p-item">
  <h2>P</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="padding/index.html"><kbd class="kkL kk-light">padding</kbd> - внутренний отступ</a></h3>
  </li>
  <li>
    <h3><a href="padding-block/index.html"><kbd class="kkL kk-light">padding-block</kbd> - начальный и конечный внутренние отступы элемента по блочной оси</a></h3>
  </li>
  <li>
    <h3><a href="padding-block-end/index.html"><kbd class="kkL kk-light">padding-block-end</kbd> - конечный внутренний отступ элемента по блочной оси</a></h3>
  </li>
  <li>
    <h3><a href="padding-block-start/index.html"><kbd class="kkL kk-light">padding-block-start</kbd> - начальный внутренний отступ элемента по блочной оси</a></h3>
  </li>
  <li>
    <h3><a href="padding-bottom/index.html"><kbd class="kkL kk-light">padding-bottom</kbd> - внутренний отступ снизу</a></h3>
  </li>
  <li>
    <h3><a href="padding-inline/index.html"><kbd class="kkL kk-light">padding-inline</kbd> - начальный и конечный внутренние отступы элемента по строчной оси</a></h3>
  </li>
  <li>
    <h3><a href="padding-inline-end/index.html"><kbd class="kkL kk-light">padding-inline-end</kbd> - конечный внутренний отступ элемента по строчной оси</a></h3>
  </li>
  <li>
    <h3><a href="padding-inline-start/index.html"><kbd class="kkL kk-light">padding-inline-start</kbd> - начальный строчной отступ элемента по блочной оси</a></h3>
  </li>
  <li>
    <h3><a href="padding-left/index.html"><kbd class="kkL kk-light">padding-left</kbd> - внутренний отступ слева</a></h3>
  </li>
  <li>
    <h3><a href="padding-right/index.html"><kbd class="kkL kk-light">padding-right</kbd> - внутренний отступ справа</a></h3>
  </li>
  <li>
    <h3><a href="padding-top/index.html"><kbd class="kkL kk-light">padding-top</kbd> - внутренний отступ сверху</a></h3>
  </li>
  <li>
    <h3><a href="page-break-after/index.html"><kbd class="kkL kk-light">page-break-after</kbd> - разрыв страницы при печати документа</a></h3>
  </li>
  <li>
    <h3><a href="page-break-before/index.html"><kbd class="kkL kk-light">page-break-before</kbd> - разрыв страницы при печати документа</a></h3>
  </li>
  <li>
    <h3><a href="page-break-inside/index.html"><kbd class="kkL kk-light">page-break-inside</kbd> - разрыв страницы внутри элемента</a></h3>
  </li>
  <li>
    <h3><a href="perspective/index.html"><kbd class="kkL kk-light">perspective</kbd> - эффект перспективы</a></h3>
  </li>
  <li>
    <h3><a href="perspective-origin/index.html"><kbd class="kkL kk-light">perspective-origin</kbd> - определяет точку сходимости линий при перспективе</a></h3>
  </li>
  <li>
    <h3><a href="pointer-events/index.html"><kbd class="kkL kk-light">pointer-events</kbd> - контроль событий мыши</a></h3>
  </li>
  <li>
    <h3><a href="position/index.html"><kbd class="kkL kk-light">position</kbd> - позиционирование элемента</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="q" class="p-item">
  <h2>Q</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="quotes/index.html"><kbd class="kkL kk-light">quotes</kbd> - тип кавычек</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="r" class="p-item">
  <h2>R</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="resize/index.html"><kbd class="kkL kk-light">resize</kbd> - размер текстового поля</a></h3>
  </li>
  <li>
    <h3><a href="right/index.html"><kbd class="kkL kk-light">right</kbd> - позиция от правого края</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="s" class="p-item">
  <h2>S</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="scroll-behavior/index.html"><kbd class="kkL kk-light">scroll-behavior</kbd> - поведение прокрутки внутри элемента</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="t" class="p-item">
  <h2>T</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="tab-size/index.html"><kbd class="kkL kk-light">tab-size</kbd> - настройка ширины символа табуляции</a></h3>
  </li>
  <li>
    <h3><a href="table-layout/index.html"><kbd class="kkL kk-light">table-layout</kbd> - вычисление ширины ячеек таблицы</a></h3>
  </li>
  <li>
    <h3><a href="text-align/index.html"><kbd class="kkL kk-light">text-align</kbd> - горизонтальное выравнивание текста</a></h3>
  </li>
  <li>
    <h3><a href="text-align-last/index.html"><kbd class="kkL kk-light">text-align-last</kbd> - выравнивание последней строки блока текста</a></h3>
  </li>
  <li>
    <h3><a href="text-decoration/index.html"><kbd class="kkL kk-light">text-decoration</kbd> - декорация текста</a></h3>
  </li>
  <li>
    <h3><a href="text-decoration-color/index.html"><kbd class="kkL kk-light">text-decoration-color</kbd> - цвет линии подчеркивания</a></h3>
  </li>
  <li>
    <h3><a href="text-decoration-line/index.html"><kbd class="kkL kk-light">text-decoration-line</kbd> - линия подчеркивания текста</a></h3>
  </li>
  <li>
    <h3><a href="text-decoration-style/index.html"><kbd class="kkL kk-light">text-decoration-style</kbd> - стиль линии подчеркивания</a></h3>
  </li>
  <li>
    <h3><a href="text-decoration-skip-ink/index.html"><kbd class="kkL kk-light">text-decoration-skip-ink</kbd> - вывод линии подчеркивания</a></h3>
  </li>
  <li>
    <h3><a href="text-emphasis/index.html"><kbd class="kkL kk-light">text-emphasis</kbd> - маркер над символом текста</a></h3>
  </li>
  <li>
    <h3><a href="text-emphasis-color/index.html"><kbd class="kkL kk-light">text-emphasis-color</kbd> - цвет маркера над символом текста</a></h3>
  </li>
  <li>
    <h3><a href="text-emphasis-position/index.html"><kbd class="kkL kk-light">text-emphasis-position</kbd> - положение маркера над символом текста</a></h3>
  </li>
  <li>
    <h3><a href="text-emphasis-style/index.html"><kbd class="kkL kk-light">text-emphasis-style</kbd> - вид маркера над символом текста</a></h3>
  </li>
  <li>
    <h3><a href="text-fill-color/index.html"><kbd class="kkL kk-light">text-fill-color</kbd> - цвет заливки символов текста</a></h3>
  </li>
  <li>
    <h3><a href="text-ident/index.html"><kbd class="kkL kk-light">text-ident</kbd> - отступ абзаца</a></h3>
  </li>
  <li>
    <h3><a href="text-orientation/index.html"><kbd class="kkL kk-light">text-orientation</kbd> - ориентация текста</a></h3>
  </li>
  <li>
    <h3><a href="text-overflow/index.html"><kbd class="kkL kk-light">text-overflow</kbd> - поведение скрытого текста</a></h3>
  </li>
  <li>
    <h3><a href="text-shadow/index.html"><kbd class="kkL kk-light">text-shadow</kbd> - тень текста</a></h3>
  </li>
  <li>
    <h3><a href="text-stroke/index.html"><kbd class="kkL kk-light">text-stroke</kbd> - цвет и толщина контура вокруг букв и символов текста</a></h3>
  </li>
  <li>
    <h3><a href="text-stroke-color/index.html"><kbd class="kkL kk-light">text-stroke-color</kbd> - цвет контура вокруг букв и символов текста</a></h3>
  </li>
  <li>
    <h3><a href="text-stroke-width/index.html"><kbd class="kkL kk-light">text-stroke-width</kbd> - толщина контура вокруг букв и символов текста</a></h3>
  </li>
  <li>
    <h3><a href="text-transform/index.html"><kbd class="kkL kk-light">text-transform</kbd> - регистр текста</a></h3>
  </li>
  <li>
    <h3><a href="top/index.html"><kbd class="kkL kk-light">top</kbd> - позиция от верхнего края</a></h3>
  </li>
  <li>
    <h3><a href="transform/index.html"><kbd class="kkL kk-light">transform</kbd> - трансформация элемента</a></h3>
  </li>
  <li>
    <h3><a href="transform-origin/index.html"><kbd class="kkL kk-light">transform-origin</kbd> - точка трансформации</a></h3>
  </li>
  <li>
    <h3><a href="transform-style/index.html"><kbd class="kkL kk-light">transform-style</kbd> - плоскость дочерних элементов</a></h3>
  </li>
  <li>
    <h3><a href="transition/index.html"><kbd class="kkL kk-light">transition</kbd> - плавный переход свойства</a></h3>
  </li>
  <li>
    <h3><a href="transition-delay/index.html"><kbd class="kkL kk-light">transition-delay</kbd> - задержка перед запуском перехода</a></h3>
  </li>
  <li>
    <h3><a href="transition-duration/index.html"><kbd class="kkL kk-light">transition-duration</kbd> - длительность плавного перехода</a></h3>
  </li>
  <li>
    <h3><a href="transition-property/index.html"><kbd class="kkL kk-light">transition-property</kbd> - свойство плавного перехода</a></h3>
  </li>
  <li>
    <h3><a href="transition-timing-function/index.html"><kbd class="kkL kk-light">transition-timing-function</kbd> - фукция расчета перехода</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="u" class="p-item">
  <h2>U</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="unicode-bidi/index.html"><kbd class="kkL kk-light">unicode-bidi</kbd> - расположение текста используемого языка</a></h3>
  </li>
  <li>
    <h3><a href="user-select/index.html"><kbd class="kkL kk-light">user-select</kbd> - управление поведением выделения текста</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="v" class="p-item">
  <h2>V</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="vertical-align/index.html"><kbd class="kkL kk-light">vertical-align</kbd> - вертикальное выравнивание</a></h3>
  </li>
  <li>
    <h3><a href="visibility/index.html"><kbd class="kkL kk-light">visibility</kbd> - отображение / скрытие элемента</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="w" class="p-item">
  <h2>W</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="white-space/index.html"><kbd class="kkL kk-light">white-space</kbd> - пробелы между словами</a></h3>
  </li>
  <li>
    <h3><a href="widows/index.html"><kbd class="kkL kk-light">widows</kbd> - минимальное количество строк, которое должно оставаться в верхней части страницы при разрыве страницы внутри элемента</a></h3>
  </li>
  <li>
    <h3><a href="width/index.html"><kbd class="kkL kk-light">width</kbd> - ширина</a></h3>
  </li>
  <li>
    <h3><a href="word-break/index.html"><kbd class="kkL kk-light">word-break</kbd> - перенос строк внутри слов</a></h3>
  </li>
  <li>
    <h3><a href="word-spacing/index.html"><kbd class="kkL kk-light">word-spacing</kbd> - интервал между словами</a></h3>
  </li>
  <li>
    <h3><a href="word-wrap/index.html"><kbd class="kkL kk-light">word-wrap</kbd> - перенос длинных слов</a></h3>
  </li>
  <li>
    <h3><a href="writing-mode/index.html"><kbd class="kkL kk-light">writing-mode</kbd> - направление текста</a></h3>
  </li>
</ul>
</ul>
<ul class="ul-l1 ul-list-light">
<li id="z" class="p-item">
  <h2>Z</h2>
</li>
<ul id="ul">
  <li>
    <h3><a href="z-index/index.html"><kbd class="kkL kk-light">z-index</kbd> - индекс элемента по оси Z</a></h3>
  </li>
</ul>
</ul>
            </div>
</div>
`;
let BtnOpenMenu = document.querySelector(".btn-open-menu-light");
let BtnCloseMenu = document.querySelector("#btn-close-menu");
let BtnCloseMenu2 = document.querySelector("#btn-close-menu2");

let tagsPattern = document.querySelector(".tags-pattern");

BtnOpenMenu.addEventListener("click", function () {
  document.querySelector(".main-menu").style.transform = "translateX(0px)";
  document.querySelector("header").style.display = "none";
  document.querySelector("main").style.display = "none";
  document.querySelector("footer").style.display = "none";
});
BtnCloseMenu.addEventListener("click", function () {
  document.querySelector(".main-menu").style.transform = "translateX(-1000px)";
  document.querySelector("header").style.display = "block";
  document.querySelector("main").style.display = "block";
  document.querySelector("footer").style.display = "block";
});
tagsPattern.addEventListener("click", function () {
  document.querySelector(".main-menu").style.display = "none";
  document.querySelector(".area2").style.display = "block";
  document.querySelector("#area22").style.display = "block";
});
BtnCloseMenu2.addEventListener("click", function () {
  document.querySelector(".main-menu").style.display = "block";
  document.querySelector(".area2").style.display = "none";
  document.querySelector("#area22").style.display = "none";
});

let items = document.querySelectorAll(`.ul-list-light`);
let search = document.querySelector(`#search`);

search.addEventListener(`input`, function () {
  let input = search.value.toLowerCase();
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let title = item.innerHTML.toLowerCase();
    if (title.includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
});
let items222 = document.querySelectorAll(`.ul-list-dark`);
let search222 = document.querySelector(`#search`);

search222.addEventListener(`input`, function () {
  let input222 = search222.value.toLowerCase();
  for (let i222 = 0; i222 < items222.length; i++) {
    let item222 = items222[i];
    let title222 = item222.innerHTML.toLowerCase();
    if (title222.includes(input222)) {
      item222.style.display = "block";
    } else {
      item222.style.display = "none";
    }
  }
});

let toggle = document.querySelector(".toggle-input2");
let bodyFon = document.querySelector(".body-fon");
let navA = document.querySelector(".nav-zam");
let tect = document.querySelector(".nav-tect");
let ti = document.querySelectorAll(".l-span");
let ulList = document.querySelectorAll(".ul-l1");
let ulList2 = document.querySelectorAll(".ul-l1");
let itemCon = document.querySelectorAll(".item-c");
let kk = document.querySelectorAll(".kkL");
let tag = document.querySelectorAll(".tagL");
let white = document.querySelectorAll(".whites");
let btnHtml = document.querySelector(".h-l");
let btnResult = document.querySelector(".re-l");
let result = document.querySelector(".result-l");

setInterval(function () {
  if (window.localStorage.getItem("light") == "true") {
    document.querySelector(".theam-text").textContent = "Светлая тема";
    bodyFon.classList.replace("dark-fon", "light-fon");
    navA.classList.replace("dark-nav-a", "light-nav-a");
    tect.classList.replace("dark-tect", "light-tect");
    BtnOpenMenu.classList.replace("btn-open-menu-dark", "btn-open-menu-light");
    for (let i1 = 0; i1 < ulList.length; i1++) {
      let ul = ulList[i1];
      ul.classList.replace("ul-list-dark", "ul-list-light");
    }
    for (let i2 = 0; i2 < itemCon.length; i2++) {
      let ite = itemCon[i2];
      ite.classList.replace("item-con-1-dark", "item-con-1-light");
    }
    for (let i3 = 0; i3 < kk.length; i3++) {
      let k = kk[i3];
      k.classList.replace("kk-dark", "kk-light");
    }
    for (let i4 = 0; i4 < tag.length; i4++) {
      let ta = tag[i4];
      ta.classList.replace("tag-dark", "tag-light");
    }
    for (let i5 = 0; i5 < ulList2.length; i5++) {
      let ul5 = ulList2[i5];
      ul5.classList.replace("ul-list-dark2", "ul-list-light2");
    }
    for (let i6 = 0; i6 < white.length; i6++) {
      let w = white[i6];
      w.classList.replace("white-dark", "white-light");
    }
    for (let i7 = 0; i7 < ti.length; i7++) {
      let tir = ti[i7];
      tir.classList.replace("dark-span-tire", "light-span-tire");
    }
    if (btnHtml) {
      btnHtml.classList.replace("html-btn-dark", "html-btn-light");
    }
    if (btnResult) {
      btnResult.classList.replace("result-btn-dark", "result-btn-light");
    }
    if (result) {
      result.classList.replace("result-dark", "result-light");
    }
    document.body.style.color = "black";
    document.querySelector("h2").style.color = "black";
    toggle.checked = false;
  } else if (window.localStorage.getItem("light") == "false") {
    document.querySelector(".theam-text").textContent = "Темная тема";
    bodyFon.classList.replace("light-fon", "dark-fon");
    navA.classList.replace("light-nav-a", "dark-nav-a");
    tect.classList.replace("light-tect", "dark-tect");
    BtnOpenMenu.classList.replace("btn-open-menu-light", "btn-open-menu-dark");
    for (let i1 = 0; i1 < ulList.length; i1++) {
      let ul = ulList[i1];
      ul.classList.replace("ul-list-light", "ul-list-dark");
    }
    for (let i2 = 0; i2 < itemCon.length; i2++) {
      let ite = itemCon[i2];
      ite.classList.replace("item-con-1-light", "item-con-1-dark");
    }
    for (let i3 = 0; i3 < kk.length; i3++) {
      let k = kk[i3];
      k.classList.replace("kk-light", "kk-dark");
    }
    for (let i4 = 0; i4 < tag.length; i4++) {
      let ta = tag[i4];
      ta.classList.replace("tag-light", "tag-dark");
    }
    for (let i5 = 0; i5 < ulList2.length; i5++) {
      let ul5 = ulList2[i5];
      ul5.classList.replace("ul-list-light2", "ul-list-dark2");
    }
    for (let i7 = 0; i7 < ti.length; i7++) {
      let tir = ti[i7];
      tir.classList.replace("light-span-tire", "dark-span-tire");
    }
    for (let i6 = 0; i6 < white.length; i6++) {
      let w = white[i6];
      w.classList.replace("white-light", "white-dark");
    }
    if (btnHtml) {
      btnHtml.classList.replace("html-btn-light", "html-btn-dark");
    }
    if (btnResult) {
      btnResult.classList.replace("result-btn-light", "result-btn-dark");
    }
    if (result) {
      result.classList.replace("result-light", "result-dark");
    }
    document.body.style.color = "white";
    document.querySelector("h2").style.color = "white";
    toggle.checked = true;
  } else {
    window.localStorage.setItem("light", "true");
  }
}, 100);

toggle.addEventListener("click", function () {
  document.body.classList.toggle("body-light");
  document.body.classList.toggle("body-dark");
  if (document.body.classList[0] == "body-dark") {
    window.localStorage.setItem("light", "false");
  }
  if (document.body.classList[0] == "body-light") {
    window.localStorage.setItem("light", "true");
  }
});
