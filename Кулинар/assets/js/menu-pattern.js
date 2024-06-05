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
<li class="menu-li tags-pattern">
<a href="#" id="none-pc"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-filetype-html" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
</svg><span class="nav-text">HTML теги</span></a>
</li>
<li class="menu-li">
<a href="https://css.gki-webik.ru/"><svg xmlns="http://www.w3.org/2000/svg" class="ico-m" width="36" height="36" fill="rgb(166, 166, 166)" class="bi bi-filetype-css" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.397 14.841a1.13 1.13 0 0 0 .401.823c.13.108.289.192.478.252.19.061.411.091.665.091.338 0 .624-.053.859-.158.236-.105.416-.252.539-.44.125-.189.187-.408.187-.656 0-.224-.045-.41-.134-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.621-.144a.97.97 0 0 1-.404-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.512-.152.143 0 .266.023.37.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.551.05-.776.15-.225.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.082.149.2.27.352.367.152.095.332.167.539.213l.618.144c.207.049.361.113.463.193a.387.387 0 0 1 .152.326.505.505 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.223-.013-.32-.04a.838.838 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM.806 13.693c0-.248.034-.46.102-.633a.868.868 0 0 1 .302-.399.814.814 0 0 1 .475-.137c.15 0 .283.032.398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.441 1.441 0 0 0-.489-.272 1.838 1.838 0 0 0-.606-.097c-.356 0-.66.074-.911.223-.25.148-.44.359-.572.632-.13.274-.196.6-.196.979v.498c0 .379.064.704.193.976.131.271.322.48.572.626.25.145.554.217.914.217.293 0 .554-.055.785-.164.23-.11.414-.26.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.799.799 0 0 1-.118.363.7.7 0 0 1-.272.25.874.874 0 0 1-.401.087.845.845 0 0 1-.478-.132.833.833 0 0 1-.299-.392 1.699 1.699 0 0 1-.102-.627v-.495ZM6.78 15.29a1.176 1.176 0 0 1-.111-.449h.764a.578.578 0 0 0 .255.384c.07.049.154.087.25.114.095.028.201.041.319.041.164 0 .301-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.256-.144-.463-.193l-.618-.143a1.72 1.72 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.527-.422.225-.1.484-.149.777-.149.304 0 .564.05.779.152.217.102.384.239.5.41.12.17.187.359.2.566h-.75a.56.56 0 0 0-.12-.258.624.624 0 0 0-.246-.181.923.923 0 0 0-.37-.068c-.216 0-.387.05-.512.152a.472.472 0 0 0-.184.384c0 .121.047.22.143.3a.97.97 0 0 0 .404.175l.621.143c.217.05.406.12.566.211.16.09.285.21.375.358.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Z"/>
</svg><span class="nav-text">CSS - справочник</span></a>
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
              <ul class="ul-l1 ul-list-light2 u1">
              <li>
               <button style="position: relative; z-index: 2005;" id="btn-close-menu2">< Назад</button>
                </li>
                <li id="a" class="p-item">
                  <h2>A</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="a/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>a<span id="kov-1">&gt;</span></kbd> - ссылка</a></h3>
                  </li>
                  <li>
                    <h3><a href="abbr/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>abbr<span id="kov-1">&gt;</span></kbd> - аббревиатура</a></h3>
                  </li>
                  <li>
                    <h3><a href="address/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>address<span id="kov-1">&gt;</span></kbd> - контактная информация</a></h3>
                  </li>
                  <li>
                    <h3><a href="area/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>area<span id="kov-1">&gt;</span></kbd> - активная область на изображении</a></h3>
                  </li>
                  <li>
                    <h3><a href="article/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>article<span id="kov-1">&gt;</span></kbd> - статья</a></h3>
                  </li>
                  <li>
                    <h3><a href="aside/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>aside<span id="kov-1">&gt;</span></kbd> - боковая панель</a></h3>
                  </li>
                  <li>
                    <h3><a href="audio/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>audio<span id="kov-1">&gt;</span></kbd> - вставка аудио</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u2">
                <li id="b" class="p-item">
                  <h2>B</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="b/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>b<span id="kov-1">&gt;</span></kbd> - полужирный текст</a></h3>
                  </li>
                  <li>
                    <h3><a href="base/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>base<span id="kov-1">&gt;</span></kbd> - основной URL страницы</a></h3>
                  </li>
                  <li>
                    <h3><a href="blockquote/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>blockquote<span id="kov-1">&gt;</span></kbd> - блок цитаты</a></h3>
                  </li>
                  <li>
                    <h3><a href="body/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>body<span id="kov-1">&gt;</span></kbd> - «тело» документа</a></h3>
                  </li>
                  <li>
                    <h3><a href="br/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>br<span id="kov-1">&gt;</span></kbd> - перенос строки</a></h3>
                  </li>
                  <li>
                    <h3><a href="button/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>button<span id="kov-1">&gt;</span></kbd> - кнопка</a></h3>
                  </li>
                  <li>
                    <h3><a href="bdi/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>bdi<span id="kov-1">&gt;</span></kbd> - изоляция двунаправленности</a></h3>
                  </li>
                  <li>
                    <h3><a href="bdo/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>bdo<span id="kov-1">&gt;</span></kbd> - переопределение двунаправленности</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u3">
                <li id="c" class="p-item">
                  <h2>C</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="canvas/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>canvas<span id="kov-1">&gt;</span></kbd> - область для рисования</a></h3>
                  </li>
                  <li>
                    <h3><a href="caption/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>caption<span id="kov-1">&gt;</span></kbd> - заголовок таблицы</a></h3>
                  </li>
                  <li>
                    <h3><a href="cite/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>cite<span id="kov-1">&gt;</span></kbd> - источник цитаты</a></h3>
                  </li>
                  <li>
                    <h3><a href="code/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>code<span id="kov-1">&gt;</span></kbd> - фрагмент кода</a></h3>
                  </li>
                  <li>
                    <h3><a href="col/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>col<span id="kov-1">&gt;</span></kbd> - столбец в таблице</a></h3>
                  </li>
                  <li>
                    <h3><a href="colgroup/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>colgroup<span id="kov-1">&gt;</span></kbd> - группа столбцов таблицы</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u4">
                <li id="d" class="p-item">
                  <h2>D</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="data/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>data<span id="kov-1">&gt;</span></kbd> - содержимое в машиночитаемом виде</a></h3>
                  </li>
                  <li>
                    <h3><a href="datalist/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>datalist<span id="kov-1">&gt;</span></kbd> - выпадающий список для тега input</a></h3>
                  </li>
                  <li>
                    <h3><a href="dd/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>dd<span id="kov-1">&gt;</span></kbd> - элемент списка с описанием термина</a></h3>
                  </li>
                  <li>
                    <h3><a href="dl/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>dl<span id="kov-1">&gt;</span></kbd> - список с объяснением</a></h3>
                  </li>
                  <li>
                    <h3><a href="dt/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>dt<span id="kov-1">&gt;</span></kbd> - элемент списка с названием термина</a></h3>
                  </li>
                  <li>
                    <h3><a href="del/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>del<span id="kov-1">&gt;</span></kbd> - удаленный текст</a></h3>
                  </li>
                  <li>
                    <h3><a href="details/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>details<span id="kov-1">&gt;</span></kbd> - нативный «аккордеон»</a></h3>
                  </li>
                  <li>
                    <h3><a href="dfn/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>dfn<span id="kov-1">&gt;</span></kbd> - выделение термина</a></h3>
                  </li>
                  <li>
                    <h3><a href="div/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>div<span id="kov-1">&gt;</span></kbd> - блочный контейнер</a></h3>
                  </li>
                  <li>
                    <h3><a href="dialog/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>dialog<span id="kov-1">&gt;</span></kbd> - диалоговое окно</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u5">
                <li id="e" class="p-item">
                  <h2>E</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="em/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>em<span id="kov-1">&gt;</span></kbd> - курсивный текст</a></h3>
                  </li>
                  <li>
                    <h3><a href="embed/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>embed<span id="kov-1">&gt;</span></kbd> - встраивание файлов</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u6">
                <li id="f" class="p-item">
                  <h2>F</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="fieldset/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>fieldset<span id="kov-1">&gt;</span></kbd> - группа полей формы</a></h3>
                  </li>
                  <li>
                    <h3><a href="figcaption/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>figcaption<span id="kov-1">&gt;</span></kbd> - заголовок для figure</a></h3>
                  </li>
                  <li>
                    <h3><a href="figure/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>figure<span id="kov-1">&gt;</span></kbd> - контейнер для изображения</a></h3>
                  </li>
                  <li>
                    <h3><a href="footer/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>footer<span id="kov-1">&gt;</span></kbd> - «подвал» сайта</a></h3>
                  </li>
                  <li>
                    <h3><a href="form/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>form<span id="kov-1">&gt;</span></kbd> - форма</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u7">
                <li id="h" class="p-item">
                  <h2>H</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="h1-h6/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>h1<span id="kov-1">&gt;</span>-<span id="kov-1">&lt;</span>h6<span id="kov-1">&gt;</span></kbd> - заголовок</a></h3>
                  </li>
                  <li>
                    <h3><a href="head/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>head<span id="kov-1">&gt;</span></kbd> - хранит информацию о документе</a></h3>
                  </li>
                  <li>
                    <h3><a href="header/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>header<span id="kov-1">&gt;</span></kbd> - «шапка» сайта</a></h3>
                  </li>
                  <li>
                    <h3><a href="hr/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>hr<span id="kov-1">&gt;</span></kbd> - горизонтальный разделитель</a></h3>
                  </li>
                  <li>
                    <h3><a href="html/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>html<span id="kov-1">&gt;</span></kbd> - главный элемент документа</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u8">
                <li id="i" class="p-item">
                  <h2>I</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="i/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>i<span id="kov-1">&gt;</span></kbd> - курсивный текст</a></h3>
                  </li>
                  <li>
                    <h3><a href="iframe/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>iframe<span id="kov-1">&gt;</span></kbd> - встраивание страниц</a></h3>
                  </li>
                  <li>
                    <h3><a href="img/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>img<span id="kov-1">&gt;</span></kbd> - вставка изображений</a></h3>
                  </li>
                  <li>
                    <h3><a href="input/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>input<span id="kov-1">&gt;</span></kbd> - поле для ввода</a></h3>
                  </li>
                  <li>
                    <h3><a href="ins/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>ins<span id="kov-1">&gt;</span></kbd> - добавленный текст</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u9">
                <li id="k" class="p-item">
                  <h2>K</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="kbd/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>kbd<span id="kov-1">&gt;</span></kbd> - горячие клавиши</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u10">
                <li id="l" class="p-item">
                  <h2>L</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="label/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>label<span id="kov-1">&gt;</span></kbd> - ярлык элемента формы</a></h3>
                  </li>
                  <li>
                    <h3><a href="legend/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>legend<span id="kov-1">&gt;</span></kbd> - заголовок группы формы</a></h3>
                  </li>
                  <li>
                    <h3><a href="li/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>li<span id="kov-1">&gt;</span></kbd> - элемент списка</a></h3>
                  </li>
                  <li>
                    <h3><a href="link/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>link<span id="kov-1">&gt;</span></kbd> - подключение файлов стилей</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u11">
                <li id="m" class="p-item">
                  <h2>M</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="main/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>main<span id="kov-1">&gt;</span></kbd> - основное содержание страницы</a></h3>
                  </li>
                  <li>
                    <h3><a href="map/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>map<span id="kov-1">&gt;</span></kbd> - карта изображения</a></h3>
                  </li>
                  <li>
                    <h3><a href="mark/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>mark<span id="kov-1">&gt;</span></kbd> - подсвечивание текста</a></h3>
                  </li>
                  <li>
                    <h3><a href="meta/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>meta<span id="kov-1">&gt;</span></kbd> - мета - данные</a></h3>
                  </li>
                  <li>
                    <h3><a href="meter/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>meter<span id="kov-1">&gt;</span></kbd> - значение в диапазоне</a></h3>
                  </li>
                  <li>
                    <h3><a href="menu/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>menu<span id="kov-1">&gt;</span></kbd> - список пунктов меню</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u12">
                <li id="n" class="p-item">
                  <h2>N</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="nav/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>nav<span id="kov-1">&gt;</span></kbd> - навигация</a></h3>
                  </li>
                  <li>
                    <h3><a href="noscript/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>noscript<span id="kov-1">&gt;</span></kbd> - если отключен JavaScript</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u13">
                <li id="o" class="p-item">
                  <h2>O</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="ol/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>ol<span id="kov-1">&gt;</span></kbd> - нумерованный список</a></h3>
                  </li>
                  <li>
                    <h3><a href="optgroup/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>optgroup<span id="kov-1">&gt;</span></kbd> - группа элементов option</a></h3>
                  </li>
                  <li>
                    <h3><a href="option/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>option<span id="kov-1">&gt;</span></kbd> - элемент выпадающего списка</a></h3>
                  </li>
                  <li>
                    <h3><a href="object/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>object<span id="kov-1">&gt;</span></kbd> - загружение и отображение объектов</a></h3>
                  </li>
                  <li>
                    <h3><a href="output/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>output<span id="kov-1">&gt;</span></kbd> - определение области, в которую вводится информация</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u14">
                <li id="p" class="p-item">
                  <h2>P</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="p/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>p<span id="kov-1">&gt;</span></kbd> - параграф</a></h3>
                  </li>
                  <li>
                    <h3><a href="picture/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>picture<span id="kov-1">&gt;</span></kbd> - контейнер изображений</a></h3>
                  </li>
                  <li>
                    <h3><a href="pre/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>pre<span id="kov-1">&gt;</span></kbd> - отформатированный текст</a></h3>
                  </li>
                  <li>
                    <h3><a href="progress/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>progress<span id="kov-1">&gt;</span></kbd> - индикатор выполнения задачи</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u15">
                <li id="q" class="p-item">
                  <h2>Q</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="q/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>q<span id="kov-1">&gt;</span></kbd> - короткая цитата</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u16">
                <li id="r" class="p-item">
                  <h2>R</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="rp/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>rp<span id="kov-1">&gt;</span></kbd> - «аварийный» текст для ruby</a></h3>
                  </li>
                  <li>
                    <h3><a href="rt/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>rt<span id="kov-1">&gt;</span></kbd> - обозначение аннотации</a></h3>
                  </li>
                  <li>
                    <h3><a href="rtc/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>rtc<span id="kov-1">&gt;</span></kbd> - текстовый контейнер</a></h3>
                  </li>
                  <li>
                    <h3><a href="ruby/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>ruby<span id="kov-1">&gt;</span></kbd> - контейнер для аннотации</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u17">
                <li id="s" class="p-item">
                  <h2>S</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="s/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>s<span id="kov-1">&gt;</span></kbd> - Перечеркнутый текст</a></h3>
                  </li>
                  <li>
                    <h3><a href="samp/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>samp<span id="kov-1">&gt;</span></kbd> - вывод текста компьютерной программы</a></h3>
                  </li>
                  <li>
                    <h3><a href="script/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>script<span id="kov-1">&gt;</span></kbd> - подключение внешних js файлов</a></h3>
                  </li>
                  <li>
                    <h3><a href="section/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>section<span id="kov-1">&gt;</span></kbd> - раздел сайта</a></h3>
                  </li>
                  <li>
                    <h3><a href="select/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>select<span id="kov-1">&gt;</span></kbd> - выпадающий список</a></h3>
                  </li>
                  <li>
                    <h3><a href="small/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>small<span id="kov-1">&gt;</span></kbd> - маленький текст</a></h3>
                  </li>
                  <li>
                    <h3><a href="source/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>source<span id="kov-1">&gt;</span></kbd> - источник файла</a></h3>
                  </li>
                  <li>
                    <h3><a href="span/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>span<span id="kov-1">&gt;</span></kbd> - строчная обертка</a></h3>
                  </li>
                  <li>
                    <h3><a href="strong/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>strong<span id="kov-1">&gt;</span></kbd> - полужирный текст</a></h3>
                  </li>
                  <li>
                    <h3><a href="style/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>style<span id="kov-1">&gt;</span></kbd> - стили документа</a></h3>
                  </li>
                  <li>
                    <h3><a href="sub/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>sub<span id="kov-1">&gt;</span></kbd> - текст нижнего индекса</a></h3>
                  </li>
                  <li>
                    <h3><a href="sup/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>sup<span id="kov-1">&gt;</span></kbd> - текст верхнего индекса</a></h3>
                  </li>
                  <li>
                    <h3><a href="summary/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>summary<span id="kov-1">&gt;</span></kbd> - заголовок details</a></h3>
                  </li>
                  <li>
                    <h3><a href="svg/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>svg<span id="kov-1">&gt;</span></kbd> - векторная графика</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u18">
                <li id="t" class="p-item">
                  <h2>T</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="table/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>table<span id="kov-1">&gt;</span></kbd> - таблица</a></h3>
                  </li>
                  <li>
                    <h3><a href="tbody/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>tbody<span id="kov-1">&gt;</span></kbd> - «тело» таблицы</a></h3>
                  </li>
                  <li>
                    <h3><a href="td/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>td<span id="kov-1">&gt;</span></kbd> - ячейка таблицы</a></h3>
                  </li>
                  <li>
                    <h3><a href="template/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>template<span id="kov-1">&gt;</span></kbd> - шаблон</a></h3>
                  </li>
                  <li>
                    <h3><a href="textarea/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>textarea<span id="kov-1">&gt;</span></kbd> - текстовое поле</a></h3>
                  </li>
                  <li>
                    <h3><a href="tfoot/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>tfoot<span id="kov-1">&gt;</span></kbd> - «подвал» таблицы</a></h3>
                  </li>
                  <li>
                    <h3><a href="th/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>th<span id="kov-1">&gt;</span></kbd> - ячейка таблицы</a></h3>
                  </li>
                  <li>
                    <h3><a href="thead/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>thead<span id="kov-1">&gt;</span></kbd> - «шапка» таблицы</a></h3>
                  </li>
                  <li>
                    <h3><a href="time/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>time<span id="kov-1">&gt;</span></kbd> - вставка даты и времени</a></h3>
                  </li>
                  <li>
                    <h3><a href="title/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>title<span id="kov-1">&gt;</span></kbd> - заголовок документа</a></h3>
                  </li>
                  <li>
                    <h3><a href="tr/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>tr<span id="kov-1">&gt;</span></kbd> - строка таблицы</a></h3>
                  </li>
                  <li>
                    <h3><a href="track/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>track<span id="kov-1">&gt;</span></kbd> - Текстовая дорожка</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u19">
                <li id="u" class="p-item">
                  <h2>U</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="u/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>u<span id="kov-1">&gt;</span></kbd> - подчёркивание текста</a></h3>
                  </li>
                  <li>
                    <h3><a href="ul/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>ul<span id="kov-1">&gt;</span></kbd> - ненумерованный список</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u20">
                <li id="v" class="p-item">
                  <h2>V</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="var/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>var<span id="kov-1">&gt;</span></kbd> - обозначение переменной</a></h3>
                  </li>
                  <li>
                    <h3><a href="video/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>video<span id="kov-1">&gt;</span></kbd> - вставка видео</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light2 u21">
                <li id="w" class="p-item">
                  <h2>W</h2>
                </li>
                <ul id="ul">
                  <li>
                    <h3><a href="wbr/index.html"><kbd class="kkL kk-light"><span id="kov-1">&lt;</span>wbr<span id="kov-1">&gt;</span></kbd> - разрыв слова</a></h3>
                  </li>
                </ul>
              </ul>
              <ul class="ul-l1 ul-list-light u">
                <li id="d" class="p-item li-search">
                  <h2>Другое</h2>
                </li>
                <ul id="ul">
                  <li class="li-search">
                    <h3><a href="attributes/index.html"><kbd class="kkL kk-light">Универсальные атрибуты</kbd></h3>
                  </li>
                  <li class="li-search">
                    <h3><a href="event/index.html"><kbd class="kkL kk-light">Универсальные события</kbd></h3>
                  </li>
                </ul>
              </ul>
            </div>
</div>
`;
let BtnOpenMenu = document.querySelector(".btn-o");
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
