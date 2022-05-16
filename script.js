const button = document.querySelector('#btnTwo');
button.addEventListener('click', calculate);

function calculate(e) {
    e.preventDefault();

    const weight = document.querySelector('#weight').value;        //massa tela
    const userSelect = document.querySelector('#selects').value;   //vibor opciy

    if(weight === '') {
        Swal.fire({
            icon: 'Ошибка!',
            title: 'Ошибка!',
            text: 'Не оставляйте пустых полей!',
          })
          document.querySelector('.numbers').style.display = 'none';
    }
    else if (weight < 1) {
        Swal.fire({
            icon: 'Ошибка!',
            title: 'Ошибка!',
            text: 'Вес не должен быть меньше 1 кг',
          })

    }
    let result = (weight * 24 ) * userSelect;
    result = result.toFixed();

     if(isNaN(weight)) {
        Swal.fire({
            icon: 'Ошибка!',
            title: 'Ошибка!',
            text: 'Поле должно быть заполнено цифрами, а не буквами!',
          })

     }

     document.querySelector('.numbers').style.display = 'block';
     document.querySelector('#show').textContent = result;

}