let students = [];

fetch("seats.csv")

.then(response => response.text())

.then(data => {

    const rows =
    data.trim().split("\n");

    for(let i = 1; i < rows.length; i++){

        const cols =
        rows[i].split(",");

        students.push({

            hallTicket: cols[0],
            name: cols[1],
            examHall: cols[2],
            seatNumber: cols[3],
            block: cols[4]

        });
    }
});

function findSeat(){

    const hallTicket =

    document
    .getElementById("hallTicket")
    .value
    .trim();

    const message =

    document
    .getElementById("message");

    const student =

    students.find(s =>

        s.hallTicket === hallTicket
    );

    if(student){

        message.textContent = "";

        document
        .getElementById("nameText")
        .textContent =
        student.name;

        document
        .getElementById("ticketText")
        .textContent =
        student.hallTicket;

        document
        .getElementById("hallText")
        .textContent =
        student.examHall;

        document
        .getElementById("seatText")
        .textContent =
        student.seatNumber;

        document
        .getElementById("blockText")
        .textContent =
        student.block;

    }else{

        message.textContent =
        "Hall Ticket Number Not Found";

        document
        .getElementById("nameText")
        .textContent = "--";

        document
        .getElementById("ticketText")
        .textContent = "--";

        document
        .getElementById("hallText")
        .textContent = "--";

        document
        .getElementById("seatText")
        .textContent = "--";

        document
        .getElementById("blockText")
        .textContent = "--";
    }
}

/* ENTER KEY SEARCH */

document
.getElementById("hallTicket")
.addEventListener("keypress",

function(event){

    if(event.key === "Enter"){

        findSeat();
    }
});