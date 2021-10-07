import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import * as bootstrap from 'bootstrap';
import '@popperjs/core';
import { SERVER_URL } from './constants'

document.getElementById("all-content").style.display = "block"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Person below */

let editModalElement = document.getElementById("editmodal")
let editModal = new bootstrap.Modal(editModalElement)

document.getElementById("tablerows").addEventListener('click', e =>
{
  e.preventDefault();
  const node = e.target
  const name = node.getAttribute("name")
  const id = node.getAttribute("id")
  switch (name)
  {
    case "edit": editPerson(id); break;
    case "delete": deletePerson(id); break;
  }

})

function editPerson(id)
{

  fetch(`${SERVER_URL}/person/${id}`)
    .then(handleHttpErrors)
    .then(data => 
    {
      document.getElementById("edit_id").value = data.id
      document.getElementById("fName").value = data.fName
      document.getElementById("lName").value = data.lName
      document.getElementById("phone").value = data.phone
      document.getElementById("street").value = data.street
      document.getElementById("zip").value = data.zip
      document.getElementById("city").value = data.city
      editModal.toggle()
    })
    .catch(errorHandling)

}

document.getElementById("modal-edit-save-btn").addEventListener('click', updatePerson)

function updatePerson()
{
  const id = document.getElementById("edit_id").value

  const personObject = {
    id: id,
    fName: document.getElementById("fName").value,
    lName: document.getElementById("lName").value,
    phone: document.getElementById("phone").value,
    street: document.getElementById("street").value,
    zip: document.getElementById("zip").value,
    city: document.getElementById("city").value
  }

  const options = makeOptions('PUT', personObject)

  fetch(`${SERVER_URL}/person/${id}`, options)
    .then(handleHttpErrors)
    .then(data =>
    {
      editModal.toggle()
      getAllPersons()
    })
    .catch(errorHandling)
}


function deletePerson(id)
{
  alert('deletePerson: ' + id)
}


function getAllPersons()
{
  fetch(`${SERVER_URL}/person/all`)
    .then(handleHttpErrors)
    .then(data =>
    {
      // Lav tabel rækker med data
      const allRows = data.all.map(p => getPersonTableRow(p))
      document.getElementById("tablerows").innerHTML = allRows.join("")
    })
    .catch(errorHandling)
}



function getPersonTableRow(p)
{
  return `<tr>
    <td>${p.id}</td>
    <td>${p.fName}</td>
    <td>${p.lName}</td>
    <td>${p.phone}</td>
    <td>${p.street}</td>
    <td>${p.zip}</td>
    <td>${p.city}</td>
    <td>
      <input id="${p.id}" type="button" name="edit" value="edit"/>
      <input id="${p.id}" type="button" name="delete" value="delete"/>
    </td>
    </tr>`
}





/* JS For Exercise-2 below */



/* JS For Exercise-3 below */


/* Helper functions */

function makeOptions(method, body)
{
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    }
  }
  if (body)
  {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res)
{
  if (!res.ok)
  {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function errorHandling(err)
{
  console.log(err)
  if (err.status)
  {
    err.fullError.then(e => console.log(e.message))
  }
  else
  {
    console.log("Network error")
  }
}




/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow)
{
  document.getElementById("about_html").style = "display:none"
  document.getElementById("person").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt)
{
  const id = evt.target.id;
  switch (id)
  {
    case "ex1": hideAllShowOne("person"); getAllPersons(); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



