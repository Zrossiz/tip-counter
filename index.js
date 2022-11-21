function sumTip () {
    const valueSum = document.getElementById("sumId").value;
    const valueAmount = document.getElementById("amountId").value;
    const valueSelect = document.getElementById("select").value;
    const switchHidden = document.getElementById("wrapper-sum");
    const div = document.querySelector('.result-wrapper__result')
    const result = valueSum * valueSelect / 100 / valueAmount;

    const fieldOutput = `
    <span>Чаевые: ${result}</span>
    `;

    div.innerHTML = fieldOutput;

    switchHidden.classList.remove('visually-hidden')
}
