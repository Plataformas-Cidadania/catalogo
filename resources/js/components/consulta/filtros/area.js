const Area = () => {

    const { useEffect, useState } = React;

    const [area, setArea] = useState(null);
    const [areas, setAreas] = useState([]);

    const listAreas = (search) => {
        console.log(search);
    }

    return (
        <div>
            <SearchField
                listSearch={listAreas}
                qtdSearch={3}
                items={areas}
                column="area"
                selectItem={setArea}
            />
        </div>
    );
};
