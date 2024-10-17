const displayEdit = () => {
  const form = document.getElementById("form");
  form.classList.toggle("d-none");
};
const display = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  const name = document.getElementById("name");
  const role = document.getElementById("role");
  const aviable = document.getElementById("available");
  const location = document.getElementById("location");
  const experience = document.getElementById("experience");
  const email = document.getElementById("email");
  const age = document.getElementById("age");

  if (data) {
    name.innerHTML = data.name;
    role.innerHTML = data.role;
    aviable.innerHTML = data.aviable;
    location.innerHTML = data.location;
    experience.innerHTML = data.experience;
    email.innerHTML = data.email;
    age.innerHTML = data.age;
  }
};

const pushData = () => {
  const name = document.getElementById("input-name");
  const role = document.getElementById("input-role");
  const location = document.getElementById("input-location");
  const experience = document.getElementById("input-experience");
  const email = document.getElementById("input-email");
  const age = document.getElementById("input-age");
  const aviable = document.getElementById("input-aviable");
  const data = {
    name: name.value,
    role: role.value,
    location: location.value,
    experience: experience.value,
    email: email.value,
    age: age.value,
    aviable: aviable.value,
  };
  localStorage.setItem("data", JSON.stringify(data));
  display();
  displayEdit();
};
