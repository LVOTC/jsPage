"use strict"
let navbar = {
  style: { width: "80%",
           height: "60px",
          position: 'absolute',
          left: '20%',
         },
  element: '<div class="nav"></div><div id="toTop"><a onclick="scrollToView(this.name)" name="#navbar">To Top</a></div>',
  links: ["<a class='link logo' onclick='scrollToView(this.name)' name='#hero'>Cuda</a>", "<a class='link' onclick='scrollToView(this.name)' name='#hero'>Home</a>", "<a class='link' onclick='scrollToView(this.name)' name='#about'>About</a>","<a class='link' onclick='scrollToView(this.name)' name='#team'>Work</a>","<a class='link' onclick='scrollToView(this.name)' name='#portfolio'>Blog</a>", "<a class='link' onclick='scrollToView(this.name)' name='#contact'>Contact</a>"],
}
let navLinksDiv = {
  style: { float: "right",
           'line-height': "60px",
           margin: "0 100px",
         },
  logo: { padding: "0",
          position: "absolute",
          left: "0",
          top: "5px",
          "font-family": "'Shrikhand', cursive",
          "font-size": '36px',
  }
}
let links = {
  style: { padding: "20px",
           'text-decoration': 'none',
           color: '#fff',
  },
}
let hero = {
  style: { background: '#864F9C',
            width: '100%',
            "height": '596px',
  },
  element: '<div class="hero"></div>',
  heroText: '<h1 class="hero-text">Hi there! We are the new kids on the block and we build awesome websites and mobile apps.</h1>',
  button: { color: '#fff',
            width: "293px",
            height: "70px",
            'line-height': '70px',
            margin: "40px auto",
            display: 'block',
            'border-radius': '5px',
            background: "#EB7D4B",
            'font-size': '20px',
},
  text: { 'text-align': 'center',
        color: '#fff',
        'padding-top': '150px',
        width: '800px',
        margin: 'auto',
        "font-family": "'Titillium Web', sans-serif",
  },
}
let service = {
  style: { background: '#16C2A3',
            width: '100%',
            height: '747px',
  },
}
let container = {
  style: { "max-width": '1100px',
           margin: 'auto',
  },
  iconsCont: { display: 'flex',
  },
  text: { 'text-align': 'center',
          'margin-top': '70px',
              padding: "0 20px",
              color: '#fff',
  },
  icons: { width: '1100px',
           height: '292px',
           margin: 'auto',
           background: '#864F9C',
  },
  img: { height: '124px',
         margin: '-36px auto',
         padding: "0 20px",
},
}
let child = {
  style: { 'text-align': 'center',
           'padding': '100px',
           color: '#fff',
  },
  textBlue: { 'text-align': 'center',
               'padding': '100px',
               color: '#3C4761',
  }
}
let teamCont = {
    style: { background: '#E7F1F8',
              width: '100%',
              height: '914px',
    },
    flex: { display: 'flex',
            'flex-wrap': 'wrap',
    },
    card: { "min-width": '220px',
            'max-width': '260px',
            margin: "10px",
            display: "flex",
            "flex-direction": "column",
            flex: "1",
    },
    media: {  width: '180px',
              height: '180px',
              background: 'grey',
              'border-radius': '50%',
              margin: 'auto',
    }
}
let skills = {
  style: { background: '#fff',
            width: '100%',
            height: '655px',
  },
  card: {  display: "flex",
           "justify-content": "space-around",
  },
}
let portfolio = {
  style: { background: '#FFDD99',
            width: '100%',
            height: '1130px',
  },
  container: {  width: '800px',
                margin: 'auto',

},
  card: {  display: "flex",
           "justify-content": "space-around",
  },
  button: {     display: "inline-block",
                width: "84px",
                height: "38px",
                "line-height": "38px",
                "border-radius": "5px",
                background: "#000",
                "text-decoration": "none",
                opacity: '0.2',
                color: '#fff',
                margin: "0 5px",
  },
  activeBtn: { background: "#fff",
               opacity: '1.0',
               color: '#000',
  },
  btnMore: { display: 'inherit',
                'text-align': 'center',
                'margin-top': '70px'
  },
}
let about = {
      style: { background: '#D74580',
              width: '100%',
              height: '894px',
            },
      flex: { display: 'flex', margin: "auto",
    "flex-wrap": "wrap",
    width: "1100px",},
      card: { display: 'flex',
              "min-width": "220px",
              "max-width": "500px",
              margin: "10px",
            },
      img: {  float: "left",
              'margin': "20px 40px 50px 0",
      },
}
let contact = {
        style: {  background: '#3C5399',
                  width: '100%',
                },
        inputCont: { 'padding-left': '30px',
        },
        inputContainer: {
                  display: 'flex',
                  'justify-content': 'center',
        },
        input: {  display: "inline-block",
                  width: "414px",
                  height: "56px",
                  background: "#273971",
                  border: "none",
                  "border-radius": "5px",
                  margin: "0px 30px 35px 0px",
        },
        textArea: {
                  display: "block",
                  width: "860px",
                  height: "200px",
                  background: "#273971",
                  border: "none",
                  "border-radius": "5px",
        },
        btn: {  "text-align": "center",
                display: "inherit",
                "margin-top": '40px',
        },
        footer: {   height: "112px",
                    "line-height": "112px",
                    "text-align": "center",
                    'margin-top': '50px',
        },
        link: {
                color: '#fff',
                'text-decoration': 'none',
                "font-size": "24px",
                padding: "0px 40px",
        }
}
let Btntop = {
    style: {  width: "50px",
              height: "50px",
              "border-radius": "50%",
              position: "fixed",
              bottom: "20px",
              right: "20px",
              background: "red",
              'line-height': '50px',
              display: "none"
    }
}
let body = document.querySelector('body');
let heroDiv = document.createElement('div');
heroDiv.setAttribute('id', 'hero');
body.appendChild(heroDiv);
body = document.querySelector('body').style.margin = '0px';
body = document.querySelector('*').style.color = '#27283D';
let navL = document.querySelector('.nav');
let link = document.querySelector('a');
let nav = document.querySelector('#navbar');
heroDiv.innerHTML = hero.element;
nav.innerHTML = navbar.element;
let hButton = document.querySelector('.hero');
function drawHero(){
    for(let key in navbar.style){
      nav.style[key] = navbar.style[key];
  }
  navbar.links.forEach(function(link){
    document.querySelector('.nav').innerHTML += link;
  });
  for(let key in navLinksDiv.style){
    navL = document.querySelector('.nav');
    navL.style[key] = navLinksDiv.style[key];
  }
  let naujas = document.querySelectorAll('.link')
  for(let i = 0; i < naujas.length; i++){
    for(let key in links.style){
      naujas[i].style[key] = links.style[key];
    }
  }
  for(let key in hero.style){
    heroDiv.style[key] = hero.style[key];
  }
  for(let key in hero.text){
    let textas = document.querySelector('.hero');
    textas.innerHTML = hero.heroText;
    textas.style[key] = hero.text[key];
  }
  document.querySelector('.hero-text').innerHTML += '<a class="button">WORK WITH US!</a>';
  let a = document.querySelector('.button');
  for(let key in hero.button){
    a.style[key] = hero.button[key];
  }
  let logoStyle = document.querySelector('.logo');
  for(let key in navLinksDiv.logo){
    logoStyle.style[key] = navLinksDiv.logo[key];
  }
  document.querySelector('body').innerHTML += '<div id="service"></div>';
  let serviceId = document.querySelector('#service');
  for(let key in service.style){
    serviceId.style[key] = service.style[key];
  }
  // text container
  document.querySelector('#service').innerHTML += '<div class="container"><div class="text-container"><h1>SERVICES WE PROVIDE</h1><p>We are working with both individuals and businesses from all over the globe to create awesome websites and applications.</p></div></div>';
  let containerB = document.querySelector(".container");
  for(let key in container.style){
    containerB.style[key] = container.style[key];
  }
  let textS = document.querySelector(".text-container");
  for(let key in child.style){
    textS.style[key] = child.style[key];
  }
  document.querySelector('.container').innerHTML += '<div class="icon-container"><div class="icons"><img src="flag-icon.png"><img src="crayon-icon.png"><img src="gears-icon.png"><img src="rocket-icon.png"></div></div>';
  let iconsC = document.querySelector(".icon-container");
  for(let key in container.icons){
    iconsC.style[key] = container.icons[key];
  }
  let iconsConte = document.querySelector('.icons');
  for(let key in container.iconsCont){
    iconsConte.style[key] = container.iconsCont[key];
  }
  let images = document.querySelectorAll('.icons img');
  for(let i = 0; i < images.length; i++){
    for(let key in container.img){
      images[i].style[key] = container.img[key];
    }
    let topBtn = document.querySelector('#toTop');
    for(let key in Btntop.style){
      topBtn.style[key] = Btntop.style[key];
    }
  }
  document.querySelector('.icon-container').innerHTML += '<div class="container-icons"></div>';
document.querySelector('.container-icons').innerHTML += '<div class="icon-text-cont"><h3>Branding</h3><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p></div><div class="icon-text-cont"><h3>Branding</h3><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p></div><div class="icon-text-cont"><h3>Branding</h3><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p></div><div class="icon-text-cont"><h3>Branding</h3><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p></div>';
let contIcons = document.querySelector('.container-icons');
for(let key in container.iconsCont){
  contIcons.style[key] = container.iconsCont[key];
}
  let textInside = document.querySelectorAll('.icon-text-cont');
  for(let i = 0; i < images.length; i++){
    for(let key in container.text){
      textInside[i].style[key] = container.text[key];
    }
  }
  document.querySelector('body').innerHTML += '<div id="team"></div>';
  let teamBg = document.querySelector('#team');
  for(let key in teamCont.style){
    teamBg.style[key] = teamCont.style[key];
    console.log(teamBg.style[key]);
  }
  document.querySelector('#team').innerHTML += '<div class="text-container"><h1>SERVICES WE PROVIDE</h1><p>We are working with both individuals and businesses from all over the globe to create awesome websites and applications.</p></div><div class="container flex-wrap"></div>';
  let containerA = document.querySelectorAll(".container")[1];
  for(let key in container.style){
    containerA.style[key] = container.style[key];
  }
  let textD = document.querySelectorAll(".text-container")[1];
  for(let key in child.textBlue){
    textD.style[key] = child.textBlue[key];
  }
  document.querySelectorAll('.container')[1].innerHTML += `<div class="card"><div class="card_title"></div><div class="card_media" style="text-align:center;"></div><h2 class="card_title-text" style="text-align:center;">ANNE HATHAWAY</h2><span style="text-align: center; color: #30BAE7;margin-bottom: 10px;">CEO / Marketing Guru</span><div class="card_supporting-text" style="text-align:center; flex-grow: 1;margin-bottom: 10px;">Lorem ipsum dolor sit amet,
consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna..</div><div class="card_actions" style="text-align:center;"><a href="#" style="margin: 0 5px;"><img src="fb.png"></a><a href="#" style="margin: 0 5px;"><img src="mail.png"></a><a href="#" style="margin: 0 5px;"><img src="twitter.png"></a><a href="#" style="margin: 0 5px;"><img src="linkedin.png"></a></div></div><div class="card"><div class="card_title"></div><div class="card_media"></div><h2 class="card_title-text" style="text-align:center;">ANNE HATHAWAY</h2><span style="text-align: center; color: #30BAE7;margin-bottom: 10px;">CEO / Marketing Guru</span><div class="card_supporting-text" style="text-align:center; flex-grow: 1;margin-bottom: 10px;">Lorem ipsum dolor sit amet,
consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna..</div><div class="card_actions" style="text-align:center;"><a href="#" style="margin: 0 5px;"><img src="fb.png"></a><a href="#" style="margin: 0 5px;"><img src="mail.png"></a><a href="#" style="margin: 0 5px;"><img src="twitter.png"></a><a href="#" style="margin: 0 5px;"><img src="linkedin.png"></a></div></div><div class="card"><div class="card_title"></div><div class="card_media"></div><h2 class="card_title-text" style="text-align:center;">ANNE HATHAWAY</h2><span style="text-align: center; color: #30BAE7;margin-bottom: 10px;">CEO / Marketing Guru</span><div class="card_supporting-text" style="text-align:center; flex-grow: 1;margin-bottom: 10px;">Lorem ipsum dolor sit amet,
consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna..</div><div class="card_actions" style="text-align:center;"><a href="#" style="margin: 0 5px;"><img src="fb.png"></a><a href="#" style="margin: 0 5px;"><img src="mail.png"></a><a href="#" style="margin: 0 5px;"><img src="twitter.png"></a><a href="#" style="margin: 0 5px;"><img src="linkedin.png"></a></div></div><div class="card"><div class="card_title"></div><div class="card_media"></div><h2 class="card_title-text" style="text-align:center;">ANNE HATHAWAY</h2><span style="text-align: center; color: #30BAE7;margin-bottom: 10px;">CEO / Marketing Guru</span><div class="card_supporting-text" style="text-align:center; flex-grow: 1;margin-bottom: 10px;">Lorem ipsum dolor sit amet,
consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna..</div><div class="card_actions" style="text-align:center;"><a href="#" style="margin: 0 5px;"><img src="fb.png"></a><a href="#" style="margin: 0 5px;"><img src="mail.png"></a><a href="#" style="margin: 0 5px;"><img src="twitter.png"></a><a href="#" style="margin: 0 5px;"><img src="linkedin.png"></a></div></div>`;
  let flexWrap = document.querySelector('.flex-wrap');
  for(let key in teamCont.flex){
    flexWrap.style[key] = teamCont.flex[key];
  }
  let medias = document.querySelectorAll('.card_media');
  for(let i = 0; i < medias.length; i++){
    for(let key in teamCont.media){
      medias[i].style[key] = teamCont.media[key];
    }
  }
  let cards = document.querySelectorAll('.card');
  for(let i = 0; i < cards.length; i++){
    for(let key in teamCont.card){
      cards[i].style[key] = teamCont.card[key];
    }
  }
  document.querySelector('body').innerHTML += '<div id="skills"></div>';
  let skill = document.querySelector('#skills');
  for(let key in skills.style){
    skill.style[key] = skills.style[key];
  }
  document.querySelector('#skills').innerHTML += '<div class="text-container"><h1>WE GOT SKILLS!</h1><p>We are working with both individuals and businesses from all over the globe to create awesome websites and applications.</p></div><div class="container flex-around"></div>';
  let containerS = document.querySelectorAll(".container")[2];
  for(let key in container.style){
    containerS.style[key] = container.style[key];
  }
  let textA = document.querySelectorAll(".text-container")[2];
  for(let key in child.textBlue){
    textA.style[key] = child.textBlue[key];
  }
  document.querySelectorAll('.container')[2].innerHTML += '<div class="cardS"><img src="1.png"></div><div class="cardS"><img src="2.png"></div><div class="cardS"><img src="3.png"></div><div class="cardS"><img src="4.png"></div>'
  let cardsA = document.querySelector('.flex-around');
    for(let key in skills.card){
      cardsA.style[key] = skills.card[key];
    }
    document.querySelector('body').innerHTML += '<div id="portfolio"></div>';
    let portfolioBg = document.querySelector('#portfolio');
    for(let key in portfolio.style){
      portfolioBg.style[key] = portfolio.style[key];
    }
    document.querySelector('#portfolio').innerHTML += '<div class="text-container"><h1>OUR PORTFOLIO</h1><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam</p><div class="btn"><a class="activeB" href="#">ALL</a><a href="#">WEB</a><a href="#">APPS</a><a href="#">ICONS</a></div></div><div class="container"><img src="1_2.png"><img src="2_2.png"><img src="3_2.png"><img src="4_2.png"><a class="button-portfolio" href=""><img src="btn-portfolio.png"></a></div>';
    let containerD = document.querySelectorAll(".container")[3];
    for(let key in portfolio.container){
      containerD.style[key] = portfolio.container[key];
    }
    let textB = document.querySelectorAll(".text-container")[3];
    for(let key in child.textBlue){
      textB.style[key] = child.textBlue[key];
    }
    let btns = document.querySelectorAll('.btn a');
    for(let i = 0; i < btns.length; i++){
      for(let key in portfolio.button){
        btns[i].style[key] = portfolio.button[key];
      }
    }
    let activeBt = document.querySelector('.activeB');
    for(let key in portfolio.activeBtn){
      activeBt.style[key] = portfolio.activeBtn[key];
    }
    let btnPortfolio = document.querySelector('.button-portfolio');
    for( let key in portfolio.btnMore ){
      btnPortfolio.style[key] = portfolio.btnMore[key];
    }
    document.querySelector('body').innerHTML += '<div id="about"></div>';
    let aboutBg = document.querySelector('#about');
    for(let key in about.style){
      aboutBg.style[key] = about.style[key];
    }
    document.querySelector('#about').innerHTML += '<div class="text-container"><h1>WHAT POEPLE SAY ABOUT US</h1><p>Our clients love us!</p></div><div class="container flex-wrap"></div>';
    let textC = document.querySelectorAll(".text-container")[4];
    let containerF = document.querySelectorAll(".container")[4];
    for(let key in child.textBlue){
      textC.style[key] = child.textBlue[key];
    }
    document.querySelectorAll('.container')[4].innerHTML += `<div class="card"><img src="baseMin.png"><div class="text-about"><p>Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.</p><h4>Chanel Iman</h4><span>CEO of Pinterest</span></div></div><div class="card"><img src="baseMin.png"><div class="text-about"><p>Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.</p><h4>Chanel Iman</h4><span>CEO of Pinterest</span></div></div><div class="card"><img src="baseMin.png"><div class="text-about"><p>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.</p><h4>Chanel Iman</h4><span>CEO of Pinterest</span></div></div><div class="card"><img src="baseMin.png"><div class="text-about"><p>Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.</p><h4>Chanel Iman</h4><span>CEO of Pinterest</span></div></div>`
    for(let key in about.flex){
      containerF.style[key] = about.flex[key];
    }
    let flexWrapB = document.querySelectorAll('.flex-wrap')[1];
    for(let key in teamCont.flex){
      flexWrapB.style[key] = teamCont.flex[key];
    }
    let cardsB = document.querySelectorAll('.container')[4].querySelectorAll('.card');
    for(let i = 0; i < cardsB.length; i++){
      for(let key in about.card){
        cardsB[i].style[key] = about.card[key];
      }
    }
    let imagesB = document.querySelectorAll('.container')[4].querySelectorAll('img');
    for(let i = 0; i < cardsB.length; i++){
      for(let key in about.img){
        imagesB[i].style[key] = about.img[key];
      }
    }
    document.querySelector('body').innerHTML += '<div id="contact"></div>';
    let contactBg = document.querySelector('#contact');
    for(let key in contact.style){
      contactBg.style[key] = contact.style[key];
    }
    document.querySelector('#contact').innerHTML += '<div class="text-container"><h1>GET IN TOUCH</h1><p>1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111</p></div><div class="container flex-wrap"></div><div class="footer"><a href="#">Facebook</a><a href="#">Twitter</a><a href="#">Google+</a><a href="#">Linkedin</a><a href="#">Behance</a><a href="#">Dribble</a><a href="#">GitHub</a></div>';
    let textE = document.querySelectorAll(".text-container")[5];
    for(let key in child.textBlue){
      textE.style[key] = child.textBlue[key];
    }
    let containerE = document.querySelectorAll(".container")[5].innerHTML += '<div class="input-cont"><div class="input"><input type="text" name="" value="" placeholder="Your Name"><input type="text" name="" value="" placeholder="Your Email"><textarea name="name" rows="8" cols="80" placeholder="Your Message"></textarea><a class="btn-send" href="#"><img src="send-btn.png"></a></div></div>';
    let inputC = document.querySelector('.input');
    for(let key in contact.inputCont ){
      inputC.style[key] = contact.inputCont[key];
    }
    let inputCont = document.querySelector('.input-cont');
    for(let key in contact.inputContainer){
      inputCont.style[key] = contact.inputContainer[key];
    }
    let inputs = document.querySelector('.input-cont').querySelectorAll('input');
    for(let i = 0; i < inputs.length; i++){
      for(let key in contact.input){
        inputs[i].style[key] = contact.input[key];
      }
    }
    let textF = document.querySelector('textarea');
    for(let key in contact.textArea){
      textF.style[key] = contact.textArea[key];
    }
    let button = document.querySelector('.btn-send');
    for(let key in contact.btn){
      button.style[key] = contact.btn[key];
    }
    let foote = document.querySelector('.footer');
    for(let key in contact.footer){
      foote.style[key] = contact.footer[key];
    }
    let linksA = document.querySelectorAll('.footer a');
    for(let i = 0; i < linksA.length; i++){
      for(let key in contact.link){
        linksA[i].style[key] = contact.link[key];
      }
    }
}
function scrollToView(x) {
    document.querySelector(x).scrollIntoView({ behavior: 'smooth' });
}
window.onscroll = scroll1;
function scroll1() {
  let tTop = document.getElementById('toTop');
  window.scrollY > 0 ? tTop.style.display = 'Block' : tTop.style.display = 'none';
}
drawHero();
