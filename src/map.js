const DATA = require('./data.js')
const eventPOI = DATA.map.geoJson


module.exports = {

    name: 'Mappa',
    version: '0.1',
    render: () => {
        const tabs = document.querySelector("#Tabs")
        tabs.addEventListener('ionTabsDidChange', (event) => {

            setTimeout(() => {
                if (event.detail.tab === 'map')
                    myMap.invalidateSize()
            }, 100)

        })
        //MAP INIT
        console.log("MAP", L);
        const myMap = L.map('mapView').setView([45.6522854, 13.7661518], 14)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar', attribution: 'Powered by ITS - Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>', maxZoom: 18 }).addTo(myMap);


        L.geoJson(eventPOI).addTo(myMap)
    }

}
