const data = []

const showTable = document.querySelector('.table')

class Contact {
    constructor(id, name, phone, email, address){
        this.id = id
        this.name = name
        this.phone = phone
        this.email = email
        this.address = address
    }

    printData(n) {
        return `
        <tr class="table-body r-0">
            <td >${n}</td>
            <td >${this.name}</td>
            <td>${this.phone}</td>
            <td>${this.email}</td>
            <td>${this.address}</td>
            <td><button class="btn-delete" onclick="deleteContact(${this.id})">X</button></td>
        </tr>
        `
    }
}

const renderData = () => {
    let htmlElements = ""

    if(data.length<1){
        htmlElements += `
        <img class="img-call" src="img/call.jpg" alt="Illustration">
        ` 
    }else {
        htmlElements += `
        <table>
                        
            <thead>
                <tr class="table-head">
                    <th>#</th>
                    <th>NAME</th>
                    <th>PHONE</th>
                    <th>EMAIL</th>
                    <th>ADDRESS</th>
                    <th class="delete">DEL</th>
                </tr>
            </thead>    
            
            
            <tbody>
        
        `

        data.forEach((e, i) => {
            htmlElements += e.printData(i+1)
        })
        htmlElements += `
            </tbody>
        </table>
        `
    }
    showTable.innerHTML = htmlElements
}

const btn = document.querySelector('form')
btn.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name')
    const phone = document.querySelector('#phone')
    const email = document.querySelector('#email')
    const address = document.querySelector('#address')
    


    const contact = new Contact(Date.now(), name.value, phone.value, email.value, address.value)

    data.push(contact)
    name.value = null
    phone.value = null
    email.value = null
    address.value = null
    renderData()
})

const deleteContact = (id) => {
    data.forEach((e, i) => {
        if(id == e.id) {
            data.splice(i, 1)
        }
    }) 
    renderData()
}


renderData()