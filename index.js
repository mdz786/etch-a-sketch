const container = document.querySelector('.container');
//const blue = document.querySelector('.blue');
//const green = document.querySelector('.green');
//blue.addEventListener('click',() => testColor);
//test
//const test = document.querySelector('.div');

function createGrid(x,y){
    for(let i=1;i<=x;i++){
        const miniContainers = document.createElement('div');
        container.appendChild(miniContainers);
        miniContainers.style.display='flex';
        for(let j=1;j<=x;j++){
            const divs = document.createElement('div');
            divs.classList = 'div';
            miniContainers.appendChild(divs);
             
                
            
            
            divs.addEventListener('mouseover',() => divs.style.background = 'yellowgreen');
            
            if(x==10){
                divs.setAttribute('style','height: 97.5px;width: 100px;border:0.1px solid white;');
            }
            else if(x==20){
                divs.setAttribute('style','height: 47.5px;width: 50px;border:0.1px solid white;');
            }
            else if(x==30){
                divs.setAttribute('style','height: 30.9px;width: 33.3px;border:0.1px solid white;');
            }
            else if(x==40){
                divs.setAttribute('style','height: 22.5px;width: 25px;border:0.1px solid white;');
            }
            else if(x==50){
                divs.setAttribute('style','height: 17.5px;width: 20px;border:0.1px solid white;');
            }
            else if(x==60){
                divs.setAttribute('style','height: 14.2px;width: 16.66px;border:0.1px solid white;');
            }
            else if(x==70){
                divs.setAttribute('style','height: 11.8px;width: 14.2px;border:0.1px solid white;');
            }
            else if(x==80){
                divs.setAttribute('style','height: 10px;width: 12.5px;border:0.1px solid white;');
            }
            else if(x==90){
                divs.setAttribute('style','height: 8.63px;width: 11.11px;border:0.1px solid white;');
            }
            else if(x==100){
                divs.setAttribute('style','height: 7.5px;width: 7.5px;border:0.1px solid white;');
            }
            
        }  
    }
    
    
}

function gridSize(){
    return prompt("enter the grid size in multiples of 10...!");
}

function Main(gS,cG){
    //let test1 = tC();
    let gridSizeValue = gS();
    cG(gridSizeValue);
}


Main(gridSize,createGrid);



//test

//function testColor(){
//    test.addEventListener('mouseover',() => test.style.background = 'skyblue');
//}

