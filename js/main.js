const searchBtn = document.getElementById('searchBtn')


let respExample = {
    "ip": "19.117.63.126",
    "location": {
        "country": "US",
        "region": "Michigan",
        "city": "Dearborn",
        "lat": 42.32226,
        "lng": -83.17631,
        "postalCode": "48120",
        "timezone": "-04:00",
        "geonameId": 4990510
    },
    "domains": [
        "portal.tallmanjs.com"
    ],
    "isp": "Ford Motor Company",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    }
}
const moveMap = (lat,lng) => {
    lat = parseFloat(lat)
    lng = parseFloat(lng)
    L.marker([lat, lng], {icon: blackIcon}).addTo(map)
    map.setView([lat, lng],10)
}

const getIpLocation = async () => {
    const searchedIp = document.getElementById('ip')
    const data = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_7sqLOCgXLGCXPP7lMzVSz1ugKeZbU&ipAddress=${searchedIp.value}`).then((resp)=>resp.json())
    const {ip, location, isp} = data
    const {lat, lng, region, city, postalCode, timezone} = location
    moveMap(lat,lng)
    

    document.getElementById('ip-address').innerText = ip
    document.getElementById('location').innerText = `${region}, ${city} ${postalCode}`
    document.getElementById('time-zone').innerText = `UTC ${timezone}`
    document.getElementById('isp').innerText = isp
}

searchBtn.addEventListener('click',() => getIpLocation())
