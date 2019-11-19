const DATA = require('./data.js')
const CalendarData = DATA.calendar
const calendarData = document.querySelector('#calendarData')

module.exports = {
  name: 'Calendar',
  version: "0.1",
  render: function () {
    console.log('*** Render Calendar ****')
    calendarData.innerHTML = `
    ${CalendarData.map(item => `
          <ion-item-group>
            <ion-item-divider sticky>
              <ion-label>${item.time}</ion-label>
            </ion-item-divider>
            ${item.sessions.map(session => `
              <ion-item>
              <ion-label>
                  <h3>${session.nome}</h3>
                  <p>
                  ${session.inizio} &mdash; ${session.fine}: ${session.luogo}
                  </p>
              </ion-label>
              </ion-item>
            `).join('\n')}
          </ion-item-group>
          `).join('\n')}
      `
  }
}





/*
//Versione 1
CALENDAR.forEach(dividerGroup => {
    dividerName = dividerGroup.DividerName
    const newElement = document.createElement("ion-item-group")
    newElement.innerHTML = 
    `
    <ion-item-divider sticky>
                <ion-label>${dividerName}</ion-label>
    </ion-item-divider>
    `

    dividerGroup.Events.forEach(event => {
            const newElementInnerHtml= `
                <ion-item>
                    <ion-label>
                            <h3>${event.nome}</h3>
                            <p>${event.inizio} &mdash; ${event.fine} :${event.luogo}</p>
                    </ion-label>
                </ion-item>`
                newElement.innerHTML = newElement.innerHTML + newElementInnerHtml
    });
    EventList.appendChild(newElement)
});

//Versione 2
 for (let i = 0; i < CALENDAR.length; i++) {
    divider = CALENDAR[i].DividerName
    let newElement = document.createElement("ion-item-group")
    newElement.innerHTML = `
    <ion-item-divider sticky>
                <ion-label>${divider}</ion-label>
    </ion-item-divider>
    `

    for (let j = 0; j < CALENDAR[i].Events.length; j++) {
        let dividerEvent = CALENDAR[i].Events[j]
        console.log(dividerEvent);

        const newElementInnerHtml= `
                <ion-item>
                    <ion-label>
                            <h3>${dividerEvent.nome}</h3>
                            <p>${dividerEvent.inizio} &mdash; ${dividerEvent.fine} :${dividerEvent.luogo}</p>
                    </ion-label>
                </ion-item>
        `
        newElement.innerHTML = newElement.innerHTML + newElementInnerHtml
        EventList.appendChild(newElement)
    }

} */