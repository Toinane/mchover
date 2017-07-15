class MinecraftHover{
   constructor(){
      this.rand = false;
      window.onmousemove = function(e){
         let els = document.querySelectorAll('[mchover-data] .mctitle'), x = (e.clientX + 20) + 'px', y = (e.clientY + 20) + 'px';
         for (var i = 0; i < els.length; i++) {
            els[i].style.top = y;
            els[i].style.left = x;
         }
      };
   }
   getColor(str){
      if(/(&0)(.+)/g.exec(str) != null){str = str.replace(/\&0(.+)/g, '<span style="color: #000;text-shadow: 2px 2px 0 #000;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&1)(.+)/g.exec(str) != null){str = str.replace(/\&1(.+)/g, '<span style="color: #00a;text-shadow: 2px 2px 0 #00002a;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&2)(.+)/g.exec(str) != null){str = str.replace(/\&2(.+)/g, '<span style="color: #0a0;text-shadow: 2px 2px 0 #002a00;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&3)(.+)/g.exec(str) != null){str = str.replace(/\&3(.+)/g, '<span style="color: #0aa;text-shadow: 2px 2px 0 #002a2a;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&4)(.+)/g.exec(str) != null){str = str.replace(/\&4(.+)/g, '<span style="color: #a90000;text-shadow: 2px 2px 0 #2a0000;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&5)(.+)/g.exec(str) != null){str = str.replace(/\&5(.+)/g, '<span style="color: #a0a;text-shadow: 2px 2px 0 #2a002a;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&6)(.+)/g.exec(str) != null){str = str.replace(/\&6(.+)/g, '<span style="color: #fa0;text-shadow: 2px 2px 0 #2a2a00;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&7)(.+)/g.exec(str) != null){str = str.replace(/\&7(.+)/g, '<span style="color: #aaa;text-shadow: 2px 2px 0 #2a2a2a;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&8)(.+)/g.exec(str) != null){str = str.replace(/\&8(.+)/g, '<span style="color: #555;text-shadow: 2px 2px 0 #151515;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&9)(.+)/g.exec(str) != null){str = str.replace(/\&9(.+)/g, '<span style="color: #55f;text-shadow: 2px 2px 0 #15153f;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&a)(.+)/g.exec(str) != null){str = str.replace(/\&a(.+)/g, '<span style="color: #5f5;text-shadow: 2px 2px 0 #153f15;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&b)(.+)/g.exec(str) != null){str = str.replace(/\&b(.+)/g, '<span style="color: #5ff;text-shadow: 2px 2px 0 #153f3f;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&c)(.+)/g.exec(str) != null){str = str.replace(/\&c(.+)/g, '<span style="color: #f55;text-shadow: 2px 2px 0 #3f1515;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&d)(.+)/g.exec(str) != null){str = str.replace(/\&d(.+)/g, '<span style="color: #f5f;text-shadow: 2px 2px 0 #3f153f;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&e)(.+)/g.exec(str) != null){str = str.replace(/\&e(.+)/g, '<span style="color: #ff5;text-shadow: 2px 2px 0 #3f3f15;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&f)(.+)/g.exec(str) != null){str = str.replace(/\&f(.+)/g, '<span style="color: #fff;text-shadow: 2px 2px 0 #3f3f3f;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&l)(.+)/g.exec(str) != null){str = str.replace(/\&l(.+)/g, '<span style="font-weight: bold;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&o)(.+)/g.exec(str) != null){str = str.replace(/\&o(.+)/g, '<span style="font-style: italic;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&m)(.+)/g.exec(str) != null){str = str.replace(/\&m(.+)/g, '<span style="text-decoration: line-through;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&n)(.+)/g.exec(str) != null){str = str.replace(/\&n(.+)/g, '<span style="text-decoration: underline;">'+'$1'+'</span>'); str = this.getColor(str);}
      if(/(&k)(.+)/g.exec(str) != null){str = str.replace(/\&k(.+)/g, '<span class="mchover-rand">'+'$1'+'</span>');this.rand = true; str = this.getColor(str);}
      if(/(&r)(.+)/g.exec(str) != null){str = str.replace(/\&r(.+)/g, '<span style="font-weight: normal; text-decoration: none; color: #aaa; text-shadow: 2px 2px 0 #2a2a2a; font-style: normal;">'+'$1'+'</span>'); str = this.getColor(str);}
      return str;
   }
   beautify(str){
      if(typeof str['title'] === 'undefined'){ str['title'] = '';}
      if(typeof str['lore'] === 'undefined'){ str['lore'] = '';}
      if(typeof str['id'] === 'undefined'){ str['id'] = '';}
      str['title-beautify'] = this.getColor(str['title']);
      str['lore-beautify'] = (str['lore'] + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br />' + '$2');
      str['lore-beautify'] = this.getColor(str['lore-beautify']);
      str['id-beautify'] = (str['id'] + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br />' + '$2');
      let beautify = '<div class="mcglint"></div><div class="mctitle">';
      beautify += '<p class="title">'+str['title-beautify']+'</p>';
      beautify += '<p class="lore">'+str['lore-beautify']+'</p>';
      beautify += '<p class="id">'+str['id-beautify']+'</p>';
      beautify += '</div>';
      return beautify;
   }
   randomize(){
      let els = document.querySelectorAll('.mchover-rand'),
      letters = ['ë', 'è', 'é', 'ü', 'û', '1', '/', '&', '0', 'O', '=', '^', '?', '$', '#', 'A', 'B', 'C', 'D', 'Q', 'N', 'H', 'J'],
      ponct = [',', '.', ':', ';', '!'];
      for(let i = 0; i < els.length; i++){
         let str = '';
         for(let j = 0; j < els[i].childNodes[0].data.length; j++){
            if(els[i].childNodes[0].data.charAt(j) == ' '){
               str += ' ';
            }
            else if(ponct.indexOf(els[i].childNodes[0].data.charAt(j)) != -1){
               str += ponct[Math.floor(Math.random() * (ponct.length - 0)) + 0];
            }
            else{
               str += letters[Math.floor(Math.random() * (letters.length - 0)) + 0];
            }
         }
         els[i].childNodes[0].textContent = str;
      }
   }
   add(el, str){
      let els = document.querySelectorAll('[mchover-data]');
      for(let i = 0; i < els.length; i++){
         if(els[i].getAttribute("mchover-data") == el){
            els[i].innerHTML += this.beautify(str);
         }
      }
      if(this.rand){
         this.interval = window.setInterval(this.randomize, 10);
      }
   }
}
