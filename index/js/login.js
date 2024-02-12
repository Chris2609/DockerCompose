const laravelApi = "http://" + (new URL(window.location.origin)).hostname +":81";

        //comprobar si el usuario ya ha iniciado sesion antes
        async function comprobarToken(){
            setTimeout(async () => {
                carga();
            try {
                let respuesta = await fetch(laravelApi + "/api/comprobarToken", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: 'Bearer ' + sessionStorage.getItem("token")
                    }
                });

            let data = await respuesta.json();
            console.log(data);

            if(data == 1){
                ocultarLogin();
                principal.style.display = "block";

                datosUbicaciones();
            } else{
                console.log("token invalido");
                alert("Tu sesión ha expirado o el token no es válido");
            }

            } catch (error) {
                console.error(error);
            }
            finCarga();
            }, 500);
            
        }

        if(sessionStorage.getItem("token") != null){
            comprobarToken();
        }
        //fin comprobacion sesion del usuario

        async function login(correo, contrasena) {
            carga();
            try {
                let respuesta = await fetch(laravelApi + "/api/login", {
                    method: "POST",
                    body: JSON.stringify({
                        email: correo,
                        password: contrasena
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });

                let data = await respuesta.json();
                console.log(data);

                if (data["success"]) {
                    sessionStorage.setItem("token", data["data"]["token"]);

                    ocultarLogin();
                    principal.style.display = "block";
                   
                    datosUbicaciones();

                } else {
                    // Ha fallado el login
                    console.error('Error en el inicio de sesión:', data["error"]);
                    
                    //mostrar error al usuario
                    avisoLogin.style.display = "block";
                }
            } catch (error) {
                console.error(error);
            }
            finCarga();
        }

        async function register(nombre, correo, contrasena, cContrasena) {
            carga();
            try {
                let respuesta = await fetch(laravelApi + "/api/register", {
                    method: "POST",
                    body: JSON.stringify({
                        name: nombre,
                        email: correo,
                        password: contrasena,
                        c_password: cContrasena
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });

                let data = await respuesta.json();
                console.log(data);

                if (data["success"]) {
                    sessionStorage.setItem("token", data["data"]["token"]);

                    ocultarRegister();
                    principal.style.display = "block";
                   
                    datosUbicaciones();

                } else {
                    // Ha fallado el registro
                    console.error('Error al registrarse:', data["error"]);
                    
                    avisoRegisterCorreo.style.display = "none";
                    avisoRegister.style.display = "block";

                }
            } catch (error) {
                console.error(error);
                avisoRegister.style.display = "none";
                avisoRegisterCorreo.style.display = "block";
            }
            finCarga();
        }

        async function logout(){
            clearInterval(intervalActualizar);
            mostrarLogin();
            principal.style.display = "none";
            try {
                let respuesta = await fetch(laravelApi + "/api/logout", {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: 'Bearer ' + sessionStorage.getItem("token")
                    }
                });
                
                let data = await respuesta.json();
                console.log(data);

                if(data["success"]){
                    sessionStorage.removeItem("token");
                }
            } catch (error) {
                console.log(error);
            }
        }

        function carga(){
            iconoCarga.style.display = "block";
        }

        function finCarga(){
            iconoCarga.style.display = "none";
        }
        
        // async function prueba(){
        //     try {
        //         let respuesta = await fetch(laravelApi + "/api/prueba", {
        //             headers: {
        //                 "Content-type": "application/json; charset=UTF-8",
        //             }
        //         });
                
        //         let data = await respuesta.json();
        //         console.log(data);
                
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }

        function mostrarLogin(){
            formularioLogin.style.display = "block";
        }

        function ocultarLogin(){
            formularioLogin.style.display = "none";
        }

        function mostrarRegister(){
            formularioRegister.style.display = "block";
        }
        function ocultarRegister(){
            formularioRegister.style.display = "none";
        }

