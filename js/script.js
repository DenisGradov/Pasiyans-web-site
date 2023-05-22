let numberCard=[0,0,[0,0],[0,0]]


document.addEventListener('DOMContentLoaded', ()=>{
  const cardList = {
    'A-B':'data/img/card.png',
    'A-X':'data/img/card-1.png',
    'A-CH':'data/img/card-2.png',
    'A-P':'data/img/card-3.png',
    '2-X':'data/img/card-4.png',
    '2-CH':'data/img/card-5.png',
    '2-CH':'data/img/card-6.png',
    '2-P':'data/img/card-7.png',
    '3-X':'data/img/card-8.png',
    '3-CH':'data/img/card-9.png',
    '3-P':'data/img/card-10.png',
    '4-X':'data/img/card-11.png',
    '4-CH':'data/img/card-12.png',
    '4-P':'data/img/card-13.png',
    '5-X':'data/img/card-14.png',
    '5-CH':'data/img/card-15.png',
    '5-P':'data/img/card-16.png',
    '6-X':'data/img/card-17.png',
    '6-CH':'data/img/card-18.png',
    '6-P':'data/img/card-19.png',
    '7-X':'data/img/card-20.png',
    '7-CH':'data/img/card-21.png',
    '7-P':'data/img/card-22.png',
    '8-X':'data/img/card-23.png',
    '8-CH':'data/img/card-24.png',
    '8-P':'data/img/card-25.png',
    '9-X':'data/img/card-26.png',
    '9-CH':'data/img/card-27.png',
    '9-P':'data/img/card-28.png',
    '10-X':'data/img/card-29.png',
    '10-CH':'data/img/card-30.png',
    '10-P':'data/img/card-31.png',
    'J-X':'data/img/card-32.png',
    'J-CH':'data/img/card-33.png',
    'J-P':'data/img/card-34.png',
    'Q-X':'data/img/card-35.png',
    'Q-CH':'data/img/card-36.png',
    'Q-P':'data/img/card-37.png',
    'K-X':'data/img/card-38.png',
    'K-CH':'data/img/card-39.png',
    'K-P':'data/img/card-40.png',
    '2-B':'data/img/card-41.png',
    '3-B':'data/img/card-42.png',
    '4-B':'data/img/card-43.png',
    '5-B':'data/img/card-44.png',
    '6-B':'data/img/card-45.png',
    '7-B':'data/img/card-46.png',
    '8-B':'data/img/card-47.png',
    '9-B':'data/img/card-48.png',
    '10-B':'data/img/card-49.png',
    'J-B':'data/img/card-50.png',
    'Q-B':'data/img/card-51.png',
    'K-B':'data/img/card-52.png',
    'n1':'data/img/n.png',
    'n2':'data/img/n.png',
    'n3':'data/img/n.png',
    'n4':'data/img/n.png'
  }

  const cardsStrong ={
    0: ['A-P','A-CH','A-B','A-X'],
    1: ['2-P','2-CH','2-B','2-X'],
    2: ['3-P','3-CH','3-B','3-X'],
    3: ['4-P','4-CH','4-B','4-X'],
    4: ['5-P','5-CH','5-B','5-X'],
    5: ['6-P','6-CH','6-B','6-X'],
    6: ['7-P','7-CH','7-B','7-X'],
    7: ['8-P','8-CH','8-B','8-X'],
    8: ['9-P','9-CH','9-B','9-X'],
    9: ['10-P','10-CH','10-B','10-X'],
    10: ['J-P','J-CH','J-B','J-X'],
    11: ['Q-P','Q-CH','Q-B','Q-X'],
    12: ['K-P','K-CH','K-B','K-X'],
    13: ['n1','n2','n3','n4']
  }


  let gameInfo = {
    'coloda':{
      cardsInColodaCol: 0,//24
      cardsInColodaItems: [],
      cardsUsed: [],
      activateCard: 'False',
      actualCardInColoda:0
    },
    'flop':{
      '0':[],
      '1':[],
      '2':[],
      '3':[]
    },
    'dacks':{
      '0':[],
      '1':[],
      '2':[],
      '3':[],
      '4':[],
      '5':[],
      '6':[],
      '7':[],
      '8':[]
    },
    createNewInfo: function(){
      maxCardOnDacks=1;
      for (let i in Object.keys(gameInfo['dacks'])){
        for (let j=0; j<=i;j++){
          let newCard = Object.keys(cardList)[getRandomInt(52)]
          if (gameInfo['coloda'].cardsUsed.includes(newCard)){
            j--;
          } else {
            gameInfo['coloda'].cardsUsed.push(newCard);
            gameInfo['dacks'][Object.keys(gameInfo['dacks'])[i]].push([newCard,false]);
            
            if (gameInfo['dacks'][i][j][0]==gameInfo['dacks'][j].slice(-1)[0][0]){
              gameInfo['dacks'][i][j][1]=true
            } else {
              gameInfo['dacks'][i][j][1]=false

            }
          }
        }
      }
      for (let i in Object.keys(cardList)){
        if (gameInfo['coloda'].cardsUsed.includes(Object.keys(cardList)[i])){

        } else {
          gameInfo['coloda'].cardsInColodaItems.push(Object.keys(cardList)[i]);
          gameInfo['coloda'].cardsInColodaCol++;
        }
      }
      console.log(gameInfo);
    },
    updateDisplay: function(){
      let tablBottomZone = document.querySelector('.tabl-bottom-zone'),
        main = document.querySelector('.main');
      tablBottomZone.remove();
      tablBottomZone=document.createElement('div');
      tablBottomZone.classList.add('tabl-bottom-zone');
      main.append(tablBottomZone);

      for (let j in Object.keys(gameInfo['dacks'])){
        let dackColum = document.createElement('div');
        dackColum.classList.add('dack-colum')
        tablBottomZone.append(dackColum);
        
      }
      for (let j in Object.keys(gameInfo['dacks'])){
        for (let i in gameInfo['dacks'][j]){
          let newElement = document.createElement('img'),
            link='';
          if (gameInfo['dacks'][j][i][1]){
            link=cardList[gameInfo['dacks'][j][i][0]]
            newElement.setAttribute('id',gameInfo['dacks'][j][i][0])
            newElement.setAttribute('data-i',i)
          } else {
            link='data/img/obl.png'

          }
          newElement.setAttribute('src',link)
          let dackColum = document.querySelectorAll('.dack-colum')[j]
          dackColum.append(newElement);
          newElement.classList.add('card');
          dackColum.append(newElement);
        }

      }
      let col = document.querySelector('.tabl-top-zone-left__last-cards');
      col.textContent = gameInfo['coloda']['cardsInColodaCol']
      
      let cards = document.querySelectorAll('.card'),
        dackColum = document.querySelectorAll('.dack-colum'),
        removedCards = document.querySelectorAll('.removedCards__img');
      let m=0;
      cards.forEach((item, i)=>{
        item.addEventListener('click',(e)=>{
          if (item.parentElement.classList.contains('removedCards')){
              removedCards.forEach((itemCard,i2)=>{
                if (item==itemCard){
                  for (let i3 in Object.keys(cardsStrong)){
                    if (cardsStrong[i3].indexOf(gameInfo['coloda']['activateCard'])!=-1){
                      m=cardsStrong[i3].indexOf(gameInfo['coloda']['activateCard'])
                    }
                  }
                  if (((i2==0)&&(m==2))||((i2==1)&&(m==1))||((i2==2)&&(m==0))||((i2==3)&&(m==3))){
                    if (gameInfo['flop'][i2][0]==undefined){
                      if (cardsStrong[0].indexOf(gameInfo['coloda']['activateCard'])!=-1){
                        gameInfo['flop'][i2].push(gameInfo['coloda']['activateCard']);
                        updateFlop()
                        for (let iii in gameInfo['dacks']){
                            for (let jjj in gameInfo['dacks'][iii]){
                              if (gameInfo['dacks'][iii][jjj][0]==gameInfo['coloda']['activateCard']){
                                
                                let removed = gameInfo['dacks'][iii].splice(-1)[0];

                                if ( gameInfo['dacks'][iii].slice(-1)[0]!==undefined){
                                  gameInfo['dacks'][iii].slice(-1)[0][1] = true;
                                }
                                
                                if ( (gameInfo['dacks'][iii]).length==0){
                                  (gameInfo['dacks'][iii]).push(['n1',true]);
                                }
                                gameInfo.updateDisplay();
                                break
                              }
                            }
                        }

                      }
                    } else {
                      let m = 0,
                        m2=0;
                      for (let iii in Object.keys(cardsStrong)){
                        if (cardsStrong[iii].indexOf(gameInfo['coloda']['activateCard'])!=-1){
                          m = iii;
                          break
                        }
                      }
                      for (let iii in Object.keys(cardsStrong)){
                        if (cardsStrong[iii].indexOf(gameInfo['flop'][i2].slice(-1)[0])!=-1){
                          m2 = iii;
                          break
                        }
                      }
                      if (m-1==m2){
                        gameInfo['flop'][i2].push(gameInfo['coloda']['activateCard']);
                        updateFlop()
                        
                        for (let iii in gameInfo['dacks']){
                          for (let jjj in gameInfo['dacks'][iii]){
                            if (gameInfo['dacks'][iii][jjj][0]==gameInfo['coloda']['activateCard']){
                              
                              let removed = gameInfo['dacks'][iii].splice(-1)[0];

                              if ( gameInfo['dacks'][iii].slice(-1)[0]!==undefined){
                                gameInfo['dacks'][iii].slice(-1)[0][1] = true;
                              }
                              
                              if ( (gameInfo['dacks'][iii]).length==0){
                                (gameInfo['dacks'][iii]).push(['n1',true]);
                              }
                              gameInfo.updateDisplay();
                              break
                            }
                          }
                      }
                        console.log(gameInfo['flop']);

                      }


                    }
                    if (gameInfo['coloda']['cardsInColodaItems'].indexOf(gameInfo['coloda']['activateCard'])!=-1){
                      console.log(gameInfo['coloda']['cardsInColodaItems'].indexOf(gameInfo['coloda']['activateCard']));
                      let removed = gameInfo['coloda']['cardsInColodaItems'].splice(gameInfo['coloda']['cardsInColodaItems'].indexOf(gameInfo['coloda']['activateCard']),1);
                      console.log(removed);
                      console.log(removed);
                      console.log(removed);
                      console.log(removed);
                      console.log(removed);
                      console.log(removed);
                      console.log(removed);
                      console.log(removed);
                      console.log(removed);
                      console.log(removed);
                      let card = document.querySelector('.tabl-top-zone-left__cards-list')
                      gameInfo['coloda']['cardsInColodaCol']--;
                      if (gameInfo['coloda'].actualCardInColoda>=gameInfo['coloda'].cardsInColodaCol-4){
                        console.log('sssssssssssss');
                        gameInfo['coloda'].actualCardInColoda=0
                        card.setAttribute('src','data/img/obl.png');
                        card.removeAttribute('id')
                      }  else {
                        console.log(gameInfo['coloda'].cardsInColodaItems);   
                        gameInfo['coloda'].activateCard=gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda];
                        card.setAttribute('src',cardList[gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda]]);
                        card.setAttribute('id',gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda]);
                        gameInfo['coloda']['activateCard']=gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda]
                        
              
                        
                        if (gameInfo['coloda']['activateCard']=='False'){
                          gameInfo['coloda']['activateCard']=gameInfo['dacks'][kol][parseInt(item.getAttribute('data-i'))][0];//
                          for (let ii in Object.keys(cardsStrong)){
                            for (let jj in cardsStrong[ii]){
                              if (cardsStrong[ii][jj]==gameInfo['coloda']['activateCard']){
                                numberCard[0]=cardsStrong[ii]
                                numberCard[2][0]=cardsStrong[ii][jj]
                                break
                              }
                            }
                          }
                          numberCard[3][0]=kol;
                        } else {
                          let lastActivateCard = gameInfo['coloda']['activateCard']; 
                          for (let ii in Object.keys(cardsStrong)){
                            for (let jj in cardsStrong[ii]){
                              if (cardsStrong[ii][jj]==gameInfo['coloda']['activateCard']){
                                numberCard[1]=numberCard[0];
                                numberCard[3][1]=numberCard[3][0];
                                numberCard[3][0]=666
                                numberCard[2][1]= numberCard[2][0]
                                numberCard[2][0]=cardsStrong[ii][jj]
                                numberCard[0]=cardsStrong[ii];
                              }
                            }
                          }
                        }
              
              
              
                      }
                      let text = `${gameInfo['coloda'].actualCardInColoda}/${gameInfo['coloda'].cardsInColodaCol-5}`,
                        stat = document.querySelector('.tabl-top-zone-left__last-cards');
                      stat.textContent=text

                    }
                  }


                  function updateFlop(){
                    let removedCards=document.querySelectorAll('.removedCards__img');
                    removedCards.forEach((item,i)=>{
                      if (gameInfo['flop'][i].slice(-1)[0]==undefined){

                      } else {
                        removedCards[i].setAttribute('src',cardList[gameInfo['flop'][i].slice(-1)[0]]);
                        removedCards[i].classList.remove('close');
                      }
                    })
                  }

                };
              })
          } else if (item.parentElement.classList.contains('dack-colum')){
            for (let kol in dackColum){
              if (dackColum[kol]==item.parentElement){
                for (let j in Object.keys(gameInfo['dacks'])){
                  if (dackColum[kol]==dackColum[j]){
                    if (true){
                      if (item.hasAttribute('id')){
                        if (gameInfo['coloda']['activateCard']=='False'){
                          gameInfo['coloda']['activateCard']=gameInfo['dacks'][kol][parseInt(item.getAttribute('data-i'))][0];//
                          for (let ii in Object.keys(cardsStrong)){
                            for (let jj in cardsStrong[ii]){
                              if (cardsStrong[ii][jj]==gameInfo['coloda']['activateCard']){
                                numberCard[0]=cardsStrong[ii]
                                numberCard[2][0]=cardsStrong[ii][jj]
                                break
                              }
                            }
                          }
                          numberCard[3][0]=kol;
                        } else {
                          let lastActivateCard = gameInfo['coloda']['activateCard'];
                          gameInfo['coloda']['activateCard']=gameInfo['dacks'][kol][item.getAttribute('data-i')][0]
                          for (let ii in Object.keys(cardsStrong)){
                            for (let jj in cardsStrong[ii]){
                              if (cardsStrong[ii][jj]==gameInfo['coloda']['activateCard']){
                                numberCard[1]=numberCard[0];
                                numberCard[3][1]=numberCard[3][0];
                                numberCard[3][0]=kol
                                numberCard[2][1]= numberCard[2][0]
                                numberCard[2][0]=cardsStrong[ii][jj]
                                numberCard[0]=cardsStrong[ii];
                              }
                            }
                          }
                          let i1='',
                            i2='';
                          
                          for (let iii in Object.keys(cardsStrong)){
                            for (let jjj in cardsStrong[iii]){
                              if (cardsStrong[iii][jjj]==numberCard[2][0]){
                                i1=iii
                                break
                              }
                            }
                          }
                          for (let iii in Object.keys(cardsStrong)){
                            for (let jjj in cardsStrong[iii]){
                              if (cardsStrong[iii][jjj]==numberCard[2][1]){
                                i2=iii
                                break
                              }
                            }
                          }
                          if ((i1-i2)!=1){

                          } else {
                            if ((numberCard[2][0]=='n1'||numberCard[2][0]=='n2'||numberCard[2][0]=='n3'||numberCard[2][0]=='n4')||(((lastActivateCard==numberCard[1][0]||lastActivateCard==numberCard[1][3])&&(gameInfo['coloda']['activateCard']==numberCard[0][1]||gameInfo['coloda']['activateCard']==numberCard[0][2]))||((lastActivateCard==numberCard[1][1]||lastActivateCard==numberCard[1][2]))&&(gameInfo['coloda']['activateCard']==numberCard[0][0]||gameInfo['coloda']['activateCard']==numberCard[0][3]))){
                              
                              if( numberCard[3][1]!=666){
                                console.log(numberCard);
                                let index = gameInfo['dacks'][numberCard[3][1]].findIndex(subArray => subArray.includes(numberCard[2][1]));
                                for (let b in gameInfo['dacks'][numberCard[3][1]]){
                                  if (b>=index){
                                    let removed = gameInfo['dacks'][numberCard[3][1]].splice(b);
                                    
                                    gameInfo['dacks'][numberCard[3][0]] = gameInfo['dacks'][numberCard[3][0]].concat(removed);
  
                                    if ( gameInfo['dacks'][numberCard[3][1]].slice(-1)[0]!==undefined){
                                      gameInfo['dacks'][numberCard[3][1]].slice(-1)[0][1] = true;
                                    }
                                  }
                                  gameInfo['dacks'][numberCard[3][0]].slice(-1)[0][1] = true;
                                }
  
                                if ( (gameInfo['dacks'][numberCard[3][1]]).length==0){
                                  (gameInfo['dacks'][numberCard[3][1]]).push(['n1',true]);
                                }
                                if ((numberCard[2][0]==='n1')||(numberCard[2][0]==='n2')||(numberCard[2][0]==='n3')||(numberCard[2][0]==='n4')){
                                  gameInfo['dacks'][numberCard[3][0]].shift();
                                }
                                gameInfo.updateDisplay();
                                break

                              } else {
                                console.log(numberCard);
                                console.log(gameInfo);
                                gameInfo['coloda']['cardsInColodaItems'].splice(gameInfo['coloda']['cardsInColodaItems'].indexOf(numberCard[2][1]),1);
                                gameInfo['coloda']['cardsInColodaCol']--;
                                gameInfo['dacks'][numberCard[3][0]].push([numberCard[2][1],true]);
                                if ((numberCard[2][0]==='n1')||(numberCard[2][0]==='n2')||(numberCard[2][0]==='n3')||(numberCard[2][0]==='n4')){
                                  gameInfo['dacks'][numberCard[3][0]].shift();
                                }
  
                                
                                let card = document.querySelector('.tabl-top-zone-left__cards-list')
                                if (gameInfo['coloda'].actualCardInColoda>=gameInfo['coloda'].cardsInColodaCol-4){
                                  gameInfo['coloda'].actualCardInColoda=0
                                  card.setAttribute('src','data/img/obl.png');
                                  card.removeAttribute('id')
                                } else {
                                  gameInfo['coloda'].activateCard=gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda];
                                  card.setAttribute('src',cardList[gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda]]);
                                  card.setAttribute('id',gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda]);
                                  gameInfo['coloda']['activateCard']=gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda]
                                  

                                  
                                  if (gameInfo['coloda']['activateCard']=='False'){
                                    gameInfo['coloda']['activateCard']=gameInfo['dacks'][kol][parseInt(item.getAttribute('data-i'))][0];//
                                    for (let ii in Object.keys(cardsStrong)){
                                      for (let jj in cardsStrong[ii]){
                                        if (cardsStrong[ii][jj]==gameInfo['coloda']['activateCard']){
                                          numberCard[0]=cardsStrong[ii]
                                          numberCard[2][0]=cardsStrong[ii][jj]
                                          break
                                        }
                                      }
                                    }
                                    numberCard[3][0]=kol;
                                  } else {
                                    let lastActivateCard = gameInfo['coloda']['activateCard']; 
                                    for (let ii in Object.keys(cardsStrong)){
                                      for (let jj in cardsStrong[ii]){
                                        if (cardsStrong[ii][jj]==gameInfo['coloda']['activateCard']){
                                          numberCard[1]=numberCard[0];
                                          numberCard[3][1]=numberCard[3][0];
                                          numberCard[3][0]=666
                                          numberCard[2][1]= numberCard[2][0]
                                          numberCard[2][0]=cardsStrong[ii][jj]
                                          numberCard[0]=cardsStrong[ii];
                                        }
                                      }
                                    }
                                  }



                                }

                                
                                gameInfo.updateDisplay();
                                let text = `${gameInfo['coloda'].actualCardInColoda}/${gameInfo['coloda'].cardsInColodaCol-5}`,
                                  stat = document.querySelector('.tabl-top-zone-left__last-cards');
                                stat.textContent=text
                                
                                break
                                
                              }
      
                            } 
                          }
                        }
                      }
                    }
                  }
                }
              }

            }
          } 
        })
      })
    }
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  gameInfo.createNewInfo();
  gameInfo.updateDisplay();
  
  let text = `${gameInfo['coloda'].actualCardInColoda}/${gameInfo['coloda'].cardsInColodaCol-5}`,
    stat = document.querySelector('.tabl-top-zone-left__last-cards');
  stat.textContent=text
  
  let cards = document.querySelectorAll('.card');
  cards.forEach((item, i)=>{
    item.addEventListener('contextmenu',(e)=>{
      if (i==0){
        e.preventDefault();
        gameInfo['coloda']['activateCard']=gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda]
        
        if (gameInfo['coloda']['activateCard']=='False'){
          gameInfo['coloda']['activateCard']=gameInfo['dacks'][kol][parseInt(item.getAttribute('data-i'))][0];//
          for (let ii in Object.keys(cardsStrong)){
            for (let jj in cardsStrong[ii]){
              if (cardsStrong[ii][jj]==gameInfo['coloda']['activateCard']){
                numberCard[0]=cardsStrong[ii]
                numberCard[2][0]=cardsStrong[ii][jj]
                break
              }
            }
          }
          numberCard[3][0]=kol;
        } else {
          let lastActivateCard = gameInfo['coloda']['activateCard']; 
          for (let ii in Object.keys(cardsStrong)){
            for (let jj in cardsStrong[ii]){
              if (cardsStrong[ii][jj]==gameInfo['coloda']['activateCard']){
                numberCard[1]=numberCard[0];
                numberCard[3][1]=numberCard[3][0];
                numberCard[3][0]=666
                numberCard[2][1]= numberCard[2][0]
                numberCard[2][0]=cardsStrong[ii][jj]
                numberCard[0]=cardsStrong[ii];
              }
            }
          }
        }
      }
    })
    item.addEventListener('click',(e)=>{
      if (i==0){
        //cardsInColodaCol
        gameInfo['coloda'].actualCardInColoda++;
        console.log(gameInfo['coloda'].actualCardInColoda);
        console.log(gameInfo['coloda'].cardsInColodaCol);
        let card = document.querySelector('.tabl-top-zone-left__cards-list')
        if (gameInfo['coloda'].actualCardInColoda>=gameInfo['coloda'].cardsInColodaCol-4){
          gameInfo['coloda'].actualCardInColoda=0
          card.setAttribute('src','data/img/obl.png');
          card.removeAttribute('id')
        } else {
          gameInfo['coloda'].activateCard=gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda];
          card.setAttribute('src',cardList[gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda]]);
          card.setAttribute('id',gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda]);
          gameInfo['coloda']['activateCard']=gameInfo['coloda'].cardsInColodaItems[gameInfo['coloda'].actualCardInColoda]
          

          
          if (gameInfo['coloda']['activateCard']=='False'){
            gameInfo['coloda']['activateCard']=gameInfo['dacks'][kol][parseInt(item.getAttribute('data-i'))][0];//
            for (let ii in Object.keys(cardsStrong)){
              for (let jj in cardsStrong[ii]){
                if (cardsStrong[ii][jj]==gameInfo['coloda']['activateCard']){
                  numberCard[0]=cardsStrong[ii]
                  numberCard[2][0]=cardsStrong[ii][jj]
                  break
                }
              }
            }
            numberCard[3][0]=kol;
          } else {
            let lastActivateCard = gameInfo['coloda']['activateCard']; 
            for (let ii in Object.keys(cardsStrong)){
              for (let jj in cardsStrong[ii]){
                if (cardsStrong[ii][jj]==gameInfo['coloda']['activateCard']){
                  numberCard[1]=numberCard[0];
                  numberCard[3][1]=numberCard[3][0];
                  numberCard[3][0]=666
                  numberCard[2][1]= numberCard[2][0]
                  numberCard[2][0]=cardsStrong[ii][jj]
                  numberCard[0]=cardsStrong[ii];
                }
              }
            }
          }



        }
        let text = `${gameInfo['coloda'].actualCardInColoda}/${gameInfo['coloda'].cardsInColodaCol-5}`,
          stat = document.querySelector('.tabl-top-zone-left__last-cards');
        stat.textContent=text
        
        
      }
    })
  })

})