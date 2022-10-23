window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastname = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyline = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let storyText = document.getElementById('story');
  let prewile = document.getElementById('preview-list');
  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', (e) => {
    if (firstName.value === '' || lastname.value === '' || age.value === '' || storyline.value === '' || storyText.value === '') {
      return;
    }

    createElements(e, firstName.value, lastname.value, age.value, storyline.value, storyText.value, genre.value);
    clearInputFields();
  });

  function createElements(e, firstN, lastN, ageV, storylineV, storyTextV, genreV) {
    let li = document.createElement('li');
    li.classList.add('story-info');
    let article = document.createElement('article');
    let nameH4 = document.createElement('h4');
    nameH4.textContent = `Name: ${firstN} ${lastN}`;
    article.appendChild(nameH4);
    let ageP = document.createElement('p');
    ageP.textContent = `Age: ${ageV}`;
    article.appendChild(ageP);
    let titlep = document.createElement('p');
    titlep.textContent = `Title: ${storylineV}`;
    article.appendChild(titlep);
    let genreP = document.createElement('p');
    genreP.textContent = `Genre: ${genreV}`;
    article.appendChild(genreP);
    let storyP = document.createElement('p');
    storyP.textContent = storyTextV;
    article.appendChild(storyP);
    li.appendChild(article);

    let saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click', save);

    let editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit Story';
    editBtn.addEventListener('click', (e) => {
      edit(e, firstN, lastN, ageV, storylineV, storyTextV);
    });

    let deletebtn = document.createElement('button');
    deletebtn.className = 'delete-btn';
    deletebtn.textContent = 'Delete Story';
    deletebtn.addEventListener('click', deleteF);

    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deletebtn);

    prewile.appendChild(li);
    publishBtn.disabled = true;
  }

  function edit(e, _firstName, _lastname, _age, _storyline, _storyText) {
    publishBtn.disabled = false;
    e.target.parentElement.remove();
    firstName.value = _firstName;
    lastname.value = _lastname;
    age.value = _age;
    storyline.value = _storyline;
    storyText.value = _storyText;
    let btns = e.target.parentElement.querySelectorAll('button');
    btns.forEach(b => b.disabled = true);
  }

  function save(e) {
    let div = document.getElementById('main');
    div.innerHTML = '';
    let h1 = document.createElement('h1');
    h1.textContent = `Your scary story is saved!`;
    div.appendChild(h1);
  }

  function deleteF(e) {
    let parent = e.target.parentElement;
    parent.remove();
    publishBtn.disabled = false;
  }

  function clearInputFields() {
    firstName.value = '';
    lastname.value = '';
    age.value = '';
    storyline.value = '';
    storyText.value = '';
  }
}