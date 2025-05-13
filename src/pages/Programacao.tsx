import React from "react";
const EventSchedule: React.FC = () => {
  const schedule = [
    {
      day: "03",
      weekday: "SEG",
      title: "DIA 01",
      events: [
        "Credenciamento – 08:30 - 09:00",
        "Mesa de Abertura – 09:00 - 10:00",
        "1ª Palestra: Rafaela Vieira (Subsea7) – 10:00 - 11:00",
        "2ª Palestra: José Walmir (JN Consultoria) – 11:00 - 12:00",
        "Intervalo – 12:00 - 14:00",
        "3ª Palestra: Jonatan Conceição (RelyOn) – 14:00 - 15:00",
        "4ª Palestra: Wilson Leal (ALTAVE) – 15:00 - 16:00",
        "Mesa Redonda 2 – 16:00 - 17:00",
        "Coffee Break – 17:00 - 18:00",
      ],
    },
    {
      day: "04",
      weekday: "TER",
      title: "DIA 02",
      events: [
        "Credenciamento – 08:30 - 09:00",
        "5ª Palestra: Cláudia Vasconcelos (Petrobras) – 09:00 - 10:00",
        "6ª Palestra: João Guandalini (Foresea) – 10:00 - 11:00",
        "7ª Palestra: Denis Angra (Ocyan / SPE) – 11:00 - 12:00",
        "Intervalo – 12:00 - 14:00",
        "8ª Palestra: Rafaela Vieira (Subsea7) – 14:00 - 15:00",
        "9ª Palestra: Luvas Sátiro (Geowellex) – 15:00 - 16:00",
        "10ª Palestra: Dalexa Fernandez (Infinity Power Center / SPE) – 16:00 - 17:00",
        "Coffee Break – 17:00 - 18:00",
      ],
    },
    {
      day: "05",
      weekday: "QUA",
      title: "DIA 03",
      events: [
        "Credenciamento – 08:30 - 09:00",
        "11ª Palestra: Ana Lígia (SLB) – 09:00 - 10:00",
        "Minicurso: Fluidos de Perfuração – Laura Musgueira (Petrobras) – 10:00 - 12:00",
        "Intervalo – 12:00 - 14:00",
        "12ª Palestra: Fernanda Gois (SLB) – 14:00 - 15:00",
        "Mesa Redonda 3 – 15:00 - 16:00",
        "Coquetel – 16:00 - 17:00",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      <div className="bg-orange-500 text-white w-full md:w-1/3 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-10">EVENTS SCHEDULE</h1>
          <p className="text-sm">Universidade Federal do Pará <br/> Campus Salinópolis</p>
          <p className="text-xs">SPE Student Chapter</p>
        </div>
        <div>
          <p className="text-sm mt-10">Para mais informações:</p>
          <p className="text-2xl font-bold">000 2341 3426</p>
          <p className="mt-2 text-">Acesse: www.ticket.com</p>
        </div>
      </div>

      <div className="bg-slate-900 text-white w-full md:w-3/4 p-6">
        <h2 className="text-xl font-semibold mb-4 text-orange-400">JUNHO 2025</h2>
        {schedule.map((day) => (
          <div key={day.day} className="mb-6">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-orange-400">{day.day}</div>
              <div>
                <div className="uppercase text-sm font-medium text-gray-300">{day.weekday}</div>
                <div className="font-semibold text-lg">{day.title}</div>
              </div>
            </div>
            <ul className="mt-2 ml-12 list-disc text-gray-300 text-sm space-y-1">
              {day.events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSchedule;
