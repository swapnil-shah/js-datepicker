import { format, getUnixTime, fromUnixTime, addMonths, subMonths } from 'date-fns'

const datePickerButton = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')
const previousMonthButon = document.querySelector('.prev-month-button')
const nextMonthButon = document.querySelector('.next-month-button')

datePickerButton.addEventListener("click", () => {
  datePicker.classList.toggle("show")
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
  setUpDatePicker(selectedDate)
})

function setDate(date) {
  datePickerButton.innerText = format(date, 'MMMM do, yyyy')
  datePickerButton.dataset.selectedDate = getUnixTime(date)
}
function setUpDatePicker(selectedDate) {
  datePickerHeaderText.innerText = format(selectedDate, 'MMMM - yyyy');
  setUpMonthButtons(selectedDate)
}
function setUpMonthButtons(selectedDate) {
  previousMonthButon.addEventListener("click", () => {
    setUpDatePicker(subMonths(selectedDate, 1))
  }, { once: true })//Once true will completely remove listner and pmyl fire once otherwise it will add listerners over and over again
  nextMonthButon.addEventListener("click", () => {
    setUpDatePicker(addMonths(selectedDate, 1))
  }, { once: true })
}
setDate(new Date())