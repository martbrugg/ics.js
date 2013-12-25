// Demo
var cal = ics();
cal.addEvent('Christmas', 'Christian holiday celebrating the birth of Jesus Christ', 'Bethlehem', '2013-12-24T13:00:00.00Z', '2013-12-24T14:00:00.00Z');
cal.addEvent('Christmas', 'Christian holiday celebrating the birth of Jesus Christ', 'Bethlehem', '2013-12-25T08:00:00.00Z', '2013-12-25T18:00:00.00Z',true);
console.log('Events\n' + cal.events());
console.log('Calendar\n' + cal.calendar());