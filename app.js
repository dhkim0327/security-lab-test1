let users = JSON.parse(
    localStorage.getItem("users")
) || [];


function save(){

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}



function createUser(){

    const name =
        document.getElementById("username").value;


    const role =
        document.getElementById("role").value;


    const user = {

        id: Date.now(),

        name:name,

        role:role

    };


    users.push(user);


    save();

    render();

}



function render(){

    const list =
        document.getElementById("userList");


    list.innerHTML="";


    users.forEach(user=>{


        list.innerHTML += `

        <tr>

        <td>${user.id}</td>

        <td>${user.name}</td>

        <td>${user.role}</td>

        <td>

        <button onclick="updateUser(${user.id})">
        Update
        </button>


        <button class="delete"
        onclick="deleteUser(${user.id})">
        Delete
        </button>


        </td>


        </tr>

        `;


    });


}



function updateUser(id){

    const user =
        users.find(
            u=>u.id===id
        );


    const newRole =
        prompt(
            "변경할 권한",
            user.role
        );


    user.role=newRole;


    save();

    render();

}



function deleteUser(id){

    users =
    users.filter(
        u=>u.id!==id
    );


    save();

    render();

}



render();
