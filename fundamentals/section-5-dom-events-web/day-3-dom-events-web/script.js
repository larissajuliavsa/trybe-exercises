function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysofDecember() {
  const decDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let monthList = document.getElementById('days');

  for (let index = 0; index < decDaysList.length; index += 1) {
    let daysDec = decDaysList[index];
    let daysList = document.createElement('li');
    daysList.innerHTML = daysDec;
    daysList.className = 'day';

    if (daysDec === 4 | daysDec === 11 | daysDec === 18) {
      daysList.className = 'day friday';
    } else if (daysDec === 24 | daysDec === 31) {
        daysList.className = 'day holiday';
    } else if (daysDec === 25) {
      daysList.className = 'day holiday friday';
    }

    monthList.appendChild(daysList);
  }  
}

createDaysofDecember();

function setHolidaysButton(holidays) {
  let divBttn = document.querySelector('.buttons-container');
  let createBttn = document.createElement('button');

  createBttn.id = 'btn-holiday';
  createBttn.innerText = holidays;

  divBttn.appendChild(createBttn);
}

setHolidaysButton('Feriados');

function holidayClick() {
  let divHoliday = document.querySelector('#btn-holiday')
  let listHoliday = document.querySelectorAll('.holiday')  
  let mainColor = 'rgb(238,238,238)';
  let holidayColor = 'rgb(150, 187, 124)';
  
  divHoliday.addEventListener('click', function() {
    for (let index = 0; index < listHoliday.length; index += 1) {
      if (listHoliday[index].style.backgroundColor === holidayColor) {
        listHoliday[index].style.backgroundColor = mainColor;         
      } else {
        listHoliday[index].style.backgroundColor = holidayColor;         
      }
    }
  })  
}

holidayClick();

function fridayButton(fridays) {
  let daysMonth = document.querySelector('#days');
  let fridayMonth = document.querySelectorAll('.day friday')
  let divBttnFri = document.querySelector('.buttons-container')

  let fridayBttn = document.createElement('button');
  fridayBttn.id = 'btn-friday';
  fridayBttn.innerText = fridays
  divBttnFri.appendChild(fridayBttn);
}

fridayButton('Sexta-feira');

function fridayClick() {
  let buttonFriday = document.querySelector('#btn-friday');
  let daysFriday = document.getElementsByClassName('day friday');  
  let mainFriday = 'rgb(238,238,238)';
  let newFriday = 'rgb(250, 213, 134)';

  buttonFriday.addEventListener('click', function() {
    for (let index = 0; index < daysFriday.length; index += 1) {
      if (daysFriday[index].style.backgroundColor === newFriday) {
        daysFriday[index].style.backgroundColor = mainFriday;        
      } else {
        daysFriday[index].style.backgroundColor = newFriday;        
      }
    }     
  })
}

fridayClick()
