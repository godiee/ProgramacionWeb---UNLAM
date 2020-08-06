$(document).ready(function() {

  $('#calendar').fullCalendar({
 //defaultDate: '2020-01-01', // Muestra el calendario a partir de ese día
  defaultDate: moment().format("YYYY-MM-DD"), //Arranca a partir del día actual
  editable: true,
  eventLimit: true, // allow "more" link when too many events
  events: [
    {
      title: 'Hepatitis B',
      url:'http://www.msal.gob.ar/images/stories/ryc/graficos/0000001496cnt-calendario-nacional-vacunacion.jpg',
      start: '2020-06-29',
      end: '2020-07-01'
    },
    {
      title: 'Gripe',
      url:'http://www.msal.gob.ar/images/stories/ryc/graficos/0000001496cnt-calendario-nacional-vacunacion.jpg',
      start: '2020-07-10',
      end: '2020-07-16'
    },
   {
      title: 'Fiebre Amarilla',
      url:'http://www.msal.gob.ar/images/stories/ryc/graficos/0000001496cnt-calendario-nacional-vacunacion.jpg',
      start: '2020-09-10',
      end: '2020-09-16'
    },
   {
      title: 'Hepatits A',
      url:'http://www.msal.gob.ar/images/stories/ryc/graficos/0000001496cnt-calendario-nacional-vacunacion.jpg',
      start: '2020-08-03',
      end: '2020-08-08'
    },
   {
      title: 'Varicela',
      url:'http://www.msal.gob.ar/images/stories/ryc/graficos/0000001496cnt-calendario-nacional-vacunacion.jpg',
      start: '2020-11-02',
      end: '2020-11-07'
    },
  ]
    });
});
