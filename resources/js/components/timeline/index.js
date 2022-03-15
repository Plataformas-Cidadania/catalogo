const Timeline = () => {

    const { useEffect } = React;

    useEffect(() => {

    });

    const getPoliticas = async () => {
        const result = await axios.get('csv/politicas.csv');
        console.log(result.data);
    }

    return (
        <div>timeline</div>
    );
};

export default Timeline;
