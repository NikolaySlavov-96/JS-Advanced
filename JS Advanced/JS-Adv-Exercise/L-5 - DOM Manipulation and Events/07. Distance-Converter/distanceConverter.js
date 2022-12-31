function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click' , onConvert);

    function onConvert () {

        const inputValue = document.getElementById('inputDistance').value;
        const inputTypeConvert = document.getElementById('inputUnits').value;
        const outputType = document.getElementById('outputUnits').value;

        const units = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254,
        }

        let operation = inputValue * units[inputTypeConvert];
        let resultFromOperation = operation / units[outputType];


        document.getElementById('outputDistance').value = resultFromOperation;
    }
}