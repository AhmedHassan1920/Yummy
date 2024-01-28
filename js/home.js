export class Home {
    constructor(){
        this.barsIcon = document.querySelector(".fa-bars");
        this.XmarkIcon = document.querySelector(".fa-xmark");

        this.nav = document.getElementById("nav");
        
        this.searchLi = document.getElementById("search");
        this.categories = document.getElementById("categories");
        this.area = document.getElementById("area");
        this.ingredients = document.getElementById("ingredients");
        this.contact = document.getElementById("contact");
        this.searchContainer = document.getElementById("searchContainer");

        this.searchLetterInput = document.getElementById("searchByLetter");
        this.searchNameInput = document.getElementById("searchByName");
        
        this.container = document.querySelector("#container .container-fluid .row");
        
        this.changedApi="";
        this.loadContainer = document.querySelector(".load-container")
        this.meals;
        this.categoryMeals;
        this.areaMeals;
        this.ingredient;
        this.letter;
        this.name;

        this.barsIcon.addEventListener('click',this.openNavBar.bind(this))
        this.XmarkIcon.addEventListener('click',this.closeNavBar.bind(this))
        this.searchLi.addEventListener('click',this.searchByLetter.bind(this))
        this.searchLi.addEventListener('click',this.searchByName.bind(this))
        this.categories.addEventListener('click',this.getCategory.bind(this))
        this.area.addEventListener('click',this.getArea.bind(this))
        this.ingredients.addEventListener('click',this.getIngredient.bind(this))
        this.contact.addEventListener('click',this.displayForm.bind(this))

        this.searchGetData(this.changedApi);
    }

    openNavBar() {
        this.nav.style.left="0";
        this.barsIcon.classList.add("d-none")
        this.barsIcon.classList.remove("d-block")
        this.XmarkIcon.classList.remove("d-none")
        this.XmarkIcon.classList.add("d-block")
    }

    closeNavBar() {
        this.nav.style.left="calc(-25%*(3/4))";
        this.barsIcon.classList.add("d-block")
        this.barsIcon.classList.remove("d-none")
        this.XmarkIcon.classList.add("d-none")
        this.XmarkIcon.classList.remove("d-block")
    }

    displaySpacficMeal(item){
        let dataBox =   ` <div class="col-md-4">
                    <picture><img src="${item.strMealThumb}" class="w-100 " alt="game-details"></picture>
                    <h4>${item.strMeal}</h4>
                </div>

                <div class="col-md-8">
                    <h4 class="fw-bold ">Instructions</h4>
                    <p class="pdf">${item.strInstructions}</p>
                    <div class="d-flex w-75 "><h4 class="w-50 d-flex ">Area : <p class="mx-1">${item.strArea}</p></h4></div>
                    <div class="d-flex w-75 "><h4 class="w-50 d-flex ">Category : <p class="mx-1">${item.strCategory}</p></h4></div>
                    <div class="w-100 "><p class="w-100 "><span class="fw-bold ">Recipes :</span> <br>
                                                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                                                        <li class="alert alert-info m-2 p-1">${item.strIngredient1}</li>
                                                        <li class="alert alert-info m-2 p-1">${item.strIngredient2}</li>
                                                        <li class="alert alert-info m-2 p-1">${item.strIngredient3}</li>
                                                        <li class="alert alert-info m-2 p-1">${item.strIngredient4}</li>
                                                        <li class="alert alert-info m-2 p-1">${item.strIngredient5}</li>
                                                        <li class="alert alert-info m-2 p-1">${item.strIngredient6}</li>
                                                        <li class="alert alert-info m-2 p-1">${item.strIngredient7}</li>
                                                        <li class="alert alert-info m-2 p-1">${item.strIngredient8}</li>
                                                        <li class="alert alert-info m-2 p-1">${item.strIngredient9}</li>
                                                    </ul>
                                            </p>
                    </div>

                    <div class="mt-4 ">
                        <h4>Tags :</p>
                            <div class="mt-2 ">
                                <a href="${item.strTags}" class="show-more btn btn-success ">Sorce</a>
                                <a href="${item.strYoutube}" class="show-more btn btn-danger">Youtube</a>
                            </div>
                        </div> 

            </div> `;

            this.container.innerHTML = dataBox;
    }
    
   async fetchSpacficMeal(mealID){
        this.loadContainer.classList.remove('d-none');

        try {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
            const response = await api.json();
            this.meal = response.meals;
            this.displaySpacficMeal(this.meal[0]);
            this.closeNavBar()
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            this.loadContainer.classList.add('d-none');
        }
    }

    async fetchCategory(Catigory){
        this.loadContainer.classList.remove('d-none');

        try {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Catigory}`);
            const response = await api.json();
            this.meals = response.meals;
            this.changedApi=Catigory;
            this.searchGetData(Catigory);
            this.closeNavBar()
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            this.loadContainer.classList.add('d-none');
        }
    }

    async fetchArea(Area){
        this.loadContainer.classList.remove('d-none');

        try {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`);
            const response = await api.json();
            this.meals = response.meals;
            this.changedApi=Area;
            this.searchGetData(Area);
            this.closeNavBar()
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            this.loadContainer.classList.add('d-none');
        }
    }

    async fetchArea(Ingredient){
        this.loadContainer.classList.remove('d-none');

        try {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredient}`);
            const response = await api.json();
            this.meals = response.meals;
            this.changedApi=Ingredient;
            this.searchGetData(Ingredient);
            this.closeNavBar()
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            this.loadContainer.classList.add('d-none');
        }
    }

    async searchGetData(changedApi) {
        this.loadContainer.classList.remove('d-none');

        try {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${changedApi}`);
            const response = await api.json();
            this.meals = response.meals;
            this.displayMeals(this.meals);
            this.closeNavBar()
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            this.loadContainer.classList.add('d-none');
        }
    }

    displayMeals(arr) {
    let dataBox = ``;

    for (let index = 0; index < arr.length; index++) {
        dataBox += `
                <div class="col-md-3">
                    <div class="item" data-index="${arr[index].idMeal}">
                        <img src="${arr[index].strMealThumb}" class="w-100" alt="Meal-img">
                        <div class="info-layer text-center">
                            <h4>${arr[index].strMeal}</h4>
                        </div>    
                    </div>
                </div>
        
        `;
    }

    this.container.innerHTML = dataBox;

    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', (event) => {
            const itemID = event.currentTarget.getAttribute('data-index');
            this.fetchSpacficMeal(itemID);
        });
    });
    }

    async getCategory(){
        this.loadContainer.classList.remove('d-none');

        try {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            const response = await api.json();
            this.categoryMeals = response.categories;
            this.displayCategoryMeals(this.categoryMeals);
            this.closeNavBar()
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            this.loadContainer.classList.add('d-none');
        }
    }

    displayCategoryMeals(arr) {
        let dataBox = ``;
    
        for (let index = 0; index < arr.length; index++) {
            dataBox += `
                    <div class="col-md-3">
                        <div class="item" data-index="${arr[index].strCategory}">
                            <img src="${arr[index].strCategoryThumb}" class="w-100" alt="Meal-img">
                            <div class="info-layer text-center">
                                <h4>${arr[index].strCategory}</h4>
                                <p>${arr[index].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                            </div>
                        </div>
                    </div>
            
            `;
        }
    
        this.container.innerHTML = dataBox;
    
        const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', (event) => {
            const itemCategory = event.currentTarget.getAttribute('data-index');
            this.fetchCategory(itemCategory);
        });
    });
    }

    async getArea(){
        this.loadContainer.classList.remove('d-none');

        try {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
            const response = await api.json();
            this.areaMeals = response.meals;
            console.log(this.areaMeals);
            this.displayAreaMeals(this.areaMeals);
            this.closeNavBar()
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            this.loadContainer.classList.add('d-none');
        }
    }

    displayAreaMeals(arr) {
        let dataBox = ``;
    
        for (let index = 0; index < arr.length; index++) {
            dataBox += `
                    <div class="col-md-3">
                        <div class="item text-center " data-index="${arr[index].strArea}">
                            <i class="fa-solid fa-house fa-3x"></i>
                            <h4>${arr[index].strArea}</h4>
                        </div>
                    </div>
            
            `;
        }
    
        this.container.innerHTML = dataBox;
    
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            item.addEventListener('click', (event) => {
                const itemCategory = event.currentTarget.getAttribute('data-index');
                this.fetchArea(itemCategory);
            });
        });
    }

    async getIngredient(){
        this.loadContainer.classList.remove('d-none');

        try {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
            const response = await api.json();
            this.ingredient = response.meals;
            this.displayIngredient(this.ingredient);
            this.closeNavBar()
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            this.loadContainer.classList.add('d-none');
        }
    }

    displayIngredient(arr) {
        let dataBox = ``;
    
        for (let index = 0; index < arr.length; index++) {
            dataBox += `
                    <div class="col-md-3">
                        <div class="item text-center " data-index="${arr[index].strIngredient}">
                        <i class="fa-solid fa-bowl-food fa-3x"></i>
                            <div>
                                <h4>${arr[index].strIngredient}</h4>
                                <p>${arr[index].strDescription}</p>
                            </div>
                        </div>
                    </div>
            
            `;
        }
    
        this.container.innerHTML = dataBox;
    
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            item.addEventListener('click', (event) => {
                const itemIngredient = event.currentTarget.getAttribute('data-index');
                this.fetchArea(itemIngredient);
            });
        });
    }

    displayForm() {
        let dataBox = `
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Enter your Name : ex:ahmed hassan" id="nameInput">
            </div>
            <div class="col-md-6">
                <input type="email" class="form-control" placeholder="Enter your Email : ex:email.gmail.com" id="emailInput">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Enter your Phone : ex:01020000000" id="phoneInput">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Enter your Age : ex:23" id="ageInput">
            </div>
            <div class="col-md-6">
                <input type="password" class="form-control" placeholder="Enter your Password :" id="passwordInput">
            </div>
            <div class="col-md-6">
                <input type="password" class="form-control" placeholder="Enter your repassword :" id="repasswordInput">
            </div>
            <div class="col-md-12 text-center">
                <button class="btn btn-outline-danger" disabled id="submitButton">Submit</button>
            </div>
            <div class="col-md-12 bg-success d-none text-white text-center">
                <h3>Form submitted successfully!</h3>
            </div>
            <div class="col-md-12 bg-danger d-none text-white text-center">
                <h3>You should enter all valid data</h3>
            </div>
        `;
    
        this.container.innerHTML = dataBox;
        this.closeNavBar();
    
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const phoneInput = document.getElementById('phoneInput');
        const passwordInput = document.getElementById('passwordInput');
        const repasswordInput = document.getElementById('repasswordInput');
        const submitButton = document.getElementById('submitButton');
        const successMessage = document.querySelector('.bg-success');
        const errorMessage = document.querySelector('.bg-danger');
    
        const validateName = () => /^[a-zA-Z]+\s[a-zA-Z]+$/.test(nameInput.value.trim());
        const validateEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
        const validatePhone = () => /^01[0125]\d{8}$/.test(phoneInput.value.trim());
        const validatePassword = () => passwordInput.value.trim() !== '' && passwordInput.value.trim() === repasswordInput.value.trim();
    
        const validateForm = () => {
            if (validateName() && validateEmail() && validatePhone() && validatePassword()) {
                submitButton.removeAttribute('disabled');
            } else {
                submitButton.setAttribute('disabled', 'true');
            }
        };
    
        nameInput.addEventListener('input', validateForm);
        emailInput.addEventListener('input', validateForm);
        phoneInput.addEventListener('input', validateForm);
        passwordInput.addEventListener('input', validateForm);
        repasswordInput.addEventListener('input', validateForm);
    
        submitButton.addEventListener('click', () => {
            if (validateName() && validateEmail() && validatePhone() && validatePassword()) {
                successMessage.classList.remove('d-none');
            } else {
                errorMessage.classList.remove('d-none');
            }
        });
    }
    
    searchByLetter() {
        this.searchContainer.classList.remove("d-none");
        this.closeNavBar()
        
        this.searchLetterInput.addEventListener('keyup', async (e) => {
            this.letter = e.target.value;
            this.loadContainer.classList.remove('d-none');
            try {
                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.letter}`);
                let responseData = await response.json();
                this.letterSearch = responseData.meals;
                this.displayMeals(this.letterSearch);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                this.loadContainer.classList.add('d-none');
            }
        });
    }

    searchByName() {
        this.searchContainer.classList.remove("d-none");
        this.closeNavBar()
        
        this.searchNameInput.addEventListener('keyup', async (e) => {
            this.name = e.target.value;
            this.loadContainer.classList.remove('d-none');
            try {
                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.name}`);
                let responseData = await response.json();
                this.nameSearch = responseData.meals;
                this.displayMeals(this.nameSearch);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                this.loadContainer.classList.add('d-none');
            }
        });
    }
       
}