const searchBtn = document.getElementById('searchBtn')
const ipInput = document.getElementById('ip')

const moveMap = (lat,lng) => {
    lat = parseFloat(lat)
    lng = parseFloat(lng)
    L.marker([lat, lng], {icon: blackIcon}).addTo(map)
    map.setView([lat, lng],10)
}

const getIpLocation = async (searchedIp) => {
    if(!searchedIp){
        searchedIp = ipInput.value
    }
    try {
        const data = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_7sqLOCgXLGCXPP7lMzVSz1ugKeZbU&ipAddress=${searchedIp}`).then((resp)=>resp.json())
        const {ip, location, isp} = data
        const {lat, lng, region, city, postalCode, timezone} = location
        moveMap(lat,lng)
        
        document.getElementById('ip-address').innerText = ip
        document.getElementById('location').innerText = `${region}, ${city} ${postalCode}`
        document.getElementById('time-zone').innerText = `UTC ${timezone}`
        document.getElementById('isp').innerText = isp
    } catch (error) {
        console.log(error)
    }
}
getIpLocation('192.212.174.101')


searchBtn.addEventListener('click',() => getIpLocation())
ipInput.addEventListener('submit',()=> getIpLocation())
