function calculateBMI(event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100;

    console.log("Berat: ", weight);
    console.log("Tinggi: ", height);

    if (!weight || !height) {
        alert('Silakan masukkan berat badan dan tinggi badan yang valid');
        return;
    }

    let bmi = weight / (height * height);
    let bmiCategory = '';

    if (bmi < 18.5) {
        bmiCategory = 'Kurus';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Berat badan berlebih';
    } else {
        bmiCategory = 'Obesitas';
    }

    document.getElementById('display').value = bmi.toFixed(2);
    document.getElementById('bmi-description').value = `${bmiCategory}`;
}
