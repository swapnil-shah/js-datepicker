import { format, getUnixTime, fromUnixTime, addMonths, subMonths } from 'date-fns'

const datePickerButton = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')
const previousMonthButon = document.querySelector('.prev-month-button')
const nextMonthButon = document.querySelector('.next-month-button')
let currentDate = new Date()
datePickerButton.addEventListener("click", () => {
  datePicker.classList.toggle("show")
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
  currentDate = selectedDate
  setUpDatePicker()
})

function setDate(date) {
  datePickerButton.innerText = format(date, 'MMMM do, yyyy')
  datePickerButton.dataset.selectedDate = getUnixTime(date)
}
function setUpDatePicker() {
  datePickerHeaderText.innerText = format(currentDate, 'MMMM - yyyy')
  setUpDates(selectedDate)
}

nextMonthButon.addEventListener("click", () => {
  currentDate = addMonths(currentDate, 1)
  setUpDatePicker()
})

previousMonthButon.addEventListener("click", () => {
  currentDate = subMonths(currentDate, 1)
  setUpDatePicker()
})
setDate(new Date())