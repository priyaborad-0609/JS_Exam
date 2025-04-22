fetch("https://api.rootnet.in/covid19-in/stats/latest")
.then(response => response.json())
.then(data => {
    const states = data.data.regional;
    const tablebody = document.querySelector("#covid tbody")

    states.forEach((states, index) => {
        const row = document.createElement("tr");
        const totalCases = states.totalConfirmed;

        row.innerHTML = `
        <th>${index + 1}</th>
        <th>${states.loc}</th>
        <th>${states.confirmedCasesIndian}</th>
        <th>${states.confirmedCasesForeign}</th>
        <th>${states.discharged}</th>
        <th>${states.deaths}</th>
        <th>${totalCases}</th>
        `;
        tablebody.appendChild(row);
    });
})

.catch(error => {
    console.error("Error Fatching data:",error);
});
    
