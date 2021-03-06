import React from 'react'
import cloneDeep from "lodash/cloneDeep";

export const entries = [{
  id: '58394',

  insuranceAmount: 2000000,
  name: 'Jan Kowalski',
  miasto: 'Warszawa',

  mieszkanie: true,
  adres: 'Wilcza 14, Warszawa, Poland',
  numerMieszkania: 11,
  numerKarty: 59483949,
  pzuAuto: true,
  stale: false,
  cesja: false,
  'kradziez.drzwi': true,
  'kradziez.okna': true,
  'kradziez.alarm': true,
  'kradziez.monitoring': true,

  pakiet: 0,
  'nieruchomosci.Komfort': '750 000 PLN',
  'ruchomosci.Komfort': '10 000 PLN',
  'stale.Komfort': '5 000 PLN',
  'dodatkowa.Komfort': '5 000 PLN',
  'dodatkowa.pomoc.Komfort': true,
  'dodatkowa.stluczenie.Komfort': true,
  'dodatkowa.oc.Komfort': false,
  'dodatkowa.prawna.Komfort': false,
  'suwak.Komfort': 360,

  'nieruchomosci.Premium': '1 00 000 PLN',
  'ruchomosci.Premium': '10 000 PLN',
  'stale.Premium': '5 000 PLN',
  'dodatkowa.Premium': '10 000 PLN',
  'dodatkowa.pomoc.Premium': true,
  'dodatkowa.stluczenie.Premium': true,
  'dodatkowa.oc.Premium': true,
  'dodatkowa.prawna.Premium': true,
  'suwak.Premium': 600
}, {
  id: '58395',

  insuranceAmount: 7000000,
  name: 'Adrian Owczarczyk',
  miasto: 'Warszawa',

  mieszkanie: false,
  adres: 'Hoża 69, Warszawa, Poland',
  numerKarty: 59483949,
  pzuAuto: true,
  stale: false,
  cesja: false,
  'kradziez.drzwi': true,
  'kradziez.okna': true,
  'kradziez.alarm': true,
  'kradziez.monitoring': true,

  pakiet: 1,
  'nieruchomosci.Premium': '1 000 000 PLN',
  'ruchomosci.Premium': '10 000 PLN',
  'stale.Premium': '5 000 PLN',
  'dodatkowa.Premium': '10 000 PLN',
  'dodatkowa.pomoc.Premium': true,
  'dodatkowa.stluczenie.Premium': true,
  'dodatkowa.oc.Premium': true,
  'dodatkowa.prawna.Premium': true,
  'suwak.Premium': 600,

  'nieruchomosci.Komfort': '750 000 PLN',
  'ruchomosci.Komfort': '10 000 PLN',
  'stale.Komfort': '5 000 PLN',
  'dodatkowa.Komfort': '5 000 PLN',
  'dodatkowa.pomoc.Komfort': true,
  'dodatkowa.stluczenie.Komfort': true,
  'dodatkowa.oc.Komfort': false,
  'dodatkowa.prawna.Komfort': false,
  'suwak.Komfort': 360
}]

export const additionalOptions = [
  { name: 'numerKarty', label: 'Karta zniżkowa nr 59483949', value: true },
  { name: 'pzuAuto', label: 'Ubezpieczenie PZU AUTO', value: true },
  { name: 'stale', label: 'Stale elementy' },
  { name: 'cesja', label: 'Cesja' }
]

export const antiTheft = [
  { name: 'kradziez.drzwi', icon: 'fa-lock-alt', label: 'Drzwi lub zamki atestowane' },
  { name: 'kradziez.okna', icon: 'fa-th-large', label: 'Zabezpieczenia okien' },
  { name: 'kradziez.alarm', icon: 'fa-bell', label: 'Alarm' },
  { name: 'kradziez.monitoring', icon: 'fa-video', label: 'Monitoring' }
]

export const additionalSecurity = [
  { name: 'dodatkowa.pomoc', icon: 'fa-home', label: 'Pomoc w domu' },
  { name: 'dodatkowa.stluczenie', icon: 'fa-glass-martini', label: 'Przedmioty od stłuczenia' },
  { name: 'dodatkowa.oc', icon: 'fa-user-alt', label: 'OC prywatne' },
  { name: 'dodatkowa.prawna', icon: 'fa-gavel', label: 'Ochrona prawna' }
]

export const offers = [
  {
    id: 0,
    label: 'Komfort',
    min: 240,
    price: 330,
    max: 420,
    insurances: [
      { name: 'nieruchomosci.Komfort', label: 'Nieruchomośći', amount: '750 000 PLN', price: '200 PLN' },
      { name: 'ruchomosci.Komfort', label: 'Ruchomości domowe', amount: '10 000 PLN', price: '100 PLN' },
      { name: 'stale.Komfort', label: 'Stałe elementy', amount: '5 000 PLN', amountAlt: '2 500 PLN', price: '100 PLN' },
      {
        name: 'dodatkowa.Komfort', label: 'Dodatkowa ochrona', amount: '5 000 PLN', amountAlt: '2 500 PLN',
        items: cloneDeep(additionalSecurity).map(i => ({
          ...i,
          name: i.name += '.Komfort'
        }))
      },
    ]
  },
  {
    id: 1,
    label: 'Premium',
    min: 430,
    price: 520,
    max: 610,
    insurances: [
      { name: 'nieruchomosci.Premium', label: 'Nieruchomośći', amount: '1 000 000 PLN', price: '200 PLN' },
      { name: 'ruchomosci.Premium', label: 'Ruchomości domowe', amount: '10 000 PLN', price: '100 PLN' },
      { name: 'stale.Premium', label: 'Stałe elementy', amount: '5 000 PLN', amountAlt: '2 500 PLN', price: '100 PLN' },
      {
        name: 'dodatkowa.Premium', label: 'Dodatkowa ochrona', amount: '10 000 PLN', amountAlt: '5 000 PLN',
        items: cloneDeep(additionalSecurity).map(i => ({
          ...i,
          name: i.name += '.Premium'
        }))
      },
    ]
  }
]

export const pzuServices = [
  { name: 'ubezpieczenieNieruchomosci', icon: 'fa-home', label: 'Ubezpiecznie nieruchomości' },
  { name: 'oc', icon: 'fa-car', label: 'OC', value: true },
  { name: 'ac', icon: 'fa-car', label: 'AC' },
  { name: 'ocZycie', icon: 'fa-user', label: 'OC na życie' }
]

export const suggestions = {
  'nieruchomosci.Komfort': {
    suggestion: 'Zwiększenie wartości nieruchomości',
    reason:
      <span>Inne domy w okolicy są ubezpieczone o średnio <strong>50 000 więcej</strong>.</span>,
    link: 'Zobacz analizę',
    type: 'upsell'
  },
  'ruchomosci.Komfort': {
    suggestion: 'Zwiększenie wartości ruchomości domowych',
    reason: 'Klient posiada laptop Macbook Pro 2017 o wartości rynkowej 10 000 PLN',
    type: 'upsell'
  },
  'dodatkowa.oc.Komfort': {
    suggestion: 'Powiększenie oferty o OC',
    reason: 'Klient nie posiada OC'
  },
  'nieruchomosci.Premium': {
    suggestion: 'Zwiększenie wartości nieruchomości',
    reason:
      <span>Inne domy w okolicy są ubezpieczone o średnio <strong>50 000 więcej</strong>.</span>,
    link: 'Zobacz analizę',
    type: 'upsell'
  },
  'ruchomosci.Premium': {
    suggestion: 'Zwiększenie wartości ruchomości domowych',
    reason: 'Klient posia laptop Macbook Pro 2017 o wartości rynkowej 10 000 PLN',
    type: 'upsell'
  },
  'dodatkowa.oc.Premium': {
    suggestion: 'Powiększenie oferty o OC',
    reason: 'Klient nie posiada OC'
  }
}

export const heatPrices = [{"x":81,"y":96,"value":"1"},{"x":81,"y":96,"value":"1"},{"x":58,"y":73,"value":"1"},{"x":57,"y":73,"value":"1"},{"x":42,"y":79,"value":"1"},{"x":44,"y":78,"value":"1"},{"x":45,"y":78,"value":"1"},{"x":48,"y":78,"value":"1"},{"x":49,"y":78,"value":"1"},{"x":53,"y":77,"value":"1"},{"x":69,"y":59,"value":"1"},{"x":75,"y":52,"value":"1"},{"x":77,"y":42,"value":"1"},{"x":82,"y":38,"value":"1"},{"x":84,"y":33,"value":"1"},{"x":85,"y":16,"value":"1"},{"x":85,"y":14,"value":"1"},{"x":84,"y":4,"value":"1"},{"x":84,"y":2,"value":"1"},{"x":84,"y":2,"value":"1"},{"x":83,"y":7,"value":"1"},{"x":84,"y":22,"value":"1"},{"x":86,"y":36,"value":"1"},{"x":87,"y":51,"value":"1"},{"x":87,"y":66,"value":"1"},{"x":88,"y":78,"value":"1"},{"x":88,"y":88,"value":"1"},{"x":89,"y":98,"value":"1"},{"x":89,"y":99,"value":"1"},{"x":90,"y":89,"value":"1"},{"x":90,"y":60,"value":"1"},{"x":88,"y":30,"value":"1"},{"x":88,"y":12,"value":"1"},{"x":87,"y":0,"value":"1"},{"x":87,"y":0,"value":"1"},{"x":88,"y":10,"value":"1"},{"x":90,"y":33,"value":"1"},{"x":92,"y":57,"value":"1"},{"x":94,"y":79,"value":"1"},{"x":94,"y":92,"value":"1"},{"x":95,"y":99,"value":"1"},{"x":98,"y":80,"value":"1"},{"x":99,"y":68,"value":"1"},{"x":99,"y":68,"value":"1"},{"x":99,"y":68,"value":"1"},{"x":99,"y":68,"value":"1"},{"x":97,"y":6,"value":"1"},{"x":95,"y":30,"value":"1"},{"x":94,"y":53,"value":"1"},{"x":94,"y":74,"value":"1"},{"x":94,"y":86,"value":"1"},{"x":95,"y":93,"value":"1"},{"x":96,"y":94,"value":"1"},{"x":97,"y":89,"value":"1"},{"x":98,"y":71,"value":"1"},{"x":99,"y":55,"value":"1"},{"x":99,"y":55,"value":"1"},{"x":99,"y":55,"value":"1"},{"x":99,"y":55,"value":"1"},{"x":99,"y":6,"value":"1"},{"x":97,"y":28,"value":"1"},{"x":96,"y":66,"value":"1"},{"x":96,"y":81,"value":"1"},{"x":96,"y":52,"value":"1"},{"x":97,"y":9,"value":"1"},{"x":97,"y":2,"value":"1"},{"x":97,"y":2,"value":"1"},{"x":92,"y":16,"value":"1"},{"x":91,"y":25,"value":"1"},{"x":91,"y":0,"value":"1"},{"x":91,"y":0,"value":"1"},{"x":94,"y":19,"value":"1"},{"x":96,"y":22,"value":"1"},{"x":96,"y":13,"value":"1"},{"x":97,"y":26,"value":"1"},{"x":99,"y":23,"value":"1"},{"x":99,"y":23,"value":"1"},{"x":97,"y":41,"value":"1"},{"x":97,"y":49,"value":"1"},{"x":97,"y":43,"value":"1"},{"x":95,"y":38,"value":"1"},{"x":97,"y":37,"value":"1"},{"x":88,"y":40,"value":"1"},{"x":81,"y":43,"value":"1"},{"x":78,"y":25,"value":"1"},{"x":75,"y":10,"value":"1"},{"x":74,"y":1,"value":"1"},{"x":74,"y":1,"value":"1"},{"x":75,"y":32,"value":"1"},{"x":74,"y":61,"value":"1"},{"x":78,"y":82,"value":"1"},{"x":80,"y":96,"value":"1"},{"x":81,"y":96,"value":"1"},{"x":81,"y":73,"value":"1"},{"x":79,"y":40,"value":"1"},{"x":75,"y":17,"value":"1"},{"x":75,"y":21,"value":"1"},{"x":76,"y":56,"value":"1"},{"x":79,"y":88,"value":"1"},{"x":78,"y":96,"value":"1"},{"x":74,"y":91,"value":"1"},{"x":74,"y":68,"value":"1"},{"x":74,"y":62,"value":"1"},{"x":71,"y":85,"value":"1"},{"x":69,"y":95,"value":"1"},{"x":65,"y":95,"value":"1"},{"x":52,"y":93,"value":"1"},{"x":47,"y":93,"value":"1"},{"x":61,"y":94,"value":"1"},{"x":75,"y":98,"value":"1"},{"x":83,"y":96,"value":"1"},{"x":75,"y":93,"value":"1"},{"x":54,"y":88,"value":"1"},{"x":42,"y":87,"value":"1"},{"x":34,"y":88,"value":"1"},{"x":24,"y":88,"value":"1"},{"x":12,"y":88,"value":"1"},{"x":2,"y":88,"value":"1"},{"x":0,"y":88,"value":"1"},{"x":5,"y":93,"value":"1"},{"x":22,"y":99,"value":"1"},{"x":35,"y":91,"value":"1"},{"x":36,"y":89,"value":"1"},{"x":17,"y":88,"value":"1"},{"x":3,"y":90,"value":"1"},{"x":7,"y":96,"value":"1"},{"x":35,"y":92,"value":"1"},{"x":48,"y":90,"value":"1"},{"x":54,"y":88,"value":"1"},{"x":30,"y":86,"value":"1"},{"x":4,"y":78,"value":"1"},{"x":2,"y":77,"value":"1"},{"x":2,"y":76,"value":"1"},{"x":2,"y":71,"value":"1"},{"x":2,"y":59,"value":"1"},{"x":2,"y":49,"value":"1"},{"x":2,"y":43,"value":"1"},{"x":2,"y":35,"value":"1"},{"x":1,"y":27,"value":"1"},{"x":2,"y":17,"value":"1"},{"x":2,"y":8,"value":"1"},{"x":2,"y":6,"value":"1"},{"x":3,"y":7,"value":"1"},{"x":7,"y":7,"value":"1"},{"x":14,"y":5,"value":"1"},{"x":20,"y":3,"value":"1"},{"x":27,"y":2,"value":"1"},{"x":33,"y":2,"value":"1"},{"x":39,"y":3,"value":"1"},{"x":44,"y":4,"value":"1"},{"x":50,"y":4,"value":"1"},{"x":55,"y":3,"value":"1"},{"x":64,"y":2,"value":"1"},{"x":68,"y":3,"value":"1"},{"x":72,"y":4,"value":"1"},{"x":73,"y":5,"value":"1"},{"x":71,"y":8,"value":"1"},{"x":67,"y":10,"value":"1"},{"x":63,"y":10,"value":"1"},{"x":58,"y":9,"value":"1"},{"x":52,"y":8,"value":"1"},{"x":45,"y":8,"value":"1"},{"x":38,"y":7,"value":"1"},{"x":31,"y":7,"value":"1"},{"x":26,"y":7,"value":"1"},{"x":21,"y":8,"value":"1"},{"x":14,"y":9,"value":"1"},{"x":8,"y":10,"value":"1"},{"x":6,"y":11,"value":"1"},{"x":6,"y":13,"value":"1"},{"x":14,"y":15,"value":"1"},{"x":19,"y":15,"value":"1"},{"x":25,"y":14,"value":"1"},{"x":30,"y":14,"value":"1"},{"x":37,"y":15,"value":"1"},{"x":45,"y":15,"value":"1"},{"x":54,"y":16,"value":"1"},{"x":61,"y":17,"value":"1"},{"x":67,"y":18,"value":"1"},{"x":71,"y":20,"value":"1"},{"x":74,"y":21,"value":"1"},{"x":71,"y":23,"value":"1"},{"x":58,"y":24,"value":"1"},{"x":48,"y":23,"value":"1"},{"x":41,"y":23,"value":"1"},{"x":34,"y":22,"value":"1"},{"x":26,"y":21,"value":"1"},{"x":18,"y":21,"value":"1"},{"x":10,"y":21,"value":"1"},{"x":6,"y":22,"value":"1"},{"x":7,"y":25,"value":"1"},{"x":11,"y":30,"value":"1"},{"x":20,"y":30,"value":"1"},{"x":31,"y":30,"value":"1"},{"x":41,"y":29,"value":"1"},{"x":50,"y":29,"value":"1"},{"x":59,"y":30,"value":"1"},{"x":66,"y":30,"value":"1"},{"x":72,"y":31,"value":"1"},{"x":71,"y":33,"value":"1"},{"x":57,"y":39,"value":"1"},{"x":38,"y":39,"value":"1"},{"x":27,"y":38,"value":"1"},{"x":18,"y":37,"value":"1"},{"x":10,"y":37,"value":"1"},{"x":5,"y":39,"value":"1"},{"x":4,"y":45,"value":"1"},{"x":12,"y":50,"value":"1"},{"x":26,"y":49,"value":"1"},{"x":33,"y":45,"value":"1"},{"x":43,"y":43,"value":"1"},{"x":54,"y":40,"value":"1"},{"x":64,"y":38,"value":"1"},{"x":73,"y":37,"value":"1"},{"x":72,"y":39,"value":"1"},{"x":52,"y":44,"value":"1"},{"x":31,"y":47,"value":"1"},{"x":20,"y":51,"value":"1"},{"x":9,"y":59,"value":"1"},{"x":1,"y":65,"value":"1"},{"x":0,"y":66,"value":"1"},{"x":11,"y":61,"value":"1"},{"x":30,"y":57,"value":"1"},{"x":40,"y":55,"value":"1"},{"x":55,"y":55,"value":"1"},{"x":63,"y":54,"value":"1"},{"x":66,"y":53,"value":"1"},{"x":69,"y":53,"value":"1"},{"x":55,"y":58,"value":"1"},{"x":30,"y":61,"value":"1"},{"x":19,"y":65,"value":"1"},{"x":11,"y":71,"value":"1"},{"x":8,"y":78,"value":"1"},{"x":8,"y":80,"value":"1"},{"x":20,"y":74,"value":"1"},{"x":33,"y":64,"value":"1"},{"x":42,"y":59,"value":"1"},{"x":50,"y":55,"value":"1"},{"x":57,"y":52,"value":"1"},{"x":57,"y":51,"value":"1"},{"x":48,"y":60,"value":"1"},{"x":31,"y":72,"value":"1"},{"x":18,"y":80,"value":"1"},{"x":8,"y":87,"value":"1"},{"x":5,"y":90,"value":"1"},{"x":10,"y":93,"value":"1"},{"x":27,"y":94,"value":"1"},{"x":41,"y":93,"value":"1"},{"x":50,"y":93,"value":"1"},{"x":59,"y":90,"value":"1"},{"x":68,"y":83,"value":"1"},{"x":73,"y":72,"value":"1"},{"x":73,"y":52,"value":"1"},{"x":73,"y":44,"value":"1"},{"x":69,"y":51,"value":"1"},{"x":66,"y":70,"value":"1"},{"x":68,"y":81,"value":"1"},{"x":73,"y":81,"value":"1"},{"x":77,"y":80,"value":"1"},{"x":80,"y":71,"value":"1"},{"x":81,"y":47,"value":"1"},{"x":80,"y":30,"value":"1"},{"x":76,"y":12,"value":"1"},{"x":74,"y":0,"value":"1"},{"x":74,"y":0,"value":"1"},{"x":80,"y":9,"value":"1"},{"x":82,"y":25,"value":"1"},{"x":82,"y":55,"value":"1"},{"x":83,"y":76,"value":"1"},{"x":83,"y":93,"value":"1"},{"x":85,"y":92,"value":"1"},{"x":90,"y":63,"value":"1"},{"x":85,"y":33,"value":"1"},{"x":73,"y":21,"value":"1"},{"x":48,"y":4,"value":"1"},{"x":26,"y":4,"value":"1"},{"x":16,"y":6,"value":"1"},{"x":17,"y":7,"value":"1"},{"x":27,"y":9,"value":"1"},{"x":32,"y":8,"value":"1"},{"x":41,"y":7,"value":"1"},{"x":53,"y":1,"value":"1"},{"x":56,"y":-1,"value":"1"},{"x":60,"y":-1,"value":"1"},{"x":58,"y":3,"value":"1"},{"x":49,"y":7,"value":"1"},{"x":38,"y":13,"value":"1"},{"x":28,"y":21,"value":"1"},{"x":20,"y":24,"value":"1"},{"x":12,"y":28,"value":"1"},{"x":8,"y":30,"value":"1"},{"x":5,"y":37,"value":"1"},{"x":2,"y":45,"value":"1"},{"x":1,"y":46,"value":"1"},{"x":9,"y":41,"value":"1"},{"x":28,"y":25,"value":"1"},{"x":40,"y":14,"value":"1"},{"x":49,"y":6,"value":"1"},{"x":59,"y":1,"value":"1"},{"x":63,"y":-1,"value":"1"},{"x":60,"y":2,"value":"1"},{"x":48,"y":5,"value":"1"},{"x":36,"y":12,"value":"1"},{"x":31,"y":18,"value":"1"},{"x":25,"y":24,"value":"1"},{"x":20,"y":27,"value":"1"},{"x":15,"y":32,"value":"1"},{"x":8,"y":39,"value":"1"},{"x":1,"y":48,"value":"1"},{"x":0,"y":49,"value":"1"},{"x":0,"y":49,"value":"1"},{"x":6,"y":45,"value":"1"},{"x":13,"y":35,"value":"1"},{"x":17,"y":29,"value":"1"},{"x":13,"y":28,"value":"1"},{"x":11,"y":28,"value":"1"},{"x":17,"y":26,"value":"1"},{"x":24,"y":21,"value":"1"},{"x":25,"y":20,"value":"1"},{"x":22,"y":23,"value":"1"},{"x":18,"y":30,"value":"1"},{"x":12,"y":34,"value":"1"},{"x":12,"y":34,"value":"1"},{"x":20,"y":28,"value":"1"},{"x":25,"y":23,"value":"1"},{"x":24,"y":24,"value":"1"},{"x":18,"y":27,"value":"1"},{"x":15,"y":30,"value":"1"},{"x":15,"y":30,"value":"1"},{"x":22,"y":25,"value":"1"},{"x":26,"y":24,"value":"1"},{"x":15,"y":32,"value":"1"},{"x":14,"y":34,"value":"1"},{"x":14,"y":33,"value":"1"},{"x":36,"y":13,"value":"1"},{"x":57,"y":-1,"value":"1"},{"x":51,"y":3,"value":"1"},{"x":44,"y":7,"value":"1"},{"x":44,"y":8,"value":"1"},{"x":51,"y":6,"value":"1"},{"x":41,"y":10,"value":"1"},{"x":36,"y":12,"value":"1"},{"x":47,"y":7,"value":"1"},{"x":50,"y":6,"value":"1"},{"x":44,"y":9,"value":"1"},{"x":45,"y":9,"value":"1"},{"x":57,"y":5,"value":"1"},{"x":50,"y":6,"value":"1"},{"x":45,"y":6,"value":"1"},{"x":43,"y":0,"value":"1"},{"x":43,"y":0,"value":"1"},{"x":43,"y":0,"value":"1"},{"x":43,"y":0,"value":"1"},{"x":17,"y":1,"value":"1"},{"x":8,"y":6,"value":"1"},{"x":9,"y":5,"value":"1"},{"x":22,"y":2,"value":"1"},{"x":8,"y":6,"value":"1"},{"x":8,"y":6,"value":"1"},{"x":16,"y":3,"value":"1"},{"x":14,"y":4,"value":"1"},{"x":7,"y":7,"value":"1"},{"x":20,"y":2,"value":"1"},{"x":26,"y":0,"value":"1"},{"x":16,"y":3,"value":"1"},{"x":11,"y":4,"value":"1"},{"x":18,"y":2,"value":"1"},{"x":19,"y":1,"value":"1"},{"x":12,"y":4,"value":"1"},{"x":7,"y":8,"value":"1"},{"x":9,"y":7,"value":"1"},{"x":14,"y":4,"value":"1"},{"x":15,"y":2,"value":"1"},{"x":17,"y":1,"value":"1"},{"x":16,"y":2,"value":"1"},{"x":12,"y":3,"value":"1"},{"x":9,"y":5,"value":"1"},{"x":8,"y":8,"value":"1"},{"x":6,"y":10,"value":"1"},{"x":10,"y":6,"value":"1"},{"x":14,"y":2,"value":"1"},{"x":15,"y":2,"value":"1"},{"x":14,"y":4,"value":"1"},{"x":10,"y":7,"value":"1"},{"x":9,"y":7,"value":"1"},{"x":9,"y":7,"value":"1"},{"x":9,"y":8,"value":"1"},{"x":7,"y":10,"value":"1"},{"x":9,"y":10,"value":"1"},{"x":15,"y":7,"value":"1"},{"x":18,"y":5,"value":"1"},{"x":20,"y":3,"value":"1"},{"x":20,"y":2,"value":"1"},{"x":17,"y":5,"value":"1"},{"x":3,"y":10,"value":"1"},{"x":0,"y":12,"value":"1"},{"x":5,"y":12,"value":"1"},{"x":24,"y":0,"value":"1"},{"x":24,"y":0,"value":"1"},{"x":24,"y":0,"value":"1"},{"x":31,"y":-1,"value":"1"},{"x":28,"y":0,"value":"1"},{"x":27,"y":0,"value":"1"},{"x":27,"y":0,"value":"1"},{"x":27,"y":0,"value":"1"},{"x":59,"y":1,"value":"1"},{"x":41,"y":10,"value":"1"},{"x":41,"y":7,"value":"1"},{"x":40,"y":8,"value":"1"},{"x":38,"y":10,"value":"1"},{"x":42,"y":7,"value":"1"},{"x":45,"y":6,"value":"1"},{"x":48,"y":4,"value":"1"},{"x":50,"y":2,"value":"1"},{"x":50,"y":2,"value":"1"},{"x":52,"y":0,"value":"1"},{"x":52,"y":0,"value":"1"},{"x":52,"y":0,"value":"1"},{"x":48,"y":4,"value":"1"},{"x":41,"y":8,"value":"1"},{"x":39,"y":10,"value":"1"},{"x":36,"y":14,"value":"1"},{"x":33,"y":15,"value":"1"},{"x":30,"y":17,"value":"1"},{"x":32,"y":16,"value":"1"},{"x":47,"y":9,"value":"1"},{"x":56,"y":3,"value":"1"},{"x":58,"y":2,"value":"1"},{"x":47,"y":3,"value":"1"},{"x":24,"y":13,"value":"1"},{"x":18,"y":24,"value":"1"},{"x":18,"y":25,"value":"1"},{"x":19,"y":24,"value":"1"},{"x":23,"y":23,"value":"1"},{"x":24,"y":23,"value":"1"},{"x":16,"y":27,"value":"1"},{"x":16,"y":30,"value":"1"},{"x":25,"y":27,"value":"1"},{"x":16,"y":30,"value":"1"},{"x":17,"y":28,"value":"1"},{"x":20,"y":24,"value":"1"},{"x":13,"y":30,"value":"1"},{"x":15,"y":35,"value":"1"},{"x":12,"y":36,"value":"1"},{"x":7,"y":34,"value":"1"},{"x":0,"y":40,"value":"1"},{"x":0,"y":40,"value":"1"},{"x":0,"y":40,"value":"1"},{"x":5,"y":59,"value":"1"},{"x":0,"y":62,"value":"1"},{"x":0,"y":60,"value":"1"},{"x":0,"y":60,"value":"1"},{"x":7,"y":58,"value":"1"},{"x":18,"y":56,"value":"1"},{"x":28,"y":44,"value":"1"},{"x":29,"y":41,"value":"1"},{"x":27,"y":35,"value":"1"},{"x":26,"y":33,"value":"1"},{"x":26,"y":36,"value":"1"},{"x":27,"y":45,"value":"1"},{"x":27,"y":49,"value":"1"},{"x":27,"y":55,"value":"1"},{"x":27,"y":59,"value":"1"},{"x":27,"y":52,"value":"1"},{"x":25,"y":33,"value":"1"},{"x":24,"y":26,"value":"1"},{"x":25,"y":34,"value":"1"},{"x":27,"y":48,"value":"1"},{"x":29,"y":57,"value":"1"},{"x":31,"y":61,"value":"1"},{"x":31,"y":58,"value":"1"},{"x":30,"y":46,"value":"1"},{"x":24,"y":34,"value":"1"},{"x":27,"y":24,"value":"1"},{"x":33,"y":10,"value":"1"},{"x":34,"y":15,"value":"1"},{"x":35,"y":29,"value":"1"},{"x":35,"y":32,"value":"1"},{"x":37,"y":38,"value":"1"},{"x":38,"y":44,"value":"1"},{"x":37,"y":45,"value":"1"},{"x":32,"y":28,"value":"1"},{"x":33,"y":20,"value":"1"},{"x":50,"y":13,"value":"1"},{"x":45,"y":12,"value":"1"},{"x":46,"y":10,"value":"1"},{"x":55,"y":4,"value":"1"},{"x":60,"y":4,"value":"1"},{"x":63,"y":5,"value":"1"},{"x":64,"y":5,"value":"1"},{"x":67,"y":5,"value":"1"},{"x":59,"y":5,"value":"1"},{"x":44,"y":5,"value":"1"},{"x":37,"y":12,"value":"1"},{"x":36,"y":17,"value":"1"},{"x":40,"y":24,"value":"1"},{"x":38,"y":29,"value":"1"},{"x":38,"y":31,"value":"1"},{"x":36,"y":20,"value":"1"},{"x":36,"y":22,"value":"1"},{"x":38,"y":37,"value":"1"},{"x":37,"y":37,"value":"1"},{"x":36,"y":44,"value":"1"},{"x":38,"y":56,"value":"1"},{"x":39,"y":52,"value":"1"},{"x":41,"y":54,"value":"1"},{"x":45,"y":56,"value":"1"},{"x":41,"y":56,"value":"1"},{"x":40,"y":47,"value":"1"},{"x":38,"y":48,"value":"1"},{"x":38,"y":44,"value":"1"},{"x":37,"y":37,"value":"1"},{"x":38,"y":37,"value":"1"},{"x":42,"y":9,"value":"1"},{"x":44,"y":5,"value":"1"},{"x":31,"y":11,"value":"1"},{"x":23,"y":15,"value":"1"},{"x":21,"y":25,"value":"1"},{"x":27,"y":38,"value":"1"},{"x":28,"y":46,"value":"1"},{"x":28,"y":54,"value":"1"},{"x":28,"y":55,"value":"1"},{"x":27,"y":38,"value":"1"},{"x":27,"y":37,"value":"1"},{"x":28,"y":49,"value":"1"},{"x":27,"y":60,"value":"1"},{"x":27,"y":58,"value":"1"},{"x":26,"y":44,"value":"1"},{"x":27,"y":44,"value":"1"},{"x":24,"y":56,"value":"1"},{"x":14,"y":55,"value":"1"},{"x":6,"y":49,"value":"1"},{"x":8,"y":60,"value":"1"},{"x":16,"y":77,"value":"1"},{"x":18,"y":76,"value":"1"},{"x":9,"y":77,"value":"1"},{"x":7,"y":78,"value":"1"},{"x":9,"y":79,"value":"1"},{"x":16,"y":76,"value":"1"},{"x":20,"y":70,"value":"1"},{"x":20,"y":68,"value":"1"},{"x":11,"y":72,"value":"1"},{"x":6,"y":78,"value":"1"},{"x":3,"y":82,"value":"1"},{"x":5,"y":79,"value":"1"},{"x":14,"y":74,"value":"1"},{"x":20,"y":68,"value":"1"},{"x":25,"y":63,"value":"1"},{"x":29,"y":62,"value":"1"},{"x":30,"y":61,"value":"1"},{"x":20,"y":66,"value":"1"},{"x":14,"y":67,"value":"1"},{"x":12,"y":69,"value":"1"},{"x":11,"y":70,"value":"1"},{"x":8,"y":74,"value":"1"},{"x":2,"y":75,"value":"1"},{"x":8,"y":72,"value":"1"},{"x":16,"y":72,"value":"1"},{"x":21,"y":68,"value":"1"},{"x":23,"y":65,"value":"1"},{"x":27,"y":64,"value":"1"},{"x":28,"y":62,"value":"1"},{"x":28,"y":59,"value":"1"},{"x":23,"y":44,"value":"1"},{"x":22,"y":40,"value":"1"},{"x":20,"y":47,"value":"1"},{"x":19,"y":53,"value":"1"},{"x":19,"y":42,"value":"1"},{"x":19,"y":36,"value":"1"},{"x":18,"y":49,"value":"1"},{"x":23,"y":45,"value":"1"},{"x":23,"y":34,"value":"1"},{"x":18,"y":53,"value":"1"},{"x":17,"y":63,"value":"1"},{"x":22,"y":44,"value":"1"},{"x":14,"y":49,"value":"1"},{"x":16,"y":62,"value":"1"},{"x":26,"y":50,"value":"1"},{"x":19,"y":55,"value":"1"},{"x":19,"y":59,"value":"1"},{"x":18,"y":44,"value":"1"},{"x":15,"y":48,"value":"1"},{"x":16,"y":37,"value":"1"},{"x":10,"y":37,"value":"1"},{"x":12,"y":43,"value":"1"},{"x":14,"y":43,"value":"1"},{"x":12,"y":45,"value":"1"},{"x":9,"y":49,"value":"1"},{"x":22,"y":59,"value":"1"},{"x":26,"y":61,"value":"1"},{"x":25,"y":63,"value":"1"},{"x":21,"y":46,"value":"1"},{"x":18,"y":41,"value":"1"},{"x":22,"y":34,"value":"1"},{"x":24,"y":31,"value":"1"},{"x":22,"y":32,"value":"1"},{"x":19,"y":32,"value":"1"},{"x":18,"y":39,"value":"1"},{"x":22,"y":43,"value":"1"},{"x":20,"y":40,"value":"1"},{"x":19,"y":46,"value":"1"},{"x":20,"y":48,"value":"1"},{"x":16,"y":49,"value":"1"},{"x":8,"y":27,"value":"1"},{"x":2,"y":18,"value":"1"},{"x":2,"y":15,"value":"1"},{"x":0,"y":13,"value":"1"},{"x":0,"y":13,"value":"1"},{"x":0,"y":13,"value":"1"},{"x":0,"y":22,"value":"1"},{"x":0,"y":22,"value":"1"},{"x":6,"y":30,"value":"1"},{"x":16,"y":54,"value":"1"},{"x":22,"y":53,"value":"1"},{"x":12,"y":42,"value":"1"},{"x":13,"y":46,"value":"1"},{"x":12,"y":43,"value":"1"},{"x":12,"y":37,"value":"1"},{"x":14,"y":47,"value":"1"},{"x":15,"y":37,"value":"1"},{"x":17,"y":47,"value":"1"},{"x":20,"y":61,"value":"1"},{"x":18,"y":56,"value":"1"},{"x":16,"y":45,"value":"1"},{"x":16,"y":40,"value":"1"},{"x":16,"y":40,"value":"1"},{"x":15,"y":47,"value":"1"},{"x":17,"y":53,"value":"1"},{"x":18,"y":54,"value":"1"},{"x":21,"y":39,"value":"1"},{"x":22,"y":28,"value":"1"},{"x":22,"y":28,"value":"1"},{"x":22,"y":40,"value":"1"},{"x":22,"y":48,"value":"1"},{"x":22,"y":48,"value":"1"},{"x":23,"y":47,"value":"1"},{"x":23,"y":54,"value":"1"},{"x":24,"y":55,"value":"1"},{"x":25,"y":61,"value":"1"},{"x":22,"y":65,"value":"1"},{"x":19,"y":67,"value":"1"},{"x":17,"y":67,"value":"1"},{"x":17,"y":66,"value":"1"},{"x":14,"y":56,"value":"1"},{"x":15,"y":45,"value":"1"},{"x":14,"y":41,"value":"1"},{"x":17,"y":52,"value":"1"},{"x":23,"y":58,"value":"1"},{"x":20,"y":59,"value":"1"},{"x":17,"y":60,"value":"1"},{"x":19,"y":34,"value":"1"},{"x":47,"y":10,"value":"1"},{"x":48,"y":16,"value":"1"},{"x":45,"y":36,"value":"1"},{"x":42,"y":44,"value":"1"},{"x":43,"y":49,"value":"1"},{"x":45,"y":51,"value":"1"},{"x":51,"y":45,"value":"1"},{"x":55,"y":43,"value":"1"},{"x":59,"y":41,"value":"1"},{"x":63,"y":39,"value":"1"},{"x":66,"y":35,"value":"1"},{"x":66,"y":32,"value":"1"},{"x":61,"y":35,"value":"1"},{"x":54,"y":41,"value":"1"},{"x":48,"y":45,"value":"1"},{"x":44,"y":45,"value":"1"},{"x":43,"y":45,"value":"1"},{"x":45,"y":44,"value":"1"},{"x":52,"y":36,"value":"1"},{"x":56,"y":32,"value":"1"},{"x":60,"y":31,"value":"1"},{"x":62,"y":30,"value":"1"},{"x":64,"y":28,"value":"1"},{"x":67,"y":21,"value":"1"},{"x":68,"y":11,"value":"1"},{"x":68,"y":7,"value":"1"},{"x":67,"y":4,"value":"1"},{"x":67,"y":5,"value":"1"},{"x":63,"y":17,"value":"1"},{"x":62,"y":26,"value":"1"},{"x":59,"y":31,"value":"1"},{"x":55,"y":38,"value":"1"},{"x":49,"y":42,"value":"1"},{"x":44,"y":45,"value":"1"},{"x":44,"y":45,"value":"1"},{"x":49,"y":40,"value":"1"},{"x":52,"y":35,"value":"1"},{"x":46,"y":26,"value":"1"},{"x":44,"y":26,"value":"1"},{"x":45,"y":25,"value":"1"},{"x":42,"y":32,"value":"1"},{"x":44,"y":33,"value":"1"},{"x":47,"y":23,"value":"1"},{"x":47,"y":29,"value":"1"},{"x":51,"y":33,"value":"1"},{"x":54,"y":29,"value":"1"},{"x":48,"y":32,"value":"1"},{"x":44,"y":40,"value":"1"},{"x":50,"y":39,"value":"1"},{"x":49,"y":43,"value":"1"},{"x":47,"y":44,"value":"1"},{"x":47,"y":45,"value":"1"},{"x":46,"y":48,"value":"1"},{"x":48,"y":48,"value":"1"},{"x":59,"y":34,"value":"1"},{"x":55,"y":23,"value":"1"},{"x":50,"y":20,"value":"1"},{"x":48,"y":22,"value":"1"},{"x":54,"y":18,"value":"1"},{"x":52,"y":23,"value":"1"},{"x":54,"y":21,"value":"1"},{"x":52,"y":18,"value":"1"},{"x":49,"y":22,"value":"1"},{"x":68,"y":18,"value":"1"},{"x":66,"y":16,"value":"1"},{"x":59,"y":20,"value":"1"},{"x":58,"y":24,"value":"1"},{"x":61,"y":19,"value":"1"},{"x":52,"y":26,"value":"1"},{"x":59,"y":15,"value":"1"},{"x":59,"y":15,"value":"1"},{"x":60,"y":22,"value":"1"},{"x":64,"y":22,"value":"1"},{"x":64,"y":22,"value":"1"},{"x":63,"y":15,"value":"1"},{"x":62,"y":22,"value":"1"},{"x":59,"y":34,"value":"1"},{"x":61,"y":12,"value":"1"},{"x":46,"y":14,"value":"1"},{"x":47,"y":19,"value":"1"},{"x":57,"y":17,"value":"1"},{"x":44,"y":20,"value":"1"},{"x":46,"y":16,"value":"1"},{"x":56,"y":13,"value":"1"},{"x":61,"y":13,"value":"1"},{"x":74,"y":11,"value":"1"},{"x":72,"y":4,"value":"1"},{"x":59,"y":6,"value":"1"},{"x":60,"y":1,"value":"1"},{"x":62,"y":7,"value":"1"},{"x":78,"y":17,"value":"1"},{"x":75,"y":24,"value":"1"},{"x":78,"y":24,"value":"1"},{"x":88,"y":4,"value":"1"},{"x":89,"y":17,"value":"1"},{"x":91,"y":38,"value":"1"},{"x":89,"y":38,"value":"1"},{"x":87,"y":11,"value":"1"},{"x":86,"y":17,"value":"1"},{"x":90,"y":47,"value":"1"},{"x":90,"y":71,"value":"1"},{"x":89,"y":88,"value":"1"},{"x":87,"y":66,"value":"1"},{"x":85,"y":17,"value":"1"},{"x":84,"y":1,"value":"1"},{"x":84,"y":1,"value":"1"},{"x":83,"y":0,"value":"1"},{"x":85,"y":18,"value":"1"},{"x":86,"y":31,"value":"1"},{"x":86,"y":37,"value":"1"},{"x":87,"y":49,"value":"1"},{"x":89,"y":56,"value":"1"},{"x":90,"y":68,"value":"1"},{"x":91,"y":80,"value":"1"},{"x":92,"y":92,"value":"1"},{"x":93,"y":99,"value":"1"},{"x":93,"y":89,"value":"1"},{"x":92,"y":63,"value":"1"},{"x":89,"y":41,"value":"1"},{"x":89,"y":26,"value":"1"},{"x":88,"y":13,"value":"1"},{"x":87,"y":5,"value":"1"},{"x":88,"y":10,"value":"1"},{"x":90,"y":26,"value":"1"},{"x":92,"y":42,"value":"1"},{"x":93,"y":57,"value":"1"},{"x":93,"y":72,"value":"1"},{"x":92,"y":77,"value":"1"},{"x":90,"y":78,"value":"1"},{"x":87,"y":62,"value":"1"},{"x":86,"y":41,"value":"1"},{"x":85,"y":29,"value":"1"},{"x":86,"y":42,"value":"1"},{"x":90,"y":72,"value":"1"},{"x":90,"y":74,"value":"1"},{"x":88,"y":64,"value":"1"},{"x":87,"y":43,"value":"1"},{"x":87,"y":48,"value":"1"},{"x":89,"y":64,"value":"1"},{"x":91,"y":56,"value":"1"},{"x":97,"y":15,"value":"1"},{"x":96,"y":8,"value":"1"},{"x":96,"y":44,"value":"1"},{"x":95,"y":83,"value":"1"},{"x":94,"y":81,"value":"1"},{"x":93,"y":60,"value":"1"},{"x":94,"y":34,"value":"1"},{"x":93,"y":25,"value":"1"},{"x":92,"y":51,"value":"1"},{"x":91,"y":54,"value":"1"},{"x":91,"y":46,"value":"1"},{"x":91,"y":49,"value":"1"},{"x":91,"y":32,"value":"1"},{"x":89,"y":0,"value":"1"},{"x":89,"y":10,"value":"1"},{"x":70,"y":61,"value":"1"},{"x":58,"y":97,"value":"1"},{"x":56,"y":98,"value":"1"},{"x":59,"y":81,"value":"1"},{"x":62,"y":70,"value":"1"},{"x":59,"y":74,"value":"1"},{"x":59,"y":70,"value":"1"},{"x":68,"y":67,"value":"1"},{"x":72,"y":71,"value":"1"},{"x":72,"y":67,"value":"1"},{"x":68,"y":87,"value":"1"},{"x":66,"y":92,"value":"1"},{"x":68,"y":83,"value":"1"},{"x":72,"y":97,"value":"1"},{"x":80,"y":94,"value":"1"},{"x":81,"y":93,"value":"1"},{"x":68,"y":89,"value":"1"},{"x":69,"y":85,"value":"1"},{"x":75,"y":71,"value":"1"},{"x":78,"y":60,"value":"1"},{"x":76,"y":75,"value":"1"},{"x":75,"y":91,"value":"1"},{"x":76,"y":83,"value":"1"},{"x":78,"y":63,"value":"1"},{"x":79,"y":56,"value":"1"},{"x":78,"y":67,"value":"1"},{"x":78,"y":77,"value":"1"},{"x":78,"y":87,"value":"1"},{"x":78,"y":87,"value":"1"},{"x":80,"y":59,"value":"1"},{"x":76,"y":41,"value":"1"},{"x":70,"y":51,"value":"1"},{"x":64,"y":82,"value":"1"},{"x":57,"y":84,"value":"1"},{"x":57,"y":68,"value":"1"},{"x":58,"y":66,"value":"1"},{"x":54,"y":71,"value":"1"},{"x":48,"y":78,"value":"1"},{"x":45,"y":73,"value":"1"},{"x":47,"y":71,"value":"1"},{"x":58,"y":59,"value":"1"},{"x":64,"y":55,"value":"1"},{"x":64,"y":55,"value":"1"},{"x":50,"y":67,"value":"1"},{"x":44,"y":76,"value":"1"},{"x":48,"y":70,"value":"1"},{"x":56,"y":64,"value":"1"},{"x":55,"y":66,"value":"1"},{"x":50,"y":71,"value":"1"},{"x":64,"y":62,"value":"1"},{"x":58,"y":66,"value":"1"},{"x":49,"y":89,"value":"1"},{"x":47,"y":99,"value":"1"},{"x":54,"y":81,"value":"1"},{"x":54,"y":80,"value":"1"},{"x":54,"y":82,"value":"1"},{"x":60,"y":72,"value":"1"},{"x":57,"y":75,"value":"1"},{"x":52,"y":93,"value":"1"},{"x":49,"y":86,"value":"1"},{"x":48,"y":83,"value":"1"},{"x":47,"y":85,"value":"1"},{"x":48,"y":83,"value":"1"},{"x":46,"y":93,"value":"1"},{"x":45,"y":88,"value":"1"},{"x":41,"y":81,"value":"1"},{"x":42,"y":80,"value":"1"},{"x":46,"y":68,"value":"1"},{"x":53,"y":69,"value":"1"},{"x":53,"y":69,"value":"1"},{"x":48,"y":70,"value":"1"},{"x":53,"y":66,"value":"1"},{"x":53,"y":67,"value":"1"},{"x":59,"y":59,"value":"1"},{"x":65,"y":63,"value":"1"},{"x":54,"y":96,"value":"1"},{"x":54,"y":96,"value":"1"},{"x":54,"y":96,"value":"1"},{"x":54,"y":96,"value":"1"},{"x":54,"y":96,"value":"1"},{"x":27,"y":97,"value":"1"},{"x":34,"y":94,"value":"1"},{"x":29,"y":98,"value":"1"},{"x":32,"y":91,"value":"1"},{"x":33,"y":89,"value":"1"},{"x":29,"y":88,"value":"1"},{"x":29,"y":83,"value":"1"},{"x":23,"y":94,"value":"1"},{"x":11,"y":94,"value":"1"},{"x":11,"y":94,"value":"1"},{"x":20,"y":89,"value":"1"},{"x":22,"y":88,"value":"1"},{"x":20,"y":89,"value":"1"},{"x":12,"y":95,"value":"1"},{"x":11,"y":95,"value":"1"},{"x":20,"y":93,"value":"1"},{"x":25,"y":93,"value":"1"},{"x":26,"y":93,"value":"1"},{"x":30,"y":93,"value":"1"},{"x":35,"y":97,"value":"1"},{"x":37,"y":96,"value":"1"},{"x":34,"y":96,"value":"1"},{"x":34,"y":81,"value":"1"},{"x":31,"y":82,"value":"1"},{"x":27,"y":84,"value":"1"},{"x":18,"y":91,"value":"1"},{"x":12,"y":95,"value":"1"},{"x":19,"y":96,"value":"1"},{"x":19,"y":96,"value":"1"},{"x":20,"y":94,"value":"1"},{"x":18,"y":95,"value":"1"},{"x":13,"y":96,"value":"1"},{"x":13,"y":96,"value":"1"},{"x":13,"y":96,"value":"1"},{"x":13,"y":96,"value":"1"},{"x":13,"y":96,"value":"1"},{"x":13,"y":96,"value":"1"},{"x":13,"y":96,"value":"1"},{"x":13,"y":96,"value":"1"},{"x":13,"y":96,"value":"1"},{"x":13,"y":96,"value":"1"}]
export const heatSafety = [{"x":55,"y":92,"value":"5"},{"x":57,"y":75,"value":"5"},{"x":57,"y":75,"value":"5"},{"x":57,"y":75,"value":"5"},{"x":57,"y":75,"value":"5"},{"x":57,"y":75,"value":"5"},{"x":57,"y":75,"value":"5"},{"x":57,"y":75,"value":"5"},{"x":57,"y":75,"value":"5"},{"x":57,"y":75,"value":"5"},{"x":57,"y":76,"value":"5"},{"x":56,"y":87,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":56,"y":92,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":18,"y":40,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"},{"x":94,"y":43,"value":"5"}]
export const heatFlood = [{"x":0,"y":2,"value":1},{"x":4,"y":3,"value":1},{"x":8,"y":3,"value":1},{"x":11,"y":3,"value":1},{"x":15,"y":2,"value":1},{"x":19,"y":2,"value":1},{"x":23,"y":2,"value":1},{"x":27,"y":2,"value":1},{"x":31,"y":2,"value":1},{"x":36,"y":2,"value":1},{"x":40,"y":2,"value":1},{"x":44,"y":2,"value":1},{"x":49,"y":3,"value":1},{"x":55,"y":3,"value":1},{"x":61,"y":3,"value":1},{"x":66,"y":3,"value":1},{"x":71,"y":2,"value":1},{"x":76,"y":2,"value":1},{"x":81,"y":2,"value":1},{"x":85,"y":2,"value":1},{"x":89,"y":1,"value":1},{"x":94,"y":2,"value":1},{"x":97,"y":3,"value":1},{"x":99,"y":5,"value":1},{"x":98,"y":14,"value":1},{"x":91,"y":16,"value":1},{"x":85,"y":15,"value":1},{"x":82,"y":15,"value":1},{"x":78,"y":15,"value":1},{"x":73,"y":15,"value":1},{"x":68,"y":15,"value":1},{"x":61,"y":15,"value":1},{"x":56,"y":15,"value":1},{"x":51,"y":14,"value":1},{"x":43,"y":14,"value":1},{"x":36,"y":15,"value":1},{"x":30,"y":15,"value":1},{"x":21,"y":15,"value":1},{"x":15,"y":16,"value":1},{"x":9,"y":16,"value":1},{"x":3,"y":18,"value":1},{"x":2,"y":24,"value":1},{"x":4,"y":28,"value":1},{"x":13,"y":28,"value":1},{"x":17,"y":27,"value":1},{"x":21,"y":27,"value":1},{"x":26,"y":27,"value":1},{"x":31,"y":27,"value":1},{"x":35,"y":26,"value":1},{"x":40,"y":26,"value":1},{"x":43,"y":26,"value":1},{"x":48,"y":26,"value":1},{"x":54,"y":26,"value":1},{"x":59,"y":26,"value":1},{"x":63,"y":26,"value":1},{"x":67,"y":26,"value":1},{"x":73,"y":27,"value":1},{"x":77,"y":27,"value":1},{"x":82,"y":28,"value":1},{"x":88,"y":29,"value":1},{"x":92,"y":31,"value":1},{"x":95,"y":32,"value":1},{"x":98,"y":35,"value":1},{"x":98,"y":40,"value":1},{"x":95,"y":43,"value":1},{"x":90,"y":44,"value":1},{"x":88,"y":44,"value":1},{"x":84,"y":43,"value":1},{"x":81,"y":43,"value":1},{"x":78,"y":42,"value":1},{"x":73,"y":42,"value":1},{"x":67,"y":41,"value":1},{"x":62,"y":41,"value":1},{"x":56,"y":40,"value":1},{"x":51,"y":39,"value":1},{"x":46,"y":39,"value":1},{"x":41,"y":40,"value":1},{"x":36,"y":41,"value":1},{"x":30,"y":41,"value":1},{"x":23,"y":40,"value":1},{"x":16,"y":41,"value":1},{"x":10,"y":40,"value":1},{"x":5,"y":41,"value":1},{"x":0,"y":43,"value":1},{"x":2,"y":47,"value":1},{"x":4,"y":51,"value":1},{"x":9,"y":52,"value":1},{"x":15,"y":52,"value":1},{"x":21,"y":52,"value":1},{"x":27,"y":52,"value":1},{"x":35,"y":54,"value":1},{"x":43,"y":55,"value":1},{"x":51,"y":56,"value":1},{"x":59,"y":57,"value":1},{"x":68,"y":57,"value":1},{"x":76,"y":57,"value":1},{"x":85,"y":56,"value":1},{"x":89,"y":56,"value":1},{"x":94,"y":57,"value":1},{"x":96,"y":62,"value":1},{"x":86,"y":64,"value":1},{"x":79,"y":64,"value":1},{"x":71,"y":65,"value":1},{"x":62,"y":65,"value":1},{"x":54,"y":65,"value":1},{"x":45,"y":65,"value":1},{"x":39,"y":65,"value":1},{"x":32,"y":66,"value":1},{"x":25,"y":67,"value":1},{"x":21,"y":67,"value":1},{"x":15,"y":66,"value":1},{"x":10,"y":65,"value":1},{"x":7,"y":65,"value":1},{"x":2,"y":66,"value":1},{"x":0,"y":70,"value":1},{"x":7,"y":76,"value":1},{"x":10,"y":76,"value":1},{"x":15,"y":76,"value":1},{"x":20,"y":75,"value":1},{"x":26,"y":75,"value":1},{"x":30,"y":75,"value":1},{"x":36,"y":76,"value":1},{"x":42,"y":77,"value":1},{"x":47,"y":77,"value":1},{"x":54,"y":77,"value":1},{"x":59,"y":77,"value":1},{"x":64,"y":77,"value":1},{"x":71,"y":77,"value":1},{"x":78,"y":77,"value":1},{"x":82,"y":77,"value":1},{"x":86,"y":76,"value":1},{"x":93,"y":77,"value":1},{"x":97,"y":77,"value":1},{"x":98,"y":78,"value":1},{"x":97,"y":79,"value":1},{"x":91,"y":83,"value":1},{"x":86,"y":84,"value":1},{"x":81,"y":85,"value":1},{"x":77,"y":86,"value":1},{"x":68,"y":87,"value":1},{"x":60,"y":90,"value":1},{"x":52,"y":91,"value":1},{"x":43,"y":91,"value":1},{"x":38,"y":90,"value":1},{"x":32,"y":90,"value":1},{"x":24,"y":90,"value":1},{"x":18,"y":90,"value":1},{"x":11,"y":91,"value":1},{"x":8,"y":92,"value":1},{"x":2,"y":93,"value":1},{"x":2,"y":98,"value":1},{"x":11,"y":99,"value":1},{"x":21,"y":97,"value":1},{"x":31,"y":96,"value":1},{"x":42,"y":96,"value":1},{"x":52,"y":96,"value":1},{"x":60,"y":97,"value":1},{"x":69,"y":97,"value":1},{"x":77,"y":97,"value":1},{"x":84,"y":97,"value":1},{"x":91,"y":97,"value":1},{"x":96,"y":96,"value":1},{"x":98,"y":53,"value":1},{"x":99,"y":52,"value":1},{"x":94,"y":25,"value":1},{"x":84,"y":25,"value":1},{"x":73,"y":24,"value":1},{"x":51,"y":18,"value":1},{"x":24,"y":11,"value":1},{"x":11,"y":12,"value":1},{"x":5,"y":12,"value":1},{"x":0,"y":29,"value":1},{"x":6,"y":30,"value":1},{"x":14,"y":33,"value":1},{"x":24,"y":33,"value":1},{"x":32,"y":34,"value":1},{"x":44,"y":35,"value":1},{"x":54,"y":35,"value":1},{"x":62,"y":35,"value":1},{"x":72,"y":35,"value":1},{"x":86,"y":35,"value":1},{"x":93,"y":35,"value":1},{"x":96,"y":38,"value":1},{"x":91,"y":46,"value":1},{"x":81,"y":48,"value":1},{"x":76,"y":50,"value":1},{"x":71,"y":50,"value":1},{"x":66,"y":49,"value":1},{"x":61,"y":48,"value":1},{"x":57,"y":47,"value":1},{"x":52,"y":47,"value":1},{"x":48,"y":46,"value":1},{"x":42,"y":47,"value":1},{"x":35,"y":47,"value":1},{"x":27,"y":47,"value":1},{"x":20,"y":47,"value":1},{"x":16,"y":46,"value":1},{"x":10,"y":46,"value":1},{"x":2,"y":49,"value":1},{"x":5,"y":60,"value":1},{"x":11,"y":60,"value":1},{"x":17,"y":59,"value":1},{"x":23,"y":59,"value":1},{"x":26,"y":59,"value":1},{"x":30,"y":58,"value":1},{"x":36,"y":58,"value":1},{"x":44,"y":58,"value":1},{"x":53,"y":58,"value":1},{"x":60,"y":58,"value":1},{"x":66,"y":58,"value":1},{"x":75,"y":60,"value":1},{"x":86,"y":61,"value":1},{"x":96,"y":64,"value":1},{"x":98,"y":70,"value":1},{"x":88,"y":70,"value":1},{"x":83,"y":70,"value":1},{"x":78,"y":69,"value":1},{"x":71,"y":68,"value":1},{"x":64,"y":68,"value":1},{"x":56,"y":68,"value":1},{"x":47,"y":68,"value":1},{"x":42,"y":67,"value":1},{"x":35,"y":67,"value":1},{"x":25,"y":67,"value":1},{"x":7,"y":70,"value":1},{"x":4,"y":86,"value":1},{"x":8,"y":85,"value":1},{"x":12,"y":84,"value":1},{"x":16,"y":83,"value":1},{"x":22,"y":83,"value":1},{"x":30,"y":83,"value":1},{"x":36,"y":83,"value":1},{"x":42,"y":83,"value":1},{"x":48,"y":82,"value":1},{"x":53,"y":81,"value":1},{"x":58,"y":81,"value":1},{"x":64,"y":82,"value":1},{"x":79,"y":84,"value":1},{"x":95,"y":88,"value":1},{"x":91,"y":93,"value":1},{"x":83,"y":94,"value":1},{"x":74,"y":95,"value":1},{"x":67,"y":96,"value":1},{"x":60,"y":96,"value":1},{"x":52,"y":96,"value":1},{"x":44,"y":95,"value":1},{"x":37,"y":95,"value":1},{"x":30,"y":94,"value":1},{"x":24,"y":93,"value":1},{"x":19,"y":93,"value":1},{"x":14,"y":93,"value":1},{"x":6,"y":94,"value":1},{"x":0,"y":13,"value":1},{"x":0,"y":11,"value":1},{"x":9,"y":10,"value":1},{"x":15,"y":13,"value":1},{"x":24,"y":16,"value":1},{"x":33,"y":16,"value":1},{"x":44,"y":14,"value":1},{"x":47,"y":14,"value":1},{"x":49,"y":10,"value":1},{"x":46,"y":10,"value":1},{"x":44,"y":23,"value":1},{"x":47,"y":46,"value":1},{"x":49,"y":56,"value":1},{"x":51,"y":65,"value":1},{"x":51,"y":72,"value":1},{"x":49,"y":81,"value":1},{"x":49,"y":90,"value":1},{"x":50,"y":96,"value":1},{"x":54,"y":97,"value":1},{"x":56,"y":95,"value":1},{"x":56,"y":87,"value":1},{"x":62,"y":84,"value":1},{"x":72,"y":84,"value":1},{"x":76,"y":84,"value":1},{"x":77,"y":78,"value":1},{"x":77,"y":70,"value":1},{"x":78,"y":59,"value":1},{"x":82,"y":51,"value":1},{"x":87,"y":32,"value":1},{"x":87,"y":21,"value":1},{"x":89,"y":14,"value":1},{"x":95,"y":3,"value":1},{"x":95,"y":9,"value":1},{"x":96,"y":19,"value":1},{"x":99,"y":90,"value":1},{"x":98,"y":90,"value":1},{"x":99,"y":95,"value":1}]
export const heatFire = [{"x":0,"y":1,"value":1},{"x":1,"y":4,"value":1},{"x":5,"y":2,"value":1},{"x":8,"y":3,"value":1},{"x":18,"y":3,"value":1},{"x":28,"y":2,"value":1},{"x":36,"y":3,"value":1},{"x":45,"y":3,"value":1},{"x":53,"y":4,"value":1},{"x":61,"y":4,"value":1},{"x":71,"y":4,"value":1},{"x":77,"y":4,"value":1},{"x":82,"y":4,"value":1},{"x":88,"y":4,"value":1},{"x":94,"y":4,"value":1},{"x":100,"y":5,"value":1},{"x":95,"y":15,"value":1},{"x":91,"y":15,"value":1},{"x":87,"y":14,"value":1},{"x":83,"y":14,"value":1},{"x":76,"y":16,"value":1},{"x":70,"y":15,"value":1},{"x":64,"y":15,"value":1},{"x":58,"y":15,"value":1},{"x":53,"y":14,"value":1},{"x":48,"y":14,"value":1},{"x":43,"y":15,"value":1},{"x":37,"y":15,"value":1},{"x":31,"y":15,"value":1},{"x":27,"y":15,"value":1},{"x":20,"y":15,"value":1},{"x":15,"y":16,"value":1},{"x":11,"y":16,"value":1},{"x":6,"y":17,"value":1},{"x":2,"y":18,"value":1},{"x":1,"y":20,"value":1},{"x":4,"y":27,"value":1},{"x":10,"y":26,"value":1},{"x":14,"y":25,"value":1},{"x":20,"y":24,"value":1},{"x":24,"y":25,"value":1},{"x":30,"y":25,"value":1},{"x":37,"y":26,"value":1},{"x":43,"y":26,"value":1},{"x":49,"y":27,"value":1},{"x":55,"y":27,"value":1},{"x":62,"y":27,"value":1},{"x":71,"y":27,"value":1},{"x":75,"y":26,"value":1},{"x":80,"y":26,"value":1},{"x":89,"y":27,"value":1},{"x":97,"y":28,"value":1},{"x":99,"y":29,"value":1},{"x":96,"y":36,"value":1},{"x":90,"y":39,"value":1},{"x":82,"y":39,"value":1},{"x":75,"y":38,"value":1},{"x":69,"y":37,"value":1},{"x":63,"y":37,"value":1},{"x":56,"y":36,"value":1},{"x":49,"y":35,"value":1},{"x":45,"y":35,"value":1},{"x":39,"y":35,"value":1},{"x":35,"y":36,"value":1},{"x":29,"y":36,"value":1},{"x":22,"y":37,"value":1},{"x":18,"y":37,"value":1},{"x":12,"y":37,"value":1},{"x":6,"y":38,"value":1},{"x":2,"y":40,"value":1},{"x":0,"y":43,"value":1},{"x":0,"y":45,"value":1},{"x":5,"y":46,"value":1},{"x":9,"y":46,"value":1},{"x":14,"y":46,"value":1},{"x":21,"y":46,"value":1},{"x":30,"y":46,"value":1},{"x":38,"y":46,"value":1},{"x":44,"y":46,"value":1},{"x":50,"y":46,"value":1},{"x":56,"y":46,"value":1},{"x":65,"y":47,"value":1},{"x":72,"y":47,"value":1},{"x":80,"y":48,"value":1},{"x":86,"y":48,"value":1},{"x":92,"y":49,"value":1},{"x":97,"y":50,"value":1},{"x":99,"y":51,"value":1},{"x":99,"y":57,"value":1},{"x":90,"y":59,"value":1},{"x":81,"y":58,"value":1},{"x":75,"y":58,"value":1},{"x":66,"y":57,"value":1},{"x":60,"y":57,"value":1},{"x":53,"y":56,"value":1},{"x":45,"y":55,"value":1},{"x":38,"y":55,"value":1},{"x":32,"y":55,"value":1},{"x":22,"y":54,"value":1},{"x":15,"y":56,"value":1},{"x":7,"y":59,"value":1},{"x":0,"y":61,"value":1},{"x":1,"y":68,"value":1},{"x":4,"y":70,"value":1},{"x":9,"y":70,"value":1},{"x":15,"y":70,"value":1},{"x":26,"y":68,"value":1},{"x":33,"y":68,"value":1},{"x":40,"y":68,"value":1},{"x":46,"y":69,"value":1},{"x":51,"y":69,"value":1},{"x":57,"y":69,"value":1},{"x":65,"y":69,"value":1},{"x":72,"y":69,"value":1},{"x":79,"y":68,"value":1},{"x":86,"y":68,"value":1},{"x":93,"y":69,"value":1},{"x":97,"y":70,"value":1},{"x":100,"y":72,"value":1},{"x":98,"y":75,"value":1},{"x":91,"y":78,"value":1},{"x":84,"y":76,"value":1},{"x":78,"y":75,"value":1},{"x":72,"y":75,"value":1},{"x":64,"y":75,"value":1},{"x":56,"y":75,"value":1},{"x":50,"y":76,"value":1},{"x":42,"y":77,"value":1},{"x":34,"y":77,"value":1},{"x":28,"y":78,"value":1},{"x":23,"y":78,"value":1},{"x":18,"y":78,"value":1},{"x":11,"y":81,"value":1},{"x":7,"y":83,"value":1},{"x":4,"y":86,"value":1},{"x":4,"y":90,"value":1},{"x":5,"y":91,"value":1},{"x":11,"y":92,"value":1},{"x":16,"y":90,"value":1},{"x":21,"y":89,"value":1},{"x":27,"y":88,"value":1},{"x":32,"y":89,"value":1},{"x":36,"y":89,"value":1},{"x":40,"y":89,"value":1},{"x":47,"y":90,"value":1},{"x":55,"y":90,"value":1},{"x":64,"y":90,"value":1},{"x":71,"y":90,"value":1},{"x":78,"y":90,"value":1},{"x":85,"y":90,"value":1},{"x":92,"y":89,"value":1},{"x":98,"y":90,"value":1},{"x":99,"y":97,"value":1},{"x":85,"y":99,"value":1},{"x":75,"y":97,"value":1},{"x":64,"y":97,"value":1},{"x":52,"y":97,"value":1},{"x":41,"y":96,"value":1},{"x":34,"y":96,"value":1},{"x":26,"y":96,"value":1},{"x":20,"y":99,"value":1},{"x":1,"y":0,"value":1},{"x":5,"y":9,"value":1},{"x":2,"y":18,"value":1},{"x":2,"y":17,"value":1},{"x":5,"y":6,"value":1},{"x":12,"y":0,"value":1},{"x":13,"y":0,"value":1},{"x":9,"y":4,"value":1},{"x":2,"y":9,"value":1},{"x":1,"y":10,"value":1},{"x":7,"y":5,"value":1},{"x":13,"y":0,"value":1},{"x":71,"y":97,"value":1},{"x":74,"y":64,"value":1},{"x":75,"y":58,"value":1},{"x":71,"y":86,"value":1},{"x":72,"y":94,"value":1},{"x":73,"y":71,"value":1},{"x":72,"y":84,"value":1},{"x":71,"y":90,"value":1},{"x":71,"y":68,"value":1},{"x":70,"y":89,"value":1},{"x":81,"y":70,"value":1},{"x":76,"y":46,"value":1},{"x":70,"y":63,"value":1},{"x":71,"y":78,"value":1},{"x":71,"y":84,"value":1},{"x":72,"y":84,"value":1},{"x":72,"y":73,"value":1},{"x":72,"y":67,"value":1},{"x":75,"y":47,"value":1},{"x":75,"y":49,"value":1},{"x":72,"y":75,"value":1},{"x":68,"y":99,"value":1},{"x":68,"y":95,"value":1},{"x":69,"y":99,"value":1},{"x":69,"y":98,"value":1},{"x":68,"y":98,"value":1},{"x":76,"y":92,"value":1},{"x":70,"y":50,"value":1},{"x":65,"y":30,"value":1},{"x":59,"y":26,"value":1},{"x":55,"y":28,"value":1},{"x":53,"y":32,"value":1},{"x":52,"y":34,"value":1},{"x":48,"y":34,"value":1},{"x":43,"y":36,"value":1},{"x":39,"y":37,"value":1},{"x":39,"y":35,"value":1},{"x":46,"y":32,"value":1},{"x":51,"y":29,"value":1},{"x":53,"y":28,"value":1},{"x":55,"y":26,"value":1},{"x":58,"y":23,"value":1},{"x":62,"y":16,"value":1},{"x":64,"y":19,"value":1},{"x":69,"y":19,"value":1},{"x":68,"y":19,"value":1},{"x":67,"y":25,"value":1},{"x":72,"y":26,"value":1},{"x":72,"y":22,"value":1},{"x":73,"y":30,"value":1},{"x":73,"y":43,"value":1},{"x":74,"y":51,"value":1},{"x":75,"y":66,"value":1},{"x":75,"y":77,"value":1},{"x":73,"y":84,"value":1},{"x":73,"y":79,"value":1},{"x":74,"y":61,"value":1},{"x":74,"y":49,"value":1},{"x":75,"y":39,"value":1},{"x":76,"y":31,"value":1},{"x":78,"y":23,"value":1},{"x":74,"y":22,"value":1},{"x":73,"y":21,"value":1},{"x":74,"y":18,"value":1},{"x":74,"y":19,"value":1},{"x":74,"y":21,"value":1},{"x":76,"y":12,"value":1},{"x":49,"y":4,"value":1},{"x":31,"y":11,"value":1},{"x":35,"y":8,"value":1},{"x":32,"y":6,"value":1},{"x":33,"y":6,"value":1},{"x":49,"y":18,"value":1},{"x":50,"y":26,"value":1},{"x":42,"y":26,"value":1},{"x":40,"y":35,"value":1},{"x":39,"y":43,"value":1},{"x":40,"y":49,"value":1},{"x":39,"y":53,"value":1},{"x":40,"y":46,"value":1},{"x":39,"y":33,"value":1},{"x":37,"y":21,"value":1},{"x":34,"y":7,"value":1},{"x":58,"y":0,"value":1},{"x":57,"y":2,"value":1},{"x":65,"y":0,"value":1},{"x":66,"y":0,"value":1},{"x":65,"y":8,"value":1},{"x":66,"y":8,"value":1},{"x":67,"y":1,"value":1},{"x":60,"y":5,"value":1},{"x":45,"y":16,"value":1},{"x":44,"y":29,"value":1},{"x":42,"y":37,"value":1},{"x":43,"y":47,"value":1},{"x":50,"y":52,"value":1},{"x":63,"y":37,"value":1},{"x":65,"y":30,"value":1},{"x":67,"y":29,"value":1},{"x":59,"y":33,"value":1},{"x":50,"y":41,"value":1},{"x":44,"y":45,"value":1},{"x":41,"y":48,"value":1},{"x":42,"y":50,"value":1},{"x":52,"y":48,"value":1},{"x":54,"y":44,"value":1},{"x":55,"y":44,"value":1},{"x":62,"y":39,"value":1},{"x":63,"y":36,"value":1},{"x":55,"y":42,"value":1},{"x":45,"y":51,"value":1},{"x":41,"y":54,"value":1},{"x":39,"y":58,"value":1},{"x":36,"y":61,"value":1},{"x":39,"y":59,"value":1},{"x":53,"y":47,"value":1},{"x":65,"y":34,"value":1},{"x":77,"y":23,"value":1},{"x":76,"y":15,"value":1},{"x":48,"y":7,"value":1},{"x":24,"y":6,"value":1},{"x":10,"y":8,"value":1},{"x":2,"y":7,"value":1},{"x":4,"y":5,"value":1},{"x":8,"y":5,"value":1},{"x":21,"y":11,"value":1},{"x":22,"y":17,"value":1},{"x":26,"y":14,"value":1},{"x":17,"y":11,"value":1},{"x":18,"y":28,"value":1},{"x":7,"y":82,"value":1},{"x":4,"y":90,"value":1},{"x":6,"y":67,"value":1},{"x":17,"y":49,"value":1},{"x":20,"y":48,"value":1},{"x":13,"y":60,"value":1},{"x":23,"y":63,"value":1},{"x":14,"y":65,"value":1},{"x":11,"y":68,"value":1},{"x":22,"y":64,"value":1},{"x":12,"y":71,"value":1},{"x":8,"y":73,"value":1},{"x":13,"y":71,"value":1},{"x":21,"y":62,"value":1},{"x":12,"y":63,"value":1},{"x":16,"y":60,"value":1},{"x":32,"y":43,"value":1},{"x":36,"y":7,"value":1},{"x":35,"y":7,"value":1},{"x":39,"y":9,"value":1},{"x":41,"y":8,"value":1},{"x":40,"y":8,"value":1},{"x":27,"y":12,"value":1},{"x":7,"y":16,"value":1},{"x":7,"y":29,"value":1},{"x":11,"y":56,"value":1},{"x":21,"y":45,"value":1},{"x":14,"y":35,"value":1},{"x":17,"y":33,"value":1},{"x":11,"y":44,"value":1},{"x":14,"y":45,"value":1},{"x":18,"y":41,"value":1},{"x":16,"y":51,"value":1},{"x":23,"y":74,"value":1},{"x":32,"y":96,"value":1},{"x":28,"y":90,"value":1},{"x":27,"y":92,"value":1},{"x":28,"y":86,"value":1},{"x":32,"y":86,"value":1},{"x":37,"y":79,"value":1},{"x":45,"y":84,"value":1},{"x":50,"y":78,"value":1},{"x":55,"y":69,"value":1},{"x":49,"y":82,"value":1},{"x":42,"y":93,"value":1},{"x":47,"y":84,"value":1},{"x":58,"y":70,"value":1},{"x":51,"y":82,"value":1},{"x":45,"y":95,"value":1},{"x":48,"y":82,"value":1},{"x":58,"y":87,"value":1},{"x":55,"y":82,"value":1},{"x":43,"y":74,"value":1},{"x":9,"y":98,"value":1},{"x":22,"y":94,"value":1},{"x":22,"y":94,"value":1},{"x":30,"y":95,"value":1},{"x":40,"y":97,"value":1},{"x":26,"y":97,"value":1},{"x":19,"y":96,"value":1},{"x":29,"y":95,"value":1},{"x":22,"y":96,"value":1},{"x":29,"y":97,"value":1},{"x":23,"y":98,"value":1},{"x":92,"y":76,"value":1},{"x":95,"y":77,"value":1},{"x":97,"y":60,"value":1},{"x":88,"y":20,"value":1},{"x":83,"y":23,"value":1},{"x":85,"y":45,"value":1},{"x":87,"y":68,"value":1},{"x":88,"y":82,"value":1},{"x":89,"y":92,"value":1},{"x":89,"y":93,"value":1},{"x":88,"y":83,"value":1},{"x":91,"y":90,"value":1},{"x":94,"y":94,"value":1},{"x":95,"y":92,"value":1},{"x":99,"y":71,"value":1},{"x":95,"y":85,"value":1},{"x":98,"y":56,"value":1},{"x":98,"y":39,"value":1},{"x":98,"y":39,"value":1},{"x":98,"y":39,"value":1},{"x":98,"y":40,"value":1},{"x":99,"y":14,"value":1},{"x":99,"y":14,"value":1},{"x":95,"y":18,"value":1},{"x":96,"y":11,"value":1},{"x":93,"y":2,"value":1},{"x":91,"y":2,"value":1},{"x":91,"y":2,"value":1},{"x":83,"y":0,"value":1},{"x":82,"y":0,"value":1},{"x":84,"y":3,"value":1},{"x":91,"y":20,"value":1},{"x":90,"y":32,"value":1},{"x":93,"y":38,"value":1},{"x":92,"y":42,"value":1},{"x":92,"y":37,"value":1},{"x":81,"y":33,"value":1},{"x":78,"y":30,"value":1},{"x":81,"y":30,"value":1},{"x":79,"y":33,"value":1},{"x":87,"y":38,"value":1},{"x":90,"y":41,"value":1},{"x":83,"y":78,"value":1},{"x":81,"y":94,"value":1},{"x":81,"y":84,"value":1},{"x":81,"y":77,"value":1},{"x":71,"y":63,"value":1},{"x":62,"y":59,"value":1},{"x":66,"y":81,"value":1},{"x":67,"y":82,"value":1},{"x":56,"y":80,"value":1},{"x":58,"y":93,"value":1},{"x":56,"y":95,"value":1},{"x":59,"y":76,"value":1},{"x":61,"y":67,"value":1},{"x":59,"y":78,"value":1},{"x":60,"y":68,"value":1},{"x":60,"y":83,"value":1},{"x":59,"y":90,"value":1},{"x":62,"y":76,"value":1},{"x":62,"y":51,"value":1},{"x":54,"y":37,"value":1},{"x":46,"y":60,"value":1},{"x":47,"y":68,"value":1},{"x":56,"y":71,"value":1},{"x":61,"y":66,"value":1},{"x":43,"y":57,"value":1},{"x":27,"y":60,"value":1},{"x":23,"y":48,"value":1},{"x":29,"y":29,"value":1},{"x":28,"y":34,"value":1},{"x":29,"y":47,"value":1},{"x":30,"y":68,"value":1},{"x":31,"y":58,"value":1},{"x":32,"y":48,"value":1},{"x":28,"y":37,"value":1},{"x":29,"y":27,"value":1},{"x":36,"y":23,"value":1},{"x":22,"y":30,"value":1},{"x":14,"y":41,"value":1},{"x":22,"y":52,"value":1},{"x":14,"y":63,"value":1},{"x":4,"y":60,"value":1},{"x":8,"y":54,"value":1},{"x":7,"y":54,"value":1},{"x":2,"y":56,"value":1},{"x":4,"y":51,"value":1},{"x":9,"y":86,"value":1},{"x":15,"y":93,"value":1},{"x":17,"y":95,"value":1},{"x":4,"y":95,"value":1},{"x":5,"y":95,"value":1},{"x":1,"y":89,"value":1},{"x":1,"y":76,"value":1},{"x":1,"y":77,"value":1},{"x":3,"y":97,"value":1},{"x":10,"y":81,"value":1},{"x":15,"y":78,"value":1},{"x":16,"y":80,"value":1},{"x":16,"y":79,"value":1},{"x":15,"y":83,"value":1},{"x":28,"y":78,"value":1},{"x":15,"y":56,"value":1},{"x":1,"y":35,"value":1},{"x":7,"y":28,"value":1},{"x":17,"y":17,"value":1},{"x":23,"y":7,"value":1},{"x":21,"y":5,"value":1},{"x":27,"y":0,"value":1},{"x":48,"y":0,"value":1},{"x":39,"y":8,"value":1},{"x":50,"y":11,"value":1},{"x":57,"y":15,"value":1},{"x":47,"y":24,"value":1},{"x":60,"y":10,"value":1},{"x":69,"y":3,"value":1},{"x":67,"y":5,"value":1},{"x":71,"y":6,"value":1},{"x":79,"y":7,"value":1},{"x":78,"y":12,"value":1},{"x":79,"y":13,"value":1},{"x":82,"y":6,"value":1},{"x":61,"y":25,"value":1},{"x":41,"y":52,"value":1},{"x":53,"y":54,"value":1},{"x":55,"y":54,"value":1},{"x":59,"y":54,"value":1},{"x":58,"y":56,"value":1},{"x":81,"y":39,"value":1},{"x":87,"y":59,"value":1},{"x":83,"y":60,"value":1},{"x":86,"y":52,"value":1},{"x":77,"y":55,"value":1},{"x":88,"y":59,"value":1},{"x":98,"y":64,"value":1},{"x":94,"y":47,"value":1},{"x":92,"y":49,"value":1},{"x":90,"y":50,"value":1},{"x":90,"y":16,"value":1},{"x":81,"y":26,"value":1},{"x":83,"y":29,"value":1},{"x":83,"y":31,"value":1},{"x":97,"y":3,"value":1},{"x":92,"y":8,"value":1},{"x":90,"y":7,"value":1},{"x":89,"y":11,"value":1},{"x":86,"y":52,"value":1},{"x":81,"y":79,"value":1},{"x":73,"y":90,"value":1},{"x":91,"y":89,"value":1},{"x":95,"y":83,"value":1},{"x":98,"y":79,"value":1},{"x":87,"y":90,"value":1},{"x":56,"y":88,"value":1},{"x":53,"y":92,"value":1},{"x":41,"y":98,"value":1},{"x":38,"y":99,"value":1},{"x":33,"y":97,"value":1},{"x":30,"y":95,"value":1},{"x":33,"y":91,"value":1},{"x":15,"y":95,"value":1},{"x":3,"y":95,"value":1},{"x":6,"y":96,"value":1},{"x":21,"y":90,"value":1},{"x":25,"y":89,"value":1},{"x":35,"y":75,"value":1},{"x":40,"y":66,"value":1},{"x":36,"y":69,"value":1},{"x":30,"y":68,"value":1},{"x":24,"y":63,"value":1},{"x":2,"y":76,"value":1},{"x":12,"y":66,"value":1},{"x":18,"y":65,"value":1},{"x":15,"y":70,"value":1},{"x":22,"y":52,"value":1},{"x":41,"y":21,"value":1},{"x":35,"y":18,"value":1},{"x":28,"y":18,"value":1},{"x":29,"y":38,"value":1},{"x":25,"y":49,"value":1},{"x":22,"y":52,"value":1},{"x":29,"y":24,"value":1},{"x":26,"y":25,"value":1},{"x":32,"y":18,"value":1},{"x":43,"y":0,"value":1},{"x":38,"y":0,"value":1},{"x":39,"y":1,"value":1},{"x":64,"y":0,"value":1},{"x":62,"y":5,"value":1},{"x":72,"y":5,"value":1},{"x":82,"y":2,"value":1},{"x":76,"y":7,"value":1},{"x":77,"y":6,"value":1},{"x":64,"y":24,"value":1},{"x":58,"y":47,"value":1},{"x":57,"y":43,"value":1},{"x":66,"y":45,"value":1},{"x":70,"y":40,"value":1},{"x":68,"y":43,"value":1},{"x":64,"y":58,"value":1},{"x":64,"y":70,"value":1},{"x":67,"y":63,"value":1},{"x":65,"y":53,"value":1},{"x":35,"y":27,"value":1},{"x":24,"y":26,"value":1},{"x":34,"y":32,"value":1},{"x":39,"y":36,"value":1},{"x":29,"y":49,"value":1},{"x":36,"y":45,"value":1},{"x":28,"y":51,"value":1},{"x":25,"y":41,"value":1},{"x":24,"y":40,"value":1},{"x":40,"y":56,"value":1},{"x":60,"y":65,"value":1},{"x":52,"y":62,"value":1},{"x":43,"y":59,"value":1},{"x":20,"y":67,"value":1},{"x":6,"y":83,"value":1},{"x":2,"y":88,"value":1},{"x":2,"y":94,"value":1},{"x":1,"y":98,"value":1},{"x":1,"y":48,"value":1},{"x":1,"y":15,"value":1},{"x":3,"y":18,"value":1},{"x":5,"y":42,"value":1}]

export const mouseHistory = [
  {
    "x": 0,
    "y": 0,
    "value": 0
  },
  {
    "x": 0,
    "y": 0,
    "value": 0
  },
  {
    "x": 0,
    "y": 0,
    "value": 0
  },
  {
    "x": 0,
    "y": 0,
    "value": 0
  },
  {
    "x": 0,
    "y": 0,
    "value": 0
  },
  {
    "x": 0,
    "y": 0,
    "value": 0
  },
  {
    "x": 0,
    "y": 0,
    "value": 0
  },
  {
    "x": 0,
    "y": 0,
    "value": 0
  },
  {
    "x": 0,
    "y": 0,
    "value": 0
  },
  {
    "x": 0,
    "y": 0,
    "value": 0
  },
  {
    "x": 47.39837398373984,
    "y": -16.912972085385878,
    "value": 1
  },
  {
    "x": 46.34146341463415,
    "y": -5.747126436781609,
    "value": 1
  },
  {
    "x": 45.9349593495935,
    "y": 0.6568144499178982,
    "value": 1
  },
  {
    "x": 45.9349593495935,
    "y": 4.105090311986864,
    "value": 1
  },
  {
    "x": 45.9349593495935,
    "y": 4.761904761904762,
    "value": 1
  },
  {
    "x": 45.853658536585364,
    "y": 5.254515599343185,
    "value": 1
  },
  {
    "x": 45.6910569105691,
    "y": 6.403940886699507,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 45.609756097560975,
    "y": 6.896551724137931,
    "value": 1
  },
  {
    "x": 27.073170731707318,
    "y": 3.0890369473046637,
    "value": 1
  },
  {
    "x": 22.03252032520325,
    "y": 4.239854633555421,
    "value": 1
  },
  {
    "x": 17.479674796747968,
    "y": 5.451241671714112,
    "value": 1
  },
  {
    "x": 16.422764227642276,
    "y": 4.906117504542701,
    "value": 1
  },
  {
    "x": 15.853658536585366,
    "y": 4.603270745003028,
    "value": 1
  },
  {
    "x": 13.739837398373984,
    "y": 4.421562689279225,
    "value": 1
  },
  {
    "x": 13.658536585365853,
    "y": 4.421562689279225,
    "value": 1
  },
  {
    "x": 13.658536585365853,
    "y": 4.421562689279225,
    "value": 1
  },
  {
    "x": 13.658536585365853,
    "y": 4.421562689279225,
    "value": 1
  },
  {
    "x": 13.658536585365853,
    "y": 4.421562689279225,
    "value": 1
  },
  {
    "x": 13.414634146341463,
    "y": 4.421562689279225,
    "value": 1
  },
  {
    "x": 11.463414634146341,
    "y": 4.603270745003028,
    "value": 1
  },
  {
    "x": 11.382113821138212,
    "y": 4.603270745003028,
    "value": 1
  },
  {
    "x": 8.94308943089431,
    "y": 3.7552998182919444,
    "value": 1
  },
  {
    "x": 4.878048780487805,
    "y": 3.0890369473046637,
    "value": 1
  },
  {
    "x": 4.5528455284552845,
    "y": 3.0284675953967293,
    "value": 1
  },
  {
    "x": 4.308943089430894,
    "y": 2.90732889158086,
    "value": 1
  },
  {
    "x": 4.308943089430894,
    "y": 2.90732889158086,
    "value": 1
  },
  {
    "x": 4.308943089430894,
    "y": 2.90732889158086,
    "value": 1
  },
  {
    "x": 4.308943089430894,
    "y": 2.90732889158086,
    "value": 1
  },
  {
    "x": 4.308943089430894,
    "y": 2.90732889158086,
    "value": 1
  },
  {
    "x": 4.308943089430894,
    "y": 2.90732889158086,
    "value": 1
  },
  {
    "x": 6.504065040650406,
    "y": 2.725620835857056,
    "value": 1
  },
  {
    "x": 27.642276422764226,
    "y": 1.8170805572380375,
    "value": 1
  },
  {
    "x": 65.04065040650407,
    "y": 1.3325257419745609,
    "value": 1
  },
  {
    "x": 84.63414634146342,
    "y": 1.8170805572380375,
    "value": 1
  },
  {
    "x": 93.90243902439025,
    "y": 2.1199273167777104,
    "value": 1
  },
  {
    "x": 103.4959349593496,
    "y": 2.5439127801332524,
    "value": 1
  },
  {
    "x": 102.60162601626017,
    "y": 2.6044821320411873,
    "value": 1
  },
  {
    "x": 96.66666666666667,
    "y": 2.6650514839491217,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.6650514839491217,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.6650514839491217,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.6650514839491217,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.6650514839491217,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.6650514839491217,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.6650514839491217,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.6650514839491217,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.725620835857056,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.725620835857056,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.725620835857056,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.725620835857056,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.725620835857056,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.725620835857056,
    "value": 1
  },
  {
    "x": 96.58536585365853,
    "y": 2.8467595396729255,
    "value": 1
  },
  {
    "x": 90.40650406504065,
    "y": 4.845548152634767,
    "value": 1
  },
  {
    "x": 80.2439024390244,
    "y": 5.996365838885524,
    "value": 1
  },
  {
    "x": 63.82113821138211,
    "y": 7.147183525136281,
    "value": 1
  },
  {
    "x": 43.983739837398375,
    "y": 8.298001211387039,
    "value": 1
  },
  {
    "x": 32.926829268292686,
    "y": 9.812235009085402,
    "value": 1
  },
  {
    "x": 32.113821138211385,
    "y": 11.387038158691702,
    "value": 1
  },
  {
    "x": 31.869918699186993,
    "y": 12.658994548758328,
    "value": 1
  },
  {
    "x": 31.869918699186993,
    "y": 13.022410660205935,
    "value": 1
  },
  {
    "x": 30.8130081300813,
    "y": 14.65778316172017,
    "value": 1
  },
  {
    "x": 24.796747967479675,
    "y": 19.382192610539068,
    "value": 1
  },
  {
    "x": 13.089430894308943,
    "y": 24.409448818897637,
    "value": 1
  },
  {
    "x": 7.967479674796748,
    "y": 26.771653543307085,
    "value": 1
  },
  {
    "x": 7.804878048780488,
    "y": 26.771653543307085,
    "value": 1
  },
  {
    "x": 8.048780487804878,
    "y": 26.347668079951543,
    "value": 1
  },
  {
    "x": 8.373983739837398,
    "y": 25.560266505148395,
    "value": 1
  },
  {
    "x": 8.455284552845528,
    "y": 25.439127801332525,
    "value": 1
  },
  {
    "x": 8.455284552845528,
    "y": 25.439127801332525,
    "value": 1
  },
  {
    "x": 8.455284552845528,
    "y": 25.439127801332525,
    "value": 1
  },
  {
    "x": 8.455284552845528,
    "y": 25.439127801332525,
    "value": 1
  },
  {
    "x": 8.455284552845528,
    "y": 25.439127801332525,
    "value": 1
  },
  {
    "x": 8.455284552845528,
    "y": 25.439127801332525,
    "value": 1
  },
  {
    "x": 8.455284552845528,
    "y": 25.439127801332525,
    "value": 1
  },
  {
    "x": 8.455284552845528,
    "y": 25.439127801332525,
    "value": 1
  },
  {
    "x": 8.455284552845528,
    "y": 25.439127801332525,
    "value": 1
  },
  {
    "x": 8.455284552845528,
    "y": 25.439127801332525,
    "value": 1
  },
  {
    "x": 11.138211382113822,
    "y": 25.37855844942459,
    "value": 1
  },
  {
    "x": 12.195121951219512,
    "y": 25.37855844942459,
    "value": 1
  },
  {
    "x": 12.276422764227643,
    "y": 25.317989097516655,
    "value": 1
  },
  {
    "x": 18.86178861788618,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 21.21951219512195,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 22.4390243902439,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 22.682926829268293,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 22.195121951219512,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 22.195121951219512,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 22.195121951219512,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 24.471544715447155,
    "y": 24.95457298606905,
    "value": 1
  },
  {
    "x": 35.28455284552845,
    "y": 24.772864930345246,
    "value": 1
  },
  {
    "x": 41.46341463414634,
    "y": 24.772864930345246,
    "value": 1
  },
  {
    "x": 41.54471544715447,
    "y": 24.772864930345246,
    "value": 1
  },
  {
    "x": 41.54471544715447,
    "y": 24.772864930345246,
    "value": 1
  },
  {
    "x": 41.38211382113821,
    "y": 24.894003634161116,
    "value": 1
  },
  {
    "x": 41.21951219512195,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 40.97560975609756,
    "y": 25.07571168988492,
    "value": 1
  },
  {
    "x": 40.89430894308943,
    "y": 25.07571168988492,
    "value": 1
  },
  {
    "x": 40.73170731707317,
    "y": 25.07571168988492,
    "value": 1
  },
  {
    "x": 40.56910569105691,
    "y": 25.07571168988492,
    "value": 1
  },
  {
    "x": 40.48780487804878,
    "y": 25.07571168988492,
    "value": 1
  },
  {
    "x": 40.48780487804878,
    "y": 25.07571168988492,
    "value": 1
  },
  {
    "x": 44.71544715447155,
    "y": 25.136281041792852,
    "value": 1
  },
  {
    "x": 54.390243902439025,
    "y": 25.317989097516655,
    "value": 1
  },
  {
    "x": 55.853658536585364,
    "y": 25.317989097516655,
    "value": 1
  },
  {
    "x": 55.853658536585364,
    "y": 25.257419745608722,
    "value": 1
  },
  {
    "x": 55.040650406504064,
    "y": 25.19685039370079,
    "value": 1
  },
  {
    "x": 53.08943089430894,
    "y": 25.19685039370079,
    "value": 1
  },
  {
    "x": 53.00813008130081,
    "y": 25.19685039370079,
    "value": 1
  },
  {
    "x": 52.03252032520325,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 51.54471544715447,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 51.54471544715447,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 51.54471544715447,
    "y": 25.015142337976982,
    "value": 1
  },
  {
    "x": 52.27642276422764,
    "y": 26.105390672319807,
    "value": 1
  },
  {
    "x": 42.27642276422764,
    "y": 28.225317989097515,
    "value": 1
  },
  {
    "x": 0.16260162601626016,
    "y": 27.316777710478497,
    "value": 1
  },
  {
    "x": -5.4471544715447155,
    "y": 27.195639006662628,
    "value": 1
  },
  {
    "x": -5.365853658536586,
    "y": 27.195639006662628,
    "value": 1
  },
  {
    "x": -4.146341463414634,
    "y": 28.164748637189582,
    "value": 1
  },
  {
    "x": -2.682926829268293,
    "y": 28.649303452453058,
    "value": 1
  },
  {
    "x": 4.878048780487805,
    "y": 29.254996971532403,
    "value": 1
  },
  {
    "x": 9.105691056910569,
    "y": 29.43670502725621,
    "value": 1
  },
  {
    "x": 9.105691056910569,
    "y": 29.739551786795882,
    "value": 1
  },
  {
    "x": 9.105691056910569,
    "y": 30.163537250151425,
    "value": 1
  },
  {
    "x": 9.105691056910569,
    "y": 30.52695336159903,
    "value": 1
  },
  {
    "x": 9.105691056910569,
    "y": 30.587522713506967,
    "value": 1
  },
  {
    "x": 9.024390243902438,
    "y": 30.76923076923077,
    "value": 1
  },
  {
    "x": 6.829268292682927,
    "y": 32.2228952150212,
    "value": 1
  },
  {
    "x": 6.747967479674797,
    "y": 32.2228952150212,
    "value": 1
  },
  {
    "x": 6.666666666666667,
    "y": 32.28346456692913,
    "value": 1
  },
  {
    "x": 6.585365853658536,
    "y": 32.34403391883707,
    "value": 1
  },
  {
    "x": 5.4471544715447155,
    "y": 33.494851605087824,
    "value": 1
  },
  {
    "x": 5.365853658536586,
    "y": 33.67655966081163,
    "value": 1
  },
  {
    "x": 5.4471544715447155,
    "y": 33.85826771653543,
    "value": 1
  },
  {
    "x": 5.4471544715447155,
    "y": 34.03997577225924,
    "value": 1
  },
  {
    "x": 5.4471544715447155,
    "y": 34.03997577225924,
    "value": 1
  },
  {
    "x": 5.4471544715447155,
    "y": 34.03997577225924,
    "value": 1
  },
  {
    "x": 5.4471544715447155,
    "y": 34.03997577225924,
    "value": 1
  },
  {
    "x": 5.203252032520325,
    "y": 34.706238643246515,
    "value": 1
  },
  {
    "x": 5.528455284552845,
    "y": 35.67534827377347,
    "value": 1
  },
  {
    "x": 13.821138211382113,
    "y": 37.43185947910357,
    "value": 1
  },
  {
    "x": 17.317073170731707,
    "y": 37.97698364627499,
    "value": 1
  },
  {
    "x": 17.398373983739837,
    "y": 37.97698364627499,
    "value": 1
  },
  {
    "x": 17.398373983739837,
    "y": 37.97698364627499,
    "value": 1
  },
  {
    "x": 17.398373983739837,
    "y": 37.97698364627499,
    "value": 1
  },
  {
    "x": 17.723577235772357,
    "y": 49.84857662023016,
    "value": 1
  },
  {
    "x": 20.08130081300813,
    "y": 52.02907328891581,
    "value": 1
  },
  {
    "x": 20.08130081300813,
    "y": 52.02907328891581,
    "value": 1
  },
  {
    "x": 20.08130081300813,
    "y": 52.02907328891581,
    "value": 1
  },
  {
    "x": 20.08130081300813,
    "y": 52.02907328891581,
    "value": 1
  },
  {
    "x": 20.08130081300813,
    "y": 52.02907328891581,
    "value": 1
  },
  {
    "x": 20.08130081300813,
    "y": 60.56935190793458,
    "value": 1
  },
  {
    "x": 20.16260162601626,
    "y": 63.23440339188371,
    "value": 1
  },
  {
    "x": 20.24390243902439,
    "y": 65.77831617201696,
    "value": 1
  },
  {
    "x": 20.32520325203252,
    "y": 65.11205330102968,
    "value": 1
  },
  {
    "x": 20.40650406504065,
    "y": 65.41490006056935,
    "value": 1
  },
  {
    "x": 20.48780487804878,
    "y": 69.65475469412478,
    "value": 1
  },
  {
    "x": 20.56910569105691,
    "y": 70.13930950938826,
    "value": 1
  },
  {
    "x": 20.56910569105691,
    "y": 70.19987886129618,
    "value": 1
  },
  {
    "x": 20.650406504065042,
    "y": 72.98606904906117,
    "value": 1
  },
  {
    "x": 20.73170731707317,
    "y": 75.40884312537855,
    "value": 1
  },
  {
    "x": 20.89430894308943,
    "y": 74.92428831011509,
    "value": 1
  },
  {
    "x": 20.975609756097562,
    "y": 74.74258025439127,
    "value": 1
  },
  {
    "x": 20.975609756097562,
    "y": 74.74258025439127,
    "value": 1
  },
  {
    "x": 21.382113821138212,
    "y": 74.86371895820714,
    "value": 1
  },
  {
    "x": 23.170731707317074,
    "y": 75.40884312537855,
    "value": 1
  },
  {
    "x": 23.170731707317074,
    "y": 75.40884312537855,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.252032520325205,
    "y": 75.4694124772865,
    "value": 1
  },
  {
    "x": 23.983739837398375,
    "y": 87.70442156268928,
    "value": 1
  },
  {
    "x": 30.56910569105691,
    "y": 88.24954572986069,
    "value": 1
  },
  {
    "x": 41.54471544715447,
    "y": 88.49182313749243,
    "value": 1
  },
  {
    "x": 57.235772357723576,
    "y": 85.52392489400363,
    "value": 1
  },
  {
    "x": 69.1869918699187,
    "y": 78.9824348879467,
    "value": 1
  },
  {
    "x": 74.14634146341463,
    "y": 74.50030284675954,
    "value": 1
  },
  {
    "x": 75.1219512195122,
    "y": 72.98606904906117,
    "value": 1
  },
  {
    "x": 75.1219512195122,
    "y": 72.98606904906117,
    "value": 1
  },
  {
    "x": 75.36585365853658,
    "y": 72.50151423379769,
    "value": 1
  },
  {
    "x": 75.52845528455285,
    "y": 72.13809812235009,
    "value": 1
  },
  {
    "x": 75.52845528455285,
    "y": 72.07752877044216,
    "value": 1
  },
  {
    "x": 75.52845528455285,
    "y": 72.07752877044216,
    "value": 1
  },
  {
    "x": 75.52845528455285,
    "y": 72.07752877044216,
    "value": 1
  },
  {
    "x": 75.52845528455285,
    "y": 72.07752877044216,
    "value": 1
  },
  {
    "x": 75.52845528455285,
    "y": 72.07752877044216,
    "value": 1
  },
  {
    "x": 76.26016260162602,
    "y": 72.01695941853423,
    "value": 1
  },
  {
    "x": 77.88617886178862,
    "y": 71.65354330708661,
    "value": 1
  },
  {
    "x": 77.88617886178862,
    "y": 71.65354330708661,
    "value": 1
  },
  {
    "x": 77.88617886178862,
    "y": 71.65354330708661,
    "value": 1
  },
  {
    "x": 72.27642276422765,
    "y": 70.56329497274379,
    "value": 1
  },
  {
    "x": 57.886178861788615,
    "y": 67.65596608116293,
    "value": 1
  },
  {
    "x": 50,
    "y": 64.86977589339794,
    "value": 1
  },
  {
    "x": 44.22764227642276,
    "y": 64.50635978195034,
    "value": 1
  },
  {
    "x": 38.78048780487805,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 37.96747967479675,
    "y": 65.59660811629315,
    "value": 1
  },
  {
    "x": 36.260162601626014,
    "y": 65.59660811629315,
    "value": 1
  },
  {
    "x": 36.260162601626014,
    "y": 65.59660811629315,
    "value": 1
  },
  {
    "x": 36.260162601626014,
    "y": 65.59660811629315,
    "value": 1
  },
  {
    "x": 36.260162601626014,
    "y": 65.59660811629315,
    "value": 1
  },
  {
    "x": 36.260162601626014,
    "y": 65.59660811629315,
    "value": 1
  },
  {
    "x": 36.260162601626014,
    "y": 65.59660811629315,
    "value": 1
  },
  {
    "x": 36.260162601626014,
    "y": 65.59660811629315,
    "value": 1
  },
  {
    "x": 35.28455284552845,
    "y": 65.53603876438522,
    "value": 1
  },
  {
    "x": 34.47154471544715,
    "y": 65.41490006056935,
    "value": 1
  },
  {
    "x": 34.47154471544715,
    "y": 65.41490006056935,
    "value": 1
  },
  {
    "x": 34.47154471544715,
    "y": 65.41490006056935,
    "value": 1
  },
  {
    "x": 34.47154471544715,
    "y": 65.41490006056935,
    "value": 1
  },
  {
    "x": 34.390243902439025,
    "y": 65.41490006056935,
    "value": 1
  },
  {
    "x": 34.390243902439025,
    "y": 65.41490006056935,
    "value": 1
  },
  {
    "x": 34.3089430894309,
    "y": 65.41490006056935,
    "value": 1
  },
  {
    "x": 34.3089430894309,
    "y": 65.41490006056935,
    "value": 1
  },
  {
    "x": 34.22764227642276,
    "y": 65.41490006056935,
    "value": 1
  },
  {
    "x": 33.170731707317074,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 33.08943089430894,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 33.00813008130081,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 33.00813008130081,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.84552845528455,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.68292682926829,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.60162601626016,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.60162601626016,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.60162601626016,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.60162601626016,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.60162601626016,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.60162601626016,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.60162601626016,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.60162601626016,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.60162601626016,
    "y": 65.35433070866142,
    "value": 1
  },
  {
    "x": 32.60162601626016,
    "y": 65.47546941247728,
    "value": 1
  },
  {
    "x": 33.577235772357724,
    "y": 66.80799515445185,
    "value": 1
  },
  {
    "x": 34.8780487804878,
    "y": 68.56450635978194,
    "value": 1
  },
  {
    "x": 36.422764227642276,
    "y": 70.9267110841914,
    "value": 1
  },
  {
    "x": 38.86178861788618,
    "y": 74.92428831011509,
    "value": 1
  },
  {
    "x": 37.886178861788615,
    "y": 79.22471229557844,
    "value": 1
  },
  {
    "x": 30.48780487804878,
    "y": 85.6450635978195,
    "value": 1
  },
  {
    "x": 24.634146341463413,
    "y": 90.49061175045426,
    "value": 1
  },
  {
    "x": 21.70731707317073,
    "y": 91.27801332525742,
    "value": 1
  },
  {
    "x": 22.926829268292682,
    "y": 91.52029073288915,
    "value": 1
  },
  {
    "x": 24.552845528455286,
    "y": 91.64142943670502,
    "value": 1
  },
  {
    "x": 24.715447154471544,
    "y": 91.5808600847971,
    "value": 1
  },
  {
    "x": 24.715447154471544,
    "y": 91.5808600847971,
    "value": 1
  },
  {
    "x": 24.715447154471544,
    "y": 91.5808600847971,
    "value": 1
  },
  {
    "x": 24.878048780487806,
    "y": 91.52029073288915,
    "value": 1
  },
  {
    "x": 25.609756097560975,
    "y": 91.45972138098122,
    "value": 1
  },
  {
    "x": 27.96747967479675,
    "y": 91.5808600847971,
    "value": 1
  },
  {
    "x": 29.83739837398374,
    "y": 91.64142943670502,
    "value": 1
  },
  {
    "x": 31.21951219512195,
    "y": 91.70199878861297,
    "value": 1
  },
  {
    "x": 31.70731707317073,
    "y": 91.70199878861297,
    "value": 1
  },
  {
    "x": 32.03252032520325,
    "y": 91.70199878861297,
    "value": 1
  },
  {
    "x": 32.113821138211385,
    "y": 91.64142943670502,
    "value": 1
  },
  {
    "x": 32.113821138211385,
    "y": 91.64142943670502,
    "value": 1
  },
  {
    "x": 32.113821138211385,
    "y": 91.64142943670502,
    "value": 1
  },
  {
    "x": 32.19512195121951,
    "y": 91.5808600847971,
    "value": 1
  },
  {
    "x": 32.27642276422764,
    "y": 91.5808600847971,
    "value": 1
  },
  {
    "x": 32.27642276422764,
    "y": 91.5808600847971,
    "value": 1
  },
  {
    "x": 32.27642276422764,
    "y": 91.5808600847971,
    "value": 1
  },
  {
    "x": 32.926829268292686,
    "y": 91.5808600847971,
    "value": 1
  },
  {
    "x": 36.34146341463415,
    "y": 91.7625681405209,
    "value": 1
  },
  {
    "x": 43.00813008130081,
    "y": 92.85281647486372,
    "value": 1
  },
  {
    "x": 46.50406504065041,
    "y": 94.0642035130224,
    "value": 1
  },
  {
    "x": 50.73170731707317,
    "y": 94.97274379164143,
    "value": 1
  },
  {
    "x": 50.89430894308943,
    "y": 95.0938824954573,
    "value": 1
  },
  {
    "x": 50.97560975609756,
    "y": 96.00242277407632,
    "value": 1
  },
  {
    "x": 50.32520325203252,
    "y": 97.09267110841914,
    "value": 1
  },
  {
    "x": 50.16260162601626,
    "y": 97.33494851605087,
    "value": 1
  },
  {
    "x": 49.91869918699187,
    "y": 97.75893397940642,
    "value": 1
  },
  {
    "x": 49.83739837398374,
    "y": 98.66747425802544,
    "value": 1
  },
  {
    "x": 49.83739837398374,
    "y": 98.84918231374924,
    "value": 1
  },
  {
    "x": 49.83739837398374,
    "y": 98.84918231374924,
    "value": 1
  },
  {
    "x": 49.83739837398374,
    "y": 98.84918231374924,
    "value": 1
  },
  {
    "x": 49.83739837398374,
    "y": 98.84918231374924,
    "value": 1
  }
];

export const mousePath = [
  {
    "x": 603,
    "y": -147
  },
  {
    "x": 599,
    "y": -140
  },
  {
    "x": 594,
    "y": -132
  },
  {
    "x": 589,
    "y": -124
  },
  {
    "x": 586,
    "y": -113
  },
  {
    "x": 583,
    "y": -103
  },
  {
    "x": 580,
    "y": -91
  },
  {
    "x": 577,
    "y": -81
  },
  {
    "x": 576,
    "y": -71
  },
  {
    "x": 573,
    "y": -58
  },
  {
    "x": 571,
    "y": -46
  },
  {
    "x": 570,
    "y": -35
  },
  {
    "x": 568,
    "y": -26
  },
  {
    "x": 568,
    "y": -20
  },
  {
    "x": 567,
    "y": -14
  },
  {
    "x": 566,
    "y": -8
  },
  {
    "x": 566,
    "y": -1
  },
  {
    "x": 565,
    "y": 9
  },
  {
    "x": 565,
    "y": 17
  },
  {
    "x": 565,
    "y": 25
  },
  {
    "x": 565,
    "y": 31
  },
  {
    "x": 563,
    "y": 37
  },
  {
    "x": 544,
    "y": 39
  },
  {
    "x": 478,
    "y": 26
  },
  {
    "x": 410,
    "y": 25
  },
  {
    "x": 363,
    "y": 43
  },
  {
    "x": 333,
    "y": 51
  },
  {
    "x": 313,
    "y": 57
  },
  {
    "x": 300,
    "y": 63
  },
  {
    "x": 288,
    "y": 66
  },
  {
    "x": 279,
    "y": 68
  },
  {
    "x": 271,
    "y": 70
  },
  {
    "x": 261,
    "y": 74
  },
  {
    "x": 251,
    "y": 78
  },
  {
    "x": 238,
    "y": 84
  },
  {
    "x": 224,
    "y": 88
  },
  {
    "x": 215,
    "y": 90
  },
  {
    "x": 208,
    "y": 86
  },
  {
    "x": 202,
    "y": 81
  },
  {
    "x": 196,
    "y": 76
  },
  {
    "x": 189,
    "y": 74
  },
  {
    "x": 178,
    "y": 74
  },
  {
    "x": 169,
    "y": 73
  },
  {
    "x": 161,
    "y": 73
  },
  {
    "x": 154,
    "y": 73
  },
  {
    "x": 147,
    "y": 75
  },
  {
    "x": 141,
    "y": 76
  },
  {
    "x": 132,
    "y": 72
  },
  {
    "x": 124,
    "y": 68
  },
  {
    "x": 116,
    "y": 64
  },
  {
    "x": 110,
    "y": 62
  },
  {
    "x": 103,
    "y": 60
  },
  {
    "x": 94,
    "y": 56
  },
  {
    "x": 86,
    "y": 55
  },
  {
    "x": 77,
    "y": 53
  },
  {
    "x": 68,
    "y": 52
  },
  {
    "x": 60,
    "y": 51
  },
  {
    "x": 54,
    "y": 49
  },
  {
    "x": 61,
    "y": 48
  },
  {
    "x": 69,
    "y": 47
  },
  {
    "x": 80,
    "y": 45
  },
  {
    "x": 93,
    "y": 43
  },
  {
    "x": 116,
    "y": 41
  },
  {
    "x": 150,
    "y": 39
  },
  {
    "x": 201,
    "y": 35
  },
  {
    "x": 267,
    "y": 33
  },
  {
    "x": 340,
    "y": 30
  },
  {
    "x": 422,
    "y": 28
  },
  {
    "x": 507,
    "y": 26
  },
  {
    "x": 587,
    "y": 24
  },
  {
    "x": 667,
    "y": 23
  },
  {
    "x": 741,
    "y": 22
  },
  {
    "x": 800,
    "y": 22
  },
  {
    "x": 856,
    "y": 22
  },
  {
    "x": 904,
    "y": 23
  },
  {
    "x": 945,
    "y": 25
  },
  {
    "x": 980,
    "y": 26
  },
  {
    "x": 1011,
    "y": 28
  },
  {
    "x": 1041,
    "y": 30
  },
  {
    "x": 1073,
    "y": 32
  },
  {
    "x": 1101,
    "y": 33
  },
  {
    "x": 1122,
    "y": 33
  },
  {
    "x": 1140,
    "y": 34
  },
  {
    "x": 1155,
    "y": 35
  },
  {
    "x": 1215,
    "y": 40
  },
  {
    "x": 1251,
    "y": 41
  },
  {
    "x": 1272,
    "y": 42
  },
  {
    "x": 1262,
    "y": 43
  },
  {
    "x": 1248,
    "y": 43
  },
  {
    "x": 1231,
    "y": 43
  },
  {
    "x": 1214,
    "y": 43
  },
  {
    "x": 1200,
    "y": 44
  },
  {
    "x": 1192,
    "y": 44
  },
  {
    "x": 1186,
    "y": 48
  },
  {
    "x": 1175,
    "y": 57
  },
  {
    "x": 1159,
    "y": 64
  },
  {
    "x": 1135,
    "y": 73
  },
  {
    "x": 1112,
    "y": 80
  },
  {
    "x": 1089,
    "y": 87
  },
  {
    "x": 1070,
    "y": 92
  },
  {
    "x": 1053,
    "y": 95
  },
  {
    "x": 1035,
    "y": 97
  },
  {
    "x": 1012,
    "y": 99
  },
  {
    "x": 987,
    "y": 99
  },
  {
    "x": 952,
    "y": 100
  },
  {
    "x": 917,
    "y": 102
  },
  {
    "x": 886,
    "y": 105
  },
  {
    "x": 856,
    "y": 109
  },
  {
    "x": 821,
    "y": 114
  },
  {
    "x": 785,
    "y": 118
  },
  {
    "x": 742,
    "y": 123
  },
  {
    "x": 700,
    "y": 125
  },
  {
    "x": 660,
    "y": 127
  },
  {
    "x": 622,
    "y": 129
  },
  {
    "x": 580,
    "y": 133
  },
  {
    "x": 541,
    "y": 137
  },
  {
    "x": 506,
    "y": 140
  },
  {
    "x": 473,
    "y": 144
  },
  {
    "x": 445,
    "y": 149
  },
  {
    "x": 425,
    "y": 154
  },
  {
    "x": 412,
    "y": 158
  },
  {
    "x": 405,
    "y": 162
  },
  {
    "x": 400,
    "y": 169
  },
  {
    "x": 396,
    "y": 178
  },
  {
    "x": 395,
    "y": 188
  },
  {
    "x": 393,
    "y": 197
  },
  {
    "x": 392,
    "y": 205
  },
  {
    "x": 392,
    "y": 211
  },
  {
    "x": 392,
    "y": 218
  },
  {
    "x": 387,
    "y": 227
  },
  {
    "x": 383,
    "y": 234
  },
  {
    "x": 379,
    "y": 242
  },
  {
    "x": 371,
    "y": 252
  },
  {
    "x": 359,
    "y": 266
  },
  {
    "x": 344,
    "y": 281
  },
  {
    "x": 330,
    "y": 295
  },
  {
    "x": 318,
    "y": 308
  },
  {
    "x": 305,
    "y": 320
  },
  {
    "x": 290,
    "y": 332
  },
  {
    "x": 265,
    "y": 348
  },
  {
    "x": 237,
    "y": 362
  },
  {
    "x": 210,
    "y": 376
  },
  {
    "x": 184,
    "y": 390
  },
  {
    "x": 161,
    "y": 403
  },
  {
    "x": 139,
    "y": 417
  },
  {
    "x": 120,
    "y": 427
  },
  {
    "x": 108,
    "y": 434
  },
  {
    "x": 102,
    "y": 439
  },
  {
    "x": 96,
    "y": 442
  },
  {
    "x": 99,
    "y": 435
  },
  {
    "x": 103,
    "y": 429
  },
  {
    "x": 103,
    "y": 422
  },
  {
    "x": 109,
    "y": 420
  },
  {
    "x": 121,
    "y": 420
  },
  {
    "x": 137,
    "y": 419
  },
  {
    "x": 146,
    "y": 419
  },
  {
    "x": 156,
    "y": 417
  },
  {
    "x": 162,
    "y": 416
  },
  {
    "x": 175,
    "y": 415
  },
  {
    "x": 191,
    "y": 413
  },
  {
    "x": 211,
    "y": 413
  },
  {
    "x": 232,
    "y": 413
  },
  {
    "x": 246,
    "y": 413
  },
  {
    "x": 256,
    "y": 413
  },
  {
    "x": 263,
    "y": 413
  },
  {
    "x": 269,
    "y": 413
  },
  {
    "x": 276,
    "y": 413
  },
  {
    "x": 286,
    "y": 412
  },
  {
    "x": 301,
    "y": 412
  },
  {
    "x": 318,
    "y": 411
  },
  {
    "x": 339,
    "y": 410
  },
  {
    "x": 361,
    "y": 409
  },
  {
    "x": 384,
    "y": 409
  },
  {
    "x": 410,
    "y": 409
  },
  {
    "x": 434,
    "y": 409
  },
  {
    "x": 458,
    "y": 409
  },
  {
    "x": 476,
    "y": 409
  },
  {
    "x": 489,
    "y": 409
  },
  {
    "x": 500,
    "y": 409
  },
  {
    "x": 506,
    "y": 409
  },
  {
    "x": 500,
    "y": 414
  },
  {
    "x": 511,
    "y": 414
  },
  {
    "x": 527,
    "y": 414
  },
  {
    "x": 550,
    "y": 415
  },
  {
    "x": 577,
    "y": 417
  },
  {
    "x": 605,
    "y": 417
  },
  {
    "x": 630,
    "y": 418
  },
  {
    "x": 648,
    "y": 418
  },
  {
    "x": 660,
    "y": 418
  },
  {
    "x": 669,
    "y": 418
  },
  {
    "x": 675,
    "y": 418
  },
  {
    "x": 681,
    "y": 418
  },
  {
    "x": 687,
    "y": 418
  },
  {
    "x": 677,
    "y": 416
  },
  {
    "x": 669,
    "y": 416
  },
  {
    "x": 663,
    "y": 416
  },
  {
    "x": 657,
    "y": 416
  },
  {
    "x": 651,
    "y": 415
  },
  {
    "x": 643,
    "y": 413
  },
  {
    "x": 636,
    "y": 413
  },
  {
    "x": 640,
    "y": 419
  },
  {
    "x": 643,
    "y": 431
  },
  {
    "x": 644,
    "y": 437
  },
  {
    "x": 643,
    "y": 443
  },
  {
    "x": 635,
    "y": 449
  },
  {
    "x": 612,
    "y": 458
  },
  {
    "x": 573,
    "y": 464
  },
  {
    "x": 520,
    "y": 466
  },
  {
    "x": 459,
    "y": 466
  },
  {
    "x": 369,
    "y": 466
  },
  {
    "x": 267,
    "y": 463
  },
  {
    "x": 166,
    "y": 458
  },
  {
    "x": 69,
    "y": 454
  },
  {
    "x": 2,
    "y": 451
  },
  {
    "x": -42,
    "y": 451
  },
  {
    "x": -61,
    "y": 449
  },
  {
    "x": -67,
    "y": 449
  },
  {
    "x": -61,
    "y": 449
  },
  {
    "x": -57,
    "y": 456
  },
  {
    "x": -51,
    "y": 465
  },
  {
    "x": -45,
    "y": 471
  },
  {
    "x": -39,
    "y": 472
  },
  {
    "x": -33,
    "y": 473
  },
  {
    "x": -25,
    "y": 475
  },
  {
    "x": -12,
    "y": 477
  },
  {
    "x": 1,
    "y": 479
  },
  {
    "x": 20,
    "y": 480
  },
  {
    "x": 42,
    "y": 482
  },
  {
    "x": 60,
    "y": 483
  },
  {
    "x": 74,
    "y": 484
  },
  {
    "x": 85,
    "y": 484
  },
  {
    "x": 96,
    "y": 485
  },
  {
    "x": 106,
    "y": 485
  },
  {
    "x": 112,
    "y": 486
  },
  {
    "x": 112,
    "y": 492
  },
  {
    "x": 112,
    "y": 498
  },
  {
    "x": 112,
    "y": 504
  },
  {
    "x": 108,
    "y": 513
  },
  {
    "x": 102,
    "y": 518
  },
  {
    "x": 96,
    "y": 524
  },
  {
    "x": 90,
    "y": 528
  },
  {
    "x": 84,
    "y": 532
  },
  {
    "x": 77,
    "y": 540
  },
  {
    "x": 72,
    "y": 547
  },
  {
    "x": 67,
    "y": 553
  },
  {
    "x": 66,
    "y": 559
  },
  {
    "x": 67,
    "y": 566
  },
  {
    "x": 64,
    "y": 573
  },
  {
    "x": 63,
    "y": 580
  },
  {
    "x": 68,
    "y": 589
  },
  {
    "x": 76,
    "y": 595
  },
  {
    "x": 90,
    "y": 601
  },
  {
    "x": 108,
    "y": 605
  },
  {
    "x": 129,
    "y": 610
  },
  {
    "x": 152,
    "y": 614
  },
  {
    "x": 170,
    "y": 618
  },
  {
    "x": 185,
    "y": 622
  },
  {
    "x": 197,
    "y": 624
  },
  {
    "x": 206,
    "y": 626
  },
  {
    "x": 213,
    "y": 627
  },
  {
    "x": 216,
    "y": 825
  },
  {
    "x": 222,
    "y": 821
  },
  {
    "x": 228,
    "y": 822
  },
  {
    "x": 235,
    "y": 824
  },
  {
    "x": 241,
    "y": 833
  },
  {
    "x": 246,
    "y": 844
  },
  {
    "x": 247,
    "y": 859
  },
  {
    "x": 247,
    "y": 1001
  },
  {
    "x": 248,
    "y": 1009
  },
  {
    "x": 248,
    "y": 1018
  },
  {
    "x": 248,
    "y": 1031
  },
  {
    "x": 248,
    "y": 1044
  },
  {
    "x": 249,
    "y": 1058
  },
  {
    "x": 249,
    "y": 1069
  },
  {
    "x": 249,
    "y": 1078
  },
  {
    "x": 249,
    "y": 1086
  },
  {
    "x": 250,
    "y": 1078
  },
  {
    "x": 251,
    "y": 1071
  },
  {
    "x": 251,
    "y": 1080
  },
  {
    "x": 251,
    "y": 1090
  },
  {
    "x": 251,
    "y": 1102
  },
  {
    "x": 251,
    "y": 1116
  },
  {
    "x": 252,
    "y": 1128
  },
  {
    "x": 252,
    "y": 1150
  },
  {
    "x": 253,
    "y": 1159
  },
  {
    "x": 254,
    "y": 1166
  },
  {
    "x": 254,
    "y": 1191
  },
  {
    "x": 254,
    "y": 1205
  },
  {
    "x": 254,
    "y": 1240
  },
  {
    "x": 254,
    "y": 1248
  },
  {
    "x": 255,
    "y": 1242
  },
  {
    "x": 257,
    "y": 1236
  },
  {
    "x": 263,
    "y": 1236
  },
  {
    "x": 271,
    "y": 1239
  },
  {
    "x": 280,
    "y": 1243
  },
  {
    "x": 286,
    "y": 1245
  },
  {
    "x": 287,
    "y": 1446
  },
  {
    "x": 295,
    "y": 1448
  },
  {
    "x": 306,
    "y": 1451
  },
  {
    "x": 319,
    "y": 1452
  },
  {
    "x": 334,
    "y": 1454
  },
  {
    "x": 348,
    "y": 1456
  },
  {
    "x": 361,
    "y": 1456
  },
  {
    "x": 376,
    "y": 1457
  },
  {
    "x": 391,
    "y": 1458
  },
  {
    "x": 410,
    "y": 1458
  },
  {
    "x": 436,
    "y": 1459
  },
  {
    "x": 458,
    "y": 1460
  },
  {
    "x": 482,
    "y": 1461
  },
  {
    "x": 511,
    "y": 1461
  },
  {
    "x": 542,
    "y": 1461
  },
  {
    "x": 574,
    "y": 1455
  },
  {
    "x": 605,
    "y": 1444
  },
  {
    "x": 636,
    "y": 1433
  },
  {
    "x": 671,
    "y": 1424
  },
  {
    "x": 704,
    "y": 1412
  },
  {
    "x": 733,
    "y": 1401
  },
  {
    "x": 764,
    "y": 1387
  },
  {
    "x": 791,
    "y": 1371
  },
  {
    "x": 812,
    "y": 1354
  },
  {
    "x": 832,
    "y": 1330
  },
  {
    "x": 851,
    "y": 1304
  },
  {
    "x": 867,
    "y": 1286
  },
  {
    "x": 881,
    "y": 1272
  },
  {
    "x": 892,
    "y": 1260
  },
  {
    "x": 900,
    "y": 1250
  },
  {
    "x": 907,
    "y": 1240
  },
  {
    "x": 912,
    "y": 1230
  },
  {
    "x": 915,
    "y": 1221
  },
  {
    "x": 921,
    "y": 1212
  },
  {
    "x": 924,
    "y": 1205
  },
  {
    "x": 926,
    "y": 1199
  },
  {
    "x": 929,
    "y": 1192
  },
  {
    "x": 935,
    "y": 1190
  },
  {
    "x": 942,
    "y": 1188
  },
  {
    "x": 953,
    "y": 1184
  },
  {
    "x": 930,
    "y": 1174
  },
  {
    "x": 889,
    "y": 1165
  },
  {
    "x": 848,
    "y": 1156
  },
  {
    "x": 812,
    "y": 1148
  },
  {
    "x": 780,
    "y": 1140
  },
  {
    "x": 750,
    "y": 1130
  },
  {
    "x": 728,
    "y": 1123
  },
  {
    "x": 712,
    "y": 1117
  },
  {
    "x": 700,
    "y": 1110
  },
  {
    "x": 686,
    "y": 1102
  },
  {
    "x": 666,
    "y": 1091
  },
  {
    "x": 647,
    "y": 1081
  },
  {
    "x": 631,
    "y": 1075
  },
  {
    "x": 615,
    "y": 1071
  },
  {
    "x": 597,
    "y": 1068
  },
  {
    "x": 579,
    "y": 1066
  },
  {
    "x": 567,
    "y": 1066
  },
  {
    "x": 558,
    "y": 1065
  },
  {
    "x": 551,
    "y": 1065
  },
  {
    "x": 544,
    "y": 1065
  },
  {
    "x": 534,
    "y": 1066
  },
  {
    "x": 525,
    "y": 1068
  },
  {
    "x": 513,
    "y": 1071
  },
  {
    "x": 500,
    "y": 1074
  },
  {
    "x": 488,
    "y": 1077
  },
  {
    "x": 477,
    "y": 1079
  },
  {
    "x": 468,
    "y": 1082
  },
  {
    "x": 459,
    "y": 1083
  },
  {
    "x": 453,
    "y": 1083
  },
  {
    "x": 446,
    "y": 1083
  },
  {
    "x": 437,
    "y": 1082
  },
  {
    "x": 431,
    "y": 1081
  },
  {
    "x": 424,
    "y": 1080
  },
  {
    "x": 418,
    "y": 1080
  },
  {
    "x": 412,
    "y": 1080
  },
  {
    "x": 406,
    "y": 1079
  },
  {
    "x": 403,
    "y": 1086
  },
  {
    "x": 408,
    "y": 1093
  },
  {
    "x": 413,
    "y": 1103
  },
  {
    "x": 418,
    "y": 1112
  },
  {
    "x": 423,
    "y": 1122
  },
  {
    "x": 429,
    "y": 1132
  },
  {
    "x": 434,
    "y": 1142
  },
  {
    "x": 437,
    "y": 1148
  },
  {
    "x": 440,
    "y": 1156
  },
  {
    "x": 444,
    "y": 1163
  },
  {
    "x": 448,
    "y": 1171
  },
  {
    "x": 452,
    "y": 1181
  },
  {
    "x": 456,
    "y": 1190
  },
  {
    "x": 463,
    "y": 1201
  },
  {
    "x": 468,
    "y": 1213
  },
  {
    "x": 474,
    "y": 1225
  },
  {
    "x": 478,
    "y": 1237
  },
  {
    "x": 481,
    "y": 1249
  },
  {
    "x": 482,
    "y": 1259
  },
  {
    "x": 482,
    "y": 1269
  },
  {
    "x": 480,
    "y": 1281
  },
  {
    "x": 474,
    "y": 1294
  },
  {
    "x": 466,
    "y": 1308
  },
  {
    "x": 452,
    "y": 1324
  },
  {
    "x": 436,
    "y": 1341
  },
  {
    "x": 419,
    "y": 1359
  },
  {
    "x": 404,
    "y": 1376
  },
  {
    "x": 389,
    "y": 1395
  },
  {
    "x": 375,
    "y": 1414
  },
  {
    "x": 361,
    "y": 1432
  },
  {
    "x": 345,
    "y": 1452
  },
  {
    "x": 331,
    "y": 1468
  },
  {
    "x": 320,
    "y": 1479
  },
  {
    "x": 311,
    "y": 1487
  },
  {
    "x": 303,
    "y": 1494
  },
  {
    "x": 292,
    "y": 1499
  },
  {
    "x": 283,
    "y": 1503
  },
  {
    "x": 274,
    "y": 1505
  },
  {
    "x": 267,
    "y": 1507
  },
  {
    "x": 276,
    "y": 1510
  },
  {
    "x": 282,
    "y": 1511
  },
  {
    "x": 288,
    "y": 1512
  },
  {
    "x": 294,
    "y": 1513
  },
  {
    "x": 301,
    "y": 1513
  },
  {
    "x": 307,
    "y": 1511
  },
  {
    "x": 315,
    "y": 1510
  },
  {
    "x": 326,
    "y": 1510
  },
  {
    "x": 333,
    "y": 1511
  },
  {
    "x": 340,
    "y": 1512
  },
  {
    "x": 346,
    "y": 1512
  },
  {
    "x": 352,
    "y": 1512
  },
  {
    "x": 359,
    "y": 1512
  },
  {
    "x": 367,
    "y": 1513
  },
  {
    "x": 374,
    "y": 1514
  },
  {
    "x": 382,
    "y": 1514
  },
  {
    "x": 390,
    "y": 1514
  },
  {
    "x": 396,
    "y": 1512
  },
  {
    "x": 402,
    "y": 1512
  },
  {
    "x": 408,
    "y": 1512
  },
  {
    "x": 415,
    "y": 1512
  },
  {
    "x": 424,
    "y": 1512
  },
  {
    "x": 434,
    "y": 1514
  },
  {
    "x": 447,
    "y": 1515
  },
  {
    "x": 460,
    "y": 1518
  },
  {
    "x": 473,
    "y": 1519
  },
  {
    "x": 490,
    "y": 1523
  },
  {
    "x": 506,
    "y": 1527
  },
  {
    "x": 518,
    "y": 1530
  },
  {
    "x": 529,
    "y": 1533
  },
  {
    "x": 537,
    "y": 1535
  },
  {
    "x": 548,
    "y": 1541
  },
  {
    "x": 562,
    "y": 1549
  },
  {
    "x": 572,
    "y": 1553
  },
  {
    "x": 582,
    "y": 1556
  },
  {
    "x": 591,
    "y": 1558
  },
  {
    "x": 602,
    "y": 1561
  },
  {
    "x": 612,
    "y": 1564
  },
  {
    "x": 620,
    "y": 1566
  },
  {
    "x": 626,
    "y": 1568
  },
  {
    "x": 628,
    "y": 1575
  },
  {
    "x": 628,
    "y": 1582
  },
  {
    "x": 626,
    "y": 1589
  },
  {
    "x": 623,
    "y": 1595
  },
  {
    "x": 621,
    "y": 1601
  },
  {
    "x": 617,
    "y": 1607
  },
  {
    "x": 614,
    "y": 1614
  },
  {
    "x": 613,
    "y": 1620
  },
  {
    "x": 613,
    "y": 1627
  }
];
