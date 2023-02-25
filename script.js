
const btn = document.querySelector('#btn')
const inputRange =document.querySelector('#range')

btn.addEventListener('click',()=>{
    const getInputColor = document.querySelector('#text').value

    document.querySelector('#square').style.background=`${getInputColor}`
})
document.querySelector('#e_btn').style.display='none'
inputRange.addEventListener('input',(e)=>{
    let rangeSpan =document.querySelector('#range-span')
    let w=rangeSpan.textContent=e.target.value
    document.querySelector('#circle').style.width=`${w}%`
    document.querySelector('#circle').style.height=`${w}%`
    console.log(e)
})

console.log()


