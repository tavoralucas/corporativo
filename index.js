import puppeteer from "puppeteer";

const form = document.getElementById('formulario')
form.addEventListener( 'submit', function(e) {
    e.preventDefault()
    const [login, password] = ['inputLogin','inputPassword'].map(
        id => form.querySelector(`#${id}`).value
    )
    console.log(`${login},${password}`)
})

async function getdata() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://portal.cfponline.com.br/students/sign_in')
    const test = await page.evaluate(() => {
        let a = document.getElementById('student_login')
        a.value = `${login}`
        console.log(await page.content());
        console.log("colocou o input:",`${login}`)
        let b = document.getElementById('student_password')
        b.value = `${password}`
        console.log(await page.content());
        console.log("colocou o input:",`${login}`)
        
        console.log("entrou")
    })
}