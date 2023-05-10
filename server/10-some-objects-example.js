// IMPORT DE LIBRERIA (COMANDO PARA INSTALAR: NPM I DATE-FNS)

const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

// CITAS AGENDADAS

const dates = [
  {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

// CITA NUEVA URGENTE

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

// VERIFICAR SI SE INTERPONEN CON ALGUNA

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};

// CONSOLE LOG

console.log(isOverlap(newAppointment));
