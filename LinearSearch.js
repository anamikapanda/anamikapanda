async function linearSearch(target) {
    console.log("Linear search");

    let info = document.getElementById("info");
    info.innerHTML = "";
    let pseudocode = document.createElement('pre');
    pseudocode.innerHTML = `
    function linearSearch(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                return i;
            }
        }
        return -1;
    }
    `
    info.appendChild(pseudocode);

    const pause = document.querySelector(".pause");
    pause.style.visibility = "visible";

    disableButtons();

    const bar = document.querySelectorAll(".bar");
    const barBefore = document.querySelectorAll(".bar-before");

    for (let i = 0; i < bar.length; i++) {
        bar[i].style.background = "#1F71FF";
        bar[i].style.boxShadow = "0px -5px 10px 5px #85B1FF";
        await wait();

        if (parseInt(barBefore[i].textContent) === target) {
            bar[i].style.background = "#0C9795";
            pause.style.visibility = "hidden";
            enableButtons();
            return i;
        }

        bar[i].style.background = "gray";
        bar[i].style.boxShadow = "";
    }

    pause.style.visibility = "hidden";
    enableButtons();
    return -1;
}
