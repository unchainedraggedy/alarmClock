const dateTimeInput = document.getElementsByClassName('date-time')[0];

let init = () => {
    const date = new Date();
    const offset = date.getTimezoneOffset() * 60000;
    const adjustedDate = new Date(date.getTime() - offset);

    //YYYY-MM-DDTHH:MM
    const formattedDate  = adjustedDate.toISOString().substring(0, 16);
    dateTimeInput.value = formattedDate;

}

let updateCurrentTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds()
}

window.addEventListener("load", init);
setInterval()