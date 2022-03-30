const Ano = () => {

    const { useEffect, useState } = React;

    const date = new Date();
    const ano = date.getFullYear();

    const setAno = (value) => {
        console.log(value);
    }

    return (
        <div>
            {/*<Range
                title="Ano"
                min="1900"
                max={ano}
                step="1"
                defaultValueStart="1900"
                defaultValueEnd={ano}
                setValue={setAno}
            />*/}
        </div>
    );
};
