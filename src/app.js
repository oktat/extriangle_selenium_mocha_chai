doc = {
    baseInput: document.querySelector('#base'),
    heightInput: document.querySelector('#height'),
    areaInput: document.querySelector('#area'),
    calcButton: document.querySelector('#calcButton')
};

window.addEventListener('load', () => {
    init();
});

function init() {
    doc.calcButton.addEventListener('click', () => {
        startCalc();
    });
}

function startCalc() {
    let base = Number(doc.baseInput.value);
    let height = Number(doc.heightInput.value);
    doc.areaInput.value = calcTriangleArea(base, height);
}

function calcTriangleArea(base, height) {
    return base * height / 2;
}