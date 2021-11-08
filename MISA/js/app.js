let form = document.querySelectorAll('.m-content-chose-form')
let list = document.querySelectorAll('.m-chose-list')

for (let i = 0; i < form.length; i++) {
    form[i].addEventListener('click', () => {
        list[i].style.display = 'block';
    })
    list[i].addEventListener('click', () => {
        list[i].style.display = 'none';
    })
}

let listTr = document.querySelectorAll('tr')
for (let i = 0; i < listTr.length; i++) {
    listTr[i].addEventListener('click', () => {
        document.getElementById('dlgPopup').style.display = 'block';
    })
    document.getElementById('m-dialog-close').addEventListener('click', () => {
        document.getElementById('dlgPopup').style.display = 'none';
    })
}