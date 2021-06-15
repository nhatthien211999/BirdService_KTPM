
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBLYty07Sjrku__ysTND6HbuB5MVhesAt4",
        authDomain: "ktpm-4a77d.firebaseapp.com",
        databaseURL: "https://ktpm-4a77d-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "ktpm-4a77d",
        storageBucket: "ktpm-4a77d.appspot.com",
        messagingSenderId: "415093263193",
        appId: "1:415093263193:web:40fc16b3cb85b4b3a91a48"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  /* helper methods */
function renderBirdList(birds) {
    var rows = "";
    for (var bird of birds) {
      rows += "<tr>";
      rows += "<td><a href='#' onclick='lnkID_Click(" + bird.code + ")'>" + bird.code + "</a></td>";
      rows += "<td>" + bird.name + "</td>";
      rows += "<td>" + bird.price + "</td>";
      rows += "<td>" + bird.information + "</td>";
      rows += "<td>" + bird.type + "</td>";
      rows += "</tr>";
    }
    var header = "<tr><th>Code</th><th>Name</th><th>Price</th><th>Information</th><th>Type</th></tr>";
  
    document.getElementById("lists").innerHTML = header + rows;
  }
  
  function renderBirdDetails(bird) {
    document.getElementById("txtCode").value = bird.code;
    document.getElementById("txtName").value = bird.name;
    document.getElementById("txtPrice").value = bird.price;
    document.getElementById("txtInfo").value = bird.information;
    document.getElementById("txtType").value = bird.type;
  }

  function search(keyword) {
    dbRef.child("birds").once("value", (snapshot) => {
      var birds = [];
      snapshot.forEach((child) => {
        var bird = child.val();
        if (bird.name.includes(keyword)) {
            birds.push(bird);
        }
      });
      renderBirdList(birds);
    });
  }
  
  const deleteBird = (code) => {
    dbRef.child("birds").once("value", (snapshot) => {
      snapshot.forEach(element => {
        let bird = element.val();
        console.log(typeof code);
        if(bird.code === code){
          let key = element.key;
          console.log(key);
          dbRef.child("birds").child(key).remove();
        }
      });
    });
  }

  const update = (newBird) => {
    dbRef.child("birds").once("value", (snapshot) => {
      snapshot.forEach(element => {
        let bird = element.val();
        
        if(bird.code === newBird.code){
          let key = element.key;
          dbRef.child("birds").child(key).set(newBird);
        }
      });
    });
  }

  const addNew = (newBird) => {
    dbRef.child("birds").push(newBird);
}

    function getDetails(code) {
        dbRef.child("birds").once("value", (snapshot) => {
        snapshot.forEach((child) => {
            var bird = child.val();
            
            if (bird.code == code) {
            console.log(bird);
            renderBirdDetails(bird);
            }
        });
        });
  }
  
  const getAll = () => {
    dbRef.child("birds").on("value", (snapshot) => {
      var birds = [];
      snapshot.forEach((child) => {
        //alert(child.key);
        var bird = child.val();
        birds.push(bird);
      });
      renderBirdList(birds);
    });
  }