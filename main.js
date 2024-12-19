const faqHeadings = document.querySelectorAll('button');

const plusSVG = `<path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"></path>`;
const minusSVG = `<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"></path>`;

faqHeadings.forEach(heading => {
    heading.addEventListener('click', () => {
        const answer = heading.parentElement.nextElementSibling;
        answer.classList.toggle('active');

        const svg = heading.nextElementSibling;
        console.log(svg.innerHTML.trim())

        if (svg.innerHTML.trim() === plusSVG.trim()) {
            svg.innerHTML = minusSVG;
        } else {
            svg.innerHTML = plusSVG;
        }
    });
});
