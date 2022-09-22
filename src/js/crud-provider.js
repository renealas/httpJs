const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async (id) => {
    const resp = await fetch(`${urlCRUD}/${id}`);
    const {data} = await resp.json();

    return data;
};

const crearUsuario = async (ususario) => {
    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(ususario),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    console.log(await resp.json());
    return await resp.json();
};

const actualizarUsuario = async (id, ususario) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(ususario),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    console.log(await resp.json());
    return await resp.json();
};

const borrarUsuario = async (id) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE'
    });

    return (resp.ok) ? 'Borrado' : 'No se pudo Eliminar usuario';
};

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}