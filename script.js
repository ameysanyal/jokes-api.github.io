    const jokes = document.querySelector('#joke');
    const Btn = document.querySelector('#Btn');

    // using fetch method 
    // const generateJokes = () =>{
    //     const setHeader = {
    //         headers:{
    //          Accept : "application/json"
    //         }
    //     }


    //     fetch('https://icanhazdadjoke.com', setHeader)
    //     .then( (res) => res.json())
    //     .then( (data) =>{
    //         jokes.innerHTML = data.joke;
    //     }).catch((error) => {
    //      console.log(error);
    //     })

    // }

//   using async await method

    const generateJokes = async() =>{

        try{
        const setHeader = {
            headers:{
             Accept : "application/json"
            }
        }

      const res = await  fetch('https://icanhazdadjoke.com', setHeader);
      const data = await res.json();
      jokes.innerHTML = data.joke;
    }catch(err){
        console.log(`error is ${err}`);
    }

      

    }

    Btn.addEventListener('click', generateJokes);
    generateJokes();