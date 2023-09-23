const  bars = document.getElementById('bars');
const  closed = document.getElementById('closed');
const nav = document.getElementById('navbar');

if (bars) {
    bars.addEventListener('click', () => {
        nav.classList.add('active');
        
    })
}

if (closed) {
    closed.addEventListener('click', () => {
        nav.classList.remove('active');
        
    })
}

















