document.querySelector('#getButton').addEventListener('click',apiRequest)

async function apiRequest(){
    const companyName = document.querySelector('input').value
    try{
        const response = await fetch(`https://compantrackerapi.herokuapp.com/api/${companyName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('companyImage').src = data.image
        document.getElementById('industry').innerText = data.Industry
        document.getElementById('year').innerText = data.year_of_establishment
        document.getElementById('founders').innerText = data.Founders
        document.getElementById('key_people').innerText = data.Key_People
        document.getElementById('Location').innerText = data.Location
        document.getElementById('companyCaption').innerText = data.photo

    }
    catch(error){
        console.log(error)
    }
}
