function calculate () {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,   
        total = 0;    // общая сумма

        totalValue.innerHTML = 0;
        // console.log(typeof(persons.value)); там сейчас лежит пустая строка

        persons.addEventListener('input', function () {
            personsSum = +this.value;
            total = (personsSum + daysSum) * 4000;

            if (restDays.value == '' || restDays.value == 0 || persons.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
            
        });

        restDays.addEventListener('input', function () {
            daysSum = +this.value;
            total = (daysSum + personsSum) * 4000;

            if (persons.value == '' || restDays.value == 0 || persons.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        place.addEventListener('change', function () {
            if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total * place.value; // это пример моего кода. ниже записан его код из видео. но он куда длиннее и непонятнее


                // totalValue.innerHTML = a * this.options[this.selectedIndex].value;

                // this.options = place.options - это все 'оptions' из селекта 'place'
                // this.selectedIndex - это номер выбранного <option>
            }   // this.options[this.selectedIndex] - это и есть один из выбранных option из коллекции place.options; через .value получено значение выбранного option  

        });

}

module.exports = calculate;