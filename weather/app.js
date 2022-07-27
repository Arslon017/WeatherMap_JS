const input = document.querySelector('.input_text');

const main = document.querySelector('#name');

const temp = document.querySelector('.temp');

const desc = document.querySelector('.desc');

const clouds = document.querySelector('.clouds');

const button = document.querySelector('.submit');

button.addEventListener('click', function (name) {

    function press() {


        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')

            .then(response => response.json())


            .then(data => {
                const tempValue = document.querySelector('.temp').innerHTML = data['main']['temp'];

                const nameValue = document.querySelector('.name').innerHTML = data['name'];

                const descValue = document.querySelector('.desc').innerHTML = data['weather'][0]['description'];





                // console.log(data);
                let m = main.innerHTML = nameValue;

                let n = desc.innerHTML = "Havo: " + descValue;

                let l = temp.innerHTML = "Harorat: " + ((tempValue - 273.15));



                input.value = "";


            })

    }


    if (input.value == 123) {
        alert("Noto'g'ri shahar nomi")

        
    } else {
        press()
    }





})


