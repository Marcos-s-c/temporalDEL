usuarioTabla = document.getElementById("tabla_usuarios");
buscarUsuario = document.getElementById("buscarUsuario");
const GuardarUsuario = () => {
  nombreCompleto = document.getElementById("nombreCompleto");
  cedula = document.getElementById("cedula");
  correo = document.getElementById("correo");

  console.log("inicio de envio de datos");
  valores = {
    nombreCompleto: nombreCompleto.value,
    cedula: cedula.value,
    correo: correo.value,
  };

  fetch("/guardar/persona", {
    method: "POST",
    body: JSON.stringify(valores),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const ListarUsuarios = () => {
  fetch("/listar/personas", {
    method: "GET",
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (usuarios) {
      for (const usuario of usuarios) {
        const { nombreCompleto, correo, cedula } = usuario;

        usuarioTabla.innerHTML += `
        <tr>
        <td>${nombreCompleto}</td>
        <td>${cedula}</td>
        <td>${correo}</td>
        </tr>
      `;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

ListarUsuarios();

function BuscarUsuario() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("buscarUsuario");
  filter = input.value.toUpperCase();
  table = document.getElementById("contenidoTablaUsuarios");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

BuscarUsuario();
