const array = ['If you fall asleep now, you will dream. If you study now, you will live your dream.',
    "When you think it’s too late, the truth is, it’s still early.",
    'The pain of studying is only temporary. But the pain of not knowing — ignorance — is forever.',
    'Studying is not about time. It’s about effort.',
    'Life is not all about studying. But if you can’t even conquer this little part of life, then what else can youpossibly do? ',
    'Success only comes with self-management and determination.',
    'If you don’t walk today, you’ll have to run tomorrow.',
    'The level of education is in direct correlation with your salary.',
    'When today is over, it will never come back.',
    'Even now, your enemies are eagerly flipping through books']

let color = ['#e96868', '#6b68e9', '#e9e068']
const paragraph = document.querySelector(`.text`)


const makeQuotes = (arr) => {
    const index = Math.round(Math.random() * (arr.length - 1))
    return arr[index];



}

const showQuote = () => {
    paragraph.textContent = makeQuotes(array)
    paragraph.style.color = color[Math.round(Math.random() * 2)]
}


setInterval(showQuote, 3000)


