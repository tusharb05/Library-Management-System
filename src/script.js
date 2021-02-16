let display = document.querySelector('#display')
display.style.visibility = 'hidden';

let msgArea = document.querySelector('.msg');
let form = document.querySelector('#my-form')
let input1 = document.querySelector('#title');
let input2 = document.querySelector('#author');
let input3 = document.querySelector('#recipient');
let input4 = document.querySelector('#date-issued');
let table = document.querySelector('.table');
let list = document.querySelector('.book-list');
let submitBtn = document.querySelector('.btn-submit');

form.addEventListener('submit', (e)=>{
	e.preventDefault();
	
	let bookTitle = input1.value;
	let author = input2.value;
	let recipient = input3.value;
	let dateIssued = input4.value;

	if(bookTitle==''||author==''||recipient==''||dateIssued=='') {
		msgArea.textContent = 'Alert! Fill the fields first'
		msgArea.className = 'alert alert-danger';
		setTimeout(()=>msgArea.remove(), 3000)
	}

	else {
		display.style.visibility = 'visible';

		let itemRow = document.createElement('tr');

		let item1 = document.createElement('td');
		let item2 = document.createElement('td');
		let item3 = document.createElement('td');
		let item4 = document.createElement('td');
		let item5 = document.createElement('td');
		let item6 = document.createElement('td');
		let btnRemove = document.createElement('button');
		let btnEdit = document.createElement('button');

		item1.innerHTML = bookTitle;
		item2.innerHTML = author;
		item3.innerHTML = recipient;
		item4.innerHTML = dateIssued;
		btnRemove.className = 'remove-btn';
		btnEdit.className = 'edit-btn';
		btnRemove.textContent = 'X';
		btnEdit.textContent = 'Edit';

		item1.className = 'tds';
		item2.className = 'tds';
		item3.className = 'tds';
		item4.className = 'tds';
		item5.className = 'edit-delete-btn';
		item6.className = 'edit-delete-btn';
		

		itemRow.appendChild(item1);
		itemRow.appendChild(item2);
		itemRow.appendChild(item3);
		itemRow.appendChild(item4);
		item6.appendChild(btnEdit);
		item5.appendChild(btnRemove);
		itemRow.appendChild(item6);
		itemRow.appendChild(item5);
		list.appendChild(itemRow);

		form.reset();

		btnEdit.addEventListener('click', (e)=>{
			console.log('success');
			msgArea.className = 'alert alert-info';
			msgArea.textContent = 'Edit the fields'
			setTimeout(()=>msgArea.remove(), 3000);

			document.querySelector('#title').value = btnEdit.parentElement.parentElement.children[0].textContent;
			document.querySelector('#author').value = btnEdit.parentElement.parentElement.children[1].textContent;
			document.querySelector('#recipient').value = btnEdit.parentElement.parentElement.children[2].textContent;
			document.querySelector('#date-issued').value = btnEdit.parentElement.parentElement.children[3].textContent;

			submitBtn.style.display = 'none';
			let saveEditBtn = document.createElement('button')
			saveEditBtn.className = 'btn btn-dark'
			saveEditBtn.textContent = 'Save';
			document.querySelector('.btns').innerHTML = '';//BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
			document.querySelector('.btns').appendChild(saveEditBtn);

			saveEditBtn.addEventListener('click', (e)=>{
				let newTitle = document.querySelector('#title').value;
				let newAuthor = document.querySelector('#author').value;
				let newRecipient = document.querySelector('#recipient').value;
				let newDate = document.querySelector('#date-issued').value;
				form.reset();
				saveEditBtn.style.display = 'none';
				// submitBtn.style.display = 'block';
				document.querySelector('.btns').innerHTML = '';
				document.querySelector('.btns').innerHTML = '<button type="submit" class="btn btn-dark btn-submit">Submit</button>'

				console.log(btnEdit.parentElement.parentElement.children[1].textContent)

				btnEdit.parentElement.parentElement.children[0].textContent  = newTitle;
				btnEdit.parentElement.parentElement.children[1].textContent  = newAuthor;
				btnEdit.parentElement.parentElement.children[2].textContent  = newRecipient;
				btnEdit.parentElement.parentElement.children[3].textContent  = newDate;

			});
		});


		btnRemove.addEventListener('click', (e)=>{
			if(document.querySelector('.book-list').children[1]==null) {
				itemRow.remove();
				display.style.visibility = 'hidden';
				form.reset();
			}
			else {
				itemRow.remove();
				form.reset();
			}
		});
	}

});
