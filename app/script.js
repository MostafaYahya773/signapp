const signupname = document.querySelector('#signupName');
const signupemail = document.querySelector('#signupEmail');
const signuppass = document.querySelector('#signupPass');
const signBtn = document.querySelector('#signBtn');
const inputempty = document.querySelector('#emptyvalue');
const loginemail = document.querySelector('#loginemail');
const loginpass = document.querySelector('#loginpass');
const logBtn = document.querySelector('#LoginBtn');
const emptyvaluelog = document.querySelector('#emptyvaluelog');

let savedata = [];
if (JSON.parse(localStorage.getItem('usersInfo')) != null) {
  savedata = JSON.parse(localStorage.getItem('usersInfo'));
}
const getdata = () => {
  let user = {
    uname: signupname.value,
    uemail: signupemail.value,
    upass: signuppass.value,
  };
  savedata.push(user);
  localStorage.setItem('usersInfo', JSON.stringify(savedata));
  location.href = 'login.html';
};

// signup function
const signup = () => {
  if (
    signupname.value.trim() === '' ||
    signupemail.value.trim() === '' ||
    signuppass.value.trim() === ''
  ) {
    inputempty.innerHTML = `<span class='text-danger d-block text-center my-3'> All inputs are required </span>`;
  } else {
    for (let i = 0; i < savedata.length; i++) {
      if (
        savedata[i].uemail.trim().toLowerCase() ===
        signupemail.value.trim().toLowerCase()
      ) {
        inputempty.innerHTML = `<span class='text-danger d-block text-center my-3'>the email alredy exiset </span>`;
        return false;
      }
    }
    getdata();
    inputempty.innerHTML = `<span class='text-success d-block text-center my-3'> success </span>`;
  }
};

signBtn?.addEventListener('click', () => {
  signup();
});

// login function

const validation = () => {
  if (loginemail.value.trim() === '' || loginpass.value === '') {
    emptyvaluelog.innerHTML = `<span class='text-danger d-block text-center my-3'> All inputs are required </span>`;
  } else {
    for (let i = 0; i < savedata.length; i++) {
      if (
        savedata[i].uemail.trim().toLowerCase() ===
          loginemail.value.trim().toLowerCase() &&
        savedata[i].upass === loginpass.value
      ) {
        emptyvaluelog.innerHTML = `<span class='text-success d-block text-center my-3'> success </span>`;
        localStorage.setItem('newName', JSON.stringify(savedata[i].uname));
        location.href = 'welcome.html';
        return;
      }
    }
    emptyvaluelog.innerHTML = `<span class='text-danger d-block text-center my-3'> you must sign up </span>`;
  }
};

logBtn?.addEventListener('click', function () {
  validation();
});

// home messsage
let welcomeMessage = document.querySelector('#message');
let data = localStorage.getItem('newName');
welcomeMessage.innerHTML = `<h2 class='text-warning'>welcome ${data}</h2>`;
