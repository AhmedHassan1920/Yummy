import {Home} from "./home.js"
let home = new Home();




///////////////////////////////////////////////


// async getGames() {
//     this.loader.classList.remove('d-none');

//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'b3d6b3a36cmsh29b79238b4e9105p1247d8jsnc2ff355ad861',
//             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };

//     try {
//         const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.gamecatigory}`, options);
//         const response = await api.json();
//         this.games = response;
//         this.displayGames();
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     } finally {
//         this.loader.classList.add('d-none');
//     }
// }

///////////////////////////////////////////////

// displayGames() {
//     let gamesBox = ``;

//     for (let index = 0; index < this.games.length; index++) {
//         gamesBox += `
//             <div class="col-lg-3 col-md-4 col-sm-6">
//                 <div class="item" data-index="${index}">
//                     <div class="game-img">
//                         <img src=${this.games[index].thumbnail} class="w-100 " alt=${this.games[index].title}>
//                     </div>
                
//                     <div class="game-info mt-1 d-flex justify-content-between align-items-center w-100 ">
//                         <h4 class="game-title">${this.games[index].title}</h4>
//                         <p class="bg-made">free</p>
//                     </div>
            
//                     <div class="game-catig">
//                         <p>${this.games[index].short_description}</p>
//                     </div>
            
//                     <div class="game-plat d-flex justify-content-between align-items-center ">
//                         <p class="game-plat-p">${this.games[index].genre}</p>
//                         <p class="game-plat-p">${this.games[index].platform}</p>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }

//     this.gamesRow.innerHTML = gamesBox;

//     const items = document.querySelectorAll('.item');
//     items.forEach(item => {
//         item.addEventListener('click', (event) => {
//             const dataIndex = event.currentTarget.getAttribute('data-index');
//             const clickedGameData = this.games[dataIndex];
//             this.gameID = clickedGameData.id;
//             this.gamesContainer.classList.add("d-none");
//             this.gameDetails.classList.remove("d-none");
//             this.gameDetails.classList.add("d-block");
//             this.getSpacificGame();
//         });
//     });
// }

///////////////////////////////////////////////

// displaySpacifiGame() {
//     let gamesBox = ``;

//     gamesBox += `
//         <div class="col-md-4">
//             <img src="${this.game.thumbnail}" class="w-100 " alt="game-details">
//         </div>

//         <div class="col-md-8">
//             <h4>Title: ${this.game.title}</h4>
//             <div class="d-flex justify-content-start"><p>Category: <p class="bg-made mx-1">${this.game.genre}</p></p></div>
//             <div class="d-flex justify-content-start"><p>Platform: <p class="bg-made mx-1">${this.game.platform}</p></p></div>
//             <div class="d-flex justify-content-start"><p>Status: <p class="bg-made mx-1">${this.game.status}</p></p></div>

//             <p class="pdf">${this.game.description}</p>

//             <div class="mt-4 "><a href="${this.game.game_url}" class="show-more">Show More</a></div>
//         </div>
//     </div>`;

//     this.gameDetailsRow.innerHTML = gamesBox;
// }