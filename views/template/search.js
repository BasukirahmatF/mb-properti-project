const search =(event, objectData, setReturnedData)=>{
    event.preventDefault();

    const input = event.target.value;

    const result = objectData.filter((data) => {
        return Object.keys(data).some((key) => {
            return JSON.stringify(data[key]).toLowerCase().trims().includes(input);
        });
    });
    setReturnedData(result);
};