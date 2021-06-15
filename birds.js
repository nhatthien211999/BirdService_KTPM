

const dbRef = firebase.database().ref();

const page_Load = () => {
  getAll();
}

function lnkID_Click(code) {
  getDetails(code);
}

function btnSearch_Click() {
  var keyword = document.getElementById("txtKeyword").value.trim();
  if (keyword.length > 0)
    search(keyword);
  else
    getAll();
}

const btnAdd_click = () => {
    console.log('add');
    const newBird = {
        code: document.getElementById("txtCode").value,
        name: document.getElementById("txtName").value,
        price: document.getElementById("txtPrice").value,
        information: document.getElementById("txtInfo").value,
        type: document.getElementById("txtType").value,
    } 
    console.log(newBird);
    addNew(newBird);
}

const btnUpdate_click = () => {
  console.log('update');
  const newBird = {
      code: document.getElementById("txtCode").value,
      name: document.getElementById("txtName").value,
      price: document.getElementById("txtPrice").value,
      information: document.getElementById("txtInfo").value,
      type: document.getElementById("txtType").value,
  } 
  console.log(newBird);
  update(newBird);
}



const btnDelete_click = () => {
  console.log('Delete');

  const code = document.getElementById("txtCode").value;

  deleteBird(code);
}


