function SetModel(manufacturersId) {
    console.log("get Models for id ",manufacturersId.value);
    axios.get("/api/ChoseCar/Models?manufacturerId=" + manufacturersId.value)
        .then(({ data }) => {
            $("#ModelId").empty();

            data.forEach((item) => {
                var el = `<option value="${item.id}">${item.name}</option>`;
                $("#ModelId").append(el);
            });
            $("#YearOfConstructionId").empty();

        });
}


function SetYearOfConstruction(modelId) {
    console.log("get yearOfConstructions for id ",modelId.value);
    axios.get("/api/ChoseCar/YearOfConstructions?modelId=" + modelId.value)
        .then(({ data }) => {
            console.log(data);
            $("#YearOfConstructionId").empty();

            data.forEach((item) => {
                var el = `<option value="${item.id}">${item.value}</option>`;
                $("#YearOfConstructionId").append(el);
            });

        });
}