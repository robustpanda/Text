function loadData() {
    var userInput = document.getElementById('numberInput').value;
    if(userInput >= 800 && userInput <= 899) {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('dataDisplay').innerText = data[userInput];
            })
            .catch(error => console.error('Error:', error));
    } else {
        alert("Please enter a number between 800 and 899.");
    }
}
